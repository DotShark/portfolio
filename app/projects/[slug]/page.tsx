"use client";

import { Footer } from "@/app/components/footer";
import { LinkedParticles } from "@/app/components/linked-particles";
import { NavMenu } from "@/app/components/nav-menu";
import { OutlinedButton } from "@/app/components/outlined-button";
import { ProjectCard } from "@/app/components/project-card";
import { Title } from "@/app/components/title";
import { montserratBold } from "@/app/lib/fonts";
import { getProject } from "@/app/lib/projects";
import { Section } from "@/app/lib/section";
import { useRef } from "react";
import Markdown from "react-markdown";

type ProjectPageParams = {
  slug: string
};

export default function ProjectPage({params}: {params: ProjectPageParams}) {
  const {slug, name, period, imagePath, shortDescription, longDescription, usedSkills, links} = getProject(params.slug);
  
  const headerSection: Section = {
    title: "Résumé",
    ref: useRef<HTMLDivElement | null>(null)
  };

  const descriptionSection: Section = {
    title: "Le projet",
    ref: useRef<HTMLDivElement | null>(null)
  };

  const linksSection: Section = {
    title: "Liens",
    ref: useRef<HTMLDivElement | null>(null)
  };

  return (
    <div className="min-h-screen flex flex-col gap-8 justify-between">
      <NavMenu sections={[headerSection, descriptionSection, linksSection]} />
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
        <section ref={descriptionSection.ref} className="w-full flex flex-col gap-3 scroll-m-20">
          <Title text="Le projet" />
          <div className="w-full p-4 rounded-3xl bg-gray-900/60">
            <Markdown
              components={{
                h2: ({children}) => <h2 className={`text-lg mb-2 ${montserratBold.className}`}>{children}</h2>,
                p: ({children}) => <p className="text-sm mb-2">{children}</p>,
                ul: ({children}) => <ul className="text-sm mb-2">{children}</ul>,
                li: ({children}) => (
                  <div className="flex flex-row gap-2">
                    <p>•</p>
                    <p>{children}</p>
                  </div>
                )
              }}
            >
              {longDescription ?? shortDescription}
            </Markdown>
          </div>
        </section>
        {
          links && <section ref={linksSection.ref} className="w-full flex flex-col gap-3 scroll-m-20">
            <Title text="Liens" />
            {
              links?.map((link, key) => (
                <a key={key} className="w-full" href={link.url}>
                  <OutlinedButton text={link.text} large={true} />
                </a>
              ))
            }
          </section>
        }
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