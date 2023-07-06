interface Props {
    featureName: string;
}

export const ProjectFeature = ({ featureName }: Props) => {
    return (
        <li className="text-[#e2e2e2] bg-[#131313cc] font-consolas w-fit py-1 px-2 rounded-md mt-4 border border-[#202020] list-decimal">
            {featureName}
        </li>
    );
};
