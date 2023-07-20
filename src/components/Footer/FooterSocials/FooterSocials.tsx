import { SiDiscord, SiGithub } from 'react-icons/si';
import { AiFillLinkedin } from 'react-icons/ai';
import { FooterSocialItem } from './FooterSocialItem/FooterSocialItem';

const SOCIALS_LIST = [
    {
        socialName: 'Discord',
        socialIcon: <SiDiscord className="text-2xl text-[#5865F2]" />,
        URL: 'https://discord.gg/cZcKm7DdzD'
    },
    {
        socialName: 'LinkedIn',
        socialIcon: <AiFillLinkedin className="text-3xl text-[#0a66c2]" />,
        URL: 'https://www.linkedin.com/in/rados%C5%82aw-rostek-916546242/'
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
