import { SiDiscord, SiGithub } from 'react-icons/si';
import { FaRedditAlien } from 'react-icons/fa';
import { FooterSocialItem } from './FooterSocialItem/FooterSocialItem';

const SOCIALS_LIST = [
    {
        socialName: 'Discord',
        socialIcon: <SiDiscord className="text-2xl text-[#5865F2]" />,
        URL: 'https://discord.gg/cZcKm7DdzD'
    },
    {
        socialName: 'Reddit',
        socialIcon: <FaRedditAlien className="text-2xl text-[#FF5414]" />,
        URL: 'https://www.reddit.com/user/Fiji990'
    },
    {
        socialName: 'Github',
        socialIcon: <SiGithub className="text-2xl text-[#fff]" />,
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
