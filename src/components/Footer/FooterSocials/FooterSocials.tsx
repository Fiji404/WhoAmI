import { SiDiscord, SiGithub } from 'react-icons/si';
import { FaRedditAlien } from 'react-icons/fa';
import { FooterSocialItem } from './FooterSocialItem';

const SOCIALS_PLATFORMS = [
    {
        platform: 'Discord',
        platformIcon: <SiDiscord fontSize="1.6rem" color="#5865F2" />,
        URL: 'https://discord.gg/cZcKm7DdzD',
    },
    {
        platform: 'Reddit',
        platformIcon: <FaRedditAlien fontSize="1.6rem" color="#FF5414" />,
        URL: 'https://www.reddit.com/user/Fiji990',
    },
    {
        platform: 'Github',
        platformIcon: <SiGithub fontSize="1.6rem" color="#fff" />,
        URL: 'https://github.com/Fiji404',
    },
];

export const FooterSocials = () => {
    return (
        <ul className="flex flex-wrap gap-3 justify-center">
            {SOCIALS_PLATFORMS.map((props, i) => (
                <FooterSocialItem key={i} {...props} />
            ))}
        </ul>
    );
};
