import { NavItem, NavLogo } from '../..';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { NavLangBtn } from '../NavLangOpt/NavLangOpt';
import { NavMobileBtn } from '../NavMobile/NavMobileBtn';
import { useState } from 'react';

const PAGE_LINKS = [
    { href: '#about', text: 'About me' },
    { target: '_blank', href: 'https://github.com/Fiji404', text: 'Portfolio' },
    { href: '#contact', text: 'Contact' },
];

export const Nav = () => {
    const { t } = useTranslation();
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    const [isLangListOpen, setIsLangListOpen] = useState(false);

    const navOpenHandler = () => {
        setIsMobileNavOpen(isOpen => {
            if (!isOpen) setIsLangListOpen(false);
            return !isOpen;
        });
    };
    const langListOpenHandler = () => {
        setIsLangListOpen(isOpen => {
            if (!isOpen) setIsMobileNavOpen(false);
            return !isOpen;
        });
    };

    return (
        <motion.nav
            initial={{ opacity: 0, translateY: '-200%' }}
            animate={{ opacity: 1, translateY: 0 }}
            className="bg-[rgba(19,19,19,0.79)] py-3 px-5 border-b border-b-[#222222] flex justify-between items-center sticky top-0 w-full z-10 backdrop-blur-sm "
        >
            <NavLogo />
            <div className="flex items-center gap-2 relative">
                <ul
                    className={`flex gap-3 items-center text-[#fff] font-semibold rounded-sm sm:mobile-nav ${
                        isMobileNavOpen ? 'scale-y-100' : 'sm:scale-y-0'
                    }`}
                >
                    {PAGE_LINKS.map(({ href, text, target }, i) => (
                        <NavItem key={i} text={t(text)} {...{ href, target }} />
                    ))}
                </ul>
                <NavLangBtn onLangListOpen={langListOpenHandler} isLangListOpen={isLangListOpen} />
                <NavMobileBtn onNavOpen={navOpenHandler} />
            </div>
        </motion.nav>
    );
};
