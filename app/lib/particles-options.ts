import { ISourceOptions } from "@tsparticles/engine";

export function getParticlesNumber(): number {
  const pixels = window.innerWidth * window.innerHeight;
  return Math.min(Math.floor(pixels / 30000), 30);
}

export function getParticlesOptions(): ISourceOptions {
  return {
    particles: {
      number: {
        value: getParticlesNumber(),
      },
      links: {
        distance: 150,
        enable: true,
      },
      move: {
        enable: true,
      },
      size: {
        value: 2,
      },
      shape: {
        type: "circle",
      },
    }
  };
}