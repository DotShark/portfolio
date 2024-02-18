"use client";

import { useRef } from "react";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { LinkedParticles } from "./components/linked-particles";
import { NavMenu } from "./components/nav-menu";
import { ProjectCard } from "./components/project-card";
import { SkillsList } from "./components/skills-list";
import { Title } from "./components/title";
import { Section } from "./lib/section";
import { skillCategories } from "./lib/skills-categories";
import { projects } from "./lib/projects";

export default function HomePage() {
  const headerSection: Section = {
    title: "Résumé",
    ref: useRef<HTMLDivElement | null>(null)
  };

  const skillsSection: Section = {
    title: "Mes compétences",
    ref: useRef<HTMLDivElement | null>(null)
  };

  const projectsSection: Section = {
    title: "Mes projets",
    ref: useRef<HTMLDivElement | null>(null)
  };

  return (
    <div className="min-h-screen flex flex-col gap-8 items-center justify-between">
      <NavMenu sections={[headerSection, skillsSection, projectsSection]} />
      <main className="px-6 pt-20 pb-6 max-w-md sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl flex flex-col gap-8 items-center">
        <section ref={headerSection.ref} className="w-full flex flex-col gap-8 scroll-m-20">
          <Header
            title="Arnaud Petit"
            subtitle="Développeur full-stack"
            description="Bientôt titulaire d’un titre professionnel de concepteur développeur d'applications, 
            je souhaite intégrer une nouvelle entreprise à partir de mai 2024 pour faire suite à mon expérience chez Truckrs."
            resumeText="Voir mon CV"
            resumeUrl="/resume"
            githubUrl="https://github.com/DotShark/"
            linkedInUrl="https://www.linkedin.com/in/arnaud-petit-dev/"
          />
        </section>
        <section ref={skillsSection.ref} className="w-full flex flex-col gap-8 scroll-m-20">
          <Title text="Mes compétences" />
          <div className="flex flex-row flex-wrap justify-center items-stretch gap-8">
            {
              skillCategories.map(({iconPath, color, title, skills}, key) => (
                <div key={key} className="basis-full sm:basis-[calc(50%-1rem)] lg:basis-[calc(33.33333333%-1.5rem)]">
                  <SkillsList 
                    key={key} 
                    iconPath={iconPath} 
                    color={color} 
                    title={title} 
                    skills={skills} 
                  />
                </div>
              ))
            }
          </div>
        </section>
        <section ref={projectsSection.ref} className="w-full flex flex-col gap-8 scroll-m-20">
          <Title text="Mes projets" />
          <div className="flex flex-row flex-wrap justify-center items-stretch gap-8">
            {
              projects.map(({slug, name, period, imagePath, shortDescription, usedSkills}, key) => (
                <div key={key} className="basis-full lg:basis-[calc(50%-1rem)]">
                  <ProjectCard
                    key={key}
                    slug={slug}
                    name={name}
                    period={period}
                    imagePath={imagePath}
                    shortDescription={shortDescription}
                    usedSkills={usedSkills}
                    showButton={true}
                  />
                </div>
              ))
            }
          </div>
        </section>
      </main>
      <Footer
        name="Arnaud Petit"
        year="2024"
        sourceUrl="https://github.com/DotShark/portfolio"
      />
      <div className="fixed w-screen h-screen bg-dark-gradient -z-10"></div>
      <LinkedParticles />
    </div>
  );
}
