import { Variants, delay, m, motion } from 'framer-motion';
import { SlArrowDown } from 'react-icons/sl';
import { ParticlesBg } from '../';

type VariantsArgs = number;

export const WelcomeHeader = () => {
    const variants: Variants = {
        visible: (delay: VariantsArgs) => ({ opacity: 1, transition: { delay } }),
        hidden: { opacity: 0 },
    };
    return (
        <>
            <section className="mt-20 max-w-[85%] min-h-[70vh] mx-auto relative">
                <ParticlesBg particlesID="particles-header" />
                <div className="flex justify-between items-center">
                    <motion.h2
                        initial={{ opacity: 0, translateY: '-100%' }}
                        animate={{ opacity: 1, translateY: '0%' }}
                        transition={{ delay: 0.5 }}
                        className="font-heading text-white max-w-xl leading-tight text-8xl"
                    >
                        I'm a thriving frontend developer
                    </motion.h2>
                    <motion.img
                        initial={{ opacity: 0, scale: 0.70, filter: '' }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{
                            translateY: '-5%',
                            filter: 'drop-shadow(0 0 5px #9BDBDC)',
                            transition: { delay: 0 },
                        }}
                        transition={{ delay: 1.4 }}
                        src="/public/reddit-avatar.png"
                        alt="My reddit avatar"
                    />
                </div>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    custom={2}
                    className="flex justify-center"
                    variants={variants}
                >
                    <SlArrowDown color="#ccc" fontSize="2rem" className="animate-bounce" />
                </motion.div>
            </section>
        </>
    );
};
