import { useForm, usePage } from '@inertiajs/react';
import { useEffect, useEffectEvent } from 'react';

import { store } from '@/actions/App/Http/Controllers/OrderController';
import DuckSiteLayout from '@/components/duck-site-layout';
import QuickContactActions from '@/components/quick-contact-actions';
import { useI18n } from '@/i18n/context';
import {
    ORDER_CONTACT_METHODS,
    ORDER_FULFILLMENT_TYPES,
    ORDER_PRODUCTS,
    isOrderProduct,
} from '@/lib/order-options';
import type {
    OrderContactMethod,
    OrderFulfillmentType,
    OrderProduct,
} from '@/lib/order-options';
import type { Flash, Site } from '@/types';

type OrderPageProps = {
    prefill: {
        product: string | null;
    };
    flash: Flash;
    site: Site;
};

type OrderFormData = {
    name: string;
    phone: string;
    email: string;
    preferred_contact_method: OrderContactMethod;
    product: OrderProduct | '';
    quantity: string;
    fulfillment_type: OrderFulfillmentType;
    address: string;
    preferred_date: string;
    preferred_time: string;
    notes: string;
};

type DetailCard = {
    title: string;
    detail: string;
};

function createInitialFormData(product: string | null): OrderFormData {
    return {
        name: '',
        phone: '',
        email: '',
        preferred_contact_method: 'phone',
        product: isOrderProduct(product) ? product : '',
        quantity: '',
        fulfillment_type: 'pickup',
        address: '',
        preferred_date: '',
        preferred_time: '',
        notes: '',
    };
}

