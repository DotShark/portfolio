import { montserratMedium } from "../lib/fonts";
import { ParticlesMask } from "./particles-mask";

type FooterProps = {
  name: string,
  year: string,
  sourceUrl: string
};

export function Footer({name, year, sourceUrl} : FooterProps) {
  return (
    <ParticlesMask>
      <div className="w-full bg-gray-900/60 p-8 gap-4 flex flex-col items-center justify-center">
        <h3 className={`text-xl ${montserratMedium.className}`}>{name} - {year}</h3>
        <a href={sourceUrl} className="underline hover:text-cyan-200">Voir le code source</a>
      </div>
    </ParticlesMask>
  );
}