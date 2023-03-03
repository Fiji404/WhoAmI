interface Props {
    platform: string;
    platformIcon: JSX.Element;
    inviteURL: string;
}

export const FooterSocialItem = ({ platform, platformIcon, inviteURL }: Props) => {
    return (
        <li>
            <a className="btn" href={inviteURL}>
                {platform} {platformIcon}
            </a>
        </li>
    );
};
