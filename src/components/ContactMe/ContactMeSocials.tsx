import { SiDiscord } from 'react-icons/si';
import { FaRedditAlien, FaTelegramPlane } from 'react-icons/fa';

export const ContactMeSocials = () => {
    return (
        <ul className="mt-5 flex flex-col gap-3 justify-center">
            <button className="btn">
                Discord <SiDiscord color="#5865F2" />
            </button>
            <a className="btn" href="https://www.reddit.com/user/Fiji990">
                Reddit <FaRedditAlien color="#FF5414" />
            </a>
            <a className="btn" href="#">
                Telegram <FaTelegramPlane color="#34A9DA" />
            </a>
        </ul>
    );
};
