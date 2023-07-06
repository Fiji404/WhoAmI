import {
    Nav,
    WelcomeHeader,
    AboutMe,
    FeaturedProjects,
    ContactMe,
    Footer,
    ParticlesBg
} from './components';
import { useContext } from 'react';
import { LangProvider } from './contexts/LangContext/LangProvider';
import { ProjectDetailsContext } from './contexts/ProjectDetailsContext/ProjectDetailsContext';

export const App = () => {
    const { isProjectModalOpen } = useContext(ProjectDetailsContext);
    const isAnyProjectModalOpen = Object.values(isProjectModalOpen).includes(true);
    return (
        <div className={`${isAnyProjectModalOpen ? 'h-full overflow-hidden' : ''}`}>
            <ParticlesBg />
            <LangProvider>
                <Nav />
                <WelcomeHeader />
                <AboutMe />
                <FeaturedProjects />
                <ContactMe />
                <Footer />
            </LangProvider>
        </div>
    );
};
