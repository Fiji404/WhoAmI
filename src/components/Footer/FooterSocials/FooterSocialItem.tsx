interface Props {
    platform: string;
    platformIcon: JSX.Element;
    URL: string;
}

export const FooterSocialItem = ({ platform, platformIcon, URL }: Props) => {
    return (
        <li>
            <a target="_blank" className="btn" href={URL}>
                {platform} {platformIcon}
            </a>
        </li>
    );
};
