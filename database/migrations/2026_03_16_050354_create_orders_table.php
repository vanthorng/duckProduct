<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('phone', 40);
            $table->string('email')->nullable();
            $table->string('preferred_contact_method', 20);
            $table->string('product', 50);
            $table->string('quantity', 80);
            $table->string('fulfillment_type', 20);
            $table->text('address')->nullable();
            $table->date('preferred_date')->nullable();
            $table->string('preferred_time', 5)->nullable();
            $table->text('notes')->nullable();
            $table->string('status', 20)->default('pending');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
