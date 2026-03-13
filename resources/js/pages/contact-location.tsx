import { Link } from '@inertiajs/react';

import DuckSiteLayout from '@/components/duck-site-layout';
import { useI18n } from '@/i18n/context';

type ContactCard = {
    title: string;
    value: string;
    detail: string;
    href?: string;
};

const farmAddressUrl = 'https://maps.app.goo.gl/CW45YwZcPjAbgVh19';

const locationPhotoOne =
    'https://commons.wikimedia.org/wiki/Special:FilePath/Cambodia%20Rice%20Fields%20%289728041389%29.jpg';
const locationPhotoTwo =
    'https://commons.wikimedia.org/wiki/Special:FilePath/Cambodia%20Rice%20Fields%20%289728065269%29.jpg';

type WorkHour = {
    day: string;
    hours: string;
};

type LocationFeature = {
    label: string;
    value: string;
};

export default function ContactLocation() {
    const { t } = useI18n();

    const contactCards: ContactCard[] = [
        {
            title: t('contact.card.phone.title'),
            value: t('contact.card.phone.value'),
            detail: t('contact.card.phone.desc'),
        },
        {
            title: t('contact.card.email.title'),
            value: t('contact.card.email.value'),
            detail: t('contact.card.email.desc'),
            href: 'mailto:vanthorngthai31@gmail.com',
        },
        {
            title: t('contact.card.address.title'),
            value: t('contact.card.address.value'),
            detail: t('contact.card.address.desc'),
            href: farmAddressUrl,
        },
    ];

    const workingHours: WorkHour[] = [
        {
            day: t('contact.hours.day1'),
            hours: t('contact.hours.time1'),
        },
        {
            day: t('contact.hours.day2'),
            hours: t('contact.hours.time2'),
        },
        {
            day: t('contact.hours.day3'),
            hours: t('contact.hours.time3'),
        },
    ];

    const locationFeatures: LocationFeature[] = [
        {
            label: t('contact.location.feature.pickup.label'),
            value: t('contact.location.feature.pickup.value'),
        },
        {
            label: t('contact.location.feature.delivery.label'),
            value: t('contact.location.feature.delivery.value'),
        },
        {
            label: t('contact.location.feature.support.label'),
            value: t('contact.location.feature.support.value'),
        },
    ];

    const accessNotes = [
        t('contact.location.access.note1'),
        t('contact.location.access.note2'),
        t('contact.location.access.note3'),
    ];

    return (
        <DuckSiteLayout title={t('nav.contact')}>
            <section className="duck-panel duck-reveal p-7 sm:p-10">
                <p className="duck-kicker">{t('contact.kicker')}</p>
                <h1 className="duck-display mt-3 text-4xl text-[#2f1a09] sm:text-5xl">
                    {t('contact.title')}
                </h1>
                <p className="mt-4 max-w-3xl text-base text-[#6d492f] sm:text-lg">
                    {t('contact.subtitle')}
                </p>
            </section>

            <section className="grid gap-4 md:grid-cols-3">
                {contactCards.map((card, index) => {
                    return (
                        <article
                            key={card.title}
                            className="duck-soft-card duck-reveal p-6"
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

            <section className="grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
                <article className="duck-panel p-6 sm:p-7">
                    <h2 className="duck-display text-3xl text-[#341d0b]">
                        {t('contact.location.title')}
                    </h2>
                    <p className="mt-2 text-sm text-[#6d4a30]">
                        {t('contact.location.label')}{' '}
                        <a
                            href={farmAddressUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="font-semibold text-[#7b4219] underline underline-offset-4"
                        >
                            https://maps.app.goo.gl/CW45YwZcPjAbgVh19
                        </a>
                    </p>

                    <div className="mt-5 grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
                        <figure className="relative overflow-hidden rounded-3xl border border-[#cfb08c] bg-white p-2 shadow-[0_18px_36px_rgba(62,34,11,0.14)]">
                            <img
                                src={locationPhotoOne}
                                alt={t('contact.location.photoAlt1')}
                                className="h-72 w-full rounded-2xl object-cover"
                            />
                            <figcaption className="absolute right-5 bottom-5 left-5 rounded-xl bg-[#2f190be0] px-4 py-2 text-xs font-medium tracking-[0.03em] text-[#f9e8d2] sm:text-sm">
                                {t('contact.location.photoCaption1')}
                            </figcaption>
                        </figure>
                        <div className="grid gap-4">
                            <figure className="relative overflow-hidden rounded-2xl border border-[#cfb08c] bg-white p-2">
                                <img
                                    src={locationPhotoTwo}
                                    alt={t('contact.location.photoAlt2')}
                                    className="h-36 w-full rounded-xl object-cover sm:h-40"
                                />
                                <figcaption className="absolute right-4 bottom-4 left-4 rounded-lg bg-[#2f190bcf] px-3 py-1.5 text-xs text-[#f9e8d2]">
                                    {t('contact.location.photoCaption2')}
                                </figcaption>
                            </figure>

                            <div className="rounded-2xl border border-[#d6bc9d] bg-[#fff6ea] p-4">
                                <p className="text-xs font-semibold tracking-[0.14em] text-[#8b562f] uppercase">
                                    {t('contact.location.access.title')}
                                </p>
                                <ul className="mt-3 space-y-2 text-sm text-[#5f3d25]">
                                    {accessNotes.map((note) => {
                                        return (
                                            <li
                                                key={note}
                                                className="rounded-xl border border-[#e8d4bb] bg-white px-3 py-2"
                                            >
                                                {note}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 grid gap-3 sm:grid-cols-3">
                        {locationFeatures.map((feature) => {
                            return (
                                <div
                                    key={feature.label}
                                    className="rounded-2xl border border-[#dac4a9] bg-[#fffdf8] px-4 py-3"
                                >
                                    <p className="text-[0.72rem] font-semibold tracking-[0.14em] text-[#8d5a33] uppercase">
                                        {feature.label}
                                    </p>
                                    <p className="mt-1 text-sm font-semibold text-[#4a2c16]">
                                        {feature.value}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                    <p className="mt-3 text-xs text-[#7d5332]">
                        {t('contact.location.realPhotoNote')}
                    </p>

                    <a
                        href={farmAddressUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="duck-btn-primary mt-5 inline-block px-5 py-2.5 text-sm"
                    >
                        {t('contact.location.button')}
                    </a>
                </article>

                <article className="duck-panel-dark p-6 text-[#faecda] sm:p-7">
                    <h2 className="duck-display text-3xl">
                        {t('contact.hours.title')}
                    </h2>
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

                    <p className="mt-5 text-sm text-[#f3d2b1]">
                        {t('contact.hours.visitHint')}
                    </p>

                    <Link
                        href="/order-online"
                        className="duck-btn-primary mt-6 inline-block px-5 py-2.5 text-sm"
                    >
                        {t('contact.hours.cta')}
                    </Link>
                </article>
            </section>
        </DuckSiteLayout>
    );
}
