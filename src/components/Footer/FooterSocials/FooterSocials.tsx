import { SiDiscord, SiGithub } from 'react-icons/si';
import { FaRedditAlien } from 'react-icons/fa';
import { FooterSocialItem } from './FooterSocialItem';

const SOCIALS_LIST = [
    {
        socialName: 'Discord',
        socialIcon: <SiDiscord fontSize="1.6rem" color="#5865F2" />,
        URL: 'https://discord.gg/cZcKm7DdzD'
    },
    {
        socialName: 'Reddit',
        socialIcon: <FaRedditAlien fontSize="1.6rem" color="#FF5414" />,
        URL: 'https://www.reddit.com/user/Fiji990'
    },
    {
        socialName: 'Github',
        socialIcon: <SiGithub fontSize="1.6rem" color="#fff" />,
        URL: 'https://github.com/Fiji404'
    }
];

export const FooterSocials = () => {
    return (
        <ul className="flex flex-wrap gap-3 justify-center">
            {SOCIALS_LIST.map(props => (
                <FooterSocialItem key={props.socialName} {...props} />
            ))}
        </ul>
    );
};
