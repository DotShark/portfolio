import {
  Skill,
  adobeAfterEffects,
  adobeIllustrator,
  adobePhotoshop,
  canva,
  css,
  dart,
  express,
  figma,
  flutter,
  html,
  mongoDB,
  mySQL,
  nextJS,
  nodejs,
  postgreSQL,
  prisma,
  react,
  sequelize,
  tailwind,
  typescript,
  vue,
} from "./skills";

export type SkillsCategory = {
  iconPath: string;
  color: string;
  title: string;
  skills: Skill[];
};

export const skillCategories: SkillsCategory[] = [
  {
    iconPath: "/icons/front-end.svg",
    color: "bg-purple-500/30",
    title: "Front-end",
    skills: [
      typescript,
      dart,
      flutter,
      react,
      nextJS,
      vue,
      html,
      css,
      tailwind,
    ],
  },
  {
    iconPath: "/icons/back-end.svg",
    color: "bg-red-500/30",
    title: "Back-end",
    skills: [
      typescript,
      nodejs,
      express,
      postgreSQL,
      mySQL,
      mongoDB,
      sequelize,
      prisma,
    ],
  },
  {
    iconPath: "/icons/design.svg",
    color: "bg-cyan-500/30",
    title: "Design",
    skills: [figma, adobePhotoshop, canva, adobeIllustrator, adobeAfterEffects],
  },
];
