import { SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { IoLogoSass } from 'react-icons/io';

export const AboutSkills = () => {
    return (
        <div className="flex gap-3">
            <a href="https://beta.reactjs.org//" target="_blank" className="nav-item skill-item">
                React <SiReact color="#61DAFB" />
            </a>
            <a href="https://tailwindcss.com/" target="_blank" className="nav-item skill-item">
                Tailwind <SiTailwindcss color="#38BDF8" />
            </a>
            <a href="https://tailwindcss.com/" target="_blank" className="nav-item skill-item">
                SASS <IoLogoSass fontSize="1.3rem" color="#C66394" />
            </a>
            <a href="https://www.typescriptlang.org/" target="_blank" className="nav-item skill-item">
                TypeScript <SiTypescript color="#3178C6" />
            </a>
        </div>
    );
};
