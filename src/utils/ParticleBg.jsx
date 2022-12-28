import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const ParticleBg = () => {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await container;
  }, []);
  return (
    <Particles
      id='tsparticles'
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        // preset: "links",
        background: {
          color: "none",
        },
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        detectRetina: true,
        duration: 0,
        fpsLimit: 120,
        zLayers: 2,
        autoPlay: true,
        smooth: true,

        interactivity: {
          detect_on: "window",
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "connect",
            },
            resize: {
              delay: 0.5,
              enable: true,
            },
          },
          modes: {
            connect: {
              distance: 150,
              links: {
                opacity: 0.5,
              },
              radius: 150,
            },
            push: {
              default: true,
              quantity: 4,
            },
            remove: { quantity: 2 },
          },
        },
        particles: {
          color: { value: "#fff" },
          move: {
            angle: {
              offset: 0,
              value: 90,
            },
            attract: {
              enable: false,
              rotate: {
                x: 600,
                y: 1200,
              },
            },
            enable: true,
          },
          number: {
            density: {
              enable: true,
              area: 1500,
            },
            limit: 200,
          },
          shape: {
            type: ["circle", "square", "polygon"],
            polygon: {
              sides: 6,
            },
          },

          opacity: {
            animation: {
              enable: true,
              minimumValue: 0.1,
              speed: 1,
              sync: false,
            },
            random: true,
            value: 0.3,
          },
          size: {
            animation: {
              minimumValue: 1,
              speed: 10,
              sync: false,
              size_min: 1,
            },
            random: true,
            value: 3,
          },
          links: {
            enable: false,
            distance: 150,
            color: "#f00",
            opacity: 0.1,
            width: 0.1,
          },
          zIndex: -1,
        },
      }}
    />
  );
};

export default ParticleBg;
