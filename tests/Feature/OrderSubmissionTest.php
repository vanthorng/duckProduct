<?php

use App\Mail\OrderReceivedMail;
use App\Models\Order;
use Illuminate\Http\Client\Request as HttpRequest;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Mail;
use Inertia\Testing\AssertableInertia as Assert;

function validOrderPayload(array $overrides = []): array
{
    return array_merge([
        'name' => 'Sophea Srey',
        'phone' => '+855 69 866 032',
        'email' => 'orders@example.com',
        'preferred_contact_method' => Order::CONTACT_METHOD_PHONE,
        'product' => Order::PRODUCT_FRESH_DUCK_EGGS,
        'quantity' => '2 trays',
        'fulfillment_type' => Order::FULFILLMENT_PICKUP,
        'address' => '',
        'preferred_date' => now()->addDay()->format('Y-m-d'),
        'preferred_time' => '09:30',
        'notes' => 'Please confirm before 8 AM.',
    ], $overrides);
}

it('stores a valid order and sends a notification email', function () {
    Mail::fake();
    Http::fake();

    $response = $this->post(route('orders.store'), validOrderPayload());

    $order = Order::query()->first();

    $response->assertRedirect(route('order-online'));
    $response->assertSessionHas('orderSuccessKey', 'order.successMessage');
    $response->assertSessionHas('orderReference', $order?->reference());

    expect($order)->not->toBeNull();
    expect($order?->status)->toBe(Order::STATUS_PENDING);
    expect($order?->product)->toBe(Order::PRODUCT_FRESH_DUCK_EGGS);

    Mail::assertSent(OrderReceivedMail::class, function (OrderReceivedMail $mail) use ($order) {
        return $mail->hasTo(config('site.sales_email'))
            && $mail->order->is($order);
    });

    Http::assertNothingSent();
});

it('sends a telegram notification when telegram delivery is enabled', function () {
    config([
        'services.telegram.enabled' => true,
        'services.telegram.bot_token' => 'telegram-token',
        'services.telegram.chat_id' => 'farm-chat',
    ]);

    Mail::fake();
    Http::fake([
        'https://api.telegram.org/*' => Http::response(['ok' => true], 200),
    ]);

    $this->post(route('orders.store'), validOrderPayload([
        'preferred_contact_method' => Order::CONTACT_METHOD_TELEGRAM,
        'product' => Order::PRODUCT_HOUSE_ROASTED_DUCK,
        'quantity' => '1 duck',
    ]));

    Http::assertSent(function (HttpRequest $request): bool {
        return $request->url() === 'https://api.telegram.org/bottelegram-token/sendMessage'
            && $request['chat_id'] === 'farm-chat'
            && str_contains($request['text'], 'New duck order request')
            && str_contains($request['text'], 'House Roasted Duck');
    });
});

it('validates required and conditional order fields', function () {
    $response = $this->post(route('orders.store'), validOrderPayload([
        'name' => '',
        'phone' => '',
        'email' => '',
        'preferred_contact_method' => Order::CONTACT_METHOD_EMAIL,
        'product' => '',
        'quantity' => '',
        'fulfillment_type' => Order::FULFILLMENT_DELIVERY,
        'address' => '',
    ]));

    $response->assertSessionHasErrors([
        'name',
        'phone',
        'email',
        'product',
        'quantity',
        'address',
    ]);
});

it('shares a prefilled product and stores the selected product', function () {
    Mail::fake();

    $this->get(route('order-online', ['product' => Order::PRODUCT_HOUSE_ROASTED_DUCK]))
        ->assertInertia(fn (Assert $page) => $page
            ->component('order-online')
            ->where('prefill.product', Order::PRODUCT_HOUSE_ROASTED_DUCK));

    $this->post(route('orders.store'), validOrderPayload([
        'product' => Order::PRODUCT_HOUSE_ROASTED_DUCK,
        'quantity' => '1 duck',
    ]));

    $this->assertDatabaseHas('orders', [
        'product' => Order::PRODUCT_HOUSE_ROASTED_DUCK,
        'quantity' => '1 duck',
    ]);
});
