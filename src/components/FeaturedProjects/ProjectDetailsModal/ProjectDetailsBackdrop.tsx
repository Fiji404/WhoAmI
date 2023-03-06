import { useContext } from 'react';
import { ProjectDetailsContext } from '@/contexts/ProjectDetailsContext/ProjectDetailsContext';

interface Props {
    projectName: string;
}

export const ProjectDetailsBackdrop = ({projectName}: Props) => {
    const { closeProjectDetailsHandler } = useContext(ProjectDetailsContext);
    return (
        <div
            onClick={() => closeProjectDetailsHandler(projectName)}
            aria-hidden="true"
            className="z-10 fixed inset-0 bg-[rgba(15,15,15,0.87)]"
        ></div>
    );
};
