import { useContext } from 'react';
import { LangContext } from '@/contexts/LangContext/langContext';

interface Props {
    langName: string;
    icon: string;
    alt: string;
}

export const NavLangListItem = ({ langName, icon, alt }: Props) => {
    const { lang } = useContext(LangContext);
    return (
        <li
            className={`grow flex cursor-pointer items-center gap-2 py-1 px-2 ${
                lang === langName ? 'bg-[#242424] text-white' : 'bg-[#1d1d1d] text-[#a5a5a5]'
            } hover:bg-[#242424] transition-colors`}
        >
            <button className="uppercase w-full rounded-tr-sm rounded-tl-sm">{langName}</button>
            <img className="w-[18px]" src={icon} alt={alt} />
        </li>
    );
};
