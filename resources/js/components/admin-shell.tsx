import { Head, Link } from '@inertiajs/react';
import type { PropsWithChildren, ReactNode } from 'react';

import { useI18n } from '@/i18n/context';
import { cn } from '@/lib/utils';
import { home } from '@/routes';

type AdminShellProps = PropsWithChildren<{
    title: string;
    description: string;
    actions?: ReactNode;
}>;

export default function AdminShell({
    children,
    title,
    description,
    actions,
}: AdminShellProps) {
    const { locale, setLocale, t } = useI18n();

    return (
        <>
            <Head title={title}>
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=ibm-plex-sans:400,500,600,700|noto-sans-khmer:400,500,600,700|playfair-display:500,600,700"
                    rel="stylesheet"
                />
                <meta name="description" content={description} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:type" content="website" />
                <meta name="robots" content="noindex,nofollow" />
            </Head>

            <div
                className={cn(
                    'duck-body min-h-screen bg-[#f3ede2] px-4 py-6 text-[#26190f] sm:px-6 lg:px-8',
                    locale === 'km' && 'duck-khmer',
                )}
            >
                <div className="mx-auto max-w-7xl space-y-6">
                    <header className="duck-panel p-5 sm:p-6">
                        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                            <div>
                                <Link
                                    href={home.url()}
                                    className="text-xs font-semibold tracking-[0.14em] text-[#8f562f] uppercase"
                                >
                                    {t('nav.home')}
                                </Link>
                                <h1 className="duck-display mt-3 text-3xl text-[#341d0b] sm:text-4xl">
                                    {title}
                                </h1>
                                <p className="mt-2 max-w-3xl text-sm leading-6 text-[#6d492f] sm:text-base">
                                    {description}
                                </p>
                            </div>

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

                                {actions ? <div className="flex flex-wrap gap-3">{actions}</div> : null}
                            </div>
                        </div>
                    </header>

                    {children}
                </div>
            </div>
        </>
    );
}