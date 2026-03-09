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

const aboutLines = [
  "Frontend work with React and Next.js.",
  "Backend learning with Java and Spring Boot.",
  "Public demos that can be opened immediately.",
  "Repository and deploy links visible without digging.",
];

export default function HomePage() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <div className="space-y-8 md:space-y-10">
      <Hero />

      <section className="container-shell grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <MotionReveal className="section-shell rounded-[2rem] p-6 md:p-8">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
            About
          </p>
          <h2 className="section-title mt-4">
            Short intro. Real projects.
          </h2>
        </MotionReveal>

        <MotionReveal
          className="section-shell rounded-[2rem] p-6 md:p-8"
          delay={0.08}
        >
          <div className="grid gap-4 md:grid-cols-2">
            {aboutLines.map((line) => (
              <div
                key={line}
                className="rounded-[1.5rem] border border-border bg-surface px-5 py-5 text-sm leading-7 text-muted-foreground"
              >
                {line}
              </div>
            ))}
          </div>
        </MotionReveal>
      </section>

      <section className="container-shell section-shell rounded-[2rem] p-6 md:p-8">
        <MotionReveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
                Skills
              </p>
              <h2 className="section-title mt-4">
                Stack I actually use.
              </h2>
            </div>
            <p className="section-copy text-sm md:text-base">
              Clean list, direct links, and no filler blocks.
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
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
                Projects
              </p>
              <h2 className="section-title mt-4">
                Projects with deploy links first.
              </h2>
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
