import { motion, Variants } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ChangeEvent, forwardRef, Ref } from 'react';

interface Props {
    type?: string;
    placeholder: string;
    name: string;
    required?: boolean;
    custom: number;
    variants: Variants;
    onChange({ target }: ChangeEvent): void;
}

export const ContactMeFormInput = ({
    type,
    name,
    required,
    placeholder,
    variants,
    custom,
    onChange,
}: Props) => {
    const { t } = useTranslation();

    return (
        <motion.input
            onChange={onChange}
            custom={custom}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={variants}
            name={name}
            className="input"
            placeholder={t(placeholder)!}
            type={type || 'text'}
            required={required || false}
        />
    );
};
