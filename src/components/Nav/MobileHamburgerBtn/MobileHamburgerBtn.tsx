import { Action } from '@/types/hooks/UseNav/UseNav';
import { Dispatch } from 'react';
import { BiMenuAltRight } from 'react-icons/bi';

interface Props {
    navDispatch: Dispatch<Action>;
}

export const MobileHamburgerBtn = ({ navDispatch }: Props) => {
    return (
        <button
            onClick={() => navDispatch({ type: 'MOBILE_NAV_TOGGLE' })}
            className="nav-item p-1 hidden smMax:block"
        >
            <BiMenuAltRight className="text-2xl text-white" />
        </button>
    );
};
