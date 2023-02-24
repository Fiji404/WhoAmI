import { Nav, WelcomeHeader, AboutMe, FeaturedProjects, ParticlesBg, ContactMe } from './components';

export const App = () => {
    return (
        <>
            <ParticlesBg particlesID="particles-header" />
            <Nav />
            <WelcomeHeader />
            <AboutMe />
            <FeaturedProjects />
            <ContactMe />
            {/* <Footer /> */}
        </>
    );
};
