import { useTranslation } from 'react-i18next';
import { AboutMeList, SectionHeading } from '@components/index';

export const AboutMe = () => {
    const { t } = useTranslation();
    return (
        <section id="about" className="mt-20">
            <SectionHeading text={t('Facts about me')} />
            <AboutMeList />
        </section>
    );
};
