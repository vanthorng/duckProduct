import { Link } from '@inertiajs/react';

import DuckSiteLayout from '@/components/duck-site-layout';

type ContactCard = {
    title: string;
    value: string;
    detail: string;
    href?: string;
};

const farmAddressUrl = 'https://maps.app.goo.gl/CW45YwZcPjAbgVh19';

const contactCards: ContactCard[] = [
    {
        title: 'Phone / Telegram',
        value: '+855 69 866 032, 095855474',
        detail: 'Call or message for order confirmation and delivery support.',
    },
    {
        title: 'Email',
        value: 'vanthorngthai31@gmail.com',
        detail: 'Send wholesale or restaurant inquiries here.',
        href: 'mailto:vanthorngthai31@gmail.com',
    },
    {
        title: 'Farm Address',
        value: 'Open in Google Maps',
        detail: 'Tap to view exact farm location and navigation route.',
        href: farmAddressUrl,
    },
];

const workingHours = [
    { day: 'Monday - Friday', hours: '06:00 AM - 06:00 PM' },
    { day: 'Saturday', hours: '06:30 AM - 05:00 PM' },
    { day: 'Sunday', hours: '08:00 AM - 12:00 PM' },
];

export default function ContactLocation() {
    return (
        <DuckSiteLayout title="Contact / Location">
            <section className="duck-reveal rounded-4xl border border-[#d8c4aa] bg-white/90 p-7 sm:p-10">
                <p className="text-sm font-semibold tracking-[0.2em] text-[#925124] uppercase">
                    Contact / location
                </p>
                <h1 className="duck-display mt-3 text-4xl text-[#2f1a09] sm:text-5xl">
                    Visit the farm or contact us for direct orders.
                </h1>
                <p className="mt-4 max-w-3xl text-base text-[#6d492f] sm:text-lg">
                    Use this page to guide customers to your location, opening
                    schedule, and preferred support channels.
                </p>
            </section>

            <section className="mt-8 grid gap-4 md:grid-cols-3">
                {contactCards.map((card, index) => {
                    return (
                        <article
                            key={card.title}
                            className="duck-reveal rounded-3xl border border-[#dbc7ac] bg-[#fff8ef] p-6"
                            style={{ animationDelay: `${120 + index * 110}ms` }}
                        >
                            <p className="text-xs font-semibold tracking-[0.14em] text-[#996034] uppercase">
                                {card.title}
                            </p>
                            {card.href ? (
                                <a
                                    href={card.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="duck-display mt-3 block text-2xl text-[#3a220c] underline decoration-[#c18858] underline-offset-4"
                                >
                                    {card.value}
                                </a>
                            ) : (
                                <p className="duck-display mt-3 text-2xl text-[#3a220c]">
                                    {card.value}
                                </p>
                            )}
                            <p className="mt-3 text-sm text-[#6f4b31]">
                                {card.detail}
                            </p>
                        </article>
                    );
                })}
            </section>

            <section className="mt-10 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
                <article className="rounded-4xl border border-[#d9c5aa] bg-white p-6 sm:p-7">
                    <h2 className="duck-display text-3xl text-[#341d0b]">
                        Farm location
                    </h2>
                    <p className="mt-2 text-sm text-[#6d4a30]">
                        Farm Address :{' '}
                        <a
                            href={farmAddressUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="font-semibold text-[#7b4219] underline underline-offset-4"
                        >
                            https://maps.app.goo.gl/CW45YwZcPjAbgVh19
                        </a>
                    </p>

                    <div className="duck-drift mt-5 overflow-hidden rounded-3xl border border-[#cfb08c] bg-[linear-gradient(145deg,#f5e5d1,#fff8ee)] p-3">
                        <img
                            src="/images/cambodia-duck-farm.svg"
                            alt="Cambodia-inspired duck farm illustration"
                            className="h-full w-full rounded-2xl object-cover"
                        />
                    </div>

                    <a
                        href={farmAddressUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-5 inline-block rounded-full bg-[#3f200a] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#5f3517]"
                    >
                        Open farm address in Google Maps
                    </a>
                </article>

                <article className="rounded-4xl border border-[#d9c5aa] bg-[#2f1708] p-6 text-[#faecda] sm:p-7">
                    <h2 className="duck-display text-3xl">Working hours</h2>
                    <ul className="mt-4 space-y-3">
                        {workingHours.map((slot, index) => {
                            return (
                                <li
                                    key={slot.day}
                                    className="duck-reveal flex items-center justify-between rounded-2xl border border-[#664427] bg-[#3d1f0d] px-4 py-3 text-sm"
                                    style={{
                                        animationDelay: `${130 + index * 100}ms`,
                                    }}
                                >
                                    <span>{slot.day}</span>
                                    <span className="font-semibold text-[#f6c58c]">
                                        {slot.hours}
                                    </span>
                                </li>
                            );
                        })}
                    </ul>

                    <Link
                        href="/order-online"
                        className="mt-6 inline-block rounded-full bg-[#f59f00] px-5 py-2.5 text-sm font-semibold text-[#2f1708] hover:bg-[#ffb731]"
                    >
                        Continue to online order
                    </Link>
                </article>
            </section>
        </DuckSiteLayout>
    );
}
