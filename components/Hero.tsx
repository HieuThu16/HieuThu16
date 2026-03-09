import Link from "next/link";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MotionReveal } from "@/components/MotionReveal";
import { projects } from "@/content/projects";

export function Hero() {
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 2);

  return (
    <section className="container-shell pt-10 md:pt-16">
      <MotionReveal className="section-shell overflow-hidden rounded-[2rem] px-6 py-10 md:px-10 md:py-14">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-6">
            <Badge variant="accent" className="w-fit">
              Full-stack Developer
            </Badge>

            <div className="space-y-4">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Truong Nguyen Minh Hieu
              </p>
              <h1 className="text-balance text-5xl font-semibold tracking-[-0.08em] text-foreground md:text-7xl">
                Projects first. Clear links. Clean delivery.
              </h1>
              <p className="text-balance max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
                I build practical web products across frontend and backend with
                React, Next.js, Java, and Spring Boot.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/projects">
                  View Projects
                  <ArrowUpRight className="size-4" />
                </Link>
              </Button>
              <Button variant="secondary" asChild>
                <a
                  href="https://github.com/HieuThu16"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  GitHub
                  <Github className="size-4" />
                </a>
              </Button>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-border bg-surface-2 p-6 md:p-8">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
                  Featured Projects
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.05em] text-foreground">
                  Deploy and repository links side by side.
                </h2>
              </div>
            </div>

            <div className="space-y-4">
              {featuredProjects.map((project) => (
                <div
                  key={project.name}
                  className="rounded-2xl border border-border bg-surface px-5 py-5"
                >
                  <div className="flex flex-col gap-4">
                    <div>
                      <p className="text-lg font-semibold text-foreground">
                        {project.name}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground shadow-[0_10px_24px_rgba(37,99,235,0.24)] transition hover:-translate-y-0.5"
                      >
                        Deploy
                        <ExternalLink className="size-4" />
                      </a>
                      {project.repoUrl ? (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition hover:border-accent/25 hover:bg-[rgba(37,99,235,0.06)] hover:text-accent"
                        >
                          Repository
                          <Github className="size-4" />
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </MotionReveal>
    </section>
  );
}
