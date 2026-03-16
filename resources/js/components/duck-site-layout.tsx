import { Head, Link, usePage } from '@inertiajs/react';
import type { PropsWithChildren } from 'react';

import QuickContactActions from '@/components/quick-contact-actions';
import { useI18n } from '@/i18n/context';
import { cn } from '@/lib/utils';
import { contactLocation, duckProducts, home, orderOnline, ourFarm } from '@/routes';
import type { Site } from '@/types';

type DuckSiteLayoutProps = PropsWithChildren<{
    title: string;
    description?: string;
}>;

type NavigationItem = {
    href: string;
    label: string;
};

export default function DuckSiteLayout({
    children,
    title,
    description,
}: DuckSiteLayoutProps) {
    const { url, props } = usePage<{ site: Site }>();
    const { locale, setLocale, t } = useI18n();
    const { site } = props;

    const navigationItems: NavigationItem[] = [
        { href: home.url(), label: t('nav.home') },
        { href: ourFarm.url(), label: t('nav.ourFarm') },
        { href: duckProducts.url(), label: t('nav.products') },
        { href: orderOnline.url(), label: t('nav.order') },
        { href: contactLocation.url(), label: t('nav.contact') },
    ];

    const localBusinessSchema = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: site.businessName,
        url: site.appUrl,
        telephone: site.primaryPhone,
        email: site.salesEmail,
        areaServed: site.serviceZone,
        hasMap: site.mapUrl,
        sameAs: [site.telegramUrl],
    };

    return (
        <>
            <Head title={title}>
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=ibm-plex-sans:400,500,600,700|noto-sans-khmer:400,500,600,700|playfair-display:500,600,700"
                    rel="stylesheet"
                />
                {description ? (
                    <>
                        <meta name="description" content={description} />
                        <meta property="og:title" content={`${title} - ${site.businessName}`} />
                        <meta property="og:description" content={description} />
                    </>
                ) : null}
                <meta property="og:type" content="website" />
                <meta name="robots" content="index,follow" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(localBusinessSchema),
                    }}
                />
            </Head>

            <div
                className={cn(
                    'duck-body relative min-h-screen overflow-hidden bg-[#f5f0e6] text-[#26190f]',
                    locale === 'km' && 'duck-khmer',
                )}
            >
                <div className="duck-drift pointer-events-none absolute top-[-140px] right-[-120px] h-80 w-80 rounded-full bg-[#f59f00]/25 blur-3xl" />
                <div className="duck-rise pointer-events-none absolute bottom-[-100px] left-[-90px] h-72 w-72 rounded-full bg-[#bf4d00]/18 blur-3xl" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.8),transparent_48%)]" />

                <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-10">
                    <div className="mb-4 flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-[#d8c6ac] bg-white/75 px-4 py-2 text-xs text-[#6e4326] backdrop-blur-sm sm:text-sm">
                        <span>
                            {t('layout.phoneLabel')}: <strong>{site.phoneDisplay}</strong>
                        </span>
                        <span>
                            {t('layout.emailLabel')}: <strong>{site.salesEmail}</strong>
                        </span>
                    </div>

                    <header className="mb-5 rounded-[2rem] border border-[#d6c5ab] bg-white/85 p-4 shadow-[0_18px_42px_rgba(78,39,12,0.12)] backdrop-blur-lg sm:p-6">
                        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                            <Link href={home.url()} className="w-fit">
                                <p className="duck-display text-2xl text-[#3f200a] sm:text-3xl">
                                    {t('layout.brand')}
                                </p>
                                <p className="text-xs tracking-[0.13em] text-[#8d5a35] uppercase sm:text-sm">
                                    {t('layout.tagline')}
                                </p>
                            </Link>

                            <div className="flex flex-col gap-3 lg:items-end">
                                <div className="flex items-center gap-2">
                                    <span className="text-xs font-semibold text-[#7a4b2a] sm:text-sm">
                                        {t('meta.language')}:
                                    </span>
                                    <button
                                        type="button"
                                        onClick={() => setLocale('en')}
                                        className={cn(
                                            'rounded-full px-3 py-1.5 text-xs font-semibold transition-colors sm:text-sm',
                                            locale === 'en'
                                                ? 'bg-[#3f200a] text-white'
                                                : 'bg-[#f7ede1] text-[#5a3417] hover:bg-[#ead8c1]',
                                        )}
                                    >
                                        {t('meta.english')}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setLocale('km')}
                                        className={cn(
                                            'rounded-full px-3 py-1.5 text-xs font-semibold transition-colors sm:text-sm',
                                            locale === 'km'
                                                ? 'bg-[#3f200a] text-white'
                                                : 'bg-[#f7ede1] text-[#5a3417] hover:bg-[#ead8c1]',
                                        )}
                                    >
                                        {t('meta.khmer')}
                                    </button>
                                </div>

                                <nav className="flex flex-wrap gap-2">
                                    {navigationItems.map((item) => {
                                        const isActive =
                                            item.href === '/'
                                                ? url === '/'
                                                : url.startsWith(item.href);

                                        return (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                className={cn(
                                                    'rounded-full px-4 py-2 text-sm font-medium transition-all duration-200',
                                                    isActive
                                                        ? 'bg-[#3f200a] text-white shadow-[0_8px_18px_rgba(43,22,6,0.25)]'
                                                        : 'bg-[#f7ede1] text-[#5a3417] hover:bg-[#ead8c1]',
                                                )}
                                            >
                                                {item.label}
                                            </Link>
                                        );
                                    })}
                                </nav>
                            </div>
                        </div>
                    </header>

                    <QuickContactActions className="mb-8" />

                    <main className="flex-1 space-y-8">{children}</main>

                    <footer className="duck-panel-dark mt-12 p-6 text-[#f8ecde] sm:p-8">
                        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
                            <div>
                                <p className="duck-display text-2xl sm:text-3xl">
                                    {t('layout.footerTitle')}
                                </p>
                                <p className="mt-2 text-sm text-[#f4d6b8]">
                                    {t('layout.footerSubtitle')}
                                </p>
                                <div className="mt-4 flex flex-wrap gap-2 text-xs text-[#f6c48d] sm:text-sm">
                                    <span>{t('layout.footerTag1')}</span>
                                    <span>{t('layout.footerTag2')}</span>
                                    <span>{t('layout.footerTag3')}</span>
                                </div>
                            </div>

                            <div className="flex flex-col items-start gap-3 lg:items-end">
                                <Link
                                    href={orderOnline.url()}
                                    className="duck-btn-primary px-5 py-2.5 text-sm text-[#fff]"
                                >
                                    {t('layout.footerCtaOrder')}
                                </Link>
                                <Link
                                    href={contactLocation.url()}
                                    className="duck-btn-secondary px-5 py-2.5 text-sm text-[#f8dec2]"
                                >
                                    {t('layout.footerCtaContact')}
                                </Link>
                            </div>
                        </div>

                        <QuickContactActions tone="dark" compact className="mt-6" />
                    </footer>
                </div>
            </div>
        </>
    );
}