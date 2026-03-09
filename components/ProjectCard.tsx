import { ArrowUpRight, Github } from "lucide-react";

import type { Project } from "@/content/projects";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MotionReveal } from "@/components/MotionReveal";

type ProjectCardProps = {
  project: Project;
  delay?: number;
};

export function ProjectCard({ project, delay = 0 }: ProjectCardProps) {
  return (
    <MotionReveal delay={delay}>
      <Card className="h-full border-border/90 transition-transform duration-300 hover:-translate-y-1">
        <CardHeader>
          <div className="flex flex-col gap-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <CardTitle className="text-foreground">{project.name}</CardTitle>
                <CardDescription className="mt-3 max-w-md">
                  {project.description}
                </CardDescription>
              </div>
              {project.featured ? <Badge variant="accent">Featured</Badge> : null}
            </div>

            <div className="flex flex-wrap gap-3 text-sm">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 font-medium text-accent-foreground transition hover:-translate-y-0.5"
              >
                Deploy
                <ArrowUpRight className="size-4" />
              </a>
              {project.repoUrl ? (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-foreground transition hover:border-accent/25 hover:bg-[rgba(37,99,235,0.06)] hover:text-accent"
                >
                  Repository
                  <Github className="size-4" />
                </a>
              ) : null}
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex h-full flex-col justify-between gap-8">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((item) => (
              <Badge key={item}>{item}</Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </MotionReveal>
  );
}
