import { createPortal } from "react-dom";

interface Props {
    projectName: string;
}

export const ProjectDetailsModal = ({ projectName }: Props) => {
    return <div>
        <h2>{projectName}</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat cupiditate possimus perspiciatis provident, rem repellat libero dolorum id illo minus.</p>
    </div>;
};
