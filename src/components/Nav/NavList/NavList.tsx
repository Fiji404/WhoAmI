import { NavItem } from '@/components';
import { useTranslation } from 'react-i18next';

interface Props {
    isMobileNavActive?: boolean;
    className: string;
}

const PAGE_LINKS = [
    { href: '#about', text: 'About me' },
    { href: '#projects', text: 'Portfolio' },
    { href: '#contact', text: 'Contact me' }
];

export const NavList = ({ isMobileNavActive, className }: Props) => {
    const { t } = useTranslation();
    return (
        <ul
            className={`flex gap-3 items-center text-[#fff] font-semibold rounded-sm ${className} ${
                isMobileNavActive ? 'smMax:mobile-open w-full' : ''
            }`}
        >
            {PAGE_LINKS.map(({ href, text }) => (
                <NavItem key={text} text={t(text)} {...{ href }} />
            ))}
        </ul>
    );
};
