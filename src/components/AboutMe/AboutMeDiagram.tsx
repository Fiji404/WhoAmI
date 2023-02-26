import { Variants, motion } from 'framer-motion';
import { AboutSkills } from './AboutSkills';
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

export const AboutMeDiagram = () => {
    const { t } = useTranslation();
    return (
        <div className="mt-10 min-h-[400px] flex flex-col justify-center gap-4 mx-auto backdrop-blur-sm p-4 w-[95%] max-w-[1500px]">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={variants}
                className="diagram-row grow"
            >
                <h2 className="diagram-label">{t('Username')}</h2>
                <p className="diagram-desc">{t('Fiji404 or Radek')}</p>
            </motion.div>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={variants}
                className="diagram-row grow"
            >
                <h2 className="diagram-label">{t("Description")}</h2>
                <p className="diagram-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque corporis accusantium
                    tenetur? Nam aperiam ipsa commodi ea voluptate saepe laboriosam!
                </p>
            </motion.div>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={variants}
                className="diagram-row grow"
            >
                <h2 className="diagram-label">{t("My career")}</h2>
                <p className="diagram-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ab esse, totam consequatur
                    animi ullam explicabo velit ipsam, quae assumenda veniam in, eius illum tenetur?
                </p>
            </motion.div>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={variants}
                className="diagram-row grow"
            >
                <h2 className="diagram-label">{t("Skills")}</h2>
                <AboutSkills />
            </motion.div>
        </div>
    );
};