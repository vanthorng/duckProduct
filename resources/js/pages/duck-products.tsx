import { Link } from '@inertiajs/react';

import DuckSiteLayout from '@/components/duck-site-layout';

type Product = {
    category: string;
    name: string;
    description: string;
    packaging: string;
    price: string;
};

const products: Product[] = [
    {
        category: 'Eggs',
        name: 'Fresh Duck Eggs',
        description:
            'Cleaned and graded eggs with rich yolk color, ideal for home cooking and baking.',
        packaging: 'Tray of 30 eggs / bulk crate options',
        price: '$4.80 - $5.60 per tray',
    },
    {
        category: 'Meat',
        name: 'Premium Duck Meat Cuts',
        description:
            'Breast, thigh, and whole duck options prepared with strict cold-chain handling.',
        packaging: '1kg vacuum pack / whole duck by weight',
        price: '$7.50 - $11.20 per kg',
    },
    {
        category: 'Roasted',
        name: 'House Roasted Duck',
        description:
            'Slow roasted with a savory glaze and aromatic herbs, ready for immediate serving.',
        packaging: 'Whole roasted duck / half cut set',
        price: '$16.00 - $24.00 per duck',
    },
    {
        category: 'Fertilizer',
        name: 'Duck Droppings Herb (Sack)',
        description:
            'Fermented duck droppings herb fertilizer for vegetables, herbs, and crop enrichment.',
        packaging: 'Sack 25kg / Sack 50kg',
        price: '$6.00 - $10.00 per sack',
    },
];

const whyChooseUs: string[] = [
    'Daily freshness checks before packing.',
    'Reliable stock for repeat business customers.',
    'Simple wholesale pricing for larger volumes.',
    'Fast support via phone, chat, and online form.',
];

export default function DuckProducts() {
    return (
        <DuckSiteLayout title="Duck Products">
            <section className="duck-reveal rounded-4xl border border-[#d8c5ab] bg-white/90 p-7 sm:p-10">
                <p className="text-sm font-semibold tracking-[0.2em] text-[#925124] uppercase">
                    Duck products
                </p>
                <h1 className="duck-display mt-3 text-4xl text-[#2f1a09] sm:text-5xl">
                    Eggs, meat, roasted duck, and herb sacks for daily demand.
                </h1>
                <p className="mt-4 max-w-3xl text-base text-[#6d492f] sm:text-lg">
                    Choose from retail-ready packs or wholesale quantities.
                    Every order is prepared with clear labels, handling dates,
                    and practical packaging options.
                </p>
            </section>

            <section className="mt-8 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
                <article className="duck-reveal rounded-4xl border border-[#ddc9ae] bg-[#fff9f1] p-6">
                    <h2 className="duck-display text-3xl text-[#3a220d] sm:text-4xl">
                        New product available
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-[#6f4d34]">
                        Duck Droppings Herb is now listed and sold by sack for
                        farm and garden use. Available in 25kg and 50kg sacks
                        for small growers or wholesale buyers.
                    </p>
                </article>
                <figure className="duck-reveal overflow-hidden rounded-4xl border border-[#ddc9ae] bg-white p-3">
                    <img
                        src="/images/cambodia-market-sacks.svg"
                        alt="Cambodia-style market supply sacks"
                        className="h-full w-full rounded-3xl object-cover"
                    />
                </figure>
            </section>

            <section className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {products.map((product, index) => {
                    return (
                        <article
                            key={product.name}
                            className="duck-reveal rounded-3xl border border-[#ddc9ae] bg-[#fff9f1] p-6"
                            style={{ animationDelay: `${140 + index * 130}ms` }}
                        >
                            <p className="text-xs font-semibold tracking-[0.14em] text-[#9f5f32] uppercase">
                                {product.category}
                            </p>
                            <h2 className="duck-display mt-2 text-2xl text-[#3a220d]">
                                {product.name}
                            </h2>
                            <p className="mt-3 text-sm leading-6 text-[#6f4d34]">
                                {product.description}
                            </p>
                            <p className="mt-4 text-sm font-medium text-[#8e562e]">
                                {product.packaging}
                            </p>
                            <p className="mt-2 text-sm font-semibold text-[#5c3418]">
                                {product.price}
                            </p>
                        </article>
                    );
                })}
            </section>

            <section className="mt-10 rounded-4xl border border-[#d8c5ab] bg-[#2f1708] p-7 text-[#f8ead8] sm:p-8">
                <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <p className="text-sm font-semibold tracking-[0.16em] text-[#f6c48b] uppercase">
                            Why buyers choose us
                        </p>
                        <h2 className="duck-display mt-2 text-3xl sm:text-4xl">
                            Built for households and food businesses
                        </h2>
                    </div>
                    <Link
                        href="/contact-location"
                        className="w-fit rounded-full border border-[#f6c48b] px-4 py-2 text-sm font-semibold text-[#f9d8b0] hover:bg-[#4a2712]"
                    >
                        Talk to sales
                    </Link>
                </div>

                <ul className="grid gap-3 md:grid-cols-2">
                    {whyChooseUs.map((point, index) => {
                        return (
                            <li
                                key={point}
                                className="duck-reveal rounded-2xl border border-[#654426] bg-[#3b1f0d] px-4 py-3 text-sm"
                                style={{
                                    animationDelay: `${120 + index * 110}ms`,
                                }}
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
