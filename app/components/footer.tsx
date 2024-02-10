import { FaCopyright } from "react-icons/fa";
import { montserratMedium } from "../lib/fonts";

type FooterProps = {
  name: string,
  year: string,
  sourceUrl: string
};

export function Footer({name, year, sourceUrl} : FooterProps) {
  return (
    <div className="w-full bg-gray-900/60 backdrop-blur p-8 gap-4 flex flex-col items-center justify-center">
      <div className="flex flex-row items-center justify-center gap-3">
        <FaCopyright size={24} />
        <h3 className={`text-xl ${montserratMedium.className}`}>{name} - {year}</h3>
      </div>
      <a href={sourceUrl} className="underline">Voir le code source</a>
    </div>
  );
}