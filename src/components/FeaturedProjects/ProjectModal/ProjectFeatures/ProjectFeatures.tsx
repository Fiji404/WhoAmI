import { BsListCheck } from 'react-icons/bs';
import { ProjectFeature } from './ProjectFeature/ProjectFeature';
import { useTranslation } from 'react-i18next';

const PROJECTS_FEATURES: Record<string, string[]> = {
    'Quick Tips': [
        'User can add your own tips',
        'View and edit tip',
        'Selecting between dark/light theme'
    ],
    Flaggy: ['User can choose between light/dark theme', 'Player have 4 modes to play']
};

interface Props {
    prjName: string;
}

export const ProjectFeatures = ({ prjName }: Props) => {
    const { t } = useTranslation();
    return (
        <>
            <h2 className="flex items-center gap-2 my-4 text-white text-3xl font-semibold">
                {t('Features')} <BsListCheck className=" text-[#df4a45]" />
            </h2>
            <ol className="pl-8">
                {PROJECTS_FEATURES[prjName].map(featureName => (
                    <ProjectFeature key={featureName} featureName={featureName} />
                ))}
            </ol>
        </>
    );
};
