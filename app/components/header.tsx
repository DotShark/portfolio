import Image from "next/image";
import { montserratBold, montserratMedium } from "../lib/fonts";
import { FaGithub, FaLinkedin } from "react-icons/fa";

type HeaderProps = {
  title: string,
  subtitle: string,
  description: string,
  resumeText: string,
  resumeUrl: string,
  githubUrl: string,
  linkedInUrl: string
};

export default function Header({title, subtitle, description, resumeText, resumeUrl, githubUrl, linkedInUrl}: HeaderProps) {
  return (
    <div className="w-full bg-gray-900 bg-opacity-60 rounded-3xl p-8 gap-6 flex flex-col items-center">
      <div className="rounded-full p-1 bg-gradient-to-br from-purple-500 to-cyan-600">
        <div className="rounded-full overflow-hidden">
          <Image src="/avatar.jpg" alt="Avatar" width={128} height={128} quality={80} priority={true} />
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <h1 className={`text-2xl text-center ${montserratBold.className}`}>{title}</h1>
        <h2 className={`text-xl text-center ${montserratMedium.className}`} >{subtitle}</h2>
      </div>
      <p className="text-sm text-justify">{description}</p>
      <a className="w-full" href={resumeUrl}>
        <div className="flex flex-row items-center justify-center w-full h-10 rounded-2xl border-2 border-white">
          <p className="text-lg text-center uppercase">{resumeText}</p>
        </div>
      </a>
      <div className="flex flex-row items-center justify-center w-full gap-3">
        <a href={githubUrl}>
          <FaGithub size={24} />
        </a>
        <a href={linkedInUrl}>
          <FaLinkedin size={24} />
        </a>
      </div>
    </div>
  );
}