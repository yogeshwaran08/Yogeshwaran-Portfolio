import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
const ParticlesComponent = (props: any) => {
  const [init, setInit] = useState(false);
  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadFull(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container: any) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "rgba(0, 0, 0)",
        },
      },
      fpsLimit: 120,
      particles: {
        number: {
          value: 1300,
          density: {
            enable: true,
            value_area: 100,
          },
        },
        color: {
          value: ["#BD10E0", "#B8E986", "#50E3C2", "#FFD300", "#E86363"],
        },
        shape: {
          type: "star",
          stroke: {
            width: 0,
            color: "#000000",
          },
          polygon: {
            nb_sides: 7,
          },
          image: {
            src: "img/github.svg",
            width: 100,
            height: 100,
          },
        },
        opacity: {
          value: 0.4,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 0.8,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: false,
          distance: 0,
          color: "#ffffff",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.5,
          direction: "top-right",
          random: false,
          straight: true,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 1439,
            rotateY: 0,
          },
        },
        twinkle: {
          particles: {
            enable: true,
            color: "#ffff00",
            frequency: 0.009,
            opacity: 1,
          },
          lines: {
            enable: true,
            color: "#ff0000",
            frequency: 0.005,
            opacity: 1,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: false,
            mode: "repulse",
          },
          onclick: {
            enable: false,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: false,
    }),
    []
  );

  return (
    <Particles
      id={props.id}
      init={particlesLoaded}
      //@ts-ignore
      options={options}
      style={{ zIndex: -200 }}
    />
  );
};

export default ParticlesComponent;
