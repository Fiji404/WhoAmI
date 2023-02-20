import { NavbarItem } from './NavbarItem';
import { NavbarLogo } from './NavbarLogo';

const PAGE_LINKS = [
    { id: crypto.randomUUID(), href: '#about', text: 'About me' },
    { id: crypto.randomUUID(), target: '_blank', href: 'https://github.com/Fiji404', text: 'Portfolio' },
    { id: crypto.randomUUID(), href: '#contact', text: 'Contact me' },
];

export const Navbar = () => {
    return (
        <nav className="bg-[#151515] py-3 px-5 border-b border-b-[#2b2b2b] flex justify-between items-center">
            <NavbarLogo />
            <ul className="flex gap-3 text-[#cecece] font-semibold">
                {PAGE_LINKS.map(({ href, text, target, id }) => (
                    <NavbarItem key={id} className="nav-item" {...{ href, text, target }} />
                ))}
            </ul>
        </nav>
    );
};
