import { motion } from 'framer-motion';
import { NavLangListItem } from './NavLangListItem';
import { LangContext } from '../../../contexts/LangContext/langContext';
import { useContext } from 'react';

interface Props {
    isListOpen: boolean;
}

export const NavLangList = ({ isListOpen }: Props) => {
    const { updateLang } = useContext(LangContext);

    return (
        <motion.ul
            initial={{ scaleY: 0 }}
            animate={isListOpen ? { scaleY: 1, translateY: '100%' } : { scaleY: 0, translateY: '100%' }}
            className={`absolute flex flex-col -bottom-1 translate-y-full text-center origin-top border border-[#313131] overflow-hidden rounded-sm overflow-hidden" ${
                isListOpen && 'scale-y-0'
            }`}
            onClick={updateLang}
        >
            <NavLangListItem langOpt="pl" />
            <NavLangListItem langOpt="en" />
        </motion.ul>
    );
};
