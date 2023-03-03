import { useContext, useState } from 'react';
import { NavLangList } from './NavLangList';
import { LangContext } from '../../../contexts/Lang/langContext';
import { IoLanguage } from 'react-icons/io5';

export const NavLangOpt = () => {
    const { updateLang } = useContext(LangContext);
    const [isLanguageListOpen, setIsLanguageListOpen] = useState(false);
    return (
        <li className="relative">
            <button
                onClick={() => setIsLanguageListOpen(isOpen => !isOpen)}
                aria-label="change language preference"
                className="nav-item p-[5px] aspect-square sm:hidden"
            >
                <IoLanguage fontSize="1.1rem" />
            </button>
            <NavLangList isListOpen={isLanguageListOpen} />
        </li>
    );
};
