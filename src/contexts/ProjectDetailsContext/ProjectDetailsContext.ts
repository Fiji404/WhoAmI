import { createContext } from 'react';

export const ProjectDetailsContext = createContext({
    isProjectDetailsOpen: false,
    openProjectDetailsHandler() {},
    closeProjectDetailsHandler() {},
});
