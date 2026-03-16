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

const homeHeroPhoto = '/images/home-hero-real.jpg';
const farmPhoto = '/images/our-farm-real.jpg';
const productsPhoto = '/images/products-real.jpg';
const locationPhoto = '/images/location-real.jpg';

type InfoCard = {
    title: string;
    description: string;
};

type GalleryItem = {
    src: string;
    caption: string;
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

    const storyCards: InfoCard[] = [
        {
            title: t('home.story.card1.title'),
            description: t('home.story.card1.desc'),
        },
        {
            title: t('home.story.card2.title'),
            description: t('home.story.card2.desc'),
        },
        {
            title: t('home.story.card3.title'),
            description: t('home.story.card3.desc'),
        },
    ];

    const galleryItems: GalleryItem[] = [
        {
            src: locationPhoto,
            caption: t('home.story.caption1'),
        },
        {
            src: farmPhoto,
            caption: t('home.story.caption2'),
        },
        {
            src: productsPhoto,
            caption: t('home.story.caption3'),
        },
    ];

    return (
        <DuckSiteLayout title={t('nav.home')}>
            <section className="duck-panel duck-reveal relative overflow-hidden p-7 sm:p-10">
                <div className="duck-ambient top-[-90px] right-[-60px] h-56 w-56 bg-[#f3a13b]/40" />
                <div
                    className="duck-ambient bottom-[-80px] left-[-50px] h-52 w-52 bg-[#8f562f]/25"
                    style={{ animationDelay: '1.4s' }}
                />
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

                    <figure className="duck-soft-card duck-photo-card duck-reveal relative overflow-hidden p-3">
                        <img
                            src={homeHeroPhoto}
                            alt={t('home.imageAlt')}
                            className="duck-kenburns h-[320px] w-full rounded-2xl object-cover sm:h-[420px]"
                        />
                        <div className="duck-glass-chip duck-fade-up absolute right-5 bottom-5 left-5 rounded-2xl px-4 py-4 text-[#fff2e3]">
                            <div className="grid gap-3 sm:grid-cols-2">
                                <div>
                                    <p className="text-[0.68rem] font-semibold tracking-[0.16em] text-[#ffd8aa] uppercase">
                                        {t('home.highlights.area.label')}
                                    </p>
                                    <p className="mt-1 text-lg font-semibold">
                                        {t('home.highlights.area.value')}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-[0.68rem] font-semibold tracking-[0.16em] text-[#ffd8aa] uppercase">
                                        {t('home.highlights.delivery.label')}
                                    </p>
                                    <p className="mt-1 text-lg font-semibold">
                                        {t('home.highlights.delivery.value')}
                                    </p>
                                </div>
                            </div>
                        </div>
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

            <section className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
                <article className="duck-panel p-7 sm:p-8">
                    <p className="duck-kicker">{t('home.story.kicker')}</p>
                    <h2 className="duck-display mt-2 text-3xl text-[#2f1a09] sm:text-4xl">
                        {t('home.story.title')}
                    </h2>
                    <p className="mt-4 max-w-2xl text-sm leading-7 text-[#6b452b] sm:text-base">
                        {t('home.story.desc')}
                    </p>

                    <div className="mt-6 grid gap-4">
                        {storyCards.map((card, index) => {
                            return (
                                <article
                                    key={card.title}
                                    className="duck-soft-card duck-reveal p-5"
                                    style={{
                                        animationDelay: `${140 + index * 110}ms`,
                                    }}
                                >
                                    <h3 className="duck-display text-2xl text-[#341d0b]">
                                        {card.title}
                                    </h3>
                                    <p className="mt-2 text-sm leading-6 text-[#6d492f]">
                                        {card.description}
                                    </p>
                                </article>
                            );
                        })}
                    </div>
                </article>

                <div className="grid gap-4 sm:grid-cols-2">
                    <figure className="duck-soft-card duck-photo-card duck-reveal relative overflow-hidden p-3 sm:col-span-2">
                        <img
                            src={galleryItems[0].src}
                            alt={t('home.imageAlt')}
                            className="duck-kenburns h-[210px] w-full rounded-3xl object-cover sm:h-[250px]"
                        />
                        <figcaption className="duck-glass-chip absolute right-4 bottom-4 left-4 rounded-2xl px-4 py-3 text-sm text-[#fff2e3]">
                            {galleryItems[0].caption}
                        </figcaption>
                    </figure>

                    {galleryItems.slice(1).map((item, index) => {
                        return (
                            <figure
                                key={item.caption}
                                className="duck-soft-card duck-photo-card duck-reveal relative overflow-hidden p-3"
                                style={{
                                    animationDelay: `${180 + index * 120}ms`,
                                }}
                            >
                                <img
                                    src={item.src}
                                    alt={item.caption}
                                    className="duck-kenburns h-[220px] w-full rounded-3xl object-cover"
                                />
                                <figcaption className="duck-glass-chip absolute right-4 bottom-4 left-4 rounded-2xl px-4 py-3 text-sm text-[#fff2e3]">
                                    {item.caption}
                                </figcaption>
                            </figure>
                        );
                    })}
                </div>
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
