import { useContext, useState } from 'react';
import { Variants, motion } from 'framer-motion';
import { ProjectDetailsContext } from '@/contexts/ProjectDetailsContext/ProjectDetailsContext';

interface Props {
    path: string;
    desc: string;
}

const variants: Variants = {
    open: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        translate: '-50% -50%',
        zIndex: 20
    },
    closed: {  maxWidth: '450px', objectFit: 'cover' }
};

export const ProjectPreviewImage = ({ path, desc }: Props) => {
    const { toggleProjectPreviewImageVisibility } = useContext(ProjectDetailsContext);
    const [isCurrentImgVisible, setIsCurrentImgVisible] = useState(false);
    return (
        <motion.img
            layout="size"
            onClick={() => {
                toggleProjectPreviewImageVisibility();
                setIsCurrentImgVisible(c => !c);
            }}
            animate={isCurrentImgVisible ? 'open' : 'closed'}
            variants={variants}
            className="text-white border border-[#2b2b2b] rounded-md cursor-pointer hover:border-[#383838] hover:brightness-105 transition-colors snap-start"
            src={path}
            alt={desc}
        />
    );
};
