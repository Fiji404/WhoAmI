import { motion } from 'framer-motion';
import {
    Backdrop,
    ProjectHeader,
    ProjectDesc,
    ProjectFeatures,
    ProjectPreviewLinks,
    ProjectPreviewImages
} from './';
import { TechStackItem, TechStackList } from '@/components/UI/TechStackList/TechStackList';
import { RiStackFill } from 'react-icons/ri';
import { createPortal } from 'react-dom';

interface Props {
    prjName: string;
    techStackList: TechStackItem[];
}

export const ProjectModal = ({ prjName, techStackList }: Props) => {
    return (
        <>
            {createPortal(<Backdrop prjName={prjName} />, document.body)}
            <div className="flex flex-col fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] z-10 border border-accent rounded-md bg-[#111]">
                <motion.section
                    initial={{ opacity: 0.75, translateY: '50%' }}
                    animate={{ opacity: 1, translateY: 0 }}
                >
                    <ProjectHeader prjName={prjName} />
                    <div className="px-4 pb-3 max-h-[65vh] overflow-y-auto">
                        <ProjectDesc prjName={prjName} />
                        <h2 className="flex gap-2 items-center my-4 text-white text-3xl font-semibold">
                            Tech stack <RiStackFill className="text-[#df4a45]" />
                        </h2>
                        <TechStackList techStackList={techStackList} />
                        <ProjectFeatures prjName={prjName} />
                        <ProjectPreviewImages />
                        <ProjectPreviewLinks prjName={prjName} />
                    </div>
                </motion.section>
            </div>
        </>
    );
};
