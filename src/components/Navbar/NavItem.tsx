import { Variants, motion } from 'framer-motion';

interface Props {
    href: string;
    text: string;
    className: string;
    target?: string;
    variants: Variants;
    custom: number;
    initial: string;
    animate: string;
}

export const NavItem = ({ href, className, text, target, initial, animate, variants, custom }: Props) => {
    return (
        <motion.li animate="visible" initial="hidden" {...{ variants, custom }}>
            <a {...{ href, className, target }}>{text}</a>
        </motion.li>
    );
};
