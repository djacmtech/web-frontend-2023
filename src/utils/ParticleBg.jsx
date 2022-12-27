import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const ParticleBg = () => {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
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
          zIndex: 0,
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
              parallax: {
                enable: false,
                force: 60,
                smooth: 10,
              },
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
              radius: 80,
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
          links: {
            blink: false,
            color: "#ffffff",
            consent: false,
            distance: 100,
            enable: true,
            opacity: 0.4,
            width: 1,
          },
          number: {
            density: {
              enable: true,
              area: 1000,
            },
            limit: 300,
            value: 100,
          },
          shape: {
            type: "circle",
          },
          opacity: {
            animation: {
              enable: false,
              minimumValue: 0.1,
              speed: 1,
              sync: false,
            },
            random: false,
            value: 0.5,
          },
          size: {
            animation: {
              enable: false,
              minimumValue: 0.1,
              speed: 40,
              sync: false,
            },
            random: true,
            value: 3,
          },
        },
      }}
    />
  );
};

export default ParticleBg;
