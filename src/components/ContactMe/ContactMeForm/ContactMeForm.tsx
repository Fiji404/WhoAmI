import { useTranslation } from 'react-i18next';
import { ContactMeFormInput } from './ContactMeFormInput';
import { motion } from 'framer-motion';
import { ChangeEvent, useRef, useState } from 'react';

const variants = {
    hidden: {
        translateY: '100%',
        opacity: 0.7,
        transition: (delay: number) => ({ type: 'bounce', duration: 5, delay: delay * 3 }),
    },
    visible: {
        translateY: 0,
        opacity: 1,
    },
};

export const ContactMeForm = () => {
    const [emailFullName, setEmailFullName] = useState('');
    const [emailSubject, setEmailSubject] = useState('');
    const [emailMessage, setEmailMessage] = useState('');

    const changeFullNameHandler = ({ target }: ChangeEvent<HTMLInputElement>) =>
        setEmailFullName(target.value);
    const changeSubjectHandler = ({ target }: ChangeEvent<HTMLInputElement>) => setEmailSubject(target.value);
    const changeMessageHandler = ({ target }: ChangeEvent<HTMLTextAreaElement>) => setEmailMessage(target.value);

    const { t } = useTranslation();
    return (
        <form className="mt-10 flex justify-center flex-col gap-3 z-10 w-[90%] max-w-[500px]">
            <ContactMeFormInput
                onChange={changeFullNameHandler}
                variants={variants}
                custom={1}
                placeholder="Full name"
                name="Full name"
            />
            <ContactMeFormInput
                onChange={changeSubjectHandler}

                variants={variants}
                custom={2}
                placeholder="Subject"
                name="mail"
                required={true}
            />
            <motion.textarea
                onChange={changeMessageHandler}
                custom={3}
                initial="hidden"
                whileInView="visible"
                variants={variants}
                name="message"
                className="input min-h-[100px]"
                placeholder={t("Hello 👋, I'm writing you because...")!}
            ></motion.textarea>
            <motion.a
                href={`mailto:fiji404.kontakt@gmail.com?subject=${emailFullName} ${emailSubject}&body=${emailMessage}`}
                custom={3}
                initial="hidden"
                whileInView="visible"
                variants={variants}
                className="input flex items-center w-fit mx-auto px-10 text-[#979797] hover:text-white hover:border-[#313131] hover:bg-[#181818b2] transition-colors"
            >
                {t('Send')}
            </motion.a>
        </form>
    );
};
