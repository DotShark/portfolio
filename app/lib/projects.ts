import { Skill, dart, directus, docker, express, flutter, git, githubActions, nest, nodejs, nuxt, postgreSQL, prisma, react, sequelize, tailwind, typescript, vue } from "./skills";

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
    slug: "hylest",
    name: "Hylest",
    period: ["Avril 2025", "Février 2026"],
    imagePath: "/projects/hylest.png",
    shortDescription: "Hylest est une application qui permet aux utilisateurs de transmettre automatiquement leurs données numériques personnelles à leurs proches après une période prolongée d'inactivité, de manière sécurisée et respectueuse de la vie privée.",
    longDescription:
      "## Hylest, qu'est-ce que c'est ?\n" +
      "Hylest est une application qui permet aux utilisateurs de transmettre automatiquement leurs données numériques personnelles à leurs proches après une période prolongée d'inactivité. " +
      "L'objectif est de fournir une solution sécurisée, simple et respectueuse de la vie privée pour gérer la transmission de données post-mortem.\n" +
      "## Pourquoi ce projet ?\n" +
      "À l'ère du numérique, nos vies sont de plus en plus présentes en ligne : photos, messages, documents importants. " +
      "Pourtant, la question de la transmission de ce patrimoine numérique reste souvent négligée. " +
      "Hylest répond à ce besoin en permettant aux utilisateurs de préparer sereinement la transmission de leurs données numériques à leurs proches, " +
      "tout en garantissant la sécurité et la confidentialité de ces informations sensibles.\n" +
      "## Dans quel contexte ai-je travaillé sur ce projet ?\n" +
      "J'ai rejoint Hylest en alternance en avril 2025 avec le rôle de développeur full-stack. " +
      "L'équipe est composée du fondateur, d'un stagiaire et moi-même. Au moment où l'équipe était au plus grand, il y avait 2 stagiaires en plus de moi. " +
      "Étant devenu lead dev, j'ai la responsabilité de structurer le développement technique et d'encadrer les autres développeurs.\n" +
      "## Quel est le public visé ?\n" +
      "Hylest s'adresse à toute personne souhaitant anticiper la transmission de son patrimoine numérique. " +
      "Cela concerne particulièrement les personnes soucieuses de préserver leurs données personnelles tout en s'assurant que leurs proches pourront y accéder en cas de besoin.\n" +
      "## Quels défis ai-je dû relever ?\n" +
      "- Garantir la sécurité et la confidentialité des données sensibles en utilisant des prestataires cloud français pour l'hébergement.\n" +
      "- Trouver le bon équilibre entre la rapidité de livraison du MVP, la sécurité des données, l'intégrité des données et la scalabilité de la solution.\n" +
      "- Prendre le rôle de lead développeur et mettre en place des pratiques de développement rigoureuses (code reviews, conventional commits, SCRUM).\n" +
      "- Assurer l'adoption de l'application en créant une expérience utilisateur simple et rassurante pour un sujet aussi sensible.\n" +
      "## Comment ai-je mené ce projet à bien ?\n" +
      "- J'ai choisi NestJS pour le back-end, permettant de structurer une architecture modulaire monolithique robuste et maintenable.\n" +
      "- PostgreSQL a été sélectionné pour garantir l'intégrité des données avec MikroORM comme ORM.\n" +
      "- Pour l'application mobile, Flutter avec une architecture MVVM (Provider + Dio) assure une expérience utilisateur fluide et cohérente.\n" +
      "- L'hébergement sur Scaleway (S3, base de données et back-end) garantit la souveraineté des données avec des prestataires français.\n" +
      "- J'ai mis en place SCRUM pour structurer le développement, avec des feature branches et des code reviews obligatoires pour maintenir la qualité du code.\n" +
      "- L'utilisation de conventional commits permet de garder un historique de changements clair et compréhensible.\n" +
      "## Qu'est-ce que le projet m'a appris ?\n" +
      "- J'ai appris NestJS pour ce projet, ce qui m'a permis de maîtriser une architecture back-end moderne et scalable basée sur TypeScript.\n" +
      "- J'ai développé mes compétences en leadership technique en prenant le rôle de lead développeur et en mettant en place des processus de développement structurés.\n" +
      "- J'ai approfondi ma compréhension des enjeux de sécurité et de confidentialité des données, particulièrement critiques pour un projet comme Hylest.\n" +
      "- J'ai appris à gérer les compromis entre vitesse de développement et qualité technique, un équilibre essentiel pour la réussite d'un MVP.\n" +
      "- L'application de SCRUM m'a permis de structurer le travail d'équipe et d'améliorer la prévisibilité des livraisons."
    ,
    usedSkills: [
      typescript,
      nest,
      postgreSQL,
      flutter,
      dart,
      git,
      docker,
      githubActions
    ],
    links: [
      {text: "Voir le site", url: "https://hylest.com"}
    ]
  },
  {
    slug: "somestuff-studio",
    name: "Some Stuff Studio",
    period: ["Janvier 2025", "Avril 2025"],
    imagePath: "/projects/sss.jpg",
    shortDescription: "Some Stuff Studio est le site vitrine d'un studio 3D parisien spécialisé dans la création de contenus visuels de haute qualité : documentaires, publicités, brand content et animations 3D.",
    longDescription:
      "## Some Stuff Studio, qu'est-ce que c'est ?\n" +
      "Some Stuff Studio est le site web d'un studio 3D basé à Paris, spécialisé dans la création de contenus visuels haut de gamme. " +
      "Le studio réalise des projets variés allant des documentaires pour Arte aux campagnes publicitaires pour des marques de luxe comme Breitling et Renault.\n" +
      "## Pourquoi ce projet ?\n" +
      "Le studio avait besoin d'une vitrine digitale pour présenter son portfolio de manière immersive et professionnelle. " +
      "L'objectif était de créer une expérience utilisateur qui reflète la qualité créative du studio tout en mettant en valeur les projets vidéo de manière optimale.\n" +
      "## Dans quel contexte ai-je travaillé sur ce projet ?\n" +
      "J'ai réalisé ce projet en stage de janvier à avril 2025. J'étais seul sur le développement technique, travaillant en collaboration avec le studio pour traduire leur vision créative en réalité.\n" +
      "## Quel est le public visé ?\n" +
      "Le site s'adresse à des clients potentiels du studio : marques de luxe, chaînes de télévision, agences de publicité et producteurs cherchant un partenaire pour leurs projets de production audiovisuelle.\n" +
      "## Quels défis ai-je dû relever ?\n" +
      "- Optimiser les performances vidéo pour garantir une navigation fluide malgré un contenu multimédia lourd. J'ai mis en place un serveur HLS pour le streaming adaptatif.\n" +
      "- Intégrer des animations complexes tout en maintenant d'excellentes performances.\n" +
      "- Structurer un CMS headless (Directus) pour permettre au studio de gérer facilement son portfolio sans compétences techniques.\n" +
      "- Traduire une vision artistique forte en code, en respectant l'identité créative du studio.\n" +
      "## Comment ai-je mené ce projet à bien ?\n" +
      "- J'ai choisi Nuxt pour sa performance et ses capacités SSR, garantissant un excellent référencement et des temps de chargement optimaux.\n" +
      "- Pour le back-end, j'ai intégré Directus comme CMS headless, offrant une interface intuitive pour la gestion du contenu.\n" +
      "- J'ai développé une infrastructure de streaming vidéo avec HLS pour assurer une lecture fluide quel que soit le débit de connexion.\n" +
      "- L'utilisation de Docker a facilité le déploiement et la maintenance de l'application.\n" +
      "## Qu'est-ce que le projet m'a appris ?\n" +
      "- J'ai approfondi mes compétences en optimisation de performances, notamment pour le streaming vidéo et les animations web.\n" +
      "- J'ai appris à traduire une vision créative en code fonctionnel, en collaborant étroitement avec des professionnels non techniques.\n" +
      "- Ce projet m'a permis de maîtriser l'intégration d'un CMS headless et de comprendre les enjeux d'un système de gestion de contenu performant.\n" +
      "- J'ai renforcé ma capacité à travailler de manière autonome sur un projet complet, de la conception à la mise en production."
    ,
    usedSkills: [
      typescript,
      nuxt,
      vue,
      nodejs,
      directus,
      git,
      docker,
      githubActions
    ],
    links: [
      {text: "Voir le site", url: "https://somestuff.studio/"}
    ]
  },
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