<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreOrderRequest;
use App\Mail\OrderReceivedMail;
use App\Models\Order;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Mail;

class OrderController extends Controller
{
    public function store(StoreOrderRequest $request): RedirectResponse
    {
        $order = Order::query()->create([
            ...$request->validated(),
            'status' => Order::STATUS_PENDING,
        ]);

        Mail::to(config('site.sales_email'))
            ->send(new OrderReceivedMail($order));

        return to_route('order-online')
            ->with('orderSuccess', 'Order request received. We will confirm stock, schedule, and total price shortly.')
            ->with('orderReference', $order->reference());
    }
}
