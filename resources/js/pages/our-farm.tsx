import { Link } from '@inertiajs/react';

import DuckSiteLayout from '@/components/duck-site-layout';
import { useI18n } from '@/i18n/context';

type FarmPractice = {
    title: string;
    detail: string;
};

type TimelineItem = {
    period: string;
    task: string;
};

const farmPhoto = '/images/our-farm-real.jpg';

export default function OurFarm() {
    const { t } = useI18n();

    const farmPractices: FarmPractice[] = [
        {
            title: t('farm.practice.ponds.title'),
            detail: t('farm.practice.ponds.desc'),
        },
        {
            title: t('farm.practice.traceability.title'),
            detail: t('farm.practice.traceability.desc'),
        },
        {
            title: t('farm.practice.feed.title'),
            detail: t('farm.practice.feed.desc'),
        },
        {
            title: t('farm.practice.reuse.title'),
            detail: t('farm.practice.reuse.desc'),
        },
    ];

    const timeline: TimelineItem[] = [
        {
            period: t('farm.routine.step1.time'),
            task: t('farm.routine.step1.task'),
        },
        {
            period: t('farm.routine.step2.time'),
            task: t('farm.routine.step2.task'),
        },
        {
            period: t('farm.routine.step3.time'),
            task: t('farm.routine.step3.task'),
        },
        {
            period: t('farm.routine.step4.time'),
            task: t('farm.routine.step4.task'),
        },
    ];

    return (
        <DuckSiteLayout title={t('nav.ourFarm')}>
            <section className="duck-panel duck-reveal p-7 sm:p-10">
                <p className="duck-kicker">{t('farm.kicker')}</p>
                <h1 className="duck-display mt-3 text-4xl text-[#2f1a09] sm:text-5xl">
                    {t('farm.title')}
                </h1>
                <p className="mt-4 max-w-3xl text-base text-[#6b452b] sm:text-lg">
                    {t('farm.subtitle')}
                </p>
            </section>

            <section className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
                <figure className="duck-soft-card duck-photo-card duck-reveal relative overflow-hidden p-3">
                    <img
                        src={farmPhoto}
                        alt={t('farm.imageAlt')}
                        className="duck-kenburns h-[320px] w-full rounded-3xl object-cover sm:h-[420px]"
                    />
                    <div className="duck-glass-chip duck-fade-up absolute right-5 bottom-5 left-5 rounded-2xl px-4 py-4 text-[#fff2e3]">
                        <p className="text-[0.68rem] font-semibold tracking-[0.16em] text-[#ffd8aa] uppercase">
                            {t('farm.sceneKicker')}
                        </p>
                        <p className="mt-2 text-lg font-semibold sm:text-xl">
                            {t('farm.practice.ponds.title')}
                        </p>
                        <p className="mt-2 text-sm text-[#f6dcc2]">
                            {t('farm.practice.ponds.desc')}
                        </p>
                    </div>
                </figure>

                <article className="duck-panel duck-reveal p-6 sm:p-7">
                    <p className="duck-kicker">{t('farm.sceneKicker')}</p>
                    <h2 className="duck-display mt-2 text-3xl text-[#3b220d] sm:text-4xl">
                        {t('farm.sceneTitle')}
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-[#6f4b31]">
                        {t('farm.sceneDesc')}
                    </p>
                </article>
            </section>

            <section className="grid gap-4 md:grid-cols-2">
                {farmPractices.map((practice, index) => {
                    return (
                        <article
                            key={practice.title}
                            className="duck-soft-card duck-reveal p-6"
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

            <section className="duck-panel-dark p-7 text-[#f8ead7] sm:p-8">
                <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <p className="duck-kicker text-[#f8c68d]">
                            {t('farm.routine.kicker')}
                        </p>
                        <h2 className="duck-display mt-2 text-3xl sm:text-4xl">
                            {t('farm.routine.title')}
                        </h2>
                    </div>
                    <Link
                        href="/order-online"
                        className="duck-btn-primary w-fit px-4 py-2 text-sm"
                    >
                        {t('farm.routine.cta')}
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
