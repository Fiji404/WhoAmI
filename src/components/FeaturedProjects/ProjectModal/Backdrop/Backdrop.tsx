import { useContext } from 'react';
import { ProjectDetailsContext } from '@/contexts/ProjectDetailsContext/ProjectDetailsContext';

interface Props {
    name: string;
}

export const Backdrop = ({ name }: Props) => {
    const { closeProjectDetailsHandler } = useContext(ProjectDetailsContext);
    return (
        <div
            onClick={() => closeProjectDetailsHandler(name)}
            aria-hidden="true"
            className="z-10 fixed inset-0 bg-[rgba(15,15,15,0.87)]"
        ></div>
    );
};
