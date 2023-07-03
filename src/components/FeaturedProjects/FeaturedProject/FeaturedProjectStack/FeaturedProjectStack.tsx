interface Props {
    techList: { lang: string; langIcon: React.ReactNode }[];
}

export const FeaturedProjectStack = ({ techList }: Props) => {
    return (
        <>
            <ul className="flex flex-wrap gap-3">
                {techList.map(({ lang, langIcon }) => (
                    <li key={lang} className={`skill-item ${lang.toLowerCase()} cursor-default`}>
                        {lang} {langIcon}
                    </li>
                ))}
            </ul>
        </>
    );
};
