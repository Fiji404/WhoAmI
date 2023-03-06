import { createContext } from 'react';

type ProjectInfo = string;

const isProjectsDetailsOpen: Record<string, boolean> = {
    'Quick Tips': false,
    'My Todos': false,
};

export const ProjectDetailsContext = createContext({
    isProjectsDetailsOpen,
    openProjectDetailsHandler(projectName: ProjectInfo) {},
    closeProjectDetailsHandler(projectName: ProjectInfo) {},
});
