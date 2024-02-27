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
      "- Nous avons dû trouver des solutions pour donner des indications aux utilisateurs quant aux progrès qu'ils font.\n" +
      "- Nous avons dû nous assurer que les infos qui étaient affichées étaient cohérentes entre les différentes pages.\n" +
      "## Comment avons-nous mené ce projet à bien ?\n" +
      "Étant donné que nous ne disposions que de 20 jours pour livrer une première version de TechTutor, nous avons dû faire preuve d'une aptitude à prioriser efficacement les tâches et d'une communication claire et efficiente entre les différents membres de l’équipe.\n" +
      "Nous nous sommes donc concentrés sur les fonctionnalités clés et avons adopté une méthodologie agile, avec une communication efficace via Notion et Slack, et des réunions quotidiennes pour assurer le suivi du projet et la résolution rapide des problèmes.\n\n" +
      "Pour le back-end, nous avons développé une API REST en respectant une architecture MVC-like grâce à Node.js, Express et Prisma. Ce choix nous a permis de structurer efficacement les données et de garantir un code robuste et maintenable.\n" +
      "Côté front-end, nous avons opté pour React pour sa flexibilité et sa capacité à créer des interfaces utilisateur interactives. Avec l'aide de Tailwind pour le style et Zustand pour la gestion de l'état, nous avons pu créer une application web performante et réactive.\n" +
      "## Qu’est-ce que le projet m’a appris ?\n" +
      "TechTutor m'a enseigné des leçons précieuses, autant sur le plan technique que professionnel. Techniquement, j'ai renforcé mes compétences en full-stack avec Node.js et React et j'ai appris à gérer l'état de l'application avec Zustand.\n" +
      "J'ai aussi amélioré mon approche de la conception d'interfaces utilisateurs, en m'assurant de leur accessibilité et intuitivité.\n" +
      "Professionnellement, le projet a aiguisé ma capacité à travailler en équipe et ma communication.\n\n" +
      "J'ai collaboré avec des collègues aux profils variés, appris à communiquer mes idées efficacement et à prioriser les tâches essentielles, ce qui était crucial pour le succès du projet dans un délai restreint."
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
      "- Nous avons dû nous assurer que le back-end était robuste et sécurisé.\n" +
      "- Nous avons dû nous assurer que les infos qui étaient affichées étaient cohérentes entre les différentes pages.\n" +
      "## Comment avons-nous mené ce projet à bien ?\n" +
      "Pour que ce projet puisse être un succès, il fallait une équipe soudée capable de s’adapter rapidement aux besoins des utilisateurs, d’avoir le sens des priorités et de communiquer efficacement.\n" +
      "C’est pourquoi nous avons instauré des rituels de communication réguliers, tels que des daily meetings et des démos techniques, qui ont permis à l'équipe de rester alignée sur les objectifs du projet et de résoudre rapidement les problèmes émergents.\n" +
      "L'adoption d'outils de gestion de projet et de collaboration en ligne tels que Gitlab, YouTrack et Slack a également joué un rôle crucial dans le maintien de la transparence.\n\n" +
      "Au niveau de architecture, nous avons développé deux API REST avec une architecture MVC-like en utilisant TypeScript, Node.js, Express et Sequelize, ce qui a assuré robustesse et maintenabilité côté back-end.\n" +
      "Pour le front-end, nous avons opté pour Flutter et Dart en appliquant la clean architecture et le pattern BLoC, garantissant ainsi une séparation claire des responsabilités et une réactivité optimale des applications.\n" +
      "Ces choix technologiques nous ont permis de créer des solutions performantes et évolutives qui répondent efficacement aux exigences du projet.\n\n" +
      "Un autre sujet important était l’optimisation. En back-end, nous avons minimisé les requêtes de base de données et utilisé la mise en cache pour accélérer les réponses API.\n" +
      "Côté front-end, la compression des ressources et la suppression du code superflu ont allégé les applications, tandis que l'implémentation du lazy loading a accéléré les temps de chargement.\n" +
      "Ces améliorations ont rendu les applications plus réactives et ont amélioré l'expérience utilisateur.\n" +
      "## Qu’est-ce que le projet m’a appris ?\n" +
      "Ayant rejoint l'équipe en tant que développeur full-stack junior, ce projet m'a offert une expérience complète qui a grandement enrichi mes compétences techniques et professionnelles.\n" +
      "J'ai été intégré dans une équipe dynamique où j'ai appris à collaborer efficacement et à appliquer des processus de développement structurés qui ont assuré la qualité et la maintenabilité du code.\n" +
      "Du côté back-end, j'ai contribué à la création des deux API REST, ce qui m'a permis de comprendre et d'implémenter une architecture MVC-like.\n" +
      "Cela m'a appris l'importance de structurer le code pour la robustesse et la facilité de maintenance.\n\n" +
      "Enfin, j'ai été impliqué dans des activités d'optimisation cruciales pour l'amélioration des performances.\n" +
      "J'ai appris à minimiser la taille des applications en compressant les ressources et en élaguant le code inutile.\n" +
      "De plus, l'adoption du lazy loading a été une leçon précieuse sur l'importance de l'expérience utilisateur, en rendant les applications plus rapides et plus réactives.\n\n" +
      "Ce projet a été une occasion formidable pour moi de mettre en pratique mes connaissances théoriques dans un environnement réel, d'appréhender les défis du développement full-stack et d'améliorer considérablement mon savoir-faire technique."
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