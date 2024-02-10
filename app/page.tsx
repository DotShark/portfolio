import { Footer } from "./components/footer";
import Header from "./components/header";
import { LinkedParticles } from "./components/linked-particles";
import { ProjectCard } from "./components/project-card";
import { SkillsList } from "./components/skills-list";
import { Title } from "./components/title";
import {
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
  javascript,
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
} from "./lib/skills";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <main className="min-h-screen px-6 pt-6 flex flex-col gap-8 items-center">
        <Header
          title="Arnaud Petit"
          subtitle="Développeur full-stack"
          description="Bientôt titulaire d’un titre professionnel de concepteur développeur d'applications, 
          je souhaite intégrer une nouvelle entreprise à partir de mai 2024 pour faire suite à mon expérience chez Truckrs."
          resumeText="Voir mon CV"
          resumeUrl="/cv-arnaud-petit.pdf"
          githubUrl="https://github.com/DotShark/"
          linkedInUrl="https://www.linkedin.com/in/arnaud-petit-dev/"
        />
        <Title text="Mes compétences" />
        <SkillsList
          iconPath="/icons/front-end.svg"
          color="bg-purple-500/30"
          title="Front-end"
          skills={[
            javascript,
            typescript,
            dart,
            flutter,
            react,
            nextJS,
            vue,
            html,
            css,
            tailwind,
          ]}
        />
        <SkillsList
          iconPath="/icons/back-end.svg"
          color="bg-red-500/30"
          title="Back-end"
          skills={[
            javascript,
            typescript,
            nodejs,
            express,
            postgreSQL,
            mySQL,
            mongoDB,
            sequelize,
            prisma,
          ]}
        />
        <SkillsList
          iconPath="/icons/design.svg"
          color="bg-cyan-500/30"
          title="Design"
          skills={[
            figma,
            adobePhotoshop,
            canva,
            adobeIllustrator,
            adobeAfterEffects,
          ]}
        />
        <Title text="Mes projets" />
        <ProjectCard
          name="TechTutor"
          period={["Novembre 2023", "Janvier 2024"]}
          imagePath="/projects/techtutor.jpg"
          shortDescription="TechTutor est une application qui a pour objectif de combattre la fracture numérique 
          en proposant des cours d’informatiques accessibles et ludiques à toutes et à tous."
          usedSkills={[
            typescript,
            nodejs,
            express,
            prisma,
            react,
            tailwind
          ]}
        />
        <ProjectCard
          name="Truckrs"
          period={["Janvier 2023", "Décembre 2023"]}
          imagePath="/projects/truckrs.png"
          shortDescription="Truckrs est une application qui permet la mise en relation de conducteur qualifiés 
          avec des acteurs du monde du transport à la recherche de freelances. "
          usedSkills={[
            typescript,
            nodejs,
            express,
            sequelize,
            dart,
            flutter
          ]}
        />
      </main>
      <Footer
        name="Arnaud Petit"
        year="2024"
        sourceUrl="https://github.com/DotShark/portfolio_dev"
      />
      <LinkedParticles />
    </div>
  );
}
