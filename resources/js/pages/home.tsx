import { Link } from '@inertiajs/react';

import DuckSiteLayout from '@/components/duck-site-layout';

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

const highlights: Highlight[] = [
    {
        label: 'Daily egg output',
        value: '1,200+',
        description: 'Collected and quality-checked every morning.',
    },
    {
        label: 'Farm area',
        value: '32 hectares',
        description: 'Natural ponds and grazing fields for healthier ducks.',
    },
    {
        label: 'Delivery window',
        value: '2-4 hours',
        description: 'Fast local delivery for fresh and roasted products.',
    },
];

const featuredProducts: FeaturedProduct[] = [
    {
        name: 'Fresh Duck Eggs',
        description:
            'Large, clean, and rich eggs packed by tray for households and restaurants.',
        price: 'From $4.80 / tray',
    },
    {
        name: 'Premium Duck Meat',
        description:
            'Vacuum-packed cuts with traceable batch dates for reliable kitchen prep.',
        price: 'From $7.50 / kg',
    },
    {
        name: 'Roasted Signature Duck',
        description:
            'Slow-roasted with house spice blend, ready for family meals and events.',
        price: 'From $16.00 / duck',
    },
    {
        name: 'Duck Droppings Herb (Sack)',
        description:
            'Nutrient-rich duck droppings herb fertilizer for vegetable and crop growth.',
        price: 'From $6.00 / sack',
    },
];

export default function Home() {
    return (
        <DuckSiteLayout title="Home">
            <section className="duck-reveal relative overflow-hidden rounded-4xl border border-[#d9c4a8] bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.95),rgba(255,245,230,0.85))] p-7 shadow-[0_20px_60px_rgba(71,35,8,0.12)] sm:p-10">
                <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
                    <div>
                        <p className="text-sm font-semibold tracking-[0.2em] text-[#9d5c2f] uppercase">
                            Cambodia-style farm-to-table example website
                        </p>
                        <h1 className="duck-display mt-3 max-w-3xl text-4xl leading-tight text-[#2f1a09] sm:text-5xl">
                            Reliable duck products from our farm to your
                            kitchen.
                        </h1>
                        <p className="mt-4 max-w-2xl text-base text-[#6c472c] sm:text-lg">
                            Discover high-quality eggs, fresh meat, roasted
                            duck, and duck droppings herb sacks crafted for
                            homes, food stalls, and farms.
                        </p>

                        <div className="mt-7 flex flex-wrap gap-3">
                            <Link
                                href="/order-online"
                                className="rounded-full bg-[#3f200a] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#5a2f11]"
                            >
                                Order Online
                            </Link>
                            <Link
                                href="/duck-products"
                                className="rounded-full border border-[#b17d50] bg-white px-6 py-3 text-sm font-semibold text-[#5d3418] transition-colors hover:bg-[#f9ecdc]"
                            >
                                View Products
                            </Link>
                        </div>
                    </div>

                    <figure className="overflow-hidden rounded-3xl border border-[#d8bf9f] bg-white p-3 shadow-[0_14px_35px_rgba(75,41,12,0.14)]">
                        <img
                            src="/images/cambodia-duck-farm.svg"
                            alt="Cambodia countryside duck farm illustration"
                            className="h-full w-full rounded-2xl object-cover"
                        />
                    </figure>
                </div>
            </section>

            <section className="mt-8 grid gap-4 md:grid-cols-3">
                {highlights.map((highlight, index) => {
                    return (
                        <article
                            key={highlight.label}
                            className="duck-reveal rounded-3xl border border-[#dbc6ab] bg-white/90 p-5"
                            style={{ animationDelay: `${140 + index * 120}ms` }}
                        >
                            <p className="text-sm font-medium text-[#8e562e]">
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

            <section className="mt-10 rounded-4xl border border-[#dac5aa] bg-[#fff8ef] p-7 sm:p-8">
                <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <p className="text-sm font-semibold tracking-[0.16em] text-[#9d5c2f] uppercase">
                            Duck products
                        </p>
                        <h2 className="duck-display mt-2 text-3xl text-[#2f1a09] sm:text-4xl">
                            Best sellers for daily demand
                        </h2>
                    </div>
                    <Link
                        href="/duck-products"
                        className="w-fit rounded-full border border-[#bb8a5e] px-4 py-2 text-sm font-semibold text-[#643818] hover:bg-[#f4e3cf]"
                    >
                        Explore all products
                    </Link>
                </div>

                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                    {featuredProducts.map((product, index) => {
                        return (
                            <article
                                key={product.name}
                                className="duck-reveal rounded-3xl border border-[#e4d0b6] bg-white p-5"
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
