import { Skill, dart, express, flutter, nodejs, prisma, react, sequelize, tailwind, typescript } from "./skills";

export type Project = {
  name: string,
  period: string[],
  imagePath: string,
  shortDescription: string,
  longDescription?: string,
  usedSkills: Skill[]
};

export const projects: Project[] = [
  {
    name: "TechTutor",
    period: ["Novembre 2023", "Janvier 2024"],
    imagePath: "/projects/techtutor.jpg",
    shortDescription: "TechTutor est une application qui a pour objectif de combattre la fracture numérique en proposant des cours d’informatiques accessibles et ludiques à toutes et à tous.",
    usedSkills: [
      typescript,
      nodejs,
      express,
      prisma,
      react,
      tailwind
    ]
  },
  {
    name: "Truckrs",
    period: ["Janvier 2023", "Décembre 2023"],
    imagePath: "/projects/truckrs.png",
    shortDescription: "Truckrs est une application qui permet la mise en relation de conducteur qualifiés avec des acteurs du monde du transport à la recherche de freelances.", 
    usedSkills: [
      typescript,
      nodejs,
      express,
      sequelize,
      dart,
      flutter
    ]
  },
];