interface Props {
    usedLanguages: { lang: string; langIcon: React.ReactNode }[];
}

export const ProjectUsedStack = ({ usedLanguages }: Props) => {
    return (
        <>
            <h3 className="my-4 text-[#d1d1d1] font-bold text-center">Used stack</h3>
            <ul className="flex flex-wrap gap-3">
                {usedLanguages.map(({ lang, langIcon }, i) => (
                    <li key={i} data-lang={lang.toLowerCase()} className="skill-item cursor-default">
                        {lang} {langIcon}
                    </li>
                ))}
            </ul>
        </>
    );
};
