import { useTranslation } from "react-i18next";

interface Props {
    featureName: string;
}

export const ProjectFeature = ({ featureName }: Props) => {
    const { t } = useTranslation();

    return (
        <li className="text-[#ececec] bg-[#111] font-consolas w-fit py-1 px-2 rounded-md mt-4 border border-accent list-decimal">
            {t(featureName)}
        </li>
    );
};
