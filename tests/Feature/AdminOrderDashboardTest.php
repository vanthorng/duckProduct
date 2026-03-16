<?php

use App\Models\Order;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Inertia\Testing\AssertableInertia as Assert;

it('redirects guests to the admin login page', function () {
    $this->get(route('admin.orders.index'))
        ->assertRedirect(route('login'));
});

it('allows an admin user to sign in', function () {
    $user = User::factory()->create([
        'password' => Hash::make('secret-password'),
    ]);

    $response = $this->post(route('admin.login.store'), [
        'email' => $user->email,
        'password' => 'secret-password',
    ]);

    $response->assertRedirect(route('admin.orders.index'));
    $this->assertAuthenticatedAs($user);
});

it('shows filtered orders on the admin dashboard', function () {
    $user = User::factory()->create();
    $matchingOrder = Order::factory()->create([
        'name' => 'Sophea Srey',
        'status' => Order::STATUS_PENDING,
    ]);
    Order::factory()->create([
        'name' => 'Dara Chan',
        'status' => Order::STATUS_COMPLETED,
    ]);

    $this->actingAs($user)
        ->get(route('admin.orders.index', [
            'search' => 'Sophea',
            'status' => Order::STATUS_PENDING,
        ]))
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page
            ->component('admin/orders/index')
            ->where('filters.search', 'Sophea')
            ->where('filters.status', Order::STATUS_PENDING)
            ->has('orders', 1)
            ->where('orders.0.id', $matchingOrder->id)
            ->where('orders.0.status', Order::STATUS_PENDING));
});

it('lets an admin update an order status', function () {
    $user = User::factory()->create();
    $order = Order::factory()->create([
        'status' => Order::STATUS_PENDING,
    ]);

    $response = $this->actingAs($user)
        ->patch(route('admin.orders.update', $order), [
            'status' => Order::STATUS_CONFIRMED,
        ]);

    $response->assertRedirect();
    $response->assertSessionHas('dashboardSuccessKey', 'admin.statusUpdated');

    $this->assertDatabaseHas('orders', [
        'id' => $order->id,
        'status' => Order::STATUS_CONFIRMED,
    ]);
});
