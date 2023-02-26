import { useTranslation } from 'react-i18next';
import { AboutMeDiagram } from '..';
import { SectionHeading } from '../UI/SectionHeading';

export const AboutMe = () => {
    const { t } = useTranslation();
    return (
        <section id="about" className="mt-20 min-h-[500px]">
            <SectionHeading text={t('Facts about me')} />
            <AboutMeDiagram />
        </section>
    );
};
