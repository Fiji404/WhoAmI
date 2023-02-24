import { SectionHeading } from '../UI/SectionHeading';
import { FeaturedProject } from './FeaturedProject';

const FEATURED_PROJECTS = [
    {
        id: 0,
        projectName: 'Quick Tips',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam accusamus repellat labore aliquid, architecto praesentium dicta suscipit explicabo amet distinctio.',
    },
    {
        id: 1,
        projectName: 'My Todos',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam accusamus repellat labore aliquid, architecto praesentium dicta suscipit explicabo amet distinctio.',
    },
];

export const FeaturedProjects = () => {
    return (
        <section className="mt-20">
            <header>
                <SectionHeading text='Featured Projects' />
            </header>
            <div className='flex justify-center gap-4 w-[95%] max-w-[1500px] mx-auto'>
                {FEATURED_PROJECTS.map((prjDetails) => <FeaturedProject key={prjDetails.id} {...prjDetails}/>)}
            </div>
        </section>
    );
};
