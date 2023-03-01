import { BiMenuAltRight } from 'react-icons/bi';

export const NavMobileBtn = () => {
    return (
        <li className="hidden sm:block">
            <button className="nav-item p-1">
                <BiMenuAltRight fontSize="1.7rem" color="#fff" />
            </button>
        </li>
    );
};
