import { BiMenuAltRight } from 'react-icons/bi';

interface Props {
    onNavOpen(): void;
}

export const NavMobileBtn = ({ onNavOpen }: Props) => {
    return (
        <button onClick={onNavOpen} className="nav-item p-1 hidden sm:block">
            <BiMenuAltRight fontSize="1.5rem" color="#fff" />
        </button>
    );
};
