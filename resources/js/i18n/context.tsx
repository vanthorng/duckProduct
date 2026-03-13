import { createContext, useContext, useMemo, useState } from 'react';
import type { PropsWithChildren } from 'react';

import type { Locale } from '@/i18n/translations';
import { translations } from '@/i18n/translations';

type I18nContextValue = {
    locale: Locale;
    setLocale: (locale: Locale) => void;
    t: (key: string) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);
const STORAGE_KEY = 'duck_locale';

function getInitialLocale(): Locale {
    if (typeof window === 'undefined') {
        return 'en';
    }

    const storedLocale = window.localStorage.getItem(STORAGE_KEY);

    if (storedLocale === 'en' || storedLocale === 'km') {
        return storedLocale;
    }

    return 'en';
}

export function I18nProvider({ children }: PropsWithChildren) {
    const [locale, setLocaleState] = useState<Locale>(getInitialLocale);

    const value = useMemo<I18nContextValue>(() => {
        const setLocale = (newLocale: Locale) => {
            setLocaleState(newLocale);

            if (typeof window !== 'undefined') {
                window.localStorage.setItem(STORAGE_KEY, newLocale);
            }
        };

        const t = (key: string): string => {
            return translations[locale][key] ?? translations.en[key] ?? key;
        };

        return {
            locale,
            setLocale,
            t,
        };
    }, [locale]);

    return (
        <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
    );
}

export function useI18n(): I18nContextValue {
    const context = useContext(I18nContext);

    if (context === null) {
        throw new Error('useI18n must be used within I18nProvider');
    }

    return context;
}
