interface Props {
    socialName: string;
    socialIcon: JSX.Element;
    URL: string;
}

export const FooterSocialItem = ({ socialName, socialIcon, URL }: Props) => {
    return (
        <li>
            <a target="_blank" className="btn" href={URL}>
                {socialName} {socialIcon}
            </a>
        </li>
    );
};
