import { useTranslation } from 'react-i18next';
import { SectionHeading } from '@components/UI/SectionHeading';
import { ContactMeForm } from './ContactMeForm/ContactMeForm';

export const ContactMe = () => {
    const { t } = useTranslation()
    return (
        <section id="contact" className="mt-20 container">
            <header>
                <SectionHeading text={t("Contact me")} />
            </header>
            <div className="flex justify-center gap-6 items-center">
                <ContactMeForm />
            </div>
        </section>
    );
};
