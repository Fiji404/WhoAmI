interface Props {
    href: string;
    text: string;
    target?: string;
}

export const NavItem = ({ href, text, target }: Props) => {
    return (
        <li>
            <a className="nav-item" {...{ href, target }}>
                {text}
            </a>
        </li>
    );
};
