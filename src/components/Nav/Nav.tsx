import { NavItem, NavLogo } from '..';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { IoLanguage } from 'react-icons/io5';
import { BiMenuAltRight } from 'react-icons/bi';

const PAGE_LINKS = [
    { id: crypto.randomUUID(), href: '#about', text: 'About me' },
    { id: crypto.randomUUID(), target: '_blank', href: 'https://github.com/Fiji404', text: 'Portfolio' },
    { id: crypto.randomUUID(), href: '#contact', text: 'Contact' },
];

interface Props {
    onLanguageChange({ target }: React.MouseEvent): void;
    currentLang: string;
}

export const Nav = ({ onLanguageChange, currentLang }: Props) => {
    console.log(currentLang === 'pl');
    const [isLanguageListOpen, setIsLanguageListOpen] = useState(false);
    const { t } = useTranslation();

    return (
        <motion.nav
            custom={0.5}
            initial={{ opacity: 0, translateY: '-200%' }}
            animate={{ opacity: 1, translateY: 0 }}
            className="bg-[rgba(21,21,21,0.79)] py-3 px-5 border-b border-b-[#2b2b2b] flex justify-between items-center sticky top-0 w-full z-10 backdrop-blur-sm"
        >
            <NavLogo />
            <ul className="flex gap-3 items-center text-[#fff] font-semibold">
                {PAGE_LINKS.map(({ href, text, target, id }, i) => (
                    <NavItem key={id} text={t(text)} {...{ href, target }} />
                ))}
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
                            isLanguageListOpen
                                ? { scaleY: 1, translateY: '100%' }
                                : { scaleY: 0, translateY: '100%' }
                        }
                        className={`absolute -bottom-1 translate-y-full text-center origin-top border border-[#313131] overflow-hidden rounded-sm" ${
                            isLanguageListOpen && 'scale-y-0'
                        }`}
                    >
                        <ul onClick={onLanguageChange} className="flex flex-col">
                            <li className="grow">
                                <button
                                    className={`lang-opt w-full rounded-tr-sm rounded-tl-sm ${
                                        currentLang === 'pl' ? 'text-white' : 'text-[#a5a5a5]'
                                    }`}
                                >
                                    pl
                                </button>
                            </li>
                            <li className="grow">
                                <button
                                    className={`lang-opt rounded-br-sm rounded-bl-sm ${
                                        currentLang === 'en' ? 'text-white' : 'text-[#a5a5a5]'
                                    }`}
                                >
                                    en
                                </button>
                            </li>
                        </ul>
                    </motion.div>
                </li>
                <li className="hidden sm:block">
                    <button className="nav-item p-1">
                        <BiMenuAltRight fontSize="1.7rem" color="#fff" />
                    </button>
                </li>
            </ul>
        </motion.nav>
    );
};
