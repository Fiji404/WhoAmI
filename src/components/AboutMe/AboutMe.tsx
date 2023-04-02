import { useTranslation } from 'react-i18next';
import { AboutMeDiagram } from '@components/index';
import { SectionHeading } from '@components/UI/SectionHeading';

export const AboutMe = () => {
    const { t } = useTranslation();
    return (
        <section id="about" className="mt-20">
            <SectionHeading text={t('Facts about me')} />
            <AboutMeDiagram />
        </section>
    );
};
