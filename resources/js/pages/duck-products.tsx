import { Link, usePage } from '@inertiajs/react';

import DuckSiteLayout from '@/components/duck-site-layout';
import QuickContactActions from '@/components/quick-contact-actions';
import { useI18n } from '@/i18n/context';
import { ORDER_PRODUCTS } from '@/lib/order-options';
import { cn } from '@/lib/utils';
import { contactLocation, orderOnline } from '@/routes';
import type { Site } from '@/types';

const productsPhoto = '/images/products-real.jpg';
const countrysidePhoto = '/images/location-real.jpg';

type ProductNote = {
    title: string;
    description: string;
};

export default function DuckProducts() {
    const { t } = useI18n();
    const { site } = usePage<{ site: Site }>().props;

    const whyChooseUs: string[] = [
        t('products.why.point1'),
        t('products.why.point2'),
        t('products.why.point3'),
        t('products.why.point4'),
    ];

    const productNotes: ProductNote[] = [
        {
            title: t('products.notes.point1.title'),
            description: t('products.notes.point1.desc'),
        },
        {
            title: t('products.notes.point2.title'),
            description: t('products.notes.point2.desc'),
        },
        {
            title: t('products.notes.point3.title'),
            description: t('products.notes.point3.desc'),
        },
    ];

    return (
        <DuckSiteLayout
            title={t('nav.products')}
            description={t('products.subtitle')}
        >
            <section className="duck-panel duck-reveal p-7 sm:p-10">
                <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
                    <div>
                        <p className="duck-kicker">{t('products.kicker')}</p>
                        <h1 className="duck-display mt-3 text-4xl text-[#2f1a09] sm:text-5xl">
                            {t('products.title')}
                        </h1>
                        <p className="mt-4 max-w-3xl text-base text-[#6d492f] sm:text-lg">
                            {t('products.subtitle')}
                        </p>
                    </div>

                    <div className="grid gap-3">
                        <div className="duck-soft-card p-5">
                            <p className="text-xs font-semibold tracking-[0.14em] text-[#9f5f32] uppercase">
                                Order support
                            </p>
                            <p className="mt-2 text-sm leading-6 text-[#6f4d34]">
                                Retail, wholesale, and repeat buyers can use the product buttons below to jump straight into a prefilled order request.
                            </p>
                            <p className="mt-3 text-sm font-semibold text-[#5c3418]">
                                Service zone: {site.serviceZone}
                            </p>
                        </div>
                        <QuickContactActions compact />
                    </div>
                </div>
            </section>

            <section className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
                <article className="duck-panel duck-reveal p-6">
                    <p className="duck-kicker">{t('products.new.kicker')}</p>
                    <h2 className="duck-display mt-2 text-3xl text-[#3a220d] sm:text-4xl">
                        {t('products.new.title')}
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-[#6f4d34]">
                        {t('products.new.desc')}
                    </p>
                </article>
                <figure className="duck-soft-card duck-photo-card duck-reveal relative overflow-hidden p-3">
                    <img
                        src={productsPhoto}
                        alt={t('products.imageAlt')}
                        className="duck-kenburns h-[320px] w-full rounded-3xl object-cover sm:h-[400px]"
                    />
                    <div className="duck-glass-chip duck-fade-up absolute right-5 bottom-5 left-5 rounded-2xl px-4 py-4 text-[#fff2e3]">
                        <p className="text-[0.68rem] font-semibold tracking-[0.16em] text-[#ffd8aa] uppercase">
                            {t('products.item.roasted.category')}
                        </p>
                        <p className="mt-2 text-lg font-semibold sm:text-xl">
                            {t('products.item.roasted.name')}
                        </p>
                        <p className="mt-2 text-sm text-[#f6dcc2]">
                            {t('products.item.roasted.price')}
                        </p>
                    </div>
                </figure>
            </section>

            <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {ORDER_PRODUCTS.map((product, index) => {
                    return (
                        <article
                            key={product.value}
                            className="duck-soft-card duck-reveal flex flex-col p-6"
                            style={{ animationDelay: `${140 + index * 130}ms` }}
                        >
                            <p className="text-xs font-semibold tracking-[0.14em] text-[#9f5f32] uppercase">
                                {t(product.categoryKey)}
                            </p>
                            <h2 className="duck-display mt-2 text-2xl text-[#3a220d]">
                                {t(product.labelKey)}
                            </h2>
                            <p className="mt-3 text-sm leading-6 text-[#6f4d34]">
                                {t(product.descriptionKey)}
                            </p>
                            <p className="mt-4 text-sm font-medium text-[#8e562e]">
                                {t(product.packagingKey)}
                            </p>
                            <p className="mt-2 text-sm font-semibold text-[#5c3418]">
                                {t(product.priceKey)}
                            </p>
                            <div className="mt-4 rounded-2xl border border-[#ead6bf] bg-[#fff8f0] px-3 py-3 text-sm text-[#6a4126]">
                                <span className="font-semibold">Minimum order unit:</span>{' '}
                                {product.minimumUnitLabel}
                            </div>
                            <Link
                                href={orderOnline.url({
                                    query: { product: product.value },
                                })}
                                className={cn(
                                    'duck-btn-primary mt-5 w-full px-5 py-3 text-center text-sm',
                                )}
                            >
                                Order this product
                            </Link>
                        </article>
                    );
                })}
            </section>

            <section className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
                <article className="duck-panel p-7 sm:p-8">
                    <p className="duck-kicker">{t('products.notes.kicker')}</p>
                    <h2 className="duck-display mt-2 text-3xl text-[#341d0b] sm:text-4xl">
                        {t('products.notes.title')}
                    </h2>

                    <div className="mt-6 grid gap-4">
                        {productNotes.map((note, index) => {
                            return (
                                <article
                                    key={note.title}
                                    className="duck-soft-card duck-reveal p-5"
                                    style={{ animationDelay: `${150 + index * 110}ms` }}
                                >
                                    <h3 className="duck-display text-2xl text-[#3a220d]">
                                        {note.title}
                                    </h3>
                                    <p className="mt-2 text-sm leading-6 text-[#6f4d34]">
                                        {note.description}
                                    </p>
                                </article>
                            );
                        })}
                    </div>
                </article>

                <div className="grid gap-4">
                    <figure className="duck-soft-card duck-photo-card duck-reveal relative overflow-hidden p-3">
                        <img
                            src={productsPhoto}
                            alt={t('products.imageAlt')}
                            className="duck-kenburns h-[240px] w-full rounded-3xl object-cover"
                        />
                        <figcaption className="duck-glass-chip absolute right-4 bottom-4 left-4 rounded-2xl px-4 py-3 text-sm text-[#fff2e3]">
                            {t('products.notes.caption1')}
                        </figcaption>
                    </figure>

                    <figure
                        className="duck-soft-card duck-photo-card duck-reveal relative overflow-hidden p-3"
                        style={{ animationDelay: '220ms' }}
                    >
                        <img
                            src={countrysidePhoto}
                            alt={t('products.notes.caption2')}
                            className="duck-kenburns h-[240px] w-full rounded-3xl object-cover"
                        />
                        <figcaption className="duck-glass-chip absolute right-4 bottom-4 left-4 rounded-2xl px-4 py-3 text-sm text-[#fff2e3]">
                            {t('products.notes.caption2')}
                        </figcaption>
                    </figure>
                </div>
            </section>

            <section className="duck-panel-dark p-7 text-[#f8ead8] sm:p-8">
                <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <p className="duck-kicker text-[#f6c48b]">
                            {t('products.why.kicker')}
                        </p>
                        <h2 className="duck-display mt-2 text-3xl sm:text-4xl">
                            {t('products.why.title')}
                        </h2>
                    </div>
                    <Link
                        href={contactLocation.url()}
                        className="duck-btn-primary w-fit px-4 py-2 text-sm"
                    >
                        {t('products.why.cta')}
                    </Link>
                </div>

                <ul className="grid gap-3 md:grid-cols-2">
                    {whyChooseUs.map((point, index) => {
                        return (
                            <li
                                key={point}
                                className="duck-reveal rounded-2xl border border-[#654426] bg-[#3b1f0d] px-4 py-3 text-sm"
                                style={{ animationDelay: `${120 + index * 110}ms` }}
                            >
                                {point}
                            </li>
                        );
                    })}
                </ul>
            </section>
        </DuckSiteLayout>
    );
}