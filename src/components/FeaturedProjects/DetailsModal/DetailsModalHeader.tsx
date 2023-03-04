import { IoMdClose } from 'react-icons/io';

interface Props {
    onModalClose(): void;
    projectName: string
}

export const DetailsModalHeader = ({ projectName, onModalClose }: Props) => {
    return (
        <header className="flex justify-between mb-4 pb-4 border-b border-[#1b1b1b]">
            <h2 className="text-white text-4xl font-bold">{projectName}</h2>
            <button
                onClick={onModalClose}
                className="aspect-square px-2 rounded-md bg-[#141414] border border-[#1a1a1a] hover:bg-[#181818] transition-colors"
                aria-label="close project details"
            >
                <IoMdClose fontSize="1.7rem" color="#f00" />
            </button>
        </header>
    );
};
