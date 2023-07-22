interface Props {
    href: string;
    text: string;
}

export const NavItem = ({ href, text }: Props) => {
    return (
        <li>
            <a className="nav-item" href={href}>
                {text}
            </a>
        </li>
    );
};
