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
import { useTranslation } from 'react-i18next';

interface Props {
    prjName: string;
    techStackList: TechStackItem[];
}

export const ProjectModal = ({ prjName, techStackList }: Props) => {
    const { t } = useTranslation();

    return (
        <>
            {createPortal(<Backdrop prjName={prjName} />, document.body)}
            <motion.section
                initial={{ opacity: 0.4, width: 0, height: 0 }}
                animate={{ opacity: 1, width: '90%', height: 'auto' }}
                transition={{ bounce: 0 }}
                layout="size"
                className="flex flex-col fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 border border-accent rounded-md bg-[#111]"
            >
                <ProjectHeader prjName={prjName} />
                <div className="px-4 pb-3 max-h-[65vh] overflow-y-auto">
                    <ProjectDesc prjName={prjName} />
                    <h2 className="flex gap-2 items-center my-4 text-white text-3xl font-semibold">
                        {t('Tech stack')} <RiStackFill className="text-[#df4a45]" />
                    </h2>
                    <TechStackList techStackList={techStackList} />
                    <ProjectFeatures prjName={prjName} />
                    <ProjectPreviewImages />
                    <ProjectPreviewLinks prjName={prjName} />
                </div>
            </motion.section>
        </>
    );
};
