import {
  Skill,
  adobeAfterEffects,
  adobeIllustrator,
  adobePhotoshop,
  aws,
  canva,
  css,
  dart,
  docker,
  eslint,
  express,
  figma,
  flutter,
  git,
  githubActions,
  html,
  jest,
  mongoDB,
  mySQL,
  nest,
  nextJS,
  nodejs,
  nuxt,
  postgreSQL,
  prettier,
  prisma,
  react,
  tailwind,
  typescript,
  vitest,
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
      nuxt,
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
      nest,
      postgreSQL,
      mySQL,
      mongoDB,
      prisma,
    ],
  },
  {
    iconPath: "/icons/design.svg",
    color: "bg-cyan-500/30",
    title: "Design",
    skills: [figma, adobePhotoshop, canva, adobeIllustrator, adobeAfterEffects],
  },
  {
    iconPath: "/icons/tools.svg",
    color: "bg-amber-500/30",
    title: "Outils & DevOps",
    skills: [git, docker, githubActions, aws, jest, vitest, eslint, prettier],
  },
];
