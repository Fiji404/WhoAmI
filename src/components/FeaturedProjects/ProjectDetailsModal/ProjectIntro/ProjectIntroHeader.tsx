import { useContext } from 'react';
import { IoMdClose } from 'react-icons/io';
import { ProjectDetailsContext } from '@/contexts/ProjectDetailsContext/ProjectDetailsContext';

interface Props {
    projectName: string
}

export const DetailsIntroHeader = ({ projectName }: Props) => {
    const { closeProjectDetailsHandler } = useContext(ProjectDetailsContext)
    return (
        <header className="flex justify-between p-4 border-b border-[#2b2b2b] sticky top-0 bg-[#111] rounded-tr-md rounded-tl-md">
            <h2 className="text-white text-4xl font-bold">{projectName}</h2>
            <button
                onClick={() => closeProjectDetailsHandler(projectName)}
                className="aspect-square px-2 rounded-md bg-[#141414] border border-accent hover:bg-[#181818] transition-colors"
                aria-label="close project details"
            >
                <IoMdClose fontSize="1.7rem" color="#f00" />
            </button>
        </header>
    );
};
