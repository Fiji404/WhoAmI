import { motion } from 'framer-motion';
import { ProjectDetailsBackdrop } from './ProjectDetailsBackdrop';
import { DetailsIntroHeader } from './ProjectIntro/ProjectIntroHeader';
import { ProjectSummary } from './ProjectIntro/ProjectSummary';
import { ProjectUsedStack } from '../FeaturedProject/ProjectUsedStack';
import { ProjectFeatures } from './ProjectFeatures';
import { ProjectPreviewLinks } from './ProjectPreviewLinks/ProjectPreviewLinks';
import { BsStack } from 'react-icons/bs';
import { ProjectPreviewImages } from './ProjectPreviewImages/ProjectPreviewImages';

interface Props {
    projectName: string;
    usedStack: { lang: string; langIcon: React.ReactNode }[];
}

export const ProjectDetailsModal = ({ projectName, usedStack }: Props) => {
    return (
        <>
            <ProjectDetailsBackdrop projectName={projectName} />
            <div className="flex flex-col fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] z-10 border border-[#414141] rounded-md bg-[#111]">
                <motion.section
                    initial={{ opacity: 0.75, translateY: '50%' }}
                    animate={{ opacity: 1, translateY: 0 }}
                >
                    <DetailsIntroHeader projectName={projectName} />
                    <div className="px-4 pb-3 max-h-full h-[65vh] overflow-y-auto">
                        <ProjectSummary projectName={projectName} />
                        <h2 className="flex gap-2 items-center my-4 text-[#fff] text-3xl font-semibold">
                            Used stack <BsStack color="#2dc284" />
                        </h2>
                        <ProjectUsedStack usedLanguages={usedStack} />
                        <ProjectFeatures projectName={projectName} />
                        <ProjectPreviewImages />
                        <ProjectPreviewLinks projectName={projectName} />
                    </div>
                </motion.section>
            </div>
        </>
    );
};
