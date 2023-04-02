import { BiGitRepoForked } from 'react-icons/bi';
import { HiOutlineStatusOnline } from 'react-icons/hi';

const PROJECT_PREVIEW_URLS: Record<string, { repositoryURL: string; websiteURL: string }> = {
    'Quick Tips': {
        repositoryURL: 'https://github.com/Fiji404/QuickTips.git',
        websiteURL: 'https://quicktips4you.xyz/'
    },
    'My Todos': {
        repositoryURL: 'https://github.com/Fiji404/MyTodos.git',
        websiteURL: 'https://mytodos.ink/'
    }
};

interface Props {
    projectName: string;
}

export const ProjectPreviewLinks = ({ projectName }: Props) => {
    return (
        <ul className="flex flex-wrap gap-4 mt-8">
            <li className="grow">
                <a target="_blank" className="project-link" href={PROJECT_PREVIEW_URLS[projectName].repositoryURL}>
                    Repository <BiGitRepoForked fontSize="1.9rem" color="#E84D31" />
                </a>
            </li>
            <li className="grow">
                <a target="_blank" className="project-link" href={PROJECT_PREVIEW_URLS[projectName].websiteURL}>
                    Website <HiOutlineStatusOnline fontSize="1.9rem" color="#9000ff" />
                </a>
            </li>
        </ul>
    );
};
