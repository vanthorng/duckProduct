import { router, usePage } from '@inertiajs/react';
import { useState } from 'react';

import { index, update } from '@/actions/App/Http/Controllers/Admin/OrderDashboardController';
import { destroy } from '@/actions/App/Http/Controllers/Auth/AuthenticatedSessionController';
import AdminShell from '@/components/admin-shell';
import { useI18n } from '@/i18n/context';
import { ORDER_PRODUCTS } from '@/lib/order-options';
import type {
    OrderContactMethod,
    OrderFulfillmentType,
    OrderProduct,
    OrderStatus,
} from '@/lib/order-options';
import type { Auth, Flash } from '@/types';

type DashboardOrder = {
    id: number;
    reference: string;
    name: string;
    phone: string;
    email: string | null;
    preferredContactMethod: OrderContactMethod;
    product: OrderProduct;
    productLabel: string;
    quantity: string;
    fulfillmentType: OrderFulfillmentType;
    address: string | null;
    preferredDate: string | null;
    preferredTime: string | null;
    notes: string | null;
    status: OrderStatus;
    createdAt: string | null;
};

type DashboardPageProps = {
    auth: Auth;
    flash: Flash;
    filters: {
        search: string;
        status: string;
    };
    orders: DashboardOrder[];
    statusOptions: Array<{
        value: OrderStatus;
    }>;
    stats: Array<{
        value: number;
        labelKey: string;
    }>;
};

function cleanFilters(filters: { search: string; status: string }): {
    search?: string;
    status?: string;
} {
    const query: {
        search?: string;
        status?: string;
    } = {};

    if (filters.search.trim() !== '') {
        query.search = filters.search.trim();
    }

    if (filters.status !== '') {
        query.status = filters.status;
    }

    return query;
}

