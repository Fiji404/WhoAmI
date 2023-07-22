import { useTranslation } from 'react-i18next';
import { SectionHeading } from '@components/index';
import { FeaturedProject } from './FeaturedProject/FeaturedProject';
import { SiTailwindcss, SiTypescript, SiHtml5 } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';

const FEATURED_PROJECTS = [
    {
        prjName: 'Quick Tips',
        description:
            'This is my first application from I started learning web development. It was intended for creating and sharing valuable frontend tips by users of the platform. Users can add our own tips by doing registration. All tips is stored in public so any user can view and edit every tip.',
        techStackList: [
            { langName: 'HTML5', langIcon: <SiHtml5 /> },
            { langName: 'TailwindCSS', langIcon: <SiTailwindcss /> },
            { langName: 'TypeScript', langIcon: <SiTypescript /> }
        ]
    },
    {
        prjName: 'Flaggy',
        description:
            'Flaggy is an educational app designed to test your knowledge and recognition of flags from around the world. The core objective of Flaggy is simple yet challenging: guess the flag based on the displayed image. The app offers four modes for different preferences and skill levels.',
        techStackList: [
            { langName: 'React', langIcon: <FaReact /> },
            { langName: 'TailwindCSS', langIcon: <SiTailwindcss /> },
            { langName: 'TypeScript', langIcon: <SiTypescript /> }
        ]
    }
];

export const FeaturedProjects = () => {
    const { t } = useTranslation();
    return (
        <section id="projects" className="mt-20">
            <SectionHeading text={t('Featured Projects')} />
            <ul className="mt-10 flex flex-wrap justify-center gap-6 w-[95%] max-w-[1500px] mx-auto">
                {FEATURED_PROJECTS.map(prjDetails => (
                    <FeaturedProject key={prjDetails.prjName} {...prjDetails} />
                ))}
            </ul>
        </section>
    );
};
