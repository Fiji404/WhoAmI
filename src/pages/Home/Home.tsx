import {
    ParticlesBg,
    Nav,
    WelcomeHeader,
    AboutMe,
    FeaturedProjects,
    ContactMe,
    Footer
} from '@/components';
import { LangProvider } from '@/contexts/LangContext/LangProvider';
import { ProjectDetailsContext } from '@/contexts/ProjectDetailsContext/ProjectDetailsContext';
import { useContext, useEffect } from 'react';

export const Home = () => {
    const { isProjectModalOpen } = useContext(ProjectDetailsContext);

    useEffect(() => {
        const isAnyProjectModalOpen = Object.values(isProjectModalOpen).includes(true);
        if (isAnyProjectModalOpen) document.body.classList.add('scroll-disabled');
        else document.body.classList.remove('scroll-disabled');
    }, [isProjectModalOpen]);

    return (
        <>
            <ParticlesBg />
            <LangProvider>
                <Nav />
                <WelcomeHeader />
                <AboutMe />
                <FeaturedProjects />
                <ContactMe />
                <Footer />
            </LangProvider>
        </>
    );
};
