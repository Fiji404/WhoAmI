import { KnownLanguages } from '../KnownLanguages/KnownLanguages';
import { AboutMeDiagramItem } from './AboutMeDiagramItem';

const ABOUT_ME_INFO = [
    { title: 'Username', content: 'Fiji404 or Radek :D' },
    {
        title: 'Description',
        content:
            'I am an eighteen-year-old boy from Poland who is interested in programming. I have been fascinated by technology and the way the internet works from a young age. Soon, I began to learn the ins and outs of programming, and I am currently developing my skills in this area. My passion is developing web applications and improving their functionality. I always try to learn new technologies and tools to create better and more innovative solutions. I want to develop my programming skills to work as a programmer in the future and contribute to the development of the IT industry.'
    },
    {
        title: 'My career',
        content:
            'Towards the end of 2021, I embarked on the journey of creating websites. I began by selecting two fundamental languages - HTML and CSS, and acquired knowledge through online tutorials on YouTube and official documentation, implementing my learning into personal projects. Later, I advanced my skills by learning JavaScript and TypeScript through comprehensive courses on Udemy, supplemented with personal projects. I then extended my knowledge by studying SASS and TailwindCSS. Presently, I am furthering my learning on React via Udemy.'
    },
    { title: 'Skills', content: <KnownLanguages /> }
];

export const AboutMeDiagram = () => {
    return (
        <ul className="mt-10 flex flex-col justify-center gap-4 mx-auto backdrop-blur-sm w-[95%] max-w-[1500px]">
            {ABOUT_ME_INFO.map(({ title, content }) => (
                <AboutMeDiagramItem key={title} rowLabel={title} rowContent={content} />
            ))}
        </ul>
    );
};
