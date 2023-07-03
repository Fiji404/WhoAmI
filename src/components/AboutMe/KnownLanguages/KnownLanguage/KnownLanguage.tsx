interface Props {
    lang: string;
    langSiteURL: string;
    langIcon: React.ReactNode;
}

export const KnownLanguage = ({ lang, langSiteURL, langIcon }: Props) => {
    return (
        <li className="grow">
            <a href={langSiteURL} target="_blank" className={`skill-item ${lang.toLowerCase()}`}>
                {lang} {langIcon}
            </a>
        </li>
    );
};
