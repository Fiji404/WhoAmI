import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import type { Engine, ISourceOptions } from 'tsparticles-engine';
import { loadFull } from 'tsparticles';
import particlesConfig from '@/config/particles.json';

export const ParticlesBg = () => {
    const particlesInit = useCallback(async (engine: Engine) => await loadFull(engine), []);
    return (
        <Particles
            className="fixed inset-0 -z-10"
            id="particles"
            init={particlesInit}
            options={particlesConfig as ISourceOptions}
        />
    );
};
