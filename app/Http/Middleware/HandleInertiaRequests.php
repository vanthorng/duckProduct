<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'name' => config('app.name'),
            'flash' => [
                'orderSuccess' => $request->session()->get('orderSuccess'),
                'orderReference' => $request->session()->get('orderReference'),
            ],
            'auth' => [
                'user' => $request->user(),
            ],
            'site' => [
                'appUrl' => config('site.app_url'),
                'businessName' => config('site.business_name'),
                'primaryPhone' => config('site.primary_phone'),
                'secondaryPhone' => config('site.secondary_phone'),
                'phoneDisplay' => implode(', ', array_filter([
                    config('site.primary_phone'),
                    config('site.secondary_phone'),
                ])),
                'salesEmail' => config('site.sales_email'),
                'telegramUrl' => config('site.telegram_url'),
                'mapUrl' => config('site.map_url'),
                'serviceZone' => config('site.service_zone'),
                'responseHours' => config('site.response_hours'),
                'paymentMethods' => config('site.payment_methods'),
                'deliveryDays' => config('site.delivery_days'),
            ],
        ];
    }
}
