<?php

namespace App\Models;

use Database\Factories\OrderFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    public const PRODUCT_FRESH_DUCK_EGGS = 'fresh-duck-eggs';

    public const PRODUCT_PREMIUM_DUCK_MEAT_CUTS = 'premium-duck-meat-cuts';

    public const PRODUCT_HOUSE_ROASTED_DUCK = 'house-roasted-duck';

    public const PRODUCT_DUCK_DROPPINGS_HERB_SACK = 'duck-droppings-herb-sack';

    public const CONTACT_METHOD_PHONE = 'phone';

    public const CONTACT_METHOD_TELEGRAM = 'telegram';

    public const CONTACT_METHOD_EMAIL = 'email';

    public const FULFILLMENT_PICKUP = 'pickup';

    public const FULFILLMENT_DELIVERY = 'delivery';

    public const STATUS_PENDING = 'pending';

    public const STATUS_CONFIRMED = 'confirmed';

    public const STATUS_PREPARING = 'preparing';

    public const STATUS_COMPLETED = 'completed';

    public const STATUS_CANCELLED = 'cancelled';

    /** @use HasFactory<OrderFactory> */
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'phone',
        'email',
        'preferred_contact_method',
        'product',
        'quantity',
        'fulfillment_type',
        'address',
        'preferred_date',
        'preferred_time',
        'notes',
        'status',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'preferred_date' => 'date',
        ];
    }

    /**
     * Get the supported product keys.
     *
     * @return list<string>
     */
    public static function productKeys(): array
    {
        return array_keys(self::productLabels());
    }

    /**
     * Get the supported contact methods.
     *
     * @return list<string>
     */
    public static function contactMethodKeys(): array
    {
        return array_keys(self::contactMethodLabels());
    }

    /**
     * Get the supported fulfillment types.
     *
     * @return list<string>
     */
    public static function fulfillmentTypeKeys(): array
    {
        return array_keys(self::fulfillmentTypeLabels());
    }

    /**
     * Get the supported order statuses.
     *
     * @return list<string>
     */
    public static function statusKeys(): array
    {
        return array_keys(self::statusLabels());
    }

    /**
     * Get the product labels.
     *
     * @return array<string, string>
     */
    public static function productLabels(): array
    {
        return [
            self::PRODUCT_FRESH_DUCK_EGGS => 'Fresh Duck Eggs',
            self::PRODUCT_PREMIUM_DUCK_MEAT_CUTS => 'Premium Duck Meat Cuts',
            self::PRODUCT_HOUSE_ROASTED_DUCK => 'House Roasted Duck',
            self::PRODUCT_DUCK_DROPPINGS_HERB_SACK => 'Duck Droppings Herb (Sack)',
        ];
    }

    /**
     * Get the contact method labels.
     *
     * @return array<string, string>
     */
    public static function contactMethodLabels(): array
    {
        return [
            self::CONTACT_METHOD_PHONE => 'Phone call',
            self::CONTACT_METHOD_TELEGRAM => 'Telegram',
            self::CONTACT_METHOD_EMAIL => 'Email',
        ];
    }

    /**
     * Get the fulfillment type labels.
     *
     * @return array<string, string>
     */
    public static function fulfillmentTypeLabels(): array
    {
        return [
            self::FULFILLMENT_PICKUP => 'Farm pickup',
            self::FULFILLMENT_DELIVERY => 'Local delivery',
        ];
    }

    /**
     * Get the order status labels.
     *
     * @return array<string, string>
     */
    public static function statusLabels(): array
    {
        return [
            self::STATUS_PENDING => 'Pending',
            self::STATUS_CONFIRMED => 'Confirmed',
            self::STATUS_PREPARING => 'Preparing',
            self::STATUS_COMPLETED => 'Completed',
            self::STATUS_CANCELLED => 'Cancelled',
        ];
    }

    public function reference(): string
    {
        return 'ORD-'.str_pad((string) $this->getKey(), 5, '0', STR_PAD_LEFT);
    }

    public function productLabel(): string
    {
        return self::productLabels()[$this->product] ?? $this->product;
    }

    public function preferredContactMethodLabel(): string
    {
        return self::contactMethodLabels()[$this->preferred_contact_method]
            ?? $this->preferred_contact_method;
    }

    public function fulfillmentTypeLabel(): string
    {
        return self::fulfillmentTypeLabels()[$this->fulfillment_type]
            ?? $this->fulfillment_type;
    }

    public function statusLabel(): string
    {
        return self::statusLabels()[$this->status] ?? $this->status;
    }
}
