import {
    Nav,
    WelcomeHeader,
    AboutMe,
    FeaturedProjects,
    ContactMe,
    Footer,
    ParticlesBg
} from './components';
import { LangProvider } from './contexts/LangContext/LangProvider';

export const App = () => {
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
