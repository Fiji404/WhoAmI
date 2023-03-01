import { motion } from 'framer-motion';
import { AboutSkills } from '../AboutSkills';
import { useTranslation } from 'react-i18next';
import { AboutMeDiagramItem } from './AboutMeDiagramItem';

const ABOUT_ME_INFO = [
    { title: 'Username', desc: 'Fiji404 or Radek :D' },
    {
        title: 'Description',
        desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque corporis accusantium tenetur? Nam aperiam ipsa commodi ea voluptate saepe laboriosam!',
    },
    {
        title: 'My career',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ab esse, totam consequaturanimi ullam explicabo velit ipsam, quae assumenda veniam in, eius illum tenetur?',
    },
    { title: 'Skills', desc: <AboutSkills /> },
];

export const AboutMeDiagram = () => {
    return (
        <ul className="mt-10 min-h-[400px] flex flex-col justify-center gap-4 mx-auto backdrop-blur-sm w-[95%] max-w-[1500px]">
            {ABOUT_ME_INFO.map(({ title, desc }, i) => (
                <AboutMeDiagramItem key={i} rowLabel={title} rowContent={desc} />
            ))}
        </ul>
    );
};