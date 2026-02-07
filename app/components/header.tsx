import Image from "next/image";
import { montserratBold, montserratMedium } from "../lib/fonts";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { OutlinedButton } from "./outlined-button";
import { ParticlesMask } from "./particles-mask";
import Link from "next/link";

type HeaderProps = {
  title: string,
  subtitle: string,
  description: string,
  resumeText: string,
  resumeUrl: string,
  githubUrl: string,
  linkedInUrl: string
};

export function Header({title, subtitle, description, resumeText, resumeUrl, githubUrl, linkedInUrl}: HeaderProps) {
  return (
    <ParticlesMask>
      <div className="w-full bg-gray-900/60 rounded-3xl p-8 gap-6 flex flex-col items-center sm:hidden">
        <div className="rounded-full p-1 bg-linear-to-br from-purple-500 to-cyan-600">
          <div className="rounded-full overflow-hidden">
            <Image src="/avatar.jpg" alt="Avatar" width={128} height={128} quality={80} priority={false} />
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <h1 className={`text-2xl text-center ${montserratBold.className}`}>{title}</h1>
          <h2 className={`text-xl text-center ${montserratMedium.className}`} >{subtitle}</h2>
        </div>
        <p className="text-base">{description}</p>
        <Link className="w-full" href={resumeUrl}>
          <OutlinedButton text={resumeText} large={true} />
        </Link>
        <div className="flex flex-row -my-3 items-center justify-center w-full">
          <a className="p-3 rounded-full hover:bg-gray-500/30 active:bg-gray-500/30 transition-colors" href={githubUrl} aria-label="GitHub">
            <FiGithub size={24} />
          </a>
          <a className="p-3 rounded-full hover:bg-gray-500/30 active:bg-gray-500/30 transition-colors" href={linkedInUrl} aria-label="LinkedIn">
            <FiLinkedin size={24} />
          </a>
        </div>
      </div>
      <div className="w-full bg-gray-900/60 rounded-3xl p-8 gap-6 flex flex-row items-center max-sm:hidden">
        <div className="rounded-full p-1 bg-linear-to-br from-purple-500 to-cyan-600">
          <div className="rounded-full overflow-hidden">
            <Image src="/avatar.jpg" alt="Avatar" width={256} height={256} quality={80} priority={false} />
          </div>
        </div>
        <div className="flex flex-col items-start gap-4">
          <div className="flex flex-row gap-4 items-center">
            <h1 className={`text-2xl text-center ${montserratBold.className}`}>{title}</h1>
            <h2 className={`text-xl text-center ${montserratMedium.className}`} >{subtitle}</h2>
          </div>
          <p className="text-base">{description}</p>
          <div className="flex flex-row gap-1 items-center">
            <Link href={resumeUrl}>
              <OutlinedButton text={resumeText} large={false} />
            </Link>
            <div className="w-2"></div>
            <a className="p-3 rounded-full hover:bg-gray-500/30 active:bg-gray-500/30 transition-colors" href={githubUrl} aria-label="GitHub">
              <FiGithub size={24} />
            </a>
            <a className="p-3 rounded-full hover:bg-gray-500/30 active:bg-gray-500/30 transition-colors" href={linkedInUrl} aria-label="LinkedIn">
              <FiLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </ParticlesMask>
  );
}