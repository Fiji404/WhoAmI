import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { useContext } from 'react';
import { ProjectModal } from '../ProjectModal/ProjectModal';
import { createPortal } from 'react-dom';
import { ProjectDetailsContext } from '@/contexts/ProjectDetailsContext/ProjectDetailsContext';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { TechStackList } from '@/components/UI';
import { TechStackItem } from '@/components/UI/TechStackList/TechStackList';

interface Props {
    prjName: string;
    description: string;
    techStackList: TechStackItem[];
}

export const FeaturedProject = ({ prjName, description, techStackList }: Props) => {
    const { isProjectModalOpen, toggleProjectModalVisibility } = useContext(ProjectDetailsContext);
    const { t } = useTranslation();

    return (
        <li>
            {isProjectModalOpen[prjName] &&
                createPortal(<ProjectModal {...{ techStackList, prjName }} />, document.body)}
            <motion.section
                initial={{ opacity: 0.7, translateY: '50%' }}
                whileInView={{ opacity: 1, translateY: 0 }}
                viewport={{ once: true }}
                className="h-full flex justify-between flex-col p-4 bg-[rgba(19,19,19,0.9)] border border-accent rounded-md max-w-[550px] relative overflow-hidden"
            >
                <h2 className="text-white font-semibold text-center text-4xl rounded-md">{prjName}</h2>
                <p className="mt-5 mb-3 text-center text-lg text-[#a0a0a0]">{t(description)}</p>
                <TechStackList techStackList={techStackList} />
                <button
                    onClick={() => toggleProjectModalVisibility(prjName)}
                    className="mt-6 mx-auto w-[90%] flex justify-center items-center gap-2 bg-[#141414] text-[#a0a0a0] py-2 px-3 border border-accent rounded-full hover:bg-[#161616] hover:text-white active:bg-[#161616] transition-colors"
                >
                    {t('Learn more')} <BiDotsHorizontalRounded />
                </button>
            </motion.section>
        </li>
    );
};
