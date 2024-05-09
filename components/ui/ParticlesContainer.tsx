"use client"

import { useEffect, useMemo, useRef, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { Container } from "@tsparticles/engine";


const ParticlesContainer = () => {
  const [init, setInit] = useState(false);
  const containerRef = useRef(null)

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {

      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container?: Container): Promise<void> => {
    if (container) {
      console.log(container);
    }
    return Promise.resolve();
  };


  const options = useMemo(
    () => ({
      fullScreen: false, // No usar pantalla completa
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 120,
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
            quantity: 4,
          },
          repulse: {
            distance: 0,
          },
        },
      },
      particles: {
        color: {
          value: "#25a0cd", // Color de las partículas
        },
        links: {
          color: "#25a0cd", // Color de los enlaces
          distance: 200,
          enable: true,
          opacity: 0.7,
          width: 1,
        },
        move: {
          enable: true,
          random: false,
          speed: 1, // Velocidad de movimiento
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 150, // Cantidad de partículas
        },
        opacity: {
          value: 0.8,
        },
        shape: {
          type: ["circle", "square"], // Mezcla de círculos y cuadrados
        },
        size: {
          value: { min: 2, max: 6 },
        },
      },
      detectRetina: true,
    }),
    []
  );


  if (init) {
    return (
      <div className="relative w-full h-full">
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}

        />
      </div>

    );
  }
  return (
    <></>
  )
}

export default ParticlesContainer