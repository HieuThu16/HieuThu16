import Link from "next/link";
import { ArrowUpRight, Github, Mail } from "lucide-react";

import type { ResumeData } from "@/content/resume";
import { MotionReveal } from "@/components/MotionReveal";
import { ResumePdfButton } from "@/components/ResumePdfButton";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { BASE_PATH } from "@/lib/site";

type ResumeSectionProps = {
  data: ResumeData;
  compact?: boolean;
};

export function ResumeSection({ data, compact = false }: ResumeSectionProps) {
  const visibleProjects = compact ? data.projects.slice(0, 1) : data.projects;
  const hasEmail = Boolean(data.contact.email);

  return (
    <MotionReveal>
      <Card className="overflow-hidden p-6 md:p-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
                Resume
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.06em] md:text-4xl">
                {data.name}
              </h2>
              <p className="mt-2 text-lg text-muted-foreground">{data.role}</p>
            </div>

            <p className="text-sm leading-7 text-muted-foreground">
              {data.summary}
            </p>
            <p className="text-sm text-foreground">{data.availability}</p>

            <div className="flex flex-wrap gap-3">
              <Button variant="secondary" asChild>
                <a
                  href={`${BASE_PATH}/resume/truong-nguyen-minh-hieu-cv.tex`}
                  download
                >
                  Download CV (.tex)
                </a>
              </Button>
              <ResumePdfButton data={data} />
              <Button asChild>
                <Link href="/resume">
                  Open Resume Page
                  <ArrowUpRight className="size-4" />
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
              <a
                href={data.contact.github}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2"
              >
                <Github className="size-4" />
                GitHub
              </a>
              {hasEmail ? (
                <a
                  href={`mailto:${data.contact.email}`}
                  className="inline-flex items-center gap-2"
                >
                  <Mail className="size-4" />
                  Email
                </a>
              ) : null}
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-border bg-surface-2 p-5 md:p-6">
            <div className="space-y-5">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
                  Skills
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {data.skills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </div>

              <Separator />

              <div>
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
                  Highlights
                </p>
                <div className="mt-4 space-y-3">
                  {data.highlights.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-border bg-surface px-4 py-3 text-sm leading-6 text-muted-foreground"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              <div>
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
                  Selected Work
                </p>
                <div className="mt-4 space-y-4">
                  {visibleProjects.map((project) => (
                    <div
                      key={project.title}
                      className="rounded-2xl border border-border bg-surface px-4 py-4"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="font-medium text-foreground">
                            {project.title}
                          </p>
                          <p className="mt-1 text-sm text-muted-foreground">
                            {project.subtitle}
                          </p>
                        </div>
                        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                          {project.period}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </MotionReveal>
  );
}
