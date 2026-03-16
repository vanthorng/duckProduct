<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\UpdateOrderStatusRequest;
use App\Models\Order;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class OrderDashboardController extends Controller
{
    public function index(Request $request): Response
    {
        $status = $request->string('status')->value();
        $search = trim($request->string('search')->value());

        $orders = Order::query()
            ->when(
                in_array($status, Order::statusKeys(), true),
                fn ($query) => $query->where('status', $status),
            )
            ->when($search !== '', function ($query) use ($search) {
                $query->where(function ($nestedQuery) use ($search): void {
                    $nestedQuery
                        ->where('name', 'like', "%{$search}%")
                        ->orWhere('phone', 'like', "%{$search}%")
                        ->orWhere('email', 'like', "%{$search}%");
                });
            })
            ->latest()
            ->limit(50)
            ->get()
            ->map(function (Order $order): array {
                return [
                    'id' => $order->id,
                    'reference' => $order->reference(),
                    'name' => $order->name,
                    'phone' => $order->phone,
                    'email' => $order->email,
                    'preferredContactMethod' => $order->preferred_contact_method,
                    'product' => $order->product,
                    'productLabel' => $order->productLabel(),
                    'quantity' => $order->quantity,
                    'fulfillmentType' => $order->fulfillment_type,
                    'address' => $order->address,
                    'preferredDate' => $order->preferred_date?->format('Y-m-d'),
                    'preferredTime' => $order->preferred_time,
                    'notes' => $order->notes,
                    'status' => $order->status,
                    'createdAt' => $order->created_at?->format('Y-m-d H:i'),
                ];
            })
            ->all();

        return Inertia::render('admin/orders/index', [
            'filters' => [
                'status' => in_array($status, Order::statusKeys(), true)
                    ? $status
                    : '',
                'search' => $search,
            ],
            'orders' => $orders,
            'statusOptions' => array_map(
                fn (string $value): array => ['value' => $value],
                Order::statusKeys(),
            ),
            'stats' => [
                ['value' => Order::query()->count(), 'labelKey' => 'admin.stats.total'],
                ['value' => Order::query()->where('status', Order::STATUS_PENDING)->count(), 'labelKey' => 'admin.stats.pending'],
                ['value' => Order::query()->where('status', Order::STATUS_CONFIRMED)->count(), 'labelKey' => 'admin.stats.confirmed'],
                ['value' => Order::query()->where('status', Order::STATUS_COMPLETED)->count(), 'labelKey' => 'admin.stats.completed'],
            ],
        ]);
    }

    public function update(
        UpdateOrderStatusRequest $request,
        Order $order,
    ): RedirectResponse {
        $order->update($request->validated());

        return back()->with('dashboardSuccessKey', 'admin.statusUpdated');
    }
}
