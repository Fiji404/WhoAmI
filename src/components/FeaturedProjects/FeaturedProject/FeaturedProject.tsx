import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { useContext } from 'react';
import { ProjectDetailsModal } from '../ProjectModal/ProjectModal';
import { createPortal } from 'react-dom';
import { ProjectUsedStack } from './ProjectTechStack';
import { ProjectDetailsContext } from '@/contexts/ProjectDetailsContext/ProjectDetailsContext';
import { motion } from 'framer-motion';

interface Props {
    projectName: string;
    description: string;
    usedStack: { lang: string; langIcon: JSX.Element }[];
}

export const FeaturedProject = ({ projectName, description, usedStack }: Props) => {
    const { isProjectsDetailsOpen, openProjectDetailsHandler } = useContext(ProjectDetailsContext);
    return (
        <>
            {isProjectsDetailsOpen[projectName] &&
                createPortal(<ProjectDetailsModal {...{ usedStack, projectName }} />, document.body)}
            <motion.section
                initial={{ opacity: 0.7, translateY: '50%' }}
                whileInView={{ opacity: 1, translateY: 0 }}
                viewport={{ once: true }}
                className="grow p-4 bg-[rgba(19,19,19,0.7)] border border-accent rounded-md backdrop-blur-sm max-w-[550px] relative overflow-hidden"
            >
                <h2 className="text-white font-semibold text-center text-4xl rounded-md">{projectName}</h2>
                <p className="mt-5 mb-3 text-center text-lg text-[#b4b4b4]">{description}</p>
                <ProjectUsedStack usedLanguages={usedStack} />
                <button
                    onClick={() => openProjectDetailsHandler(projectName)}
                    className="mt-6 mx-auto w-[90%] flex justify-center items-center gap-2 bg-[#141414] text-white py-2 px-3 border border-accent rounded-full hover:bg-[#161616] active:bg-[#161616] transition-colors"
                >
                    Learn more <BiDotsHorizontalRounded />
                </button>
            </motion.section>
        </>
    );
};