export default function AdminOrdersIndex() {
    const { t } = useI18n();
    const { auth, flash, filters, orders, statusOptions, stats } =
        usePage<DashboardPageProps>().props;
    const [search, setSearch] = useState(filters.search);
    const [statusFilter, setStatusFilter] = useState(filters.status);
    const [statusDrafts, setStatusDrafts] = useState<Record<number, OrderStatus>>(
        () =>
            Object.fromEntries(
                orders.map((order) => [order.id, order.status]),
            ) as Record<number, OrderStatus>,
    );
    const [updatingOrderId, setUpdatingOrderId] = useState<number | null>(null);

    const applyFilters = () => {
        router.get(
            index.url({ query: cleanFilters({ search, status: statusFilter }) }),
            {},
            {
                preserveScroll: true,
                preserveState: false,
                replace: true,
            },
        );
    };

    const resetFilters = () => {
        router.get(index.url(), {}, {
            preserveScroll: true,
            preserveState: false,
            replace: true,
        });
    };

    const submitStatus = (orderId: number) => {
        const nextStatus = statusDrafts[orderId];

        if (!nextStatus) {
            return;
        }

        router.patch(
            update.url(orderId),
            { status: nextStatus },
            {
                preserveScroll: true,
                onStart: () => setUpdatingOrderId(orderId),
                onFinish: () => setUpdatingOrderId(null),
            },
        );
    };

    const logout = () => {
        router.post(destroy.url());
    };

    const productLabel = (product: OrderProduct, fallback: string): string => {
        const match = ORDER_PRODUCTS.find((option) => option.value === product);

        return match ? t(match.labelKey) : fallback;
    };

    return (
        <AdminShell
            title={t('admin.dashboard.title')}
            description={t('admin.dashboard.subtitle')}
            actions={
                <>
                    <p className="rounded-full border border-[#dac4a9] bg-[#fff8f0] px-4 py-2 text-sm text-[#5b3518]">
                        {t('admin.dashboard.currentUser')}: <strong>{auth.user?.name}</strong>
                    </p>
                    <button
                        type="button"
                        onClick={logout}
                        className="duck-btn-secondary px-4 py-2 text-sm"
                    >
                        {t('admin.dashboard.logout')}
                    </button>
                </>
            }
        >
            {flash.dashboardSuccessKey ? (
                <section className="rounded-[1.6rem] border border-[#c9a67d] bg-[#fff6ea] p-5 text-[#4d2b13] shadow-[0_14px_32px_rgba(85,45,16,0.12)]">
                    <p className="text-base font-semibold sm:text-lg">
                        {t(flash.dashboardSuccessKey)}
                    </p>
                </section>
            ) : null}

            <section className="grid gap-4 md:grid-cols-4">
                {stats.map((stat, index) => {
                    return (
                        <article
                            key={stat.labelKey}
                            className="duck-soft-card duck-reveal p-5"
                            style={{ animationDelay: `${120 + index * 90}ms` }}
                        >
                            <p className="text-sm font-semibold text-[#8e562e]">
                                {t(stat.labelKey)}
                            </p>
                            <p className="duck-display mt-2 text-3xl text-[#321b09]">
                                {stat.value}
                            </p>
                        </article>
                    );
                })}
            </section>

            <section className="duck-panel p-6 sm:p-7">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                        <p className="duck-kicker">{t('admin.dashboard.ordersHeading')}</p>
                        <h2 className="duck-display mt-2 text-3xl text-[#341d0b]">
                            {t('admin.dashboard.latestOrders')}
                        </h2>
                    </div>

                    <form
                        className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_220px_auto_auto]"
                        onSubmit={(event) => {
                            event.preventDefault();
                            applyFilters();
                        }}
                    >
                        <input
                            type="search"
                            value={search}
                            onChange={(event) => setSearch(event.target.value)}
                            placeholder={t('admin.dashboard.searchPlaceholder')}
                            className="duck-field w-full"
                        />
                        <select
                            value={statusFilter}
                            onChange={(event) => setStatusFilter(event.target.value)}
                            className="duck-field"
                        >
                            <option value="">{t('admin.dashboard.allStatuses')}</option>
                            {statusOptions.map((option) => {
                                return (
                                    <option key={option.value} value={option.value}>
                                        {t(`admin.status.${option.value}`)}
                                    </option>
                                );
                            })}
                        </select>
                        <button type="submit" className="duck-btn-primary px-4 py-2.5 text-sm">
                            {t('admin.dashboard.applyFilters')}
                        </button>
                        <button
                            type="button"
                            onClick={resetFilters}
                            className="duck-btn-secondary px-4 py-2.5 text-sm"
                        >
                            {t('admin.dashboard.resetFilters')}
                        </button>
                    </form>
                </div>
            </section>

            <section className="grid gap-4">
                {orders.length === 0 ? (
                    <article className="duck-panel p-6 text-sm text-[#6d492f]">
                        {t('admin.dashboard.noOrders')}
                    </article>
                ) : null}

                {orders.map((order) => {
                    const draftStatus = statusDrafts[order.id] ?? order.status;

                    return (
                        <article key={order.id} className="duck-panel p-6 sm:p-7">
                            <div className="grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
                                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                                    <div className="rounded-2xl border border-[#ddc4a5] bg-[#fff9f2] px-4 py-4">
                                        <p className="text-xs font-semibold tracking-[0.14em] text-[#8b5c39] uppercase">
                                            {t('admin.dashboard.reference')}
                                        </p>
                                        <p className="mt-2 text-base font-semibold text-[#4b2d17]">
                                            {order.reference}
                                        </p>
                                        <p className="mt-2 text-sm text-[#6d492f]">
                                            {t('admin.dashboard.createdAt')}:{' '}
                                            {order.createdAt ?? t('common.notProvided')}
                                        </p>
                                    </div>

                                    <div className="rounded-2xl border border-[#ddc4a5] bg-[#fff9f2] px-4 py-4">
                                        <p className="text-xs font-semibold tracking-[0.14em] text-[#8b5c39] uppercase">
                                            {t('admin.dashboard.customer')}
                                        </p>
                                        <p className="mt-2 text-base font-semibold text-[#4b2d17]">
                                            {order.name}
                                        </p>
                                        <p className="mt-2 text-sm text-[#6d492f]">
                                            {order.phone}
                                        </p>
                                        <p className="mt-1 text-sm text-[#6d492f]">
                                            {order.email || t('common.notProvided')}
                                        </p>
                                    </div>

                                    <div className="rounded-2xl border border-[#ddc4a5] bg-[#fff9f2] px-4 py-4">
                                        <p className="text-xs font-semibold tracking-[0.14em] text-[#8b5c39] uppercase">
                                            {t('admin.dashboard.contact')}
                                        </p>
                                        <p className="mt-2 text-base font-semibold text-[#4b2d17]">
                                            {t(`order.contactMethod.${order.preferredContactMethod}`)}
                                        </p>
                                    </div>

                                    <div className="rounded-2xl border border-[#ddc4a5] bg-[#fff9f2] px-4 py-4">
                                        <p className="text-xs font-semibold tracking-[0.14em] text-[#8b5c39] uppercase">
                                            {t('admin.dashboard.product')}
                                        </p>
                                        <p className="mt-2 text-base font-semibold text-[#4b2d17]">
                                            {productLabel(order.product, order.productLabel)}
                                        </p>
                                        <p className="mt-2 text-sm text-[#6d492f]">
                                            {order.quantity}
                                        </p>
                                    </div>

                                    <div className="rounded-2xl border border-[#ddc4a5] bg-[#fff9f2] px-4 py-4">
                                        <p className="text-xs font-semibold tracking-[0.14em] text-[#8b5c39] uppercase">
                                            {t('admin.dashboard.fulfillment')}
                                        </p>
                                        <p className="mt-2 text-base font-semibold text-[#4b2d17]">
                                            {t(`order.fulfillment.${order.fulfillmentType}`)}
                                        </p>
                                        <p className="mt-2 text-sm text-[#6d492f]">
                                            {order.address || t('common.notProvided')}
                                        </p>
                                    </div>

                                    <div className="rounded-2xl border border-[#ddc4a5] bg-[#fff9f2] px-4 py-4">
                                        <p className="text-xs font-semibold tracking-[0.14em] text-[#8b5c39] uppercase">
                                            {t('admin.dashboard.preferredSchedule')}
                                        </p>
                                        <p className="mt-2 text-base font-semibold text-[#4b2d17]">
                                            {order.preferredDate || t('common.flexible')}
                                        </p>
                                        <p className="mt-2 text-sm text-[#6d492f]">
                                            {order.preferredTime || t('common.flexible')}
                                        </p>
                                    </div>
                                </div>

                                <div className="grid gap-4">
                                    <div className="rounded-2xl border border-[#ddc4a5] bg-[#fffaf4] px-4 py-4">
                                        <p className="text-xs font-semibold tracking-[0.14em] text-[#8b5c39] uppercase">
                                            {t('common.status')}
                                        </p>
                                        <p className="mt-2 text-base font-semibold text-[#4b2d17]">
                                            {t(`admin.status.${order.status}`)}
                                        </p>
                                    </div>

                                    <div className="rounded-2xl border border-[#ddc4a5] bg-[#fffaf4] px-4 py-4">
                                        <p className="text-xs font-semibold tracking-[0.14em] text-[#8b5c39] uppercase">
                                            {t('admin.dashboard.notes')}
                                        </p>
                                        <p className="mt-2 text-sm leading-6 text-[#6d492f]">
                                            {order.notes || t('common.notProvided')}
                                        </p>
                                    </div>

                                    <div className="rounded-2xl border border-[#ddc4a5] bg-[#fffaf4] px-4 py-4">
                                        <p className="text-xs font-semibold tracking-[0.14em] text-[#8b5c39] uppercase">
                                            {t('admin.dashboard.updateStatus')}
                                        </p>
                                        <div className="mt-3 flex flex-col gap-3 sm:flex-row">
                                            <select
                                                value={draftStatus}
                                                onChange={(event) =>
                                                    setStatusDrafts((current) => ({
                                                        ...current,
                                                        [order.id]: event.target.value as OrderStatus,
                                                    }))
                                                }
                                                className="duck-field flex-1"
                                            >
                                                {statusOptions.map((option) => {
                                                    return (
                                                        <option key={option.value} value={option.value}>
                                                            {t(`admin.status.${option.value}`)}
                                                        </option>
                                                    );
                                                })}
                                            </select>
                                            <button
                                                type="button"
                                                onClick={() => submitStatus(order.id)}
                                                disabled={updatingOrderId === order.id}
                                                className="duck-btn-primary px-4 py-2.5 text-sm disabled:cursor-not-allowed disabled:opacity-70"
                                            >
                                                {updatingOrderId === order.id
                                                    ? t('common.saving')
                                                    : t('admin.dashboard.updateStatus')}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    );
                })}
            </section>
        </AdminShell>
    );
}