interface Props {
    href: string;
    text: string;
    className: string;
    target?: string;
}

export const NavbarItem = ({ href, className, text, target }: Props) => {
    return (
        <li>
            <a {...{ href, className, target }}>{text}</a>
        </li>
    );
};
