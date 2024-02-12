"use client";

import { ISourceOptions } from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useMemo, useState } from "react";

export function LinkedParticles() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      particles: {
        number: {
          value: 25,
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
      },
    }),
    []
  );

  return init && <div className="fixed -z-10 opacity-40">
    <Particles 
      id="linked-particles"
      options={options}
    />
  </div>;
}
