import { useTranslation } from 'react-i18next';
import { ContactMeFormInput } from './ContactFormInput';
import { motion } from 'framer-motion';
import { useState } from 'react';

export const ContactMeForm = () => {
    const [emailFullName, setEmailFullName] = useState('');
    const [emailSubject, setEmailSubject] = useState('');
    const [emailMessage, setEmailMessage] = useState('');

    const changeFullNameHandler = ({ target }: React.ChangeEvent<HTMLInputElement>) => setEmailFullName(target.value);
    const changeSubjectHandler = ({ target }: React.ChangeEvent<HTMLInputElement>) => setEmailSubject(target.value);
    const changeMessageHandler = ({ target }: React.ChangeEvent<HTMLTextAreaElement>) => setEmailMessage(target.value);

    const { t } = useTranslation();
    return (
        <form className="mt-10 flex justify-center flex-col gap-3 z-10 w-[90%] max-w-[500px]">
            <ContactMeFormInput onChange={changeFullNameHandler} placeholder="Full name" />
            <ContactMeFormInput onChange={changeSubjectHandler} placeholder="Subject" required={true} />
            <motion.textarea
                onChange={changeMessageHandler}
                initial={{ translateY: '100%', opacity: 0.7 }}
                whileInView={{ translateY: 0, opacity: 1 }}
                className="input min-h-[100px]"
                placeholder={t("Hello 👋, I'm writing you because...")!}
            ></motion.textarea>
            <motion.a
                href={`mailto:fiji404.kontakt@gmail.com?subject=${emailFullName} ${emailSubject}&body=${emailMessage}`}
                initial={{ translateY: '100%', opacity: 0.7 }}
                whileInView={{ translateY: 0, opacity: 1 }}
                className="input flex items-center w-fit mx-auto px-10 text-[#979797] hover:text-white hover:border-[#313131] hover:bg-[#181818b2] transition-colors"
            >
                {t('Send')}
            </motion.a>
        </form>
    );
};
