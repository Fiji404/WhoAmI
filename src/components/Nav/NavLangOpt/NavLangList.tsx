import { motion } from 'framer-motion';
import { NavLangListItem } from './NavLangListItem';
import { LangContext } from '@/contexts/LangContext/langContext';
import { useContext } from 'react';
import plFlag from '/src/assets/pl.svg';
import usaFlag from '/src/assets/usa.svg';

const LANGUAGES = [
    {
        langName: 'pl',
        icon: plFlag,
        alt: 'Poland flag',
    },
    {
        langName: 'en',
        icon: usaFlag,
        alt: 'USA flag',
    },
];

interface Props {
    isListOpen: boolean;
}

export const NavLangList = ({ isListOpen }: Props) => {
    const { updateLang } = useContext(LangContext);

    return (
        <motion.ul
            initial={{ scaleY: 0 }}
            animate={
                isListOpen
                    ? { scaleY: 1, translateX: '-50%', translateY: '100%' }
                    : { scaleY: 0, translateX: '-50%', translateY: '100%' }
            }
            className={`w-max absolute flex flex-col -bottom-1 left-0 text-center origin-top border border-[#313131] rounded-sm ${
                isListOpen && 'scale-y-0'
            }`}
            onClick={updateLang}
        >
            {LANGUAGES.map(props => (
                <NavLangListItem key={props.langName} {...props} />
            ))}
        </motion.ul>
    );
};
