import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback, useMemo } from "react";

import styles from "./challenge-10.module.scss";
import HeaderProject from "../../../components/HeaderProject";

export default function ParticleJS() {
  const options = useMemo(() => {
    return {
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 10,
          },
          repulse: {
            distance: 70,
          },
        },
      },
      particles: {
        color: {
          value: "#3b82f6",
        },
        links: {
          color: "#3b82f6",
          enable: true,
          distance: 70,
        },
        move: {
          enable: true,
          speed: { min: 1, max: 6 },
        },
        opacity: {
          value: { min: 0.3, max: 0.7 },
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
    };
  }, []);

  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
  }, []);

  return (
    <>
      <HeaderProject id="10" title="Utilize a lib Particle.js do JavaScript" />
      <main className={styles.main}>
        <Particles init={particlesInit} options={options} />
        <h1>Particle.js/tsParticles</h1>
        <h2>With React.js/Next.js</h2>
      </main>
    </>
  );
}
