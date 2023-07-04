import { useTranslation } from 'react-i18next';
import { motion, AnimationOptions } from 'framer-motion';
import { useForm } from '@/hooks/useForm/useForm';
import { FormControls } from './FormControls/FormControls';

const FRAMER_ANIMATIONS = {
    initial: { translateY: '100%', opacity: 0.7 },
    whileInView: { translateY: 0, opacity: 1 }
};

export const ContactMeForm = () => {
    const { formData } = useForm();

    const { t } = useTranslation();
    return (
        <form className="mt-10 flex justify-center flex-col gap-3 z-10 w-[90%] max-w-[500px]">
            <FormControls framerAnimations={FRAMER_ANIMATIONS} />
            <motion.a
                href={`mailto:fiji404.kontakt@gmail.com?subject=${formData.fullName} ${formData.emailSubject}&body=${formData.emailText}`}
                {...FRAMER_ANIMATIONS}
                viewport={{ once: true }}
                className="input flex items-center w-fit mx-auto px-10 text-[#979797] hover:text-white hover:border-[#313131] hover:bg-[#181818b2] transition-colors"
            >
                {t('Send')}
            </motion.a>
        </form>
    );
};
