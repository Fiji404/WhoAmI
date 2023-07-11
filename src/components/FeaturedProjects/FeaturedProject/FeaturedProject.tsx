import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { useContext } from 'react';
import { ProjectModal } from '../ProjectModal/ProjectModal';
import { createPortal } from 'react-dom';
import { FeaturedProjectStack } from './FeaturedProjectStack/FeaturedProjectStack';
import { ProjectDetailsContext } from '@/contexts/ProjectDetailsContext/ProjectDetailsContext';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface Props {
    name: string;
    description: string;
    techList: { lang: string; langIcon: React.ReactNode }[];
}

export const FeaturedProject = ({ name, description, techList }: Props) => {
    const { isProjectModalOpen, toggleProjectModalVisibility } = useContext(ProjectDetailsContext);
    const { t } = useTranslation();

    return (
        <li>
            {isProjectModalOpen[name] &&
                createPortal(<ProjectModal {...{ techList, name }} />, document.body)}
            <motion.section
                initial={{ opacity: 0.7, translateY: '50%' }}
                whileInView={{ opacity: 1, translateY: 0 }}
                viewport={{ once: true }}
                className="grow p-4 bg-[rgba(19,19,19,0.9)] border border-accent rounded-md max-w-[550px] relative isolate overflow-hidden"
            >
                <h2 className="text-white font-semibold text-center text-4xl rounded-md">{name}</h2>
                <p className="mt-5 mb-3 text-center text-lg text-[#a0a0a0]">{t(description)}</p>
                <FeaturedProjectStack techList={techList} />
                <button
                    onClick={() => toggleProjectModalVisibility(name)}
                    className="mt-6 mx-auto w-[90%] flex justify-center items-center gap-2 bg-[#141414] text-[#a0a0a0] py-2 px-3 border border-accent rounded-full hover:bg-[#161616] hover:text-white active:bg-[#161616] transition-colors"
                >
                    {t('Learn more')} <BiDotsHorizontalRounded />
                </button>
            </motion.section>
        </li>
    );
};
