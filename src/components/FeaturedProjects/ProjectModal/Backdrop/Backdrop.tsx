import { useContext } from 'react';
import { ProjectDetailsContext } from '@/contexts/ProjectDetailsContext/ProjectDetailsContext';

interface Props {
    prjName: string;
}

export const Backdrop = ({ prjName }: Props) => {
    const { toggleProjectModalVisibility } = useContext(ProjectDetailsContext);

    const backdropClickHandler = () => {
        toggleProjectModalVisibility(prjName);
    };

    return (
        <div
            onClick={backdropClickHandler}
            aria-hidden="true"
            className={`fixed inset-0 bg-[rgba(15,15,15,0.87)] z-10`}
        ></div>
    );
};
