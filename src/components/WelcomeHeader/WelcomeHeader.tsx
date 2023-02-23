import { Variants, motion, useMotionValue, useMotionValueEvent, useScroll } from 'framer-motion';
import { SlArrowDown } from 'react-icons/sl';
import { ParticlesBg } from '../';
import { useState, useEffect } from 'react';

type VariantsArgs = number;

export const WelcomeHeader = () => {
    const { scrollY } = useScroll();
    const [isUserScrolled, setIsUserScrolled] = useState(false);
    useMotionValueEvent(scrollY, 'change', offsetY => {
        if (offsetY > 0) return setIsUserScrolled(true);
        setIsUserScrolled(false);
    });
    const variants: Variants = {
        visible: (delay: VariantsArgs) => ({ opacity: 1, transition: { delay } }),
        hidden: { opacity: 0 },
    };
    return (
        <>
            <section className="max-w-[85%] h-screen mx-auto relative">
                <ParticlesBg particlesID="particles-header" />
                <div className="flex flex-col items-center justify-center h-full  py-7">
                    <div className="flex justify-between w-full items-center h-full">
                        <motion.h2
                            initial={{ opacity: 0, translateY: '-100%' }}
                            animate={{ opacity: 1, translateY: '0%' }}
                            transition={{ delay: 0.5 }}
                            className="font-heading text-white max-w-xl leading-tight text-8xl"
                        >
                            I'm a thriving frontend developer
                        </motion.h2>
                        <motion.img
                            initial={{ opacity: 0, scale: 0.7, filter: '' }}
                            animate={{ opacity: 1, scale: 1 }}
                            whileHover={{
                                translateY: '-5%',
                                filter: 'drop-shadow(0 0 5px #9BDBDC)',
                                transition: { delay: 0 },
                            }}
                            transition={{ delay: 1 }}
                            src="/reddit-avatar.png"
                            alt="My reddit avatar"
                        />
                    </div>
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        custom={1.6}
                        className="flex justify-center"
                        variants={variants}
                    >
                        <SlArrowDown
                            color="#ccc"
                            fontSize="2rem"
                            className={`${isUserScrolled && 'opacity-0 '} animate-bounce transition-opacity`}
                        />
                    </motion.div>
                </div>
            </section>
        </>
    );
};
