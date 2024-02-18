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
      "## Quels défis avons-nous dû relever ?\n" +
      "- Nous avons dû créer une interface simple et conviviale en réduisant au maximum le nombre de clics nécessaires pour effectuer une action.\n" +
      "- Nous avons dû faire en sorte que les utilisateurs ne soient jamais confrontés à une avalanche d'informations afin de pouvoir les faire progresser sans les effrayer.\n" +
      "- Nous avons dû trouver des solutions pour donner des indications aux utilisateurs quant aux progrès qu'ils font."
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
      {text: "Voir le site", url: "https://techtutor.dotshark.ovh"}
    ]
  },
  {
    slug: "truckrs",
    name: "Truckrs",
    period: ["Janvier 2023", "Décembre 2023"],
    imagePath: "/projects/truckrs.png",
    shortDescription: "Truckrs est une plateforme qui connecte les transporteurs et les conducteurs indépendants via deux applications mobiles distinctes. Une est destinée aux transporteurs et l'autre aux chauffeurs indépendants.",
    longDescription:
      "## Truckrs, qu'est-ce que c'est ?\n" +
      "Truckrs est une plateforme qui connecte les transporteurs et les conducteurs indépendants via deux applications mobiles distinctes. Une est destinée aux transporteurs et l'autre aux chauffeurs indépendants.\n" +
      "## Pourquoi ce projet ?\n" +
      "Truckrs est né d’un constat sur le marché du transport routier français : il manque 60 000 conducteurs routiers en France.\n\n" +
      "Face à cette pénurie de conducteurs, Truckrs vise à combler ce déficit en mettant en relation les transporteurs et les conducteurs indépendants. L’objectif est d’aider les conducteurs à prendre le contrôle de leur vie d’auto-entrepreneur.\n" +
      "## Dans quel contexte ai-je travaillé sur ce projet ?\n" +
      "J'ai signé un contrat en alternance chez Truckrs au début de l'année 2023. Nous étions 3 alternants et un CTO à travailler sur ce projet durant toute l'année. Un lead dev nous a rejoint en septembre ce qui nous a permis d'améliorer nos process et de régler une partie des problèmes de dette technique.\n" +
      "## Quel est le public visé ?\n" +
      "Le public visé par Truckrs comprend deux parties :\n" +
      "- D’une part, les transporteurs à la recherche de conducteurs pour leurs missions.\n" +
      "- D’autre part, les conducteurs indépendants cherchant des opportunités de travail.\n" +
      "## Quels défis avons-nous dû relever ?\n" +
      "- Nous avons dû apprendre à nous mettre à la place des transporteurs et des conducteurs.\n" +
      "- Nous avons dû comprendre comment obtenir une expérience utilisateur fluide et intuitive en nous basant sur les maquettes produites par l'UX designer.\n" +
      "- Nous avons dû intégrer les fonctionnalités spécifiques aux transporteurs et aux conducteurs.\n" +
      "- Nous avons dû optimiser les performances de l’application mobile.\n" +
      "- Nous avons dû nous assurer que le back-end était robuste et sécurisé."
    ,
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