import { TechStackItem } from '../TechStackList';

interface Props extends TechStackItem {}

export const TechStackListItem = ({ langName, langHomePage, langIcon }: Props) => {
    return (
        <li
            className={`grow basis-24 ${
                !langHomePage ? `skill-item cursor-default ${langName.toLowerCase()}` : ''
            }`}
        >
            {langHomePage ? (
                <a
                    href={langHomePage}
                    target="_blank"
                    className={`skill-item basis-10 ${langName.toLowerCase()}`}
                >
                    {langName} {langIcon}
                </a>
            ) : (
                <>
                    {langName} {langIcon}
                </>
            )}
        </li>
    );
};
