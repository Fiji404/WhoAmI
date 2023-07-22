import { createContext } from 'react';
import { LanguageOptions } from './LangProvider';

export const LangContext = createContext({
    lang: 'en',
    updateLang(lang: LanguageOptions) {}
});
