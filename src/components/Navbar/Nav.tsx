import { NavItem, NavLogo } from '..';
import { Variants, motion } from 'framer-motion';

const PAGE_LINKS = [
    { id: crypto.randomUUID(), href: '#about', text: 'About me' },
    { id: crypto.randomUUID(), target: '_blank', href: 'https://github.com/Fiji404', text: 'Portfolio' },
    { id: crypto.randomUUID(), href: '#contact', text: 'Contact' },
];

export const Nav = () => {
    const variants: Variants = {
        visible: (delay: number) => ({ opacity: 1, translateY: 0, transition: { delay: delay * 0.6 } }),
        hidden: { opacity: 0, translateY: '-20px' },
    };
    return (
        <motion.nav custom={0.5} initial="hidden" animate="visible" variants={variants} className="bg-[#151515] py-3 px-5 border-b border-b-[#2b2b2b] flex justify-between items-center">
            <NavLogo />
            <ul className="flex gap-3 text-[#fff] font-semibold">
                {PAGE_LINKS.map(({ href, text, target, id }, i) => (
                    <NavItem initial="hidden" animate="visible" variants={variants} custom={i}  key={id} className="nav-item" {...{ href, text, target }} />
                ))}
            </ul>
        </motion.nav>
    );
};
