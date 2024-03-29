import { motion, useInView } from 'framer-motion';
import { Fragment, useEffect, useRef, useState } from 'react';
import { letterVariant, variants } from './letterAnimations';

interface Props {
    text: string;
    styles?: string;
}

const AnimatedLetter = ({ letter }: { letter: string }) => {
    return (
        <span>
            <motion.span style={{ display: 'inline-block' }} variants={letterVariant}>
                {letter}
            </motion.span>
        </span>
    );
};

export const SectionHeading = ({ text, styles }: Props) => {
    const [isAnimationPlayed, setIsAnimationPlayed] = useState(false);
    const sectionHeadingRef = useRef(null);
    const isHeadingInView = useInView(sectionHeadingRef);

    useEffect(() => {
        if (isHeadingInView) setIsAnimationPlayed(true);
    }, [isHeadingInView]);

    const animatedText = text.split(' ').map(word => (
        <Fragment key={word}>
            <span style={{ whiteSpace: 'nowrap' }}>
                {word.split('').map((letter, i) => (
                    <AnimatedLetter key={i} letter={letter} />
                ))}
            </span>
            <span>{'\u00A0'}</span>
        </Fragment>
    ));

    return (
        <motion.h2
            ref={sectionHeadingRef}
            initial={!isAnimationPlayed && 'hidden'}
            whileInView="visible"
            viewport={{ once: true }}
            variants={variants}
            className={styles ? styles : 'sub-heading'}
        >
            {animatedText}
        </motion.h2>
    );
};
