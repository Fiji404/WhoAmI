import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { useState } from 'react';
import { ProjectDetailsModal } from '../DetailsModal/DetailsModal';
import { createPortal } from 'react-dom';
import { ProjectUsedStack } from './ProjectUsedStack';

interface Props {
    projectName: string;
    description: string;
    usedStack: { lang: string; langIcon: React.ReactNode }[];
}

export const FeaturedProject = ({ projectName, description, usedStack }: Props) => {
    const [isProjectDetailsOpen, setIsProjectDetailsOpen] = useState(false);
    const openProjectDetailsHandler = () => {
        setIsProjectDetailsOpen(true);
    };

    const modalCloseHandler = () => {
        setIsProjectDetailsOpen(false)
    }

    return (
        <>
            {isProjectDetailsOpen &&
                createPortal(<ProjectDetailsModal onModalClose={modalCloseHandler} projectName={projectName} />, document.body)}
            <section className="grow p-4 bg-[rgba(21,21,21,0.7)] border border-[#1f1f1f] rounded-md backdrop-blur-sm max-w-[550px] relative overflow-hidden">
                <header>
                    <h2 className="text-white font-semibold text-center text-4xl rounded-md">
                        {projectName}
                    </h2>
                </header>
                <p className="mt-5 text-center text-lg text-[#b4b4b4]">{description}</p>
                <ProjectUsedStack usedLanguages={usedStack} />
                <button
                    onClick={openProjectDetailsHandler}
                    className="mt-6 mx-auto w-[90%] flex justify-center items-center gap-2 bg-[#1b1b1b] text-white py-2 px-3 border border-[#272727] rounded-full hover:bg-[#1f1f1f] active:bg-[#161616] transition-colors"
                >
                    Learn more <BiDotsHorizontalRounded />
                </button>
            </section>
        </>
    );
};
