import { BiGitRepoForked } from 'react-icons/bi';
import { HiOutlineStatusOnline } from 'react-icons/hi';

interface Props {
    URLType: string;
    href: string;
}

export const ProjectLinkItem = ({ href, URLType }: Props) => {
    const linkText =
        URLType === 'repoURL' ? (
            <>
                Repository <BiGitRepoForked className="text-3xl text-[#E84D31]" />
            </>
        ) : (
            <>
                Site <HiOutlineStatusOnline className="text-3xl text-[#9000ff]" />
            </>
        );
    return (
        <li className="grow">
            <a target="_blank" className="project-link" href={href}>
                {linkText}
            </a>
        </li>
    );
};
