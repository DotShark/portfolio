import { montserratBold, montserratMedium } from "../lib/fonts";
import Image from "next/image";
import { Project } from "../lib/projects";
import { OutlinedButton } from "./outlined-button";
import { FiChevronRight } from "react-icons/fi";
import Link from "next/link";

type ProjectCardProps = Project & {showButton: boolean};

export function ProjectCard({slug, name, period, imagePath, shortDescription, usedSkills, showButton}: ProjectCardProps) {
  return (
    <div className="w-full rounded-3xl bg-gray-900/60 backdrop-blur p-6 flex flex-col items-start justify-center gap-4">
      <div className="flex flex-row items-center justify-start gap-4">
        <div className="rounded-2xl overflow-hidden">
          <Image src={imagePath} alt={name} width={80} height={80} priority={false} />
        </div>
        <div className="flex flex-col items-start justify-center gap-1">
          <h2 className={`text-xl ${montserratBold.className}`}>{name}</h2>
          <h3 className={`text-base ${montserratMedium.className}`}>
            {period[0]}
            <br />
            {period[1]}
          </h3>
        </div>
      </div>
      {
        shortDescription && <p className="text-sm">{shortDescription}</p>
      }
      <div className="flex flex-raw flex-wrap items-center justify-start gap-3">
        {
          usedSkills.map((skill, key) => {
            return (
              <div key={key} className={`rounded-full ${skill.color} px-3 py-1 flex flex-row items-center justify-center gap-2`}>
                <Image src={skill.iconPath} alt={skill.text} width={16} height={16} priority={false} className="w-4 h-4" />
                <p className="text-sm">{skill.text}</p>
              </div>
            );
          })
        }
      </div>
      {
        showButton && 
        <Link className="w-full" href={`/projects/${slug}`}>
          <OutlinedButton
            text="Voir les détails" 
            large={true} 
            leftIcon={<div className="w-2"></div>} 
            rightIcon={<FiChevronRight size={20} />}
          />
        </Link>
      }
    </div>
  );
}