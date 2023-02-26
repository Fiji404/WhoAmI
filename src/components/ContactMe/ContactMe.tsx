import { useTranslation } from 'react-i18next';
import { SectionHeading } from '../UI/SectionHeading';
import { ContactMeForm } from './ContactMeForm';
import { ContactMeSocials } from './ContactMeSocials';

export const ContactMe = () => {
    const { t } = useTranslation()
    return (
        <section id="contact" className="mt-20 container">
            <header>
                <SectionHeading text={t("Contact me")} />
            </header>
            <div className="flex justify-center gap-6 items-center">
                <ContactMeForm />
                <p className="mt-4 text-center text-[#757575]">{t("OR")}</p>
                <ContactMeSocials />
            </div>
        </section>
    );
};
