import { motion, Variants } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const variants: Variants = {
    hidden: {
        opacity: 0,
        y: '100%',
        transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
    },
};

interface Props {
    rowLabel: string;
    rowContent: string | JSX.Element;
}

export const AboutMeDiagramItem = ({ rowLabel, rowContent }: Props) => {
    const { t } = useTranslation();
    return (
        <motion.li
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={variants}
            className="diagram-row grow"
        >
            <h2 className="diagram-label">{t(rowLabel)}</h2>
            {typeof rowContent === 'string' ? <p className="diagram-desc">{t(rowContent)}</p> : rowContent}
        </motion.li>
    );
};