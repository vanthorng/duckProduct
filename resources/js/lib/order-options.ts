export type OrderProduct =
    | 'fresh-duck-eggs'
    | 'premium-duck-meat-cuts'
    | 'house-roasted-duck'
    | 'duck-droppings-herb-sack';

export type OrderContactMethod = 'phone' | 'telegram' | 'email';

export type OrderFulfillmentType = 'pickup' | 'delivery';

export type OrderStatus =
    | 'pending'
    | 'confirmed'
    | 'preparing'
    | 'completed'
    | 'cancelled';

export type OrderProductOption = {
    value: OrderProduct;
    labelKey: string;
    descriptionKey: string;
    priceKey: string;
    packagingKey: string;
    categoryKey: string;
    minimumUnitKey: string;
};

export const ORDER_PRODUCTS: OrderProductOption[] = [
    {
        value: 'fresh-duck-eggs',
        labelKey: 'products.item.eggs.name',
        descriptionKey: 'products.item.eggs.desc',
        priceKey: 'products.item.eggs.price',
        packagingKey: 'products.item.eggs.packaging',
        categoryKey: 'products.item.eggs.category',
        minimumUnitKey: 'products.minimumUnit.tray',
    },
    {
        value: 'premium-duck-meat-cuts',
        labelKey: 'products.item.meat.name',
        descriptionKey: 'products.item.meat.desc',
        priceKey: 'products.item.meat.price',
        packagingKey: 'products.item.meat.packaging',
        categoryKey: 'products.item.meat.category',
        minimumUnitKey: 'products.minimumUnit.kg',
    },
    {
        value: 'house-roasted-duck',
        labelKey: 'products.item.roasted.name',
        descriptionKey: 'products.item.roasted.desc',
        priceKey: 'products.item.roasted.price',
        packagingKey: 'products.item.roasted.packaging',
        categoryKey: 'products.item.roasted.category',
        minimumUnitKey: 'products.minimumUnit.duck',
    },
    {
        value: 'duck-droppings-herb-sack',
        labelKey: 'products.item.herb.name',
        descriptionKey: 'products.item.herb.desc',
        priceKey: 'products.item.herb.price',
        packagingKey: 'products.item.herb.packaging',
        categoryKey: 'products.item.herb.category',
        minimumUnitKey: 'products.minimumUnit.sack',
    },
];

export const ORDER_CONTACT_METHODS: Array<{
    value: OrderContactMethod;
    labelKey: string;
}> = [
    { value: 'phone', labelKey: 'order.contactMethod.phone' },
    { value: 'telegram', labelKey: 'order.contactMethod.telegram' },
    { value: 'email', labelKey: 'order.contactMethod.email' },
];

export const ORDER_FULFILLMENT_TYPES: Array<{
    value: OrderFulfillmentType;
    labelKey: string;
}> = [
    { value: 'pickup', labelKey: 'order.fulfillment.pickup' },
    { value: 'delivery', labelKey: 'order.fulfillment.delivery' },
];

export const ORDER_STATUSES: OrderStatus[] = [
    'pending',
    'confirmed',
    'preparing',
    'completed',
    'cancelled',
];

export function isOrderProduct(value: string | null | undefined): value is OrderProduct {
    return ORDER_PRODUCTS.some((product) => product.value === value);
}
