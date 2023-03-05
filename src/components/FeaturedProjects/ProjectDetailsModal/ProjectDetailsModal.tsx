import { motion } from 'framer-motion';
import { ProjectDetailsBackdrop } from './ProjectDetailsBackdrop';
import { DetailsIntroHeader } from './ProjectIntro/ProjectIntroHeader';
import { ProjectSummary } from './ProjectIntro/ProjectSummary';
import { ProjectUsedStack } from '../FeaturedProject/ProjectUsedStack';
import { ProjectFeatures } from './ProjectFeatures';
import { ProjectPreviewLinks } from './ProjectPreviewLinks/ProjectPreviewLinks';
import { BsStack } from 'react-icons/bs'

interface Props {
    projectName: string;
    usedStack: { lang: string; langIcon: React.ReactNode }[];
}

export const ProjectDetailsModal = ({ projectName, usedStack }: Props) => {
    return (
        <>
            <ProjectDetailsBackdrop />
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[80%] z-10 border border-[#414141] p-4 rounded-md bg-[#111] overflow-y-auto">
                <motion.section
                    initial={{ opacity: 0.75, translateY: '50%' }}
                    animate={{ opacity: 1, translateY: 0 }}
                >
                    <DetailsIntroHeader projectName={projectName} />
                    <ProjectSummary projectName={projectName} />
                    <h2 className="flex gap-2 items-center my-4 text-[#fff] text-3xl font-semibold">Used stack <BsStack color="#2dc284" /></h2>
                    <ProjectUsedStack usedLanguages={usedStack} />
                    <ProjectFeatures projectName={projectName} />
                    <ProjectPreviewLinks projectName={projectName} />
                </motion.section>
            </div>
        </>
    );
};
