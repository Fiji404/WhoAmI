import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { SlArrowDown } from 'react-icons/sl';

export const WelcomeHeaderArrow = () => {
    const { scrollY } = useScroll();
    const [isPageScrolled, setIsPageScrolled] = useState(false);
    useMotionValueEvent(scrollY, 'change', offsetY => setIsPageScrolled(offsetY > 0));
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center"
        >
            <SlArrowDown
                className={`${
                    isPageScrolled && 'opacity-0'
                } animate-bounce text-[#ccc] text-3xl transition-opacity`}
            />
        </motion.div>
    );
};
