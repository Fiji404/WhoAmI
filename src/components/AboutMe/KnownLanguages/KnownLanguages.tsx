import { SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { IoLogoSass } from 'react-icons/io';
import { KnownLanguage } from './KnownLanguage/KnownLanguage';

const KNOWN_LANGUAGES = [
    { lang: 'React', langSiteURL: 'https://beta.reactjs.org/', langIcon: <SiReact /> },
    { lang: 'TailwindCSS', langSiteURL: 'https://tailwindcss.com/', langIcon: <SiTailwindcss /> },
    {
        lang: 'SASS',
        langSiteURL: 'https://sass-lang.com/',
        langIcon: <IoLogoSass fontSize="1.3rem" />
    },
    {
        lang: 'TypeScript',
        langSiteURL: 'https://www.typescriptlang.org/',
        langIcon: <SiTypescript />
    }
];

export const KnownLanguages = () => {
    return (
        <ul className="flex flex-wrap gap-3 items-center w-full">
            {KNOWN_LANGUAGES.map(props => (
                <KnownLanguage key={props.lang} {...props} />
            ))}
        </ul>
    );
};
