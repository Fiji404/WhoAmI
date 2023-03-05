const PROJECTS_FEATURES: Record<string, string[]> = {
    'Quick Tips': ['Adding own tips'],
    'My Todos': [],
};

interface Props {
    projectName: string;
}

export const ProjectFeatures = ({ projectName }: Props) => {
    return (
        <ul>
            {PROJECTS_FEATURES[projectName].map(feature => (
                <li className="text-white">{feature}</li>
            ))}
        </ul>
    );
};
