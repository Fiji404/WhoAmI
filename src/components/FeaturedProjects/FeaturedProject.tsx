import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ProjectDetailsModal } from './ProjectDetailsModal';
import { createPortal } from 'react-dom';

interface Props {
    projectName: string;
    description: string;
}

const containerMotion = {
    hidden: {
        transition: {
            duration: 2,
            type: 'tween',
        },
    },
    hover: {
        transition: {
            duration: 0.4,
            type: 'tween',
        },
    },
};

const childMotion = {
    hidden: { opacity: 0, y: '100%', duration: 0.2, type: 'tween' },
    hover: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            type: 'tween',
        },
    },
};

export const FeaturedProject = ({ projectName, description }: Props) => {
    const [isProjectDetailsOpen, setIsProjectDetailsOpen] = useState(false);
    const openProjectDetailsHandler = () => {
        setIsProjectDetailsOpen(true);
    };

    return (
        <>
            {isProjectDetailsOpen && createPortal(<ProjectDetailsModal projectName="Quick Tips" />, document.body)}
            <motion.section
                initial="hidden"
                whileHover="hover"
                variants={containerMotion}
                className="mt-10 p-4 bg-[rgba(21,21,21,0.7)] border border-[#1f1f1f] rounded-md backdrop-blur-sm max-w-[450px] relative overflow-hidden"
            >
                <header>
                    <h2 className="text-white font-semibold text-center text-4xl rounded-md">
                        {projectName}
                    </h2>
                </header>
                <div></div>
                <p className="mt-5 text-center text-[#b4b4b4]">{description}</p>
                <motion.button
                    onClick={openProjectDetailsHandler}
                    variants={childMotion}
                    className="flex items-center gap-2 absolute bottom-2 right-2 bg-[#1b1b1b] text-white py-2 px-3 border border-[#272727] rounded-full hover:bg-[#1f1f1f] active:bg-[#161616] transition-colors"
                >
                    Learn more <BiDotsHorizontalRounded />
                </motion.button>
            </motion.section>
        </>
    );
};
