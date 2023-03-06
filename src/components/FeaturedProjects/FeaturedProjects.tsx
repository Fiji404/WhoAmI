import { useTranslation } from 'react-i18next';
import { SectionHeading } from '@components/UI/SectionHeading';
import { FeaturedProject } from './FeaturedProject/FeaturedProject';
import { FaStrava } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiHtml5 } from 'react-icons/si';
import { ProjectDetailsProvider } from '@/contexts/ProjectDetailsContext/ProjectDetailsProvider';

const FEATURED_PROJECTS = [
    {
        projectName: 'Quick Tips',
        description:
            'This is my first application from I started learning web development. It was intended for creating and sharing valuable frontend tips by users of the platform. Users can add our own tips by doing registration.',
        usedStack: [
            { lang: 'HTML', langIcon: <SiHtml5 /> },
            { lang: 'TailwindCSS', langIcon: <SiTailwindcss /> },
            { lang: 'TypeScript', langIcon: <SiTypescript /> },
        ],
    },
    {
        projectName: 'My Todos',
        description:
            'My todos is a simple and straightforward online task management tool that allows users to create and organize their to-do lists. The website has a clean and minimalistic design, making it easy to use and navigate.',
        usedStack: [
            { lang: 'Astro', langIcon: <FaStrava /> },
            { lang: 'TailwindCSS', langIcon: <SiTailwindcss /> },
            { lang: 'TypeScript', langIcon: <SiTypescript /> },
        ],
    },
];

export const FeaturedProjects = () => {
    const { t } = useTranslation();
    return (
        <section className="mt-20">
            <SectionHeading text={t('Featured Projects')} />
            <ul className="mt-10 flex flex-wrap justify-center gap-6 w-[95%] max-w-[1500px] mx-auto">
                <ProjectDetailsProvider>
                    {FEATURED_PROJECTS.map((prjDetails, i) => (
                        <FeaturedProject key={i} {...prjDetails} />
                    ))}
                </ProjectDetailsProvider>
            </ul>
        </section>
    );
};
