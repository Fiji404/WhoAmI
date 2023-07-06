import { PropsWithChildren, useState } from 'react';
import { ProjectDetailsContext } from './ProjectDetailsContext';

type ProjectNames = 'Quick Tips' | 'My Todos';

export const ProjectDetailsProvider = ({ children }: PropsWithChildren) => {
    const [isProjectModalOpen, setIsProjectModalOpen] = useState({
        'Quick Tips': false,
        'My Todos': false
    });
    const [isProjectPreviewImageOpen, setIsProjectPreviewImageOpen] = useState(false);

    const toggleProjectModalVisibility = (projectName: ProjectNames) => {
        setIsProjectModalOpen(p => ({
            ...p,
            [projectName]: !p[projectName]
        }));
    };

    const toggleProjectPreviewImageVisibility = () => {
        setIsProjectPreviewImageOpen(p => !p);
    };

    return (
        <ProjectDetailsContext.Provider
            value={{
                toggleProjectModalVisibility,
                isProjectModalOpen,
                isProjectPreviewImageOpen,
                toggleProjectPreviewImageVisibility
            }}
        >
            {children}
        </ProjectDetailsContext.Provider>
    );
};
