import { useTranslation } from 'react-i18next';
import { AiOutlineInfoCircle } from 'react-icons/ai';

const PROJECTS_DESCRIPTION: Record<string, string> = {
    Flaggy: "Welcome to Flaggy, the ultimate flag guessing game! Test your knowledge and recognition skills as you try to guess flags from all around the world. With four exciting game modes, including All Flags, Time Challenge, Random Flag, and Flag by Continent, there's never a dull moment. Enjoy the stunning visuals and race against the clock in Time Challenge mode or explore flags from specific regions in Flag by Continent. Whether you're a flag enthusiast or just looking for some casual fun, Flaggy is the app for you!",
    'Quick Tips':
        "Our site is designed to be user-friendly, with easy-to-read articles that are packed with useful information. We cover a variety of languages, including HTML, CSS, JavaScript, and more, so you're sure to find something that interests you.One of the things that sets our website apart is our commitment to providing tips that are backed by research and proven to be effective. We carefully curate our content to ensure that everything we publish is based on sound scientific principles, so you can trust that the advice you find here is reliable and trustworthy. Whether you're a seasoned expert or a curious beginner, our website has something to offer. We believe that everyone can benefit from learning new tips and tricks, and our goal is to make that process as easy and enjoyable as possible. So why not take a look around and see what you can discover today?"
};

interface Props {
    prjName: string;
}

export const ProjectDesc = ({ prjName }: Props) => {
    const { t } = useTranslation();
    return (
        <div className="mt-6">
            <h2 className="flex items-center justify-start text-white gap-2 text-3xl font-semibold">
                {t('About this project')}
                <AiOutlineInfoCircle className="text-[#df4a45] text-[1.7rem]" />
            </h2>
            <p className="mt-1 text-lg text-[#9b9b9b]">{t(PROJECTS_DESCRIPTION[prjName])}</p>
        </div>
    );
};
