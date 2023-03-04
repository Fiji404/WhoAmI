import { useState } from 'react';
import { NavLangList } from './NavLangList';
import { IoLanguage } from 'react-icons/io5';

interface Props {
    onLangListOpen(): void;
    isLangListOpen: boolean
}

export const NavLangBtn = ({ onLangListOpen, isLangListOpen }: Props) => {
    return (
        <div className="relative">
            <button
                onClick={onLangListOpen}
                aria-label="change language preference"
                className="nav-item p-[5px] aspect-square relative"
            >
                <IoLanguage fontSize="1.3rem" />
            </button>
            <NavLangList isListOpen={isLangListOpen} />
        </div>
    );
};
