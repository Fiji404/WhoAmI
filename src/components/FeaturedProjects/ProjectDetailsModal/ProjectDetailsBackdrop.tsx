import { useContext } from 'react';
import { ProjectDetailsContext } from '../../../contexts/ProjectDetailsContext/ProjectDetailsContext';

export const ProjectDetailsBackdrop = () => {
    const { closeProjectDetailsHandler } = useContext(ProjectDetailsContext);
    return (
        <div
            onClick={closeProjectDetailsHandler}
            aria-hidden="true"
            className="z-10 fixed inset-0 bg-[rgba(15,15,15,0.87)]"
        ></div>
    );
};
