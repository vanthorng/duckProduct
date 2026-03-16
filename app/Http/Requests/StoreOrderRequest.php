<?php

namespace App\Http\Requests;

use App\Models\Order;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreOrderRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, array<int, ValidationRule|string>>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:120'],
            'phone' => ['required', 'string', 'max:40'],
            'email' => [
                Rule::requiredIf(
                    $this->input('preferred_contact_method') === Order::CONTACT_METHOD_EMAIL,
                ),
                'nullable',
                'email',
                'max:255',
            ],
            'preferred_contact_method' => [
                'required',
                'string',
                Rule::in(Order::contactMethodKeys()),
            ],
            'product' => [
                'required',
                'string',
                Rule::in(Order::productKeys()),
            ],
            'quantity' => ['required', 'string', 'max:80'],
            'fulfillment_type' => [
                'required',
                'string',
                Rule::in(Order::fulfillmentTypeKeys()),
            ],
            'address' => [
                Rule::requiredIf(
                    $this->input('fulfillment_type') === Order::FULFILLMENT_DELIVERY,
                ),
                'nullable',
                'string',
                'max:500',
            ],
            'preferred_date' => ['nullable', 'date', 'after_or_equal:today'],
            'preferred_time' => ['nullable', 'date_format:H:i'],
            'notes' => ['nullable', 'string', 'max:1000'],
        ];
    }

    /**
     * Get the custom messages for the validator.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'name.required' => 'Please add the customer name for this order.',
            'phone.required' => 'Please add a phone number so we can confirm the order.',
            'email.required' => 'Please add an email address when email is the preferred contact method.',
            'product.required' => 'Please choose a product before submitting the order.',
            'quantity.required' => 'Please tell us how much you would like to order.',
            'fulfillment_type.required' => 'Please choose pickup or delivery.',
            'address.required' => 'Please add a delivery address or landmark for delivery orders.',
            'preferred_date.after_or_equal' => 'Please choose today or a future date for the preferred schedule.',
        ];
    }
}
