import { motion, Variants } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface Props {
    type?: string;
    placeholder: string;
    name: string;
    required?: boolean;
    custom: number;
    variants: Variants
}


export const ContactMeFormInput = ({ type, name, required, placeholder, variants, custom }: Props) => {
    const { t } = useTranslation();

    return (
        <motion.input
            custom={custom}
            initial="hidden"
            whileInView="visible"
            variants={variants}
            name={name}
            className="input"
            placeholder={t(placeholder)!}
            type={type || 'text'}
            required={required || false}
        />
    );
};
