import { Nav, WelcomeHeader, AboutMe, FeaturedProjects, ContactMe, Footer, ParticlesBg } from './components';
import { LangProvider } from './contexts/LangContext/LangProvider';

export const App = () => {
    return (
        <LangProvider>
            <ParticlesBg />
            <Nav />
            <WelcomeHeader />
            <AboutMe />
            <FeaturedProjects />
            <ContactMe />
            <Footer />
        </LangProvider>
    );
};
