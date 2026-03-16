<?php

namespace App\Services\Orders;

use App\Models\Order;
use Illuminate\Support\Facades\Http;
use Throwable;

class TelegramOrderNotifier
{
    public function send(Order $order): void
    {
        $botToken = config('services.telegram.bot_token');
        $chatId = config('services.telegram.chat_id');
        $enabled = config('services.telegram.enabled');

        if (! $enabled || blank($botToken) || blank($chatId)) {
            return;
        }

        try {
            Http::asForm()
                ->timeout(10)
                ->post("https://api.telegram.org/bot{$botToken}/sendMessage", [
                    'chat_id' => $chatId,
                    'text' => $this->message($order),
                    'disable_web_page_preview' => true,
                ])
                ->throw();
        } catch (Throwable $exception) {
            report($exception);
        }
    }

    protected function message(Order $order): string
    {
        return implode("\n", [
            'New duck order request',
            'Reference: '.$order->reference(),
            'Name: '.$order->name,
            'Phone: '.$order->phone,
            'Contact: '.$order->preferredContactMethodLabel(),
            'Product: '.$order->productLabel(),
            'Quantity: '.$order->quantity,
            'Fulfillment: '.$order->fulfillmentTypeLabel(),
            'Preferred date: '.($order->preferred_date?->format('Y-m-d') ?? 'Flexible'),
            'Preferred time: '.($order->preferred_time ?? 'Flexible'),
            'Address: '.($order->address ?? 'Not provided'),
            'Notes: '.($order->notes ?? 'No notes'),
        ]);
    }
}
