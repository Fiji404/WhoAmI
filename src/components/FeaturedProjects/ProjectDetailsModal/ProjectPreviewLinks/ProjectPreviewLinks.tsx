import { BiGitRepoForked } from 'react-icons/bi';
import { HiOutlineStatusOnline } from 'react-icons/hi';

const PROJECT_PREVIEW_URLS: Record<string, { repository: string; website: string }> = {
    'Quick Tips': {
        repository: 'https://github.com/Fiji404/QuickTips.git',
        website: 'https://quicktips4you.xyz/',
    },
    'My Todos': {
        repository: 'https://github.com/Fiji404/MyTodos.git',
        website: 'https://mytodos.ink/',
    },
};

interface Props {
    projectName: string;
}

export const ProjectPreviewLinks = ({ projectName }: Props) => {
    return (
        <ul className="flex flex-wrap gap-4 mt-8">
            <li className="grow">
                <a
                    target="_blank"
                    className="project-link"
                    href={PROJECT_PREVIEW_URLS[projectName].repository}
                >
                    Repository <BiGitRepoForked fontSize="1.9rem" color="#E84D31" />
                </a>
            </li>
            <li className="grow">
                <a target="_blank" className="project-link" href={PROJECT_PREVIEW_URLS[projectName].website}>
                    Website <HiOutlineStatusOnline fontSize="1.9rem" color="#9000ff" />
                </a>
            </li>
        </ul>
    );
};
