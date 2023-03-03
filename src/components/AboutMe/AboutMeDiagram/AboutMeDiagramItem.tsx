import { motion, Variants } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface Props {
    rowLabel: string;
    rowContent: string | JSX.Element;
}

export const AboutMeDiagramItem = ({ rowLabel, rowContent }: Props) => {
    const { t } = useTranslation();
    return (
        <motion.li
            initial={{ opacity: 0, y: '100%' }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="diagram-row grow"
        >
            <h2 className="diagram-label">{t(rowLabel)}</h2>
            {typeof rowContent === 'string' ? <p className="diagram-desc">{t(rowContent)}</p> : rowContent}
        </motion.li>
    );
};
