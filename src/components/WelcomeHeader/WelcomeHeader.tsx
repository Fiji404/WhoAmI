import { Variants, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { SlArrowDown } from 'react-icons/sl';
import { useState } from 'react';
import { SectionHeading } from '@components/UI/SectionHeading';
import { useTranslation } from 'react-i18next';

type VariantsArgs = number;

export const WelcomeHeader = () => {
    const { t } = useTranslation();

    const { scrollY } = useScroll();
    const [isUserScrolled, setIsUserScrolled] = useState(false);
    useMotionValueEvent(scrollY, 'change', offsetY => {
        if (offsetY > 0) return setIsUserScrolled(true);
        setIsUserScrolled(false);
    });
    const variants: Variants = {
        visible: (delay: VariantsArgs) => ({ opacity: 1, transition: { delay } }),
        hidden: { opacity: 0 }
    };
    return (
        <>
            <section className="max-w-[85%] h-[95vh] mx-auto">
                <div className="flex flex-col items-center justify-center h-full  py-7">
                    <div className="flex justify-between flex-wrap w-full items-center h-full md:justify-center">
                        <SectionHeading styles="heading" text={t("I'm a thriving frontend developer")} />
                        <motion.img
                            initial={{ opacity: 0, scale: 0.7, filter: 'drop-shadow(0 0 0 transparent)' }}
                            animate={{ opacity: 1, scale: 1, transition: { delay: 1 } }}
                            whileHover={{
                                translateY: '-5%',
                                filter: 'drop-shadow(0 0 5px #9BDBDC)',
                                transition: { delay: 0 }
                            }}
                            src="/reddit-avatar.png"
                            alt="My reddit avatar"
                            className="sm:max-w-[80%]"
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
