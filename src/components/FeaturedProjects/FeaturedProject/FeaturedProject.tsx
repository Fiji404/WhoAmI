import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { useContext, useState } from 'react';
import { ProjectDetailsModal } from '../ProjectDetailsModal/ProjectDetailsModal';
import { createPortal } from 'react-dom';
import { ProjectUsedStack } from './ProjectUsedStack';
import { ProjectDetailsContext } from '../../../contexts/ProjectDetailsContext/ProjectDetailsContext';
import { motion } from 'framer-motion';

interface Props {
    projectName: string;
    description: string;
    usedStack: { lang: string; langIcon: React.ReactNode }[];
}

export const FeaturedProject = ({ projectName, description, usedStack }: Props) => {
    const { isProjectDetailsOpen, openProjectDetailsHandler } = useContext(ProjectDetailsContext);
    return (
        <>
            {isProjectDetailsOpen &&
                createPortal(
                    <ProjectDetailsModal usedStack={usedStack} projectName={projectName} />,
                    document.body
                )}
            <motion.section
                initial={{ opacity: 0.7, translateY: '50%' }}
                whileInView={{ opacity: 1, translateY: 0 }}
                className="grow p-4 bg-[rgba(21,21,21,0.7)] border border-accent rounded-md backdrop-blur-sm max-w-[550px] relative overflow-hidden"
            >
                <header>
                    <h2 className="text-white font-semibold text-center text-4xl rounded-md">
                        {projectName}
                    </h2>
                </header>
                <p className="mt-5 mb-3 text-center text-lg text-[#b4b4b4]">{description}</p>
                <ProjectUsedStack usedLanguages={usedStack} />
                <button
                    onClick={openProjectDetailsHandler}
                    className="mt-6 mx-auto w-[90%] flex justify-center items-center gap-2 bg-[#1b1b1b] text-white py-2 px-3 border border-accent rounded-full hover:bg-[#1f1f1f] active:bg-[#161616] transition-colors"
                >
                    Learn more <BiDotsHorizontalRounded />
                </button>
            </motion.section>
        </>
    );
};
