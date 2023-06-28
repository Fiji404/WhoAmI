import { useState } from 'react';
import { Variants, motion } from 'framer-motion';

interface Props {
    path: string;
    desc: string;
}

const variants: Variants = {
    open: {
        width: '90vh',
        height: '80vh',
        position: 'fixed',
        top: '50%',
        left: '50%',
        translate: '-50% -50%'
    },
    closed: { width: '100%', maxWidth: '450px', aspectRatio: '16 / 9' }
};

export const ProjectPreviewImage = ({ path, desc }: Props) => {
    const [isImageExpanded, setIsImageExpanded] = useState(false);
    const expandImageHandler = () => setIsImageExpanded(isExpanded => !isExpanded);
    const foldImageHandler = () => isImageExpanded && setIsImageExpanded(false);

    return (
        <>
            <div
                onClick={foldImageHandler}
                className={`${
                    isImageExpanded ? 'fixed w-screen h-screen -translate-y-full -translate-x-1/2 bg-[#000000da]' : ''
                }`}
            ></div>
            <motion.img
                layout
                onClick={expandImageHandler}
                animate={isImageExpanded ? 'open' : 'closed'}
                variants={variants}
                className="text-white border border-[#2b2b2b] rounded-md cursor-pointer hover:border-[#383838] hover:brightness-125  transition-colors snap-start
                "
                src={path}
                alt={desc}
            />
        </>
    );
};
