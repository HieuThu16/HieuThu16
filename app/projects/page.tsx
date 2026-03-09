import { ProjectCard } from "@/components/ProjectCard";
import { MotionReveal } from "@/components/MotionReveal";
import { projects } from "@/content/projects";

export const metadata = {
  title: "Projects | Truong Nguyen Minh Hieu",
};

export default function ProjectsPage() {
  return (
    <div className="container-shell py-10 md:py-16">
      <MotionReveal className="section-shell rounded-[2rem] p-6 md:p-8">
        <p className="eyebrow">Projects</p>
        <h1 className="section-title mt-4">Project library.</h1>
        <p className="section-copy mt-4 text-sm md:text-base">
          A direct view of public work with concise descriptions, tech stacks,
          and side-by-side access to deploy targets and source repositories.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.name}
              project={project}
              delay={index * 0.06}
            />
          ))}
        </div>
      </MotionReveal>
    </div>
  );
}
