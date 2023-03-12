const PROJECTS_FEATURES: Record<string, string[]> = {
    'Quick Tips': ['User can add your own tips', 'View and edit tip', 'Selecting between dark/light theme'],
    'My Todos': ['Adding/removing and marking as completed options for items', 'User can choose between light/dark mode', 'Option for re-ordering items'],
};

interface Props {
    projectName: string;
}

export const ProjectFeatures = ({ projectName }: Props) => {
    return (
        <>
            <h2 className="my-4 text-[#fff] text-3xl font-semibold">Features ✨ </h2>
            <ol className="pl-8">
                {PROJECTS_FEATURES[projectName].map((feature, i) => (
                    <li key={i} className="text-[#e2e2e2] bg-[#141414] font-consolas w-fit py-1 px-2 rounded-md mt-4 border border-[#2b2b2b] list-decimal">
                        {feature}
                    </li>
                ))}
            </ol>
        </>
    );
};
