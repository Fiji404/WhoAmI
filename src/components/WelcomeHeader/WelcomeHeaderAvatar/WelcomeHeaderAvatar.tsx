import { motion } from 'framer-motion';

export const WelcomeHeaderAvatar = () => {
    return (
        <motion.img
            initial={{
                opacity: 0,
                scale: 0.7,
                filter: 'drop-shadow(0 0 0 transparent)'
            }}
            animate={{ opacity: 1, scale: 1, transition: { delay: 1 } }}
            whileHover={{
                translateY: '-5%',
                filter: 'drop-shadow(0 0 5px #9BDBDC)',
                transition: { delay: 0 }
            }}
            src="/avatar.png"
            alt="My reddit avatar"
            className="sm:max-w-[80%]"
        />
    );
};
