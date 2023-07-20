import { TechStackListItem } from './TechStackListItem/TechStackListItem';

export interface TechStackItem {
    langName: string;
    langHomePage?: string;
    langIcon: React.ReactNode;
}

interface Props {
    techStackList: TechStackItem[];
}

export const TechStackList = ({ techStackList }: Props) => {
    return (
        <ul className="flex flex-wrap gap-3 items-center w-full">
            {techStackList.map(stackItem => (
                <TechStackListItem key={stackItem.langName} {...stackItem} />
            ))}
        </ul>
    );
};
