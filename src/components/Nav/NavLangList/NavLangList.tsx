import { motion } from 'framer-motion';
import { NavLangListItem } from './NavLangListItem/NavLangListItem';
import { LangContext } from '@/contexts/LangContext/langContext';
import { Dispatch, useContext } from 'react';
import PLFlag from '/src/assets/pl.svg';
import USAFlag from '/src/assets/usa.svg';
import { NavActions } from '@/types/hooks/UseNav/UseNav';

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
    navDispatch: Dispatch<NavActions>;
}

export const NavLangList = ({ isLangListActive, navDispatch }: Props) => {
    const { updateLang } = useContext(LangContext);

    const changeLanguageHandler = ({ target }: React.MouseEvent) => {
        if (!(target instanceof Element)) return;
        const chosenLanguage = target.closest('li')?.querySelector('button')?.textContent;
        if (chosenLanguage === 'pl' || chosenLanguage === 'en') updateLang(chosenLanguage);
        navDispatch({ type: 'LANG_LIST_TOGGLE' });
    };

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
            onClick={changeLanguageHandler}
        >
            {APP_LANGUAGES.map(props => (
                <NavLangListItem key={props.langName} {...props} />
            ))}
        </motion.ul>
    );
};
