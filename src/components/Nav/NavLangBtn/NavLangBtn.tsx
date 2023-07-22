import { NavActions } from '@/types/hooks/UseNav/UseNav';
import { NavLangList } from '../NavLangList/NavLangList';
import { IoLanguage } from 'react-icons/io5';
import { Dispatch } from 'react';

interface Props {
    navDispatch: Dispatch<NavActions>;
    isLangListActive: boolean;
}

export const NavLangBtn = ({ navDispatch, isLangListActive }: Props) => {
    return (
        <div className="relative">
            <button
                onClick={() => navDispatch({ type: 'LANG_LIST_TOGGLE' })}
                aria-label="Change language preference"
                className="nav-item p-[5px] aspect-square relative"
            >
                <IoLanguage className="text-xl" />
            </button>
            <NavLangList isLangListActive={isLangListActive} navDispatch={navDispatch} />
        </div>
    );
};
