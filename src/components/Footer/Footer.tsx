import { FooterSocials } from './FooterSocials/FooterSocials';
import { motion } from 'framer-motion';

export const Footer = () => {
    return (
        <motion.footer
            initial={{ translateY: '100%', opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="mt-10 py-5 border-t border-t-[#222222] bg-[rgba(19,19,19,0.79)]"
        >
            <FooterSocials />
        </motion.footer>
    );
};
