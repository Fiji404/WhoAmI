import { PropsWithChildren, useEffect, useState } from 'react';
import { LangContext } from './langContext';
import { useTranslation } from 'react-i18next';

export const LangProvider = ({ children }: PropsWithChildren) => {
    const { i18n } = useTranslation();
    const [currentLang, setCurrentLang] = useState(() => localStorage.getItem('lang') || 'en');

    useEffect(() => {
        localStorage.setItem('lang', currentLang);
        i18n.changeLanguage(currentLang);
    }, [currentLang]);

    const changeLanguageHandler = ({ target }: React.MouseEvent) => {
        if (!(target instanceof Element)) return;
        const chosenLanguage = target.textContent;
        if (chosenLanguage) setCurrentLang(chosenLanguage);
    };

    return (
        <LangContext.Provider value={{ lang: currentLang, updateLang: changeLanguageHandler }}>
            {children}
        </LangContext.Provider>
    );
};
