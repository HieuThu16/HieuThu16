import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Hero } from "@/components/Hero";
import { MotionReveal } from "@/components/MotionReveal";
import { ProjectCard } from "@/components/ProjectCard";
import { ResumeSection } from "@/components/ResumeSection";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/content/projects";
import { resumeData } from "@/content/resume";

const profileBlocks = [
  {
    title: "Frontend",
    body: "React and Next.js for product-facing interfaces, routing, and responsive UI work.",
  },
  {
    title: "Backend",
    body: "Java and Spring Boot for API structure, service layers, and broader full-stack practice.",
  },
  {
    title: "Workflow",
    body: "GitHub, static deployment, and project publishing with clear access to both code and demos.",
  },
  {
    title: "Focus",
    body: "Professional presentation, practical delivery, and projects that can be evaluated quickly.",
  },
];

export default function HomePage() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <div className="space-y-8 md:space-y-10">
      <Hero />

      <section className="container-shell grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <MotionReveal className="section-shell rounded-[2rem] p-6 md:p-8">
          <p className="eyebrow">About</p>
          <h2 className="section-title mt-4">Professional overview.</h2>
          <p className="section-copy mt-4 text-sm md:text-base">
            A compact summary of what I build, how I work, and what someone can
            verify immediately from this portfolio.
          </p>
        </MotionReveal>

        <MotionReveal
          className="section-shell rounded-[2rem] p-6 md:p-8"
          delay={0.08}
        >
          <div className="grid gap-4 md:grid-cols-2">
            {profileBlocks.map((item) => (
              <div
                key={item.title}
                className="panel-soft rounded-[1.5rem] px-5 py-5"
              >
                <p className="text-sm font-semibold text-foreground">
                  {item.title}
                </p>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </MotionReveal>
      </section>

      <section className="container-shell section-shell rounded-[2rem] p-6 md:p-8">
        <MotionReveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Skills</p>
              <h2 className="section-title mt-4">Core stack.</h2>
            </div>
            <p className="section-copy text-sm md:text-base">
              Focused on the tools that show up repeatedly in shipped work and
              ongoing backend practice.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {resumeData.skills.map((skill, index) => (
              <Badge
                key={skill}
                variant={index < 4 ? "accent" : "default"}
                className="px-4 py-2 text-xs"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </MotionReveal>
      </section>

      <section className="container-shell section-shell rounded-[2rem] p-6 md:p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <MotionReveal>
            <div>
              <p className="eyebrow">Projects</p>
              <h2 className="section-title mt-4">Published work.</h2>
              <p className="section-copy mt-4 text-sm md:text-base">
                Each project card keeps the deploy link and repository visible
                so the work can be reviewed without extra navigation.
              </p>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.08}>
            <Button asChild variant="secondary">
              <Link href="/projects">
                See All Projects
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </MotionReveal>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.name}
              project={project}
              delay={index * 0.08}
            />
          ))}
        </div>
      </section>

      <section className="container-shell">
        <ResumeSection data={resumeData} compact />
      </section>
    </div>
  );
}
