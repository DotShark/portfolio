import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { montserratBold, montserratMedium } from "./lib/fonts";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900">
      <div className="min-h-screen px-8 py-12 flex flex-col gap-16 items-center bg-gradient-to-b from-purple-400/40 to-slate-800/60">
        <div className="w-full bg-gray-900 bg-opacity-60 rounded-3xl p-8 gap-6 flex flex-col items-center">
          <div className="rounded-full p-1 bg-gradient-to-br from-purple-500 to-cyan-600">
            <div className="rounded-full overflow-hidden">
              <Image src="/avatar.jpg" alt="Avatar" width={128} height={128} quality={80} />
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <h1 className={`text-3xl text-center ${montserratBold.className}`}>Arnaud Petit</h1>
            <h2 className={`text-xl text-center ${montserratMedium.className}`} >Développeur full-stack</h2>
          </div>
          <p className="text-sm text-justify">
            Bientôt titulaire d’un titre professionnel de concepteur développeur d{"'"}applications, 
            je souhaite intégrer une nouvelle entreprise à partir de mai 2024 pour faire suite à mon expérience chez Truckrs.
          </p>
          <a className="w-full" href="/cv_arnaud_petit.pdf">
            <div className="flex flex-row items-center justify-center w-full h-10 rounded-2xl border-2 border-white">
              <p className="text-lg text-center">VOIR MON CV</p>
            </div>
          </a>
          <div className="flex flex-row items-center justify-center w-full gap-3">
            <a href="https://github.com/DotShark">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/arnaud-petit-dev/">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
