"use client";

import { Footer } from "@/app/components/footer";
import { LinkedParticles } from "@/app/components/linked-particles";
import { NavMenu } from "@/app/components/nav-menu";
import { ProjectCard } from "@/app/components/project-card";
import { getProject } from "@/app/lib/projects";
import { Section } from "@/app/lib/section";
import { useRef } from "react";

type ProjectPageParams = {
  slug: string
};

export default function ProjectPage({params}: {params: ProjectPageParams}) {
  const {slug, name, period, imagePath, usedSkills} = getProject(params.slug);
  
  const headerSection: Section = {
    title: "Résumé",
    ref: useRef<HTMLDivElement | null>(null)
  };

  return (
    <div className="min-h-screen flex flex-col gap-8 justify-between">
      <NavMenu sections={[headerSection]} />
      <main className="px-6 pt-20 pb-6 flex flex-col gap-8 items-center">
        <section ref={headerSection.ref} className="w-full flex flex-col gap-8 scroll-m-20">
          <ProjectCard
            slug={slug}
            name={name}
            period={period}
            imagePath={imagePath}
            usedSkills={usedSkills}
            showButton={false}
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