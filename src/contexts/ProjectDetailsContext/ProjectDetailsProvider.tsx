import { PropsWithChildren, useState } from 'react';
import { ProjectDetailsContext } from './ProjectDetailsContext';

type ProjectInfo = string;

export const ProjectDetailsProvider = ({ children }: PropsWithChildren) => {
    const [isProjectsDetailsOpen, setIsProjectsDetailsOpen] = useState({
        'Quick Tips': false,
        'My Todos': false
    });
    const openProjectDetailsHandler = (projectName: ProjectInfo) => {
        setIsProjectsDetailsOpen(prevProjectDetailsOpen => ({
            ...prevProjectDetailsOpen,
            [projectName]: true
        }));
    };

    const closeProjectDetailsHandler = (projectName: ProjectInfo) => {
        setIsProjectsDetailsOpen(prevProjectDetailsOpen => ({
            ...prevProjectDetailsOpen,
            [projectName]: false
        }));
    };

    return (
        <ProjectDetailsContext.Provider
            value={{ openProjectDetailsHandler, closeProjectDetailsHandler, isProjectsDetailsOpen }}
        >
            {children}
        </ProjectDetailsContext.Provider>
    );
};
