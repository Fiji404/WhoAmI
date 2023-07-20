import { createContext } from 'react';

const isProjectModalOpen: Record<string, boolean> = {
    'Quick Tips': false,
    'Flaggy': false
};

export const ProjectDetailsContext = createContext({
    isProjectModalOpen,
    isProjectPreviewImageOpen: false,
    toggleProjectModalVisibility(projectName: string) {},
    toggleProjectPreviewImageVisibility() {}
});
