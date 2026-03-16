<?php

namespace Database\Factories;

use App\Models\Order;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Order>
 */
class OrderFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'phone' => '+855 '.fake()->numerify('## ### ###'),
            'email' => fake()->safeEmail(),
            'preferred_contact_method' => fake()->randomElement(Order::contactMethodKeys()),
            'product' => fake()->randomElement(Order::productKeys()),
            'quantity' => fake()->randomElement(['2 trays', '5 kg', '1 duck', '1 sack']),
            'fulfillment_type' => fake()->randomElement(Order::fulfillmentTypeKeys()),
            'address' => fake()->address(),
            'preferred_date' => fake()->dateTimeBetween('now', '+5 days')->format('Y-m-d'),
            'preferred_time' => fake()->time('H:i'),
            'notes' => fake()->sentence(),
            'status' => Order::STATUS_PENDING,
        ];
    }
}
