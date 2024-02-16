import Image from "next/image";
import { montserratBold } from "../lib/fonts";
import { SkillsCategory } from "../lib/skills-categories";
import { ParticlesMask } from "./particles-mask";

export function SkillsList({iconPath, color, title, skills}: SkillsCategory) {
  return (
    <ParticlesMask>
      <div className="w-full bg-gray-900/60 rounded-3xl p-8 gap-6 flex flex-col items-center">
        <div className={`${color} rounded-2xl p-3 flex flex-col items-center justify-center`}>
          <Image src={iconPath} alt={title} width={48} height={48} priority={false} />
          <h2 className={`text-xl text-center ${montserratBold.className}`}>{title}</h2>
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center gap-3">
          {
            skills.map((skill, key) => {
              return (
                <div key={key} className={`rounded-full ${skill.color} px-3 py-1 flex flex-row items-center justify-center gap-2`}>
                  <Image src={skill.iconPath} alt={skill.text} width={16} height={16} priority={false} className="w-4 h-4" />
                  <p className="text-sm">{skill.text}</p>
                </div>
              );
            })
          }
        </div>
      </div>
    </ParticlesMask>
  );
}