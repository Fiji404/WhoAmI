import { motion } from 'framer-motion';
import { Backdrop } from './Backdrop/Backdrop';
import { ProjectHeader } from './ProjectHeader/ProjectHeader';
import { ProjectDesc } from './ProjectDesc/ProjectDesc';
import { FeaturedProjectStack } from '../FeaturedProject/FeaturedProjectStack/FeaturedProjectStack';
import { ProjectFeatures } from './ProjectFeatures/ProjectFeatures';
import { ProjectPreviewLinks } from './ProjectLinks/ProjectLinks';
import { BsStack } from 'react-icons/bs';
import { ProjectPreviewImages } from './ProjectPreviewImages/ProjectPreviewImages';

interface Props {
    name: string;
    techList: { lang: string; langIcon: React.ReactNode }[];
}

export const ProjectModal = ({ name, techList }: Props) => {
    return (
        <>
            <Backdrop name={name} />
            <div className="flex flex-col fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] z-10 border border-accent rounded-md bg-[#111]">
                <motion.section
                    initial={{ opacity: 0.75, translateY: '50%' }}
                    animate={{ opacity: 1, translateY: 0 }}
                >
                    <ProjectHeader name={name} />
                    <div className="px-4 pb-3 max-h-full h-[65vh] overflow-y-auto">
                        <ProjectDesc name={name} />
                        <h2 className="flex gap-2 items-center my-4 text-[#fff] text-3xl font-semibold">
                            Used stack <BsStack color="#2dc284" />
                        </h2>
                        <FeaturedProjectStack techList={techList} />
                        <ProjectFeatures name={name} />
                        <ProjectPreviewImages />
                        <ProjectPreviewLinks name={name} />
                    </div>
                </motion.section>
            </div>
        </>
    );
};
