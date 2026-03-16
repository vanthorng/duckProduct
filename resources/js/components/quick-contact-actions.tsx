import { usePage } from '@inertiajs/react';

import { cn } from '@/lib/utils';
import type { Site } from '@/types';

type QuickContactActionsProps = {
    className?: string;
    tone?: 'light' | 'dark';
    compact?: boolean;
};

function phoneHref(phone: string): string {
    return `tel:${phone.replace(/[^+\d]/g, '')}`;
}

export default function QuickContactActions({
    className,
    tone = 'light',
    compact = false,
}: QuickContactActionsProps) {
    const { site } = usePage<{ site: Site }>().props;

    const containerClassName =
        tone === 'dark'
            ? 'border border-[#704625] bg-[#2f1708] text-[#f8ead7]'
            : 'border border-[#d8c6ac] bg-white/88 text-[#3d220d]';

    const secondaryClassName =
        tone === 'dark'
            ? 'border border-[#7a5030] bg-[#41210d] text-[#f7d6b1] hover:bg-[#57301a]'
            : 'border border-[#c28f63] bg-[#fff8ef] text-[#6a3d1e] hover:bg-[#f4e3cf]';

    const actions = [
        {
            href: phoneHref(site.primaryPhone),
            label: 'Call now',
            target: undefined,
        },
        {
            href: site.telegramUrl,
            label: 'Telegram order',
            target: '_blank',
        },
        {
            href: site.mapUrl,
            label: 'Open Google Maps',
            target: '_blank',
        },
    ];

    return (
        <section
            className={cn(
                'rounded-[1.7rem] shadow-[0_18px_36px_rgba(62,34,11,0.12)]',
                compact ? 'p-4 sm:p-5' : 'p-5 sm:p-6',
                containerClassName,
                className,
            )}
        >
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                    <p className="text-[0.72rem] font-semibold tracking-[0.16em] uppercase text-[#9b6034]">
                        Fast order actions
                    </p>
                    <p className="mt-2 text-sm leading-6 sm:text-base">
                        Reach the farm sales contact directly for pickup timing, delivery confirmation, or urgent stock checks.
                    </p>
                    <p className="mt-2 text-xs text-[#8a5d3a] sm:text-sm">
                        Service zone: {site.serviceZone} | Response hours: {site.responseHours}
                    </p>
                </div>

                <div className="flex flex-wrap gap-3">
                    {actions.map((action) => {
                        return (
                            <a
                                key={action.label}
                                href={action.href}
                                target={action.target}
                                rel={action.target === '_blank' ? 'noreferrer' : undefined}
                                className={cn(
                                    'rounded-full px-4 py-2.5 text-sm font-semibold transition-colors',
                                    secondaryClassName,
                                )}
                            >
                                {action.label}
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}