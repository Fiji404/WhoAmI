import { PropsWithChildren, useState } from 'react';
import { ProjectDetailsContext } from './ProjectDetailsContext';

export const ProjectDetailsProvider = ({ children }: PropsWithChildren) => {
    const [isProjectDetailsOpen, setIsProjectDetailsOpen] = useState(false);
    const openProjectDetailsHandler = () => {
        setIsProjectDetailsOpen(true);
    };

    const closeProjectDetailsHandler = () => {
        setIsProjectDetailsOpen(false);
    };

    return (
        <ProjectDetailsContext.Provider
            value={{ openProjectDetailsHandler, closeProjectDetailsHandler, isProjectDetailsOpen }}
        >
            {children}
        </ProjectDetailsContext.Provider>
    );
};
