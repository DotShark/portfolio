"use client";

import { Footer } from "@/app/components/footer";
import { LinkedParticles } from "@/app/components/linked-particles";
import { NavMenu } from "@/app/components/nav-menu";
import { OutlinedButton } from "@/app/components/outlined-button";
import { ProjectCard } from "@/app/components/project-card";
import { ProjectDescription } from "@/app/components/project-description";
import { Title } from "@/app/components/title";
import { getProject } from "@/app/lib/projects";
import { Section } from "@/app/lib/section";
import { useRef, use } from "react";
import ReactPlayer from "react-player";

type ProjectPageParams = {
  slug: string
};

export default function ProjectPage({params}: {params: Promise<ProjectPageParams>}) {
  const {slug} = use(params);
  const {name, period, imagePath, shortDescription, longDescription, demoYoutubeId, usedSkills, links} = getProject(slug);
  
  const headerSection: Section = {
    title: "Résumé",
    ref: useRef<HTMLDivElement | null>(null)
  };

  const descriptionSection: Section = {
    title: "Le projet",
    ref: useRef<HTMLDivElement | null>(null)
  };

  const demoSection: Section = {
    title: "Démo du projet",
    ref: useRef<HTMLDivElement | null>(null)
  };

  const linksSection: Section = {
    title: "Liens",
    ref: useRef<HTMLDivElement | null>(null)
  };

  return (
    <div className="min-h-screen flex flex-col gap-8 items-center justify-between">
      <NavMenu sections={links ? [headerSection, descriptionSection, linksSection] : [headerSection, descriptionSection]} />
      <main className="px-6 pt-20 pb-6 max-w-md sm:max-w-screen-sm md:max-w-3xl lg:max-w-5xl xl:max-w-7xl flex flex-col gap-8 items-center">
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
        <section ref={descriptionSection.ref} className="w-full flex flex-col gap-4 scroll-m-20">
          <Title text="Le projet" />
          <ProjectDescription description={longDescription ?? shortDescription} />
        </section>
        {
          demoYoutubeId && <section ref={demoSection.ref} className="w-full flex flex-col gap-4 scroll-m-20">
            <Title text="Démo du projet" />
            <div className="w-full aspect-video rounded-3xl overflow-hidden">
              <ReactPlayer 
                src={`https://www.youtube.com/watch?v=${demoYoutubeId}`} 
                width="100%"
                height="100%"
                controls={true}
                light={`https://i.ytimg.com/vi/${demoYoutubeId}/maxresdefault.jpg`}
                playing={true}
              />
            </div>
          </section>
        }
        {
          links && <section ref={linksSection.ref} className="w-full flex flex-col gap-4 scroll-m-20">
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
        year="2026"
        sourceUrl="https://github.com/DotShark/portfolio"
      />
      <div className="fixed w-screen h-screen bg-dark-gradient -z-10"></div>
      <LinkedParticles />
    </div>
  );
} 