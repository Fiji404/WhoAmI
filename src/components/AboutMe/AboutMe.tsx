import { Variants, motion } from 'framer-motion';
import { AboutMeDiagram } from '..';

export const AboutMe = () => {
    const variants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            transition: { staggerChildren: 0.25 },
        },
    };
    return (
        <section className="mt-20">
            <motion.h2
                // initial="hidden"
                // whileInView={{opacity: 1}}
                // transition={{delay: .4}}
                variants={variants}
                className="font-heading text-5xl text-center text-white"
            >
                Quick facts about me
            </motion.h2>
            <AboutMeDiagram />
        </section>
    );
};
