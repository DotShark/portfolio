"use client";

import { useRef, useState } from "react";
import { Footer } from "./components/footer";
import Header from "./components/header";
import { LinkedParticles } from "./components/linked-particles";
import { NavMenu } from "./components/nav-menu";
import { ProjectCard } from "./components/project-card";
import { SkillsList } from "./components/skills-list";
import { Title } from "./components/title";
import { Section } from "./lib/section";
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
  const header: Section = {
    title: "Résumé",
    ref: useRef<HTMLDivElement | null>(null)
  };

  const skills: Section = {
    title: "Mes compétences",
    ref: useRef<HTMLDivElement | null>(null)
  };

  const projects: Section = {
    title: "Mes projets",
    ref: useRef<HTMLDivElement | null>(null)
  };

  const [visibleHeightOf, setVisibleHeightOf] = useState({
    header: 0,
    skills: 0,
    projects: 0
  });

  const updateVisibleHeightOf = (section: "header" | "skills" | "projects", pixels: number) => {
    setVisibleHeightOf({
      ...visibleHeightOf,
      [section]: pixels
    });
    console.log(visibleHeightOf);
  };

  return (
    <div className="h-screen flex flex-col gap-8">
      <NavMenu sections={[header, skills, projects]} />
      <main className="px-6 pt-20 pb-6 flex flex-col gap-8 items-center">
        <section ref={header.ref} className="flex flex-col gap-8 scroll-m-20">
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
        </section>
        <section ref={skills.ref} className="flex flex-col gap-8 scroll-m-20">
          <Title text="Mes compétences" />
          <SkillsList
            iconPath="/icons/front-end.svg"
            color="bg-purple-500/30"
            title="Front-end"
            skills={[
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
        </section>
        <section ref={projects.ref} className="flex flex-col gap-8 scroll-m-20">
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
        </section>
      </main>
      <Footer
        name="Arnaud Petit"
        year="2024"
        sourceUrl="https://github.com/DotShark/portfolio_dev"
      />
      <div className="fixed w-screen h-screen bg-dark-gradient -z-10"></div>
      <LinkedParticles />
    </div>
  );
}
