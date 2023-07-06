import { BsFillImageFill } from 'react-icons/bs';
import { ProjectPreviewImage } from './ProjectPreviewImage/ProjectPreviewImage';
import { useContext } from 'react';
import { ProjectDetailsContext } from '@/contexts/ProjectDetailsContext/ProjectDetailsContext';
import quickTipsDesktopImg from '@/assets/quick-tips-desktop.png';
import quickTipsMobileImg from '@/assets/quick-tips-mobile.png';
import myTodosDesktopImg from '@/assets/my-todos-desktop.png';
import myTodosMobileImg from '@/assets/my-todos-mobile.png';

const PREVIEW_IMAGES_PATHS = {
    'Quick Tips': [
        {
            path: quickTipsDesktopImg,
            desc: 'Represents desktop view of quick tips app'
        },
        {
            path: quickTipsMobileImg,
            desc: 'Represents mobile view of quick tips app'
        }
    ],
    'My Todos': [
        {
            path: myTodosDesktopImg,
            desc: 'Represents desktop view of my todos app'
        },
        {
            path: myTodosMobileImg,
            desc: 'Represents mobile view of my todos app'
        }
    ]
};

export const ProjectPreviewImages = () => {
    const { isProjectModalOpen } = useContext(ProjectDetailsContext);
    return (
        <section>
            <h2 className="my-4 text-[#fff] text-3xl font-semibold flex items-center gap-2">
                Screenshots <BsFillImageFill className="text-[1.7rem] text-[#df4a45]" />
            </h2>
            <div className="flex gap-4 overflow-y-auto snap-mandatory snap-x">
                {isProjectModalOpen['Quick Tips']
                    ? PREVIEW_IMAGES_PATHS['Quick Tips'].map(images => (
                          <ProjectPreviewImage key={images.desc} {...images} />
                      ))
                    : PREVIEW_IMAGES_PATHS['My Todos'].map(images => (
                          <ProjectPreviewImage key={images.desc} {...images} />
                      ))}
            </div>
        </section>
    );
};
