import { Skill, dart, docker, express, flutter, git, nodejs, prisma, react, sequelize, tailwind, typescript } from "./skills";

export type Project = {
  slug: string,
  name: string,
  period: string[],
  imagePath: string,
  shortDescription?: string,
  longDescription?: string,
  usedSkills: Skill[],
  demoYoutubeId?: string,
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
      "- Nous avons dû créer une interface utilisateur simple et conviviale, minimisant le nombre de clics pour réaliser une action.\n" +
      "- Il a également été essentiel de présenter les informations de manière à ne pas submerger les utilisateurs, afin de les aider à progresser sereinement.\n" +
      "- Nous avons cherché des moyens d'indiquer clairement aux utilisateurs leurs progrès.\n" +
      "- Il a fallu veiller à la cohérence des informations affichées sur l'ensemble des pages.\n" +
      "## Comment avons-nous mené ce projet à bien ?\n" +
      "- Avec seulement 20 jours pour livrer une première version de TechTutor, nous avons dû prioriser nos tâches avec soin et maintenir une communication claire et efficace au sein de l'équipe. " +
      "Nous nous sommes concentrés sur les fonctionnalités essentielles et avons suivi une méthodologie agile.\n" +
      "- Pour le back-end, nous avons mis en place une API REST avec une architecture MVC-like en utilisant Node.js, Express et Prisma, ce qui a permis de structurer les données et d'assurer un code robuste.\n" +
      "- Sur le front-end, nous avons choisi React pour sa flexibilité et Tailwind avec Zustand pour le style et la gestion de l'état, aboutissant à une application web réactive et performante.\n" +
      "## Qu’est-ce que le projet m’a appris ?\n" +
      "- Sur le plan technique, TechTutor m'a permis d'approfondir mes compétences en développement full-stack avec Node.js et React.\n" +
      "- J'ai également amélioré ma capacité à concevoir des interfaces utilisateurs intuitives et accessibles.\n" +
      "- Professionnellement, j'ai renforcé mes compétences en travail d'équipe et en communication, apprenant à exprimer efficacement mes idées et à prioriser les tâches."
    ,
    usedSkills: [
      typescript,
      nodejs,
      express,
      prisma,
      react,
      tailwind,
      git,
      docker
    ],
    links: [
      {text: "Voir le site", url: "https://techtutor.dotshark.dev"}
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
      "- Nous avons dû nous mettre à la place des utilisateurs, en particulier des transporteurs et des conducteurs.\n" +
      "- Il a fallu comprendre et appliquer les principes de design d'interface à partir des maquettes de l'UX designer.\n" +
      "- Il a été primordial de s'assurer de la robustesse et de la sécurité du back-end.\n" +
      "- Il fallait que l'application mobile soit bien optimisé.\n" +
      "La cohérence des informations affichées sur les différentes pages a également été un enjeu important.\n" +
      "## Comment avons-nous mené ce projet à bien ?\n" +
      "- Le succès du projet a reposé sur la cohésion de l'équipe et sa capacité à s'adapter rapidement. Des rituels de communication comme les daily meetings et des démos techniques ont été établis pour maintenir l'alignement sur les objectifs.\n" +
      "- Nous avons adopté des outils de gestion de projet et de collaboration en ligne pour conserver la transparence et l'efficacité.\n" +
      "- Du point de vue technique, nous avons mis en place deux API REST avec une architecture MVC-like en utilisant Node.js, Express et Sequelize pour le back-end. Pour le front-end nous avons choisi Flutter et Dart avec la clean architecture et le pattern BLoC.\n" +
      "## Qu’est-ce que le projet m’a appris ?\n" +
      "- J'ai appris l'importance de la structure du code pour la robustesse du back-end à travers l'implémentation d'une architecture MVC-like.\n" +
      "- J'ai compris comment appliquer la clean architecture et le pattern BLoC pour une meilleure maintenabilité et séparation des responsabilités dans le développement front-end.\n" +
      "- Les activités d'optimisation m'ont enseigné à réduire la taille des applications et à améliorer la réactivité grâce à des techniques comme le lazy loading, ce qui améliore significativement l'expérience utilisateur.\n"
    ,
    usedSkills: [
      typescript,
      nodejs,
      express,
      sequelize,
      dart,
      flutter,
      git,
      docker
    ],
    demoYoutubeId: "VxXeVpwSRtE",
    links: [
      {text: "App conducteurs", url: "https://app.truckrs.co/redirect-store"},
      {text: "App transporteurs", url: "https://app.truckrs.co/redirect-store-pro"}
    ]
  },
];

export function getProject(slug: string): Project {
  return projects.find((project) => project.slug === slug)!;
}