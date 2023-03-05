import { FcAbout } from 'react-icons/fc';

const PROJECTS_DESCRIPTION: Record<string, string> = {
    'My Todos':
        "Our to-do app is designed with simplicity and efficiency in mind. It features an intuitive interface that makes it easy to create and organize tasks, set reminders, and track your progress as you complete each item on your list.Great feature of our app is its re-ordering capability.Our to-do app is perfect for anyone who wants to boost their productivity and stay organized. Whether you're a student, a professional, or just someone who wants to get more done in less time, our app can help you achieve your goals and make the most of your day. So why not give it a try today and see what you can accomplish?",
    'Quick Tips':
        "Our site is designed to be user-friendly, with easy-to-read articles that are packed with useful information. We cover a variety of languages, including HTML, CSS, JavaScript, and more, so you're sure to find something that interests you.One of the things that sets our website apart is our commitment to providing tips that are backed by research and proven to be effective. We carefully curate our content to ensure that everything we publish is based on sound scientific principles, so you can trust that the advice you find here is reliable and trustworthy. Whether you're a seasoned expert or a curious beginner, our website has something to offer. We believe that everyone can benefit from learning new tips and tricks, and our goal is to make that process as easy and enjoyable as possible. So why not take a look around and see what you can discover today?",
};

interface Props {
    projectName: string;
}

export const ProjectSummary = ({ projectName }: Props) => {
    return (
        <div className="mt-6">
            <h2 className="text-[#fff] flex gap-2 text-3xl font-semibold items-center">
                About this project
                <FcAbout />
            </h2>
            <p className="mt-3 text-xl text-[#B4B4B4]">{PROJECTS_DESCRIPTION[projectName]}</p>
        </div>
    );
};
