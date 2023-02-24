import { Variants, motion } from 'framer-motion';

interface Props {
    text: string;
    styles?: string;
}

const variants: Variants = {
    visible: {
        transition: {
            staggerChildren: 0.025,
        },
    },
};

const item: Variants = {
    hidden: {
        y: '100%',
        color: '#111',
        transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85, repeat: 1 },
    },
    visible: {
        y: 0,
        color: '#fff',
        transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.55 },
    },
};

export const SectionHeading = ({ text, styles }: Props) => {
    const animatedLetters = text?.split(' ').map((word, i) => (
        <>
            <span key={i} style={{ whiteSpace: 'nowrap' }}>
                {word.split('').map((letter, i) => (
                    <span key={i}>
                        <motion.span style={{ display: 'inline-block' }} variants={item}>
                            {letter}
                        </motion.span>
                    </span>
                ))}
            </span>
            <span>{'\u00A0'}</span>
        </>
    ));
    return (
        <motion.h2
            initial="hidden"
            viewport={{ once: true }}
            whileInView="visible"
            variants={variants}
            className={styles ? styles : 'font-heading text-5xl text-center text-white'}
        >
            {animatedLetters}
        </motion.h2>
    );
};
