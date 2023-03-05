import { FcAbout } from 'react-icons/fc';

const PROJECTS_DESCRIPTION: Record<string, string> = {
    'My Todos':
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis odio obcaecati pariatur molestiae distinctio repudiandae expedita eos a ut velit?',
    'Quick Tips':
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis odio obcaecati pariatur molestiae distinctio repudiandae expedita eos a ut velit?',
};

interface Props {
    projectName: string;
}

export const ProjectSummary = ({ projectName }: Props) => {
    return (
        <div className="mt-6">
            <h2 className="text-[#fff] flex gap-2 text-2xl font-semibold items-center">
                About this project
                <FcAbout />
            </h2>
            <p className="mt-3 text-[#B4B4B4]">{PROJECTS_DESCRIPTION[projectName]}</p>
        </div>
    );
};
