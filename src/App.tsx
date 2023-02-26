import { useEffect, useState } from 'react';
import { Nav, WelcomeHeader, AboutMe, FeaturedProjects, ParticlesBg, ContactMe, Footer } from './components';
import { useTranslation } from 'react-i18next';

export const App = () => {
    const { i18n } = useTranslation();
    const [currentLang, setCurrentLang] = useState(() => localStorage.getItem('lang') || 'en');

    useEffect(() => {
        localStorage.setItem('lang', currentLang);
        i18n.changeLanguage(currentLang);
    }, [currentLang]);

    const changeLanguageHandler = ({ target }: React.MouseEvent) => {
        const chosenLanguage = (target as Element).textContent;
        if (chosenLanguage) setCurrentLang(chosenLanguage);
    };

    return (
        <>
            <ParticlesBg particlesID="particles-header" />
            <Nav currentLang={currentLang} onLanguageChange={changeLanguageHandler} />
            <WelcomeHeader />
            <AboutMe />
            <FeaturedProjects />
            <ContactMe />
            <Footer />
        </>
    );
};