export default function OrderOnline() {
    const { t } = useI18n();
    const { prefill, flash, site } = usePage<OrderPageProps>().props;
    const form = useForm<OrderFormData>(createInitialFormData(prefill.product));

    const syncPrefill = useEffectEvent((product: string | null) => {
        form.setData(createInitialFormData(product));
        form.clearErrors();
    });

    useEffect(() => {
        syncPrefill(prefill.product);
    }, [prefill.product]);

    const selectedProduct = ORDER_PRODUCTS.find(
        (product) => product.value === form.data.product,
    );

    const orderSteps: DetailCard[] = [
        {
            title: t('order.step1.title'),
            detail: t('order.step1.desc'),
        },
        {
            title: t('order.step2.title'),
            detail: t('order.step2.desc'),
        },
        {
            title: t('order.step3.title'),
            detail: t('order.step3.desc'),
        },
    ];

    const serviceDetails: DetailCard[] = [
        {
            title: 'Service zone',
            detail: site.serviceZone,
        },
        {
            title: 'Delivery days',
            detail: site.deliveryDays.join(' | '),
        },
        {
            title: 'Payment methods',
            detail: site.paymentMethods.join(' | '),
        },
    ];

    const faqItems: DetailCard[] = [
        {
            title: 'How quickly do you confirm new orders?',
            detail: `Most order requests are reviewed during ${site.responseHours}. We confirm stock, timing, and total price after we receive your details.`,
        },
        {
            title: 'Which areas can receive delivery?',
            detail: `Delivery is available for ${site.serviceZone}. Pickup at the farm stays available for any order that has been confirmed first.`,
        },
        {
            title: 'What should I enter for quantity?',
            detail: 'Use the practical order unit for the product you need, such as trays, kilograms, ducks, or sacks. Clear quantities help us confirm price faster.',
        },
        {
            title: 'Can restaurants or resellers order in bulk?',
            detail: 'Yes. Use the notes field to mention wholesale volume, repeat scheduling, or packaging requirements for business orders.',
        },
        {
            title: 'What happens after I submit?',
            detail: 'We review the request, contact you using your preferred method, confirm availability, then lock pickup or delivery timing.',
        },
    ];

    return (
        <DuckSiteLayout
            title={t('nav.order')}
            description={t('order.subtitle')}
        >
            <section className="duck-panel duck-reveal p-7 sm:p-10">
                <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
                    <div>
                        <p className="duck-kicker">{t('order.kicker')}</p>
                        <h1 className="duck-display mt-3 text-4xl text-[#2f1a09] sm:text-5xl">
                            {t('order.title')}
                        </h1>
                        <p className="mt-4 max-w-3xl text-base text-[#6d492f] sm:text-lg">
                            {t('order.subtitle')}
                        </p>
                    </div>

                    <div className="grid gap-3">
                        <div className="duck-soft-card p-5">
                            <p className="text-xs font-semibold tracking-[0.14em] text-[#9b6034] uppercase">
                                Response window
                            </p>
                            <p className="duck-display mt-2 text-2xl text-[#3a220d]">
                                {site.responseHours}
                            </p>
                            <p className="mt-2 text-sm text-[#6d4a31]">
                                Use the form for full order details, or switch to direct contact when the order is urgent.
                            </p>
                        </div>
                        <QuickContactActions compact />
                    </div>
                </div>
            </section>

            {flash.orderSuccess ? (
                <section className="rounded-[1.6rem] border border-[#c9a67d] bg-[#fff6ea] p-5 text-[#4d2b13] shadow-[0_14px_32px_rgba(85,45,16,0.12)]">
                    <p className="text-xs font-semibold tracking-[0.14em] text-[#9b6034] uppercase">
                        Order request received
                    </p>
                    <p className="mt-2 text-base font-semibold sm:text-lg">
                        {flash.orderSuccess}
                    </p>
                    {flash.orderReference ? (
                        <p className="mt-2 text-sm text-[#6f4b31]">
                            Reference: <strong>{flash.orderReference}</strong>
                        </p>
                    ) : null}
                </section>
            ) : null}

            <section className="grid gap-4 md:grid-cols-3">
                {orderSteps.map((step, index) => {
                    return (
                        <article
                            key={step.title}
                            className="duck-soft-card duck-reveal p-5"
                            style={{ animationDelay: `${120 + index * 120}ms` }}
                        >
                            <h2 className="duck-display text-2xl text-[#3b220d]">
                                {step.title}
                            </h2>
                            <p className="mt-3 text-sm text-[#6d4a31]">
                                {step.detail}
                            </p>
                        </article>
                    );
                })}
            </section>

            <section className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
                <section className="duck-panel p-7 sm:p-8">
                    <h2 className="duck-display text-3xl text-[#321b0a] sm:text-4xl">
                        Submit a real order request
                    </h2>
                    <p className="mt-2 text-sm text-[#6c492f]">
                        Share the product, quantity, and preferred timing so the farm can confirm the order in one follow-up.
                    </p>

                    <form
                        className="mt-6 grid gap-4 md:grid-cols-2"
                        onSubmit={(event) => {
                            event.preventDefault();

                            form.submit(store(), {
                                preserveScroll: true,
                            });
                        }}
                    >
                        <label className="flex flex-col gap-1 text-sm text-[#5f3b20]">
                            Full name
                            <input
                                type="text"
                                value={form.data.name}
                                onChange={(event) => form.setData('name', event.target.value)}
                                placeholder={t('order.form.namePlaceholder')}
                                className="duck-field"
                            />
                            {form.errors.name ? (
                                <span className="text-xs text-[#a74224]">{form.errors.name}</span>
                            ) : null}
                        </label>

                        <label className="flex flex-col gap-1 text-sm text-[#5f3b20]">
                            Phone number
                            <input
                                type="tel"
                                value={form.data.phone}
                                onChange={(event) => form.setData('phone', event.target.value)}
                                placeholder={t('order.form.phonePlaceholder')}
                                className="duck-field"
                            />
                            {form.errors.phone ? (
                                <span className="text-xs text-[#a74224]">{form.errors.phone}</span>
                            ) : null}
                        </label>

                        <label className="flex flex-col gap-1 text-sm text-[#5f3b20]">
                            Email address
                            <input
                                type="email"
                                value={form.data.email}
                                onChange={(event) => form.setData('email', event.target.value)}
                                placeholder="name@example.com"
                                className="duck-field"
                            />
                            {form.errors.email ? (
                                <span className="text-xs text-[#a74224]">{form.errors.email}</span>
                            ) : null}
                        </label>

                        <label className="flex flex-col gap-1 text-sm text-[#5f3b20]">
                            Preferred contact method
                            <select
                                value={form.data.preferred_contact_method}
                                onChange={(event) =>
                                    form.setData(
                                        'preferred_contact_method',
                                        event.target.value as OrderContactMethod,
                                    )
                                }
                                className="duck-field"
                            >
                                {ORDER_CONTACT_METHODS.map((method) => {
                                    return (
                                        <option key={method.value} value={method.value}>
                                            {method.label}
                                        </option>
                                    );
                                })}
                            </select>
                            {form.errors.preferred_contact_method ? (
                                <span className="text-xs text-[#a74224]">
                                    {form.errors.preferred_contact_method}
                                </span>
                            ) : null}
                        </label>

                        <label className="flex flex-col gap-1 text-sm text-[#5f3b20]">
                            Product type
                            <select
                                value={form.data.product}
                                onChange={(event) =>
                                    form.setData(
                                        'product',
                                        event.target.value as OrderProduct | '',
                                    )
                                }
                                className="duck-field"
                            >
                                <option value="">Choose a product</option>
                                {ORDER_PRODUCTS.map((product) => {
                                    return (
                                        <option key={product.value} value={product.value}>
                                            {t(product.labelKey)}
                                        </option>
                                    );
                                })}
                            </select>
                            <span className="text-xs text-[#8b5c39]">
                                Minimum order unit:{' '}
                                {selectedProduct?.minimumUnitLabel ?? 'Choose a product to see the practical order unit.'}
                            </span>
                            {form.errors.product ? (
                                <span className="text-xs text-[#a74224]">{form.errors.product}</span>
                            ) : null}
                        </label>

                        <label className="flex flex-col gap-1 text-sm text-[#5f3b20]">
                            Quantity
                            <input
                                type="text"
                                value={form.data.quantity}
                                onChange={(event) => form.setData('quantity', event.target.value)}
                                placeholder={t('order.form.quantityPlaceholder')}
                                className="duck-field"
                            />
                            {form.errors.quantity ? (
                                <span className="text-xs text-[#a74224]">{form.errors.quantity}</span>
                            ) : null}
                        </label>

                        <label className="flex flex-col gap-1 text-sm text-[#5f3b20]">
                            Fulfillment type
                            <select
                                value={form.data.fulfillment_type}
                                onChange={(event) =>
                                    form.setData(
                                        'fulfillment_type',
                                        event.target.value as OrderFulfillmentType,
                                    )
                                }
                                className="duck-field"
                            >
                                {ORDER_FULFILLMENT_TYPES.map((type) => {
                                    return (
                                        <option key={type.value} value={type.value}>
                                            {type.label}
                                        </option>
                                    );
                                })}
                            </select>
                            {form.errors.fulfillment_type ? (
                                <span className="text-xs text-[#a74224]">
                                    {form.errors.fulfillment_type}
                                </span>
                            ) : null}
                        </label>

                        <label className="flex flex-col gap-1 text-sm text-[#5f3b20]">
                            Preferred date
                            <input
                                type="date"
                                value={form.data.preferred_date}
                                onChange={(event) =>
                                    form.setData('preferred_date', event.target.value)
                                }
                                className="duck-field"
                            />
                            {form.errors.preferred_date ? (
                                <span className="text-xs text-[#a74224]">
                                    {form.errors.preferred_date}
                                </span>
                            ) : null}
                        </label>

                        <label className="flex flex-col gap-1 text-sm text-[#5f3b20]">
                            Preferred time
                            <input
                                type="time"
                                value={form.data.preferred_time}
                                onChange={(event) =>
                                    form.setData('preferred_time', event.target.value)
                                }
                                className="duck-field"
                            />
                            {form.errors.preferred_time ? (
                                <span className="text-xs text-[#a74224]">
                                    {form.errors.preferred_time}
                                </span>
                            ) : null}
                        </label>

                        <label className="flex flex-col gap-1 text-sm text-[#5f3b20] md:col-span-2">
                            Delivery address or landmark
                            <textarea
                                rows={3}
                                value={form.data.address}
                                onChange={(event) => form.setData('address', event.target.value)}
                                placeholder="Village, district, landmark, or pickup notes"
                                className="duck-field"
                            />
                            {form.errors.address ? (
                                <span className="text-xs text-[#a74224]">{form.errors.address}</span>
                            ) : null}
                        </label>

                        <label className="flex flex-col gap-1 text-sm text-[#5f3b20] md:col-span-2">
                            Delivery notes
                            <textarea
                                rows={4}
                                value={form.data.notes}
                                onChange={(event) => form.setData('notes', event.target.value)}
                                placeholder={t('order.form.notesPlaceholder')}
                                className="duck-field"
                            />
                            {form.errors.notes ? (
                                <span className="text-xs text-[#a74224]">{form.errors.notes}</span>
                            ) : null}
                        </label>

                        <button
                            type="submit"
                            disabled={form.processing}
                            className="duck-btn-primary w-full px-5 py-3 text-sm disabled:cursor-not-allowed disabled:opacity-70 md:col-span-2"
                        >
                            {form.processing ? 'Submitting order...' : 'Submit order request'}
                        </button>
                    </form>
                </section>

                <div className="grid gap-4">
                    <section className="duck-panel-dark p-6 text-[#faecda] sm:p-7">
                        <h2 className="duck-display text-3xl">
                            How ordering works
                        </h2>
                        <ul className="mt-4 space-y-3 text-sm text-[#f3d2b1]">
                            <li className="rounded-2xl border border-[#664427] bg-[#3d1f0d] px-4 py-3">
                                1. Submit your order with the product, quantity, and timing.
                            </li>
                            <li className="rounded-2xl border border-[#664427] bg-[#3d1f0d] px-4 py-3">
                                2. The farm confirms availability, price, and delivery or pickup timing.
                            </li>
                            <li className="rounded-2xl border border-[#664427] bg-[#3d1f0d] px-4 py-3">
                                3. You receive a direct follow-up on your preferred contact channel.
                            </li>
                        </ul>
                    </section>

                    <section className="duck-panel p-6 sm:p-7">
                        <p className="duck-kicker">Before you submit</p>
                        <h2 className="duck-display mt-2 text-3xl text-[#341d0b]">
                            Order details buyers usually ask for
                        </h2>
                        <div className="mt-5 grid gap-3">
                            {serviceDetails.map((detail) => {
                                return (
                                    <article
                                        key={detail.title}
                                        className="rounded-2xl border border-[#ddc4a5] bg-[#fff9f2] px-4 py-4"
                                    >
                                        <p className="text-xs font-semibold tracking-[0.14em] text-[#8b5c39] uppercase">
                                            {detail.title}
                                        </p>
                                        <p className="mt-2 text-sm leading-6 text-[#6e4b31]">
                                            {detail.detail}
                                        </p>
                                    </article>
                                );
                            })}
                        </div>
                    </section>
                </div>
            </section>

            <section className="duck-panel p-7 sm:p-8">
                <p className="duck-kicker">FAQ</p>
                <h2 className="duck-display mt-2 text-3xl text-[#341d0b] sm:text-4xl">
                    Answers that help customers order faster
                </h2>
                <div className="mt-6 grid gap-4 lg:grid-cols-2">
                    {faqItems.map((item, index) => {
                        return (
                            <article
                                key={item.title}
                                className="duck-soft-card duck-reveal p-5"
                                style={{ animationDelay: `${140 + index * 100}ms` }}
                            >
                                <h3 className="duck-display text-2xl text-[#341d0b]">
                                    {item.title}
                                </h3>
                                <p className="mt-3 text-sm leading-6 text-[#6d492f]">
                                    {item.detail}
                                </p>
                            </article>
                        );
                    })}
                </div>
            </section>
        </DuckSiteLayout>
    );
}