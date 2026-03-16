<?php

return [
    'app_url' => env('APP_URL', 'http://localhost:8000'),
    'business_name' => env('SITE_BUSINESS_NAME', 'Duck Product Co.'),
    'primary_phone' => env('SITE_PRIMARY_PHONE', '+855 69 866 032'),
    'secondary_phone' => env('SITE_SECONDARY_PHONE', '095855474'),
    'sales_email' => env('SITE_SALES_EMAIL', 'vanthorngthai31@gmail.com'),
    'telegram_url' => env('SITE_TELEGRAM_URL', 'https://t.me/+85569866032'),
    'map_url' => env('SITE_MAP_URL', 'https://maps.app.goo.gl/CW45YwZcPjAbgVh19'),
    'service_zone' => env(
        'SITE_SERVICE_ZONE',
        'Phnom Penh and selected nearby districts',
    ),
    'response_hours' => env('SITE_RESPONSE_HOURS', '06:00 AM - 06:00 PM'),
    'payment_methods' => [
        'Cash on pickup',
        'Cash on delivery',
        'Bank transfer for confirmed wholesale orders',
    ],
    'delivery_days' => [
        'Monday - Friday',
        'Saturday',
        'Sunday morning by confirmation',
    ],
];
