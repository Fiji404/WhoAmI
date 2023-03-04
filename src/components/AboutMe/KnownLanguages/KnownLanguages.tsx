import { SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { IoLogoSass } from 'react-icons/io';
import { KnownLanguage } from './KnownLanguage';

const KNOWN_LANGUAGES = [
    { lang: 'React', langWebsite: 'https://beta.reactjs.org/', langIcon: <SiReact /> },
    { lang: 'TailwindCSS', langWebsite: 'https://tailwindcss.com/', langIcon: <SiTailwindcss /> },
    { lang: 'SASS', langWebsite: 'https://sass-lang.com/', langIcon: <IoLogoSass fontSize="1.3rem" /> },
    { lang: 'TypeScript', langWebsite: 'https://www.typescriptlang.org/', langIcon: <SiTypescript /> },
];

export const KnownLanguages = () => {
    return (
        <ul className="flex flex-wrap gap-3 items-center w-full">
            {KNOWN_LANGUAGES.map((props, i) => (
                <KnownLanguage key={i} {...props} />
            ))}
        </ul>
    );
};
