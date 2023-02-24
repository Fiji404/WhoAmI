import { AboutMeDiagram } from '..';
import { SectionHeading } from '../UI/SectionHeading';

export const AboutMe = () => {
    return (
        <section id="about" className="mt-20 min-h-[500px]">
            <SectionHeading text='Quick facts about me' />
            <AboutMeDiagram />
        </section>
    );
};
