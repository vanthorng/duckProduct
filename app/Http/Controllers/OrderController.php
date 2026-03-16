<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreOrderRequest;
use App\Mail\OrderReceivedMail;
use App\Models\Order;
use App\Services\Orders\TelegramOrderNotifier;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Mail;

class OrderController extends Controller
{
    public function __construct(
        public TelegramOrderNotifier $telegramOrderNotifier,
    ) {}

    public function store(StoreOrderRequest $request): RedirectResponse
    {
        $order = Order::query()->create([
            ...$request->validated(),
            'status' => Order::STATUS_PENDING,
        ]);

        Mail::to(config('site.sales_email'))
            ->send(new OrderReceivedMail($order));

        $this->telegramOrderNotifier->send($order);

        return to_route('order-online')
            ->with('orderSuccessKey', 'order.successMessage')
            ->with('orderReference', $order->reference());
    }
}
