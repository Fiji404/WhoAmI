import { useContext } from 'react';
import { ProjectDetailsContext } from '@/contexts/ProjectDetailsContext/ProjectDetailsContext';

interface Props {
    name: string;
}

export const Backdrop = ({ name }: Props) => {
    const {
        isProjectPreviewImageOpen,
        toggleProjectPreviewImageVisibility,
        toggleProjectModalVisibility
    } = useContext(ProjectDetailsContext);
    return (
        <div
            onClick={() => {
                if (isProjectPreviewImageOpen) return toggleProjectPreviewImageVisibility();
                toggleProjectModalVisibility(name);
            }}
            aria-hidden="true"
            className={`fixed isolate inset-0 bg-[rgba(15,15,15,0.87)] ${
                isProjectPreviewImageOpen ? 'z-[10]' : 'z-10'
            }`}
        ></div>
    );
};
