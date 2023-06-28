import { Action } from '@/types/hooks/UseNav';
import { useReducer } from 'react';

const INITIAL_NAV_STATE = {
    isMobileNavActive: false,
    isLangListActive: false
};

type InitialNavState = typeof INITIAL_NAV_STATE;

export const navReducer = (state: InitialNavState, action: Action): InitialNavState => {
    if (action.type === 'MOBILE_NAV_TOGGLE') {
        return { isLangListActive: false, isMobileNavActive: !state.isMobileNavActive };
    }
    if (action.type === 'LANG_LIST_TOGGLE') {
        return { isMobileNavActive: false, isLangListActive: !state.isLangListActive };
    }
    return INITIAL_NAV_STATE;
};

export const useNav = () => {
    const [navState, dispatch] = useReducer(navReducer, INITIAL_NAV_STATE);

    return { navState, dispatchNavState: dispatch };
};
