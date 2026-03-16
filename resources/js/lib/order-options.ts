export type OrderProduct =
    | 'fresh-duck-eggs'
    | 'premium-duck-meat-cuts'
    | 'house-roasted-duck'
    | 'duck-droppings-herb-sack';

export type OrderContactMethod = 'phone' | 'telegram' | 'email';

export type OrderFulfillmentType = 'pickup' | 'delivery';

export type OrderProductOption = {
    value: OrderProduct;
    labelKey: string;
    descriptionKey: string;
    priceKey: string;
    packagingKey: string;
    categoryKey: string;
    minimumUnitLabel: string;
};

export const ORDER_PRODUCTS: OrderProductOption[] = [
    {
        value: 'fresh-duck-eggs',
        labelKey: 'products.item.eggs.name',
        descriptionKey: 'products.item.eggs.desc',
        priceKey: 'products.item.eggs.price',
        packagingKey: 'products.item.eggs.packaging',
        categoryKey: 'products.item.eggs.category',
        minimumUnitLabel: 'Tray of 30 eggs',
    },
    {
        value: 'premium-duck-meat-cuts',
        labelKey: 'products.item.meat.name',
        descriptionKey: 'products.item.meat.desc',
        priceKey: 'products.item.meat.price',
        packagingKey: 'products.item.meat.packaging',
        categoryKey: 'products.item.meat.category',
        minimumUnitLabel: '1 kg pack',
    },
    {
        value: 'house-roasted-duck',
        labelKey: 'products.item.roasted.name',
        descriptionKey: 'products.item.roasted.desc',
        priceKey: 'products.item.roasted.price',
        packagingKey: 'products.item.roasted.packaging',
        categoryKey: 'products.item.roasted.category',
        minimumUnitLabel: '1 whole duck',
    },
    {
        value: 'duck-droppings-herb-sack',
        labelKey: 'products.item.herb.name',
        descriptionKey: 'products.item.herb.desc',
        priceKey: 'products.item.herb.price',
        packagingKey: 'products.item.herb.packaging',
        categoryKey: 'products.item.herb.category',
        minimumUnitLabel: '1 sack',
    },
];

export const ORDER_CONTACT_METHODS: Array<{
    value: OrderContactMethod;
    label: string;
}> = [
    { value: 'phone', label: 'Phone call' },
    { value: 'telegram', label: 'Telegram' },
    { value: 'email', label: 'Email' },
];

export const ORDER_FULFILLMENT_TYPES: Array<{
    value: OrderFulfillmentType;
    label: string;
}> = [
    { value: 'pickup', label: 'Farm pickup' },
    { value: 'delivery', label: 'Local delivery' },
];

export function isOrderProduct(value: string | null | undefined): value is OrderProduct {
    return ORDER_PRODUCTS.some((product) => product.value === value);
}