import { NavItem, NavLogo } from '../..';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { NavLangOpt } from '../NavLangOpt/NavLangOpt';
import { NavMobileBtn } from '../NavMobile/NavMobileBtn';

const PAGE_LINKS = [
    { id: crypto.randomUUID(), href: '#about', text: 'About me' },
    { id: crypto.randomUUID(), target: '_blank', href: 'https://github.com/Fiji404', text: 'Portfolio' },
    { id: crypto.randomUUID(), href: '#contact', text: 'Contact' },
];

export const Nav = () => {
    const { t } = useTranslation();
    return (
        <motion.nav
            initial={{ opacity: 0, translateY: '-200%' }}
            animate={{ opacity: 1, translateY: 0 }}
            className="bg-[rgba(19,19,19,0.79)] py-3 px-5 border-b border-b-[#222222] flex justify-between items-center sticky top-0 w-full z-10 backdrop-blur-sm"
        >
            <NavLogo />
            <ul className="flex gap-3 items-center text-[#fff] font-semibold">
                {PAGE_LINKS.map(({ href, text, target, id }, i) => (
                    <NavItem key={id} text={t(text)} {...{ href, target }} />
                ))}
                <NavLangOpt />
                <NavMobileBtn />
            </ul>
        </motion.nav>
    );
};
