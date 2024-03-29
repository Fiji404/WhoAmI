import { FormActionTypes } from '@/types/hooks/UseForm/UseForm';
import { motion, MotionStyle } from 'framer-motion';
import { Dispatch } from 'react';
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
    framerAnimations: Record<string, MotionStyle>;
    dispatch: Dispatch<{ type: FormActionTypes; value: string }>;
}

export const FormControls = ({ framerAnimations, dispatch }: Props) => {
    const { t } = useTranslation();
    return (
        <>
            {FORM_CONTROLS.map(({ Element, placeholder, classes, actionType }) => (
                <Element
                    key={placeholder}
                    {...framerAnimations}
                    className={`input ${classes ? classes : ''}`}
                    onChange={e =>
                        dispatch({ type: actionType as FormActionTypes, value: e.target.value })
                    }
                    placeholder={t(placeholder)!}
                    viewport={{ once: true }}
                />
            ))}
        </>
    );
};
