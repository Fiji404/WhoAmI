import { useContext } from 'react';
import { IoMdClose } from 'react-icons/io';
import { ProjectDetailsContext } from '@/contexts/ProjectDetailsContext/ProjectDetailsContext';

interface Props {
    prjName: string;
}

export const ProjectHeader = ({ prjName }: Props) => {
    const { toggleProjectModalVisibility } = useContext(ProjectDetailsContext);
    return (
        <header className="flex justify-between p-4 border-b border-[#242424] sticky top-0 bg-[rgba(17,17,17,0.17)] rounded-tr-md rounded-tl-md">
            <h2 className="text-white text-4xl font-bold">{prjName}</h2>
            <button
                onClick={() => toggleProjectModalVisibility(prjName)}
                className="aspect-square px-2 rounded-md bg-[#131313] border border-accent hover:bg-[#181818] transition-colors"
                aria-label="Close project details"
            >
                <IoMdClose className="text-3xl text-[#f00]" />
            </button>
        </header>
    );
};
