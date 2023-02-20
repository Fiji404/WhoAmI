import { motion } from 'framer-motion';

export const WelcomeHeader = () => {
    return (
        <section className="mt-10">
            <motion.h2
                initial={{ opacity: 0, translateY: '-100%' }}
                animate={{ opacity: 1, translateY: '0%' }}
                className="font-heading text-white text-center text-5xl"
            >
                I'm thriving frontend web developer
            </motion.h2>
        </section>
    );
};
