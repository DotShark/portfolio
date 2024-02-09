import Image from "next/image";
import { montserratBold } from "../lib/fonts";
import { Skill } from "../lib/skills";

type SkillsListProps = {
  iconPath: string,
  title: string,
  skills: Skill[]
};

export function SkillsList({iconPath, title, skills}: SkillsListProps) {
  return (
    <div className="w-full bg-gray-900 bg-opacity-60 rounded-3xl p-8 gap-6 flex flex-col items-center">
      <Image src={iconPath} alt={title} width={64} height={64} priority={false} />
      <h2 className={`text-xl text-center ${montserratBold.className}`}>{title}</h2>
      <div className="flex flex-raw flex-wrap items-center justify-center gap-3">
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
  );
}