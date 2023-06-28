import { motion } from 'framer-motion';
import { NavLangListItem } from './NavLangListItem/NavLangListItem';
import { LangContext } from '@/contexts/LangContext/langContext';
import { useContext } from 'react';
import PLFlag from '/src/assets/pl.svg';
import USAFlag from '/src/assets/usa.svg';

const APP_LANGUAGES = [
    {
        langName: 'pl',
        icon: PLFlag,
        alt: 'Poland flag'
    },
    {
        langName: 'en',
        icon: USAFlag,
        alt: 'USA flag'
    }
];

interface Props {
    isLangListActive: boolean;
}

export const NavLangList = ({ isLangListActive }: Props) => {
    const { updateLang } = useContext(LangContext);

    return (
        <motion.ul
            initial={{ scaleY: 0 }}
            animate={
                isLangListActive
                    ? { scaleY: 1, translateX: '-50%', translateY: '100%' }
                    : { scaleY: 0, translateX: '-50%', translateY: '100%' }
            }
            className={`w-max absolute flex flex-col -bottom-1 left-0 text-center origin-top border border-[#313131] rounded-sm ${
                isLangListActive && 'scale-y-0'
            }`}
            onClick={updateLang}
        >
            {APP_LANGUAGES.map(props => (
                <NavLangListItem key={props.langName} {...props} />
            ))}
        </motion.ul>
    );
};
