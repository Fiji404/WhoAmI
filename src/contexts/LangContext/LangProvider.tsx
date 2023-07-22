import { PropsWithChildren, useEffect, useState } from 'react';
import { LangContext } from './langContext';
import { useTranslation } from 'react-i18next';

export type LanguageOptions = 'pl' | 'en';

export const LangProvider = ({ children }: PropsWithChildren) => {
    const { i18n } = useTranslation();
    const [currentLang, setCurrentLang] = useState(() => localStorage.getItem('lang') || 'en');

    useEffect(() => {
        localStorage.setItem('lang', currentLang);
        i18n.changeLanguage(currentLang);
        document.documentElement.lang = currentLang;
    }, [currentLang]);

    const updateLang = (lang: LanguageOptions) => {
        setCurrentLang(lang);
    };

    return (
        <LangContext.Provider value={{ lang: currentLang, updateLang }}>
            {children}
        </LangContext.Provider>
    );
};
