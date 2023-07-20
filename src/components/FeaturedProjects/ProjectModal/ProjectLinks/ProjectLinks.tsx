import { ProjectLinkItem } from './ProjectLink/ProjectLinkItem';

interface LinkDetails {
    repoURL: string;
    siteURL: string;
}

const PROJECT_PREVIEW_LINKS: Record<string, LinkDetails> = {
    'Quick Tips': {
        repoURL: 'https://github.com/Fiji404/QuickTips.git',
        siteURL: 'https://quicktips4you.xyz/'
    },
    Flaggy: {
        repoURL: 'https://github.com/Fiji404/Flaggy.git',
        siteURL: 'https://flaggygame.netlify.app/'
    }
};

interface Props {
    prjName: string;
}

export const ProjectPreviewLinks = ({ prjName }: Props) => {
    return (
        <ul className="flex flex-wrap gap-4 mt-8">
            {Object.entries(PROJECT_PREVIEW_LINKS[prjName]).map(([URLType, url]) => (
                <ProjectLinkItem key={URLType} URLType={URLType} href={url} />
            ))}
        </ul>
    );
};
