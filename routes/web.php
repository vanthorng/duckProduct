<?php

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
