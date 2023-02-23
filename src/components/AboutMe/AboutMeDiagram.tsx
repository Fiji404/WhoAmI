import { AboutSkills } from './AboutSkills';

export const AboutMeDiagram = () => {
    return (
        <div className="mt-10 flex flex-col justify-center gap-2 mx-auto border border-[#2b2b2b] rounded-md bg-[rgba(21,21,21,0.7)] backdrop-blur-sm p-4 w-[95%] max-w-[1500px]">
            <div className="diagram-row">
                <h2 className="diagram-label">Username:</h2>
                <p className="diagram-desc">Fiji404 or Radek :D</p>
            </div>
            <div className="diagram-row">
                <h2 className="diagram-label">Description:</h2>
                <p className="diagram-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque corporis accusantium
                    tenetur? Nam aperiam ipsa commodi ea voluptate saepe laboriosam!
                </p>
            </div>
            <div className="diagram-row">
                <h2 className="diagram-label">My career:</h2>
                <p className="diagram-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ab esse, totam consequatur
                    animi ullam explicabo velit ipsam, quae assumenda veniam in, eius illum tenetur?
                </p>
            </div>
            <div className="diagram-row">
                <h2 className="diagram-label">Skills:</h2>
                <AboutSkills />
            </div>
        </div>
    );
};
