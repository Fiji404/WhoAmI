import { BsListCheck } from 'react-icons/bs';
import { ProjectFeature } from './ProjectFeature/ProjectFeature';

const PROJECTS_FEATURES: Record<string, string[]> = {
    'Quick Tips': [
        'User can add your own tips',
        'View and edit tip',
        'Selecting between dark/light theme'
    ],
    'Flaggy': [
        'Adding/removing and marking as completed options for items',
        'User can choose between light/dark mode',
        'Option for re-ordering items'
    ]
};

interface Props {
    prjName: string;
}

export const ProjectFeatures = ({ prjName }: Props) => {
    return (
        <>
            <h2 className="flex items-center gap-2 my-4 text-white text-3xl font-semibold">
                Features <BsListCheck className=" text-[#df4a45]" />
            </h2>
            <ol className="pl-8">
                {PROJECTS_FEATURES[prjName].map(featureName => (
                    <ProjectFeature key={featureName} featureName={featureName} />
                ))}
            </ol>
        </>
    );
};
