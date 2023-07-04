import { useForm } from '@/hooks/useForm/useForm';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const FORM_CONTROLS = [
    { Element: motion.input, placeholder: 'Full name', actionType: 'FULL_NAME' },
    { Element: motion.input, placeholder: 'Subject', actionType: 'EMAIL_SUBJECT' },
    {
        Element: motion.textarea,
        classes: 'min-h-[100px] max-h-[250px]',
        placeholder: "Hello 👋, I'm writing you because...",
        actionType: 'EMAIL_TEXT'
    }
];

interface Props {
    framerAnimations: Record<string, object>;
}

export const FormControls = ({ framerAnimations }: Props) => {
    const { t } = useTranslation();
    const { dispatch } = useForm();
    return (
        <>
            {FORM_CONTROLS.map(({ Element, placeholder, classes }) => (
                <Element
                    {...framerAnimations}
                    className={`input ${classes ? classes : ''}`}
                    onChange={e => dispatch({ type: 'EMAIL_TEXT', value: e.target.value })}
                    placeholder={t(placeholder)!}
                    viewport={{ once: true }}
                />
            ))}
        </>
    );
};
