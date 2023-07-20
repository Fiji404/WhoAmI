import { useEffect, useState } from 'react';
import { Link } from 'wouter';

export const NavLogo = () => {
    const [isLogoClicked, setIsLogoClicked] = useState(false);
    const logoClickHandler = () => {
        setIsLogoClicked(c => !c);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        return () => setIsLogoClicked(false);
    }, [isLogoClicked]);

    return (
        <h1 className="text-white font-bold text-2xl">
            <Link onClick={logoClickHandler} to="/">
                Fiji<span className="text-base text-[#ff3c3c] animate-pulse">404</span>
            </Link>
        </h1>
    );
};
