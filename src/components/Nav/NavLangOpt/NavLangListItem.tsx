import { useContext } from 'react';
import { LangContext } from '../../../contexts/LangContext/langContext';

interface Props {
    langOpt: string;
}

export const NavLangListItem = ({ langOpt }: Props) => {
    const { lang } = useContext(LangContext);
    return (
        <li className="grow">
            <button
                className={`lang-opt w-full rounded-tr-sm rounded-tl-sm ${
                    lang === langOpt ? 'text-white' : 'text-[#a5a5a5]'
                }`}
            >
                {langOpt}
            </button>
        </li>
    );
};
