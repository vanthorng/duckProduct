import { Head, Link, usePage } from '@inertiajs/react';
import type { PropsWithChildren } from 'react';

import { cn } from '@/lib/utils';

type DuckSiteLayoutProps = PropsWithChildren<{
    title: string;
}>;

type NavigationItem = {
    href: string;
    label: string;
};

const navigationItems: NavigationItem[] = [
    { href: '/', label: 'Home' },
    { href: '/our-farm', label: 'Our Farm' },
    { href: '/duck-products', label: 'Duck Products' },
    { href: '/order-online', label: 'Order Online' },
    { href: '/contact-location', label: 'Contact / Location' },
];

export default function DuckSiteLayout({
    children,
    title,
}: DuckSiteLayoutProps) {
    const { url } = usePage();

    return (
        <>
            <Head title={title}>
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=ibm-plex-sans:400,500,600,700|playfair-display:500,600,700"
                    rel="stylesheet"
                />
            </Head>

            <div className="duck-body relative min-h-screen overflow-hidden bg-[#f5f0e6] text-[#26190f]">
                <div className="duck-drift pointer-events-none absolute top-[-140px] right-[-120px] h-80 w-80 rounded-full bg-[#f59f00]/25 blur-3xl" />
                <div className="duck-rise pointer-events-none absolute bottom-[-100px] left-[-90px] h-72 w-72 rounded-full bg-[#bf4d00]/18 blur-3xl" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.8),transparent_48%)]" />

                <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 py-6 sm:px-6 lg:px-10">
                    <header className="mb-8 rounded-3xl border border-[#d6c5ab] bg-white/80 p-4 backdrop-blur-lg sm:p-6">
                        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                            <Link href="/" className="w-fit">
                                <p className="duck-display text-2xl text-[#3f200a] sm:text-3xl">
                                    Duck Product Co.
                                </p>
                                <p className="text-sm tracking-[0.12em] text-[#8d5a35] uppercase">
                                    Farm fresh eggs, meat, and roasted duck
                                </p>
                            </Link>

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
                                                'rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200',
                                                isActive
                                                    ? 'bg-[#3f200a] text-white'
                                                    : 'bg-[#f5ebe0] text-[#5a3417] hover:bg-[#ebdcc6]',
                                            )}
                                        >
                                            {item.label}
                                        </Link>
                                    );
                                })}
                            </nav>
                        </div>
                    </header>

                    <main className="flex-1">{children}</main>

                    <footer className="mt-12 rounded-3xl border border-[#d6c5ab] bg-[#2e1506] p-6 text-[#f8ecde] sm:p-8">
                        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                            <div>
                                <p className="duck-display text-2xl">
                                    Ready for your next order?
                                </p>
                                <p className="mt-1 text-sm text-[#f4d6b8]">
                                    Same-day farm pickup and island-wide
                                    delivery for selected zones.
                                </p>
                            </div>

                            <Link
                                href="/order-online"
                                className="w-fit rounded-full bg-[#f59f00] px-5 py-2.5 text-sm font-semibold text-[#2b1606] transition-colors hover:bg-[#ffb326]"
                            >
                                Start an Online Order
                            </Link>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );
}
