import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import type { Engine } from 'tsparticles-engine';
import { loadFull } from 'tsparticles';
import particlesOptions from '../../config/particles-options.json';

interface Props {
    particlesID: string;
}

export const ParticlesBg = ({ particlesID }: Props) => {
    const particlesInit = useCallback(async (engine: Engine) => await loadFull(engine), []);

    return (
        <Particles
            className="fixed inset-0 -z-10"
            id={particlesID}
            init={particlesInit}
            options={particlesOptions}
        />
    );
};
