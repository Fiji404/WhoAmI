import { ProjectLinkItem } from './ProjectLink/ProjectLinkItem';

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
            {Object.entries(PROJECT_PREVIEW_LINKS[name]).map(([URLName, url]) => (
                <ProjectLinkItem key={URLName} URLName={URLName} href={url} />
            ))}
        </ul>
    );
};
