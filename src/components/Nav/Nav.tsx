import { NavLogo } from '@components/index';
import { motion } from 'framer-motion';
import { NavLangBtn, NavList, MobileHamburgerBtn } from './';
import { useNav } from '@/hooks/useNav/useNav';

export const Nav = () => {
    const { navState, dispatchNavState } = useNav();

    return (
        <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-[rgba(19,19,19,0.97)] py-3 px-5 border-b border-b-accent sticky top-0 w-full z-10 flex items-center justify-between flex-wrap"
        >
            <NavLogo />
            <div className="flex items-center gap-2 relative">
                <NavList className="smMax:hidden smMin:flex" />
                <NavLangBtn
                    navDispatch={dispatchNavState}
                    isLangListActive={navState.isLangListActive}
                />
                <MobileHamburgerBtn navDispatch={dispatchNavState} />
            </div>
            {navState.isMobileNavActive && (
                <NavList
                    className="smMax:mobile-nav smMin:hidden"
                    isMobileNavActive={navState.isMobileNavActive}
                />
            )}
        </motion.nav>
    );
};
