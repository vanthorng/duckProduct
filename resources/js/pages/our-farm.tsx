import { Link } from '@inertiajs/react';

import DuckSiteLayout from '@/components/duck-site-layout';

type FarmPractice = {
    title: string;
    detail: string;
};

const farmPractices: FarmPractice[] = [
    {
        title: 'Healthy open ponds',
        detail: 'Ducks spend their day in rotating pond areas to keep movement natural and reduce stress.',
    },
    {
        title: 'Batch traceability',
        detail: 'Every egg tray and meat pack is labeled by date and batch code for confidence and safety.',
    },
    {
        title: 'Feed quality control',
        detail: 'Balanced feed formulation is checked every week for stable nutrition and growth.',
    },
    {
        title: 'Responsible waste reuse',
        detail: 'Organic byproducts are converted to fertilizer for partner vegetable farms nearby.',
    },
];

const timeline = [
    { period: '05:30 AM', task: 'Egg collection and first sorting' },
    { period: '08:00 AM', task: 'Farm health checks and feed cycle' },
    { period: '11:30 AM', task: 'Product prep for online orders' },
    { period: '03:00 PM', task: 'Roasting, packing, and dispatch' },
];

export default function OurFarm() {
    return (
        <DuckSiteLayout title="Our Farm">
            <section className="duck-reveal rounded-4xl border border-[#d7c2a6] bg-white/90 p-7 sm:p-10">
                <p className="text-sm font-semibold tracking-[0.2em] text-[#925124] uppercase">
                    Our farm
                </p>
                <h1 className="duck-display mt-3 text-4xl text-[#2f1a09] sm:text-5xl">
                    Built for quality, consistency, and responsible growth.
                </h1>
                <p className="mt-4 max-w-3xl text-base text-[#6b452b] sm:text-lg">
                    Our farm combines open-water raising, strict hygiene
                    routines, and practical technology so every duck product
                    stays fresh and reliable from source to sale.
                </p>
            </section>

            <section className="mt-8 grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
                <figure className="duck-reveal overflow-hidden rounded-4xl border border-[#dcc8ad] bg-white p-3">
                    <img
                        src="/images/cambodia-market-sacks.svg"
                        alt="Cambodia market style duck farm supply sacks"
                        className="h-full w-full rounded-3xl object-cover"
                    />
                </figure>

                <article className="duck-reveal rounded-4xl border border-[#dcc8ad] bg-[#fff8ef] p-6 sm:p-7">
                    <p className="text-sm font-semibold tracking-[0.16em] text-[#965729] uppercase">
                        Cambodia farm scene
                    </p>
                    <h2 className="duck-display mt-2 text-3xl text-[#3b220d] sm:text-4xl">
                        Local farming style, modern quality standards
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-[#6f4b31]">
                        This visual section reflects a Cambodia-inspired duck
                        farm and market supply setting, including duck droppings
                        herb sacks used by growers. It highlights how we serve
                        both food customers and farming customers.
                    </p>
                </article>
            </section>

            <section className="mt-8 grid gap-4 md:grid-cols-2">
                {farmPractices.map((practice, index) => {
                    return (
                        <article
                            key={practice.title}
                            className="duck-reveal rounded-3xl border border-[#dcc8ad] bg-[#fff8ef] p-6"
                            style={{ animationDelay: `${120 + index * 100}ms` }}
                        >
                            <h2 className="duck-display text-2xl text-[#3b220d]">
                                {practice.title}
                            </h2>
                            <p className="mt-3 text-sm leading-6 text-[#6f4b31]">
                                {practice.detail}
                            </p>
                        </article>
                    );
                })}
            </section>

            <section className="mt-10 rounded-4xl border border-[#d8c3a8] bg-[#2e1506] p-7 text-[#f8ead7] sm:p-8">
                <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <p className="text-sm font-semibold tracking-[0.16em] text-[#f8c68d] uppercase">
                            Daily routine
                        </p>
                        <h2 className="duck-display mt-2 text-3xl sm:text-4xl">
                            How the day flows
                        </h2>
                    </div>
                    <Link
                        href="/order-online"
                        className="w-fit rounded-full bg-[#f59f00] px-4 py-2 text-sm font-semibold text-[#2e1707] hover:bg-[#ffb732]"
                    >
                        Book your order slot
                    </Link>
                </div>

                <div className="grid gap-3 md:grid-cols-4">
                    {timeline.map((item, index) => {
                        return (
                            <article
                                key={item.period}
                                className="duck-reveal rounded-2xl border border-[#634123] bg-[#3a1d0b] p-4"
                                style={{
                                    animationDelay: `${140 + index * 120}ms`,
                                }}
                            >
                                <p className="text-sm font-semibold text-[#f8c68d]">
                                    {item.period}
                                </p>
                                <p className="mt-2 text-sm text-[#f8ead7]">
                                    {item.task}
                                </p>
                            </article>
                        );
                    })}
                </div>
            </section>
        </DuckSiteLayout>
    );
}
