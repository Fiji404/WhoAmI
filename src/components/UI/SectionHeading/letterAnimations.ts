import { Variants } from 'framer-motion';

export const variants: Variants = {
    visible: {
        transition: {
            staggerChildren: 0.025
        }
    }
};

export const letterVariant: Variants = {
    hidden: {
        y: '100%',
        color: '#111',
        transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85, repeat: 1 }
    },
    visible: {
        y: 0,
        color: '#fff',
        transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.55 }
    },
    show: {
        color: '#fff'
    }
};
