import { useContext, useState } from 'react';
import { NavLangListItem } from './NavLangListItem';
import { LangContext } from '../../../contexts/Lang/langContext';
import { motion } from 'framer-motion';
import { IoLanguage } from 'react-icons/io5';

export const NavLangList = () => {
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
            <motion.div
                initial={{ scaleY: 0 }}
                animate={
                    isLanguageListOpen ? { scaleY: 1, translateY: '100%' } : { scaleY: 0, translateY: '100%' }
                }
                className={`absolute -bottom-1 translate-y-full text-center origin-top border border-[#313131] overflow-hidden rounded-sm" ${
                    isLanguageListOpen && 'scale-y-0'
                }`}
            >
                <ul onClick={updateLang} className="flex flex-col">
                    <NavLangListItem langOpt="pl" />
                    <NavLangListItem langOpt="en" />
                </ul>
            </motion.div>
        </li>
    );
};
