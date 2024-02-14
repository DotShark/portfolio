import { Skill, dart, express, flutter, nodejs, prisma, react, sequelize, tailwind, typescript } from "./skills";

export type Project = {
  slug: string,
  name: string,
  period: string[],
  imagePath: string,
  shortDescription?: string,
  longDescription?: string,
  usedSkills: Skill[],
  links?: ProjectLink[]
};

export type ProjectLink = {
  text: string,
  url: string
};

export const projects: Project[] = [
  {
    slug: "techtutor",
    name: "TechTutor",
    period: ["Novembre 2023", "Janvier 2024"],
    imagePath: "/projects/techtutor.jpg",
    shortDescription: "TechTutor est une application qui a pour objectif de combattre la fracture numérique en proposant des cours d’informatiques accessibles et ludiques à toutes et à tous.",
    longDescription:
      "## TechTutor, qu'est-ce que c'est ?\n" +
      "Tech Tutor est une application conçue pour combattre la fracture numérique en proposant une approche ludique pour apprendre les bases de l'informatique à travers des mini-jeux, du contenu vidéo et textuel.\n" +
      "## Pourquoi ce projet ?\n" +
      "Même en 2024, de nombreuses personnes peuvent éprouver des difficultés à se servir d'un ordinateur ou d'un smartphone car elles n'ont jamais eu l'occasion de l'apprendre.\n\n" +
      "Cela provoque des inégalités dans l’accès aux technologies, on appelle ce phénomène la fracture numérique.\n" +
      "TechTutor a été conçu pour être une solution à ce problème.\n" +
      "## Dans quel contexte ai-je travaillé sur ce projet ?\n" +
      "Ce projet a été réalisé dans le cadre de la formation proposée par O'clock. Nous étions 5 à travailler dessus sur une période de 20 jours.\n" +
      "## Quel est le public visé ?\n" +
      "Tech Tutor cible un public diversifié, incluant ceux qui ont peu d'expérience avec les technologies ou qui se sentent exclus de la révolution numérique.\n\n" +
      "L'application s'adresse particulièrement aux débutants de tous âges.\n" +
      "## Quels défis avons-nous du relever ?\n" +
      "- Nous avons du créer une interface simple et conviviale en réduisant au maximum le nombre de clics nécessaires pour effectuer une action.\n" +
      "- Nous avons du faire en sorte que les utilisateurs ne soient jamais confrontés à une avalanche d'informations afin de pouvoir les faire progresser sans les effrayer.\n" +
      "- Nous avons du trouver des solutions pour donner des indications aux utilisateurs quand aux progrès qu'ils font."
    ,
    usedSkills: [
      typescript,
      nodejs,
      express,
      prisma,
      react,
      tailwind
    ],
    links: [
      {text: "Voir le site", url: "https://techtutor.fr/"}
    ]
  },
  {
    slug: "truckrs",
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
    ],
    links: [
      {text: "App conducteurs", url: "https://app.truckrs.co/redirect-store"},
      {text: "App transporteurs", url: "https://app.truckrs.co/redirect-store-pro"}
    ]
  },
];

export function getProject(slug: string): Project {
  return projects.find((project) => project.slug === slug)!;
}