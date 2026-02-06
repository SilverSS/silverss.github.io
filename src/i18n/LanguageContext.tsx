'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { dictionary, Locale } from './locales';

export { type Locale };

type LanguageContextType = {
    locale: Locale;
    toggleLocale: () => void;
    changeLocale: (newLocale: Locale) => void;
    t: typeof dictionary.en;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [locale, setLocale] = useState<Locale>('ko'); // Default to Korean as requested

    useEffect(() => {
        const saved = localStorage.getItem('ppp_locale') as Locale;
        if (saved && (saved === 'en' || saved === 'ko')) {
            setLocale(saved);
        }
    }, []);

    const toggleLocale = () => {
        const newLocale = locale === 'en' ? 'ko' : 'en';
        setLocale(newLocale);
        localStorage.setItem('ppp_locale', newLocale);
    };

    const changeLocale = (newLocale: Locale) => {
        setLocale(newLocale);
        localStorage.setItem('ppp_locale', newLocale);
    };

    const t = dictionary[locale];

    return (
        <LanguageContext.Provider value={{ locale, toggleLocale, changeLocale, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
