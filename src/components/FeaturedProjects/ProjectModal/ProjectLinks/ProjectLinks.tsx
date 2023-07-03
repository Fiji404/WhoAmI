import { BiGitRepoForked } from 'react-icons/bi';
import { HiOutlineStatusOnline } from 'react-icons/hi';

const PROJECT_PREVIEW_LINKS: Record<string, { repoURL: string; siteURL: string }> = {
    'Quick Tips': {
        repoURL: 'https://github.com/Fiji404/QuickTips.git',
        siteURL: 'https://quicktips4you.xyz/'
    },
    'My Todos': {
        repoURL: 'https://github.com/Fiji404/MyTodos.git',
        siteURL: 'https://mytodos.ink/'
    }
};

interface Props {
    name: string;
}

export const ProjectPreviewLinks = ({ name }: Props) => {
    return (
        <ul className="flex flex-wrap gap-4 mt-8">
            <li className="grow">
                <a
                    target="_blank"
                    className="project-link"
                    href={PROJECT_PREVIEW_LINKS[name].repoURL}
                >
                    Repository <BiGitRepoForked className="text-3xl text-[#E84D31]" />
                </a>
            </li>
            <li className="grow">
                <a
                    target="_blank"
                    className="project-link"
                    href={PROJECT_PREVIEW_LINKS[name].siteURL}
                >
                    Website{' '}
                    <HiOutlineStatusOnline className="text-3xl text-[#9000ff]" color="#9000ff" />
                </a>
            </li>
        </ul>
    );
};
