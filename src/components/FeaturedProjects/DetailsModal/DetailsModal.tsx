import { motion } from 'framer-motion';
import { DetailsModalBackdrop } from './DetailsModalBackdrop';
import { DetailsModalHeader } from './DetailsModalHeader';

interface Props {
    projectName: string;
    onModalClose(): void;
}

export const ProjectDetailsModal = ({ projectName, onModalClose }: Props) => {
    return (
        <>
            <DetailsModalBackdrop />
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[80%] z-10 border border-[#1a1a1a] p-4 rounded-md bg-[#111]">
                <motion.section
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                >
                    <DetailsModalHeader onModalClose={onModalClose} projectName={projectName} />

                    <p className="text-white">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat cupiditate possimus
                        perspiciatis provident, rem repellat libero dolorum id illo minus.
                    </p>
                </motion.section>
            </div>
        </>
    );
};
