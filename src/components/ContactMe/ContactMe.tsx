import { useTranslation } from 'react-i18next';
import { SectionHeading } from '@components/UI/SectionHeading';
import { ContactMeForm } from './ContactForm/ContactForm';

export const ContactMe = () => {
    const { t } = useTranslation();
    return (
        <section id="contact" className="mt-20 flex items-center flex-col container">
            <SectionHeading text={t('Contact me')} />
            <ContactMeForm />
        </section>
    );
};
