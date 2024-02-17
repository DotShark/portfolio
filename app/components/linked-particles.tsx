"use client";

import { ISourceOptions } from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useState } from "react";
import { getParticlesOptions } from "../lib/particles-options";

export function LinkedParticles() {
  const [init, setInit] = useState<boolean>(false);
  const [particlesOptions, setParticlesOptions] = useState<ISourceOptions>({});

  useEffect(() => {
    if (/Headless/.test(window.navigator.userAgent)) return;
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
      setParticlesOptions(getParticlesOptions());
    });
  }, []);

  return (
    init && <div className="fixed -z-10 opacity-40">
      <Particles 
        id="linked-particles"
        options={particlesOptions}
      />
    </div>
  );
}
