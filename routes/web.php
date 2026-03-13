<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'home')->name('home');
Route::inertia('/our-farm', 'our-farm')->name('our-farm');
Route::inertia('/duck-products', 'duck-products')->name('duck-products');
Route::inertia('/order-online', 'order-online')->name('order-online');
Route::inertia('/contact-location', 'contact-location')->name('contact-location');
