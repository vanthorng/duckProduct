import { Link, useForm } from '@inertiajs/react';

import { store } from '@/actions/App/Http/Controllers/Auth/AuthenticatedSessionController';
import AdminShell from '@/components/admin-shell';
import { useI18n } from '@/i18n/context';
import { home } from '@/routes';

type LoginFormData = {
    email: string;
    password: string;
};

export default function AdminLogin() {
    const { t } = useI18n();
    const form = useForm<LoginFormData>({
        email: '',
        password: '',
    });

    return (
        <AdminShell
            title={t('admin.login.title')}
            description={t('admin.login.subtitle')}
            actions={
                <Link href={home.url()} className="duck-btn-secondary px-4 py-2 text-sm">
                    {t('nav.home')}
                </Link>
            }
        >
            <section className="mx-auto max-w-xl">
                <div className="duck-panel p-7 sm:p-8">
                    <form
                        className="grid gap-4"
                        onSubmit={(event) => {
                            event.preventDefault();

                            form.submit(store(), {
                                preserveScroll: true,
                            });
                        }}
                    >
                        <label className="flex flex-col gap-1 text-sm text-[#5f3b20]">
                            {t('admin.login.email')}
                            <input
                                type="email"
                                value={form.data.email}
                                onChange={(event) => form.setData('email', event.target.value)}
                                className="duck-field"
                                autoComplete="email"
                            />
                            {form.errors.email ? (
                                <span className="text-xs text-[#a74224]">{form.errors.email}</span>
                            ) : null}
                        </label>

                        <label className="flex flex-col gap-1 text-sm text-[#5f3b20]">
                            {t('admin.login.password')}
                            <input
                                type="password"
                                value={form.data.password}
                                onChange={(event) => form.setData('password', event.target.value)}
                                className="duck-field"
                                autoComplete="current-password"
                            />
                            {form.errors.password ? (
                                <span className="text-xs text-[#a74224]">{form.errors.password}</span>
                            ) : null}
                        </label>

                        <button
                            type="submit"
                            disabled={form.processing}
                            className="duck-btn-primary mt-2 w-full px-5 py-3 text-sm disabled:cursor-not-allowed disabled:opacity-70"
                        >
                            {form.processing ? t('admin.login.submitting') : t('admin.login.submit')}
                        </button>
                    </form>
                </div>
            </section>
        </AdminShell>
    );
}