import { Link } from '@inertiajs/react';

import DuckSiteLayout from '@/components/duck-site-layout';
import { useI18n } from '@/i18n/context';

type Highlight = {
    label: string;
    value: string;
    description: string;
};

type FeaturedProduct = {
    name: string;
    description: string;
    price: string;
};

export default function Home() {
    const { t } = useI18n();

    const highlights: Highlight[] = [
        {
            label: t('home.highlights.output.label'),
            value: t('home.highlights.output.value'),
            description: t('home.highlights.output.desc'),
        },
        {
            label: t('home.highlights.area.label'),
            value: t('home.highlights.area.value'),
            description: t('home.highlights.area.desc'),
        },
        {
            label: t('home.highlights.delivery.label'),
            value: t('home.highlights.delivery.value'),
            description: t('home.highlights.delivery.desc'),
        },
    ];

    const featuredProducts: FeaturedProduct[] = [
        {
            name: t('home.products.eggs.name'),
            description: t('home.products.eggs.desc'),
            price: t('home.products.eggs.price'),
        },
        {
            name: t('home.products.meat.name'),
            description: t('home.products.meat.desc'),
            price: t('home.products.meat.price'),
        },
        {
            name: t('home.products.roasted.name'),
            description: t('home.products.roasted.desc'),
            price: t('home.products.roasted.price'),
        },
        {
            name: t('home.products.herb.name'),
            description: t('home.products.herb.desc'),
            price: t('home.products.herb.price'),
        },
    ];

    return (
        <DuckSiteLayout title={t('nav.home')}>
            <section className="duck-panel duck-reveal relative overflow-hidden p-7 sm:p-10">
                <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
                    <div>
                        <p className="duck-kicker">{t('home.kicker')}</p>
                        <h1 className="duck-display mt-3 max-w-3xl text-4xl leading-tight text-[#2f1a09] sm:text-5xl">
                            {t('home.title')}
                        </h1>
                        <p className="mt-4 max-w-2xl text-base text-[#6c472c] sm:text-lg">
                            {t('home.subtitle')}
                        </p>

                        <div className="mt-7 flex flex-wrap gap-3">
                            <Link
                                href="/order-online"
                                className="duck-btn-primary px-6 py-3 text-sm"
                            >
                                {t('home.ctaOrder')}
                            </Link>
                            <Link
                                href="/duck-products"
                                className="duck-btn-secondary px-6 py-3 text-sm"
                            >
                                {t('home.ctaProducts')}
                            </Link>
                        </div>
                    </div>

                    <figure className="duck-soft-card overflow-hidden p-3">
                        <img
                            src="/images/cambodia-duck-farm.svg"
                            alt={t('home.imageAlt')}
                            className="h-full w-full rounded-2xl object-cover"
                        />
                    </figure>
                </div>
            </section>

            <section className="grid gap-4 md:grid-cols-3">
                {highlights.map((highlight, index) => {
                    return (
                        <article
                            key={highlight.label}
                            className="duck-soft-card duck-reveal p-5"
                            style={{ animationDelay: `${140 + index * 120}ms` }}
                        >
                            <p className="text-sm font-semibold text-[#8e562e]">
                                {highlight.label}
                            </p>
                            <p className="duck-display mt-2 text-3xl text-[#321b09]">
                                {highlight.value}
                            </p>
                            <p className="mt-2 text-sm text-[#6e4b33]">
                                {highlight.description}
                            </p>
                        </article>
                    );
                })}
            </section>

            <section className="duck-panel p-7 sm:p-8">
                <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <p className="duck-kicker">
                            {t('home.products.kicker')}
                        </p>
                        <h2 className="duck-display mt-2 text-3xl text-[#2f1a09] sm:text-4xl">
                            {t('home.products.title')}
                        </h2>
                    </div>
                    <Link
                        href="/duck-products"
                        className="duck-btn-secondary w-fit px-4 py-2 text-sm"
                    >
                        {t('home.products.viewAll')}
                    </Link>
                </div>

                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                    {featuredProducts.map((product, index) => {
                        return (
                            <article
                                key={product.name}
                                className="duck-soft-card duck-reveal p-5"
                                style={{
                                    animationDelay: `${180 + index * 120}ms`,
                                }}
                            >
                                <h3 className="duck-display text-2xl text-[#3a210c]">
                                    {product.name}
                                </h3>
                                <p className="mt-2 text-sm text-[#6e4a31]">
                                    {product.description}
                                </p>
                                <p className="mt-4 text-sm font-semibold text-[#905325]">
                                    {product.price}
                                </p>
                            </article>
                        );
                    })}
                </div>
            </section>
        </DuckSiteLayout>
    );
}
