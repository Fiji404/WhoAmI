interface Props {
    lang: string;
    langWebsite: string;
    langIcon: React.ReactNode;
}

export const KnownLanguage = ({ lang, langWebsite, langIcon }: Props) => {
    return (
        <li className="grow">
            <a href={langWebsite} data-lang={lang.toLowerCase()} target="_blank" className="skill-item">
                {lang} {langIcon}
            </a>
        </li>
    );
};
