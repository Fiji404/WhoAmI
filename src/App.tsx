import { Nav, WelcomeHeader, AboutMe, FeaturedProjects, ParticlesBg, ContactMe, Footer } from './components';
import { LangProvider } from './contexts/Lang/LangProvider';

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
