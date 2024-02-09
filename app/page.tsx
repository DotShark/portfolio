import Header from "./components/header";
import { SkillsList } from "./components/skills-list";
import { Title } from "./components/title";

export default function Home() {
  return (
    <main className="min-h-screen p-8 flex flex-col gap-8 items-center">
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
        title="Développement front-end"
        skills={
          [
            {iconPath: "/icons/flutter.svg", text: "Flutter", color: "bg-sky-600/40"},
            {iconPath: "/icons/react.svg", text: "React", color: "bg-cyan-500/40"},
            {iconPath: "/icons/next-js.svg", text: "Next.js", color: "bg-gray-500/40"},
            {iconPath: "/icons/vue.svg", text: "Vue", color: "bg-green-500/40"},
            {iconPath: "/icons/html.svg", text: "HTML", color: "bg-orange-600/40"},
            {iconPath: "/icons/css.svg", text: "CSS", color: "bg-blue-700/40"},
            {iconPath: "/icons/tailwind.svg", text: "Tailwind", color: "bg-teal-600/40"},
            {iconPath: "/icons/javascript.svg", text: "JavaScript", color: "bg-yellow-400/40"},
            {iconPath: "/icons/typescript.svg", text: "TypeScript", color: "bg-blue-600/40"}
          ]
        }
      />
      <SkillsList
        iconPath="/icons/back-end.svg"
        title="Développement back-end"
        skills={
          [
            {iconPath: "/icons/nodejs.svg", text: "Node.js", color: "bg-green-600/40"},
            {iconPath: "/icons/express.svg", text: "Express", color: "bg-gray-500/40"},
            {iconPath: "/icons/postgresql.svg", text: "PostgreSQL", color: "bg-sky-600/40"},
            {iconPath: "/icons/mysql.svg", text: "MySQL", color: "bg-cyan-800/40"},
            {iconPath: "/icons/mongodb.svg", text: "MongoDB", color: "bg-green-500/40"},
            {iconPath: "/icons/sequelize.svg", text: "Sequelize", color: "bg-sky-500/40"},
            {iconPath: "/icons/prisma.svg", text: "Prisma", color: "bg-gray-500/40"},
          ]
        }
      />
      <SkillsList
        iconPath="/icons/design.svg"
        title="Design"
        skills={
          [
            {iconPath: "/icons/figma.svg", text: "Figma", color: "bg-pink-500/40"},
            {iconPath: "/icons/adobe-photoshop.svg", text: "Adobe Photoshop", color: "bg-blue-500/40"},
            {iconPath: "/icons/canva.svg", text: "Canva", color: "bg-sky-500/40"},
            {iconPath: "/icons/adobe-illustrator.svg", text: "Adobe Illustrator", color: "bg-orange-500/40"},
            {iconPath: "/icons/adobe-after-effects.svg", text: "Adobe After Effects", color: "bg-violet-500/40"}
          ]
        }
      />
    </main>
  );
}
