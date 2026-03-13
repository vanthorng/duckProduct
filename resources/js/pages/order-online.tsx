import DuckSiteLayout from '@/components/duck-site-layout';
import { useI18n } from '@/i18n/context';

type OrderStep = {
    title: string;
    detail: string;
};

export default function OrderOnline() {
    const { t } = useI18n();

    const orderSteps: OrderStep[] = [
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

    return (
        <DuckSiteLayout title={t('nav.order')}>
            <section className="duck-panel duck-reveal p-7 sm:p-10">
                <p className="duck-kicker">{t('order.kicker')}</p>
                <h1 className="duck-display mt-3 text-4xl text-[#2f1a09] sm:text-5xl">
                    {t('order.title')}
                </h1>
                <p className="mt-4 max-w-3xl text-base text-[#6d492f] sm:text-lg">
                    {t('order.subtitle')}
                </p>
            </section>

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

            <section className="duck-panel p-7 sm:p-8">
                <h2 className="duck-display text-3xl text-[#321b0a] sm:text-4xl">
                    {t('order.form.title')}
                </h2>
                <p className="mt-2 text-sm text-[#6c492f]">
                    {t('order.form.subtitle')}
                </p>

                <form
                    className="mt-6 grid gap-4 md:grid-cols-2"
                    onSubmit={(event) => event.preventDefault()}
                >
                    <label className="flex flex-col gap-1 text-sm text-[#5f3b20]">
                        {t('order.form.name')}
                        <input
                            type="text"
                            placeholder={t('order.form.namePlaceholder')}
                            className="duck-field"
                        />
                    </label>

                    <label className="flex flex-col gap-1 text-sm text-[#5f3b20]">
                        {t('order.form.phone')}
                        <input
                            type="tel"
                            placeholder={t('order.form.phonePlaceholder')}
                            className="duck-field"
                        />
                    </label>

                    <label className="flex flex-col gap-1 text-sm text-[#5f3b20]">
                        {t('order.form.productType')}
                        <select className="duck-field">
                            <option>{t('order.form.productOption1')}</option>
                            <option>{t('order.form.productOption2')}</option>
                            <option>{t('order.form.productOption3')}</option>
                            <option>{t('order.form.productOption4')}</option>
                        </select>
                    </label>

                    <label className="flex flex-col gap-1 text-sm text-[#5f3b20]">
                        {t('order.form.quantity')}
                        <input
                            type="text"
                            placeholder={t('order.form.quantityPlaceholder')}
                            className="duck-field"
                        />
                    </label>

                    <label className="flex flex-col gap-1 text-sm text-[#5f3b20] md:col-span-2">
                        {t('order.form.notes')}
                        <textarea
                            rows={4}
                            placeholder={t('order.form.notesPlaceholder')}
                            className="duck-field"
                        />
                    </label>

                    <button
                        type="submit"
                        className="duck-btn-primary w-full px-5 py-3 text-sm md:col-span-2"
                    >
                        {t('order.form.submit')}
                    </button>
                </form>
            </section>
        </DuckSiteLayout>
    );
}
