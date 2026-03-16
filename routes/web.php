<?php

use App\Http\Controllers\Admin\OrderDashboardController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\OrderController;
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::inertia('/', 'home')->name('home');
Route::inertia('/our-farm', 'our-farm')->name('our-farm');
Route::inertia('/duck-products', 'duck-products')->name('duck-products');
Route::get('/order-online', function (Request $request) {
    $product = $request->string('product')->value();

    return Inertia::render('order-online', [
        'prefill' => [
            'product' => in_array($product, Order::productKeys(), true)
                ? $product
                : null,
        ],
    ]);
})->name('order-online');
Route::inertia('/contact-location', 'contact-location')->name('contact-location');
Route::post('/orders', [OrderController::class, 'store'])->name('orders.store');

Route::middleware('guest')->group(function (): void {
    Route::get('/admin/login', [AuthenticatedSessionController::class, 'create'])
        ->name('login');
    Route::post('/admin/login', [AuthenticatedSessionController::class, 'store'])
        ->name('admin.login.store');
});

Route::middleware('auth')->prefix('admin')->name('admin.')->group(function (): void {
    Route::redirect('/', '/admin/orders');
    Route::get('/orders', [OrderDashboardController::class, 'index'])
        ->name('orders.index');
    Route::patch('/orders/{order}', [OrderDashboardController::class, 'update'])
        ->name('orders.update');
    Route::post('/logout', [AuthenticatedSessionController::class, 'destroy'])
        ->name('logout');
});
