import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface Props {
    type?: string;
    placeholder: string;
    required?: boolean;
    onChange({ target }: React.ChangeEvent): void;
}

export const ContactMeFormInput = ({ type, required, placeholder, onChange }: Props) => {
    const { t } = useTranslation();

    return (
        <motion.input
            onChange={onChange}
            initial={{ translateY: '100%', opacity: 0.7 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="input"
            placeholder={t(placeholder)!}
            type={type || 'text'}
            required={required || false}
        />
    );
};
