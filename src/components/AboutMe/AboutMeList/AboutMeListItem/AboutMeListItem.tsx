import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface Props {
    title: string;
    content: string | React.ReactNode;
}

export const AboutMeListItem = ({ title, content }: Props) => {
    const { t } = useTranslation();
    return (
        <motion.li
            initial={{ opacity: 0, y: '100%' }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="diagram-row grow bg-[rgba(19,19,19,0.9)]"
        >
            <h2 className="diagram-label">{t(title)}</h2>
            {typeof content === 'string' ? <p className="diagram-desc">{t(content)}</p> : content}
        </motion.li>
    );
};
