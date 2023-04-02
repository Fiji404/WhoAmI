import { createContext } from 'react';

export const LangContext = createContext({
    lang: 'en',
    updateLang(e: React.MouseEvent) {}
});
