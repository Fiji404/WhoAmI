import { useTranslation } from 'react-i18next';
import { ContactMeFormInput } from './ContactMeFormInput';
import { motion } from 'framer-motion';

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
    const { t } = useTranslation();
    return (
        <form
            className="mt-10 flex justify-center flex-col gap-3 z-10 w-[90%] max-w-[500px]"
            action="https://formsubmit.io/send/fiji404.kontakt@gmail.com"
        >
            <ContactMeFormInput variants={variants} custom={1} placeholder="Full name" name="Full name" />
            <ContactMeFormInput
                variants={variants}
                custom={2}
                placeholder="E-mail"
                name="mail"
                required={true}
            />
            <motion.textarea
                custom={3}
                initial="hidden"
                whileInView="visible"
                variants={variants}
                name="message"
                className="input min-h-[100px]"
                defaultValue={t("Hello 👋, I'm writing you because...")!}
            ></motion.textarea>
            <input name="_redirect" type="hidden" id="name" value="" />
            <motion.button
                custom={3}
                initial="hidden"
                whileInView="visible"
                variants={variants}
                className="input w-fit mx-auto px-10 text-[#979797] hover:text-white hover:border-[#313131] hover:bg-[#181818b2] transition-colors"
            >
                {t('Send')}
            </motion.button>
        </form>
    );
};
