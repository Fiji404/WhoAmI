import { NavItem, NavLogo } from '..';
import { motion } from 'framer-motion';

const PAGE_LINKS = [
    { id: crypto.randomUUID(), href: '#about', text: 'About me' },
    { id: crypto.randomUUID(), target: '_blank', href: 'https://github.com/Fiji404', text: 'Portfolio' },
    { id: crypto.randomUUID(), href: '#contact', text: 'Contact' },
];

export const Nav = () => {
    return (
        <motion.nav
            custom={0.5}
            initial={{ opacity: 0, translateY: '-200%' }}
            animate={{ opacity: 1, translateY: 0 }}
            className="bg-[rgba(21,21,21,0.79)] py-3 px-5 border-b border-b-[#2b2b2b] flex justify-between items-center fixed top-0 w-full z-10 backdrop-blur-sm"
        >
            <NavLogo />
            <ul className="flex gap-3 text-[#fff] font-semibold">
                {PAGE_LINKS.map(({ href, text, target, id }, i) => (
                    <NavItem key={id} {...{ href, text, target }} />
                ))}
            </ul>
        </motion.nav>
    );
};
