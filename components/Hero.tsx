import Link from "next/link";
import { ArrowUpRight, Github, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MotionReveal } from "@/components/MotionReveal";

export function Hero() {
  return (
    <section className="container-shell pt-10 md:pt-16">
      <MotionReveal className="section-shell overflow-hidden rounded-[2rem] px-6 py-10 md:px-10 md:py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr] lg:items-end">
          <div className="space-y-6">
            <Badge variant="accent" className="w-fit">
              Full-stack Developer
            </Badge>

            <div className="space-y-4">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Truong Nguyen Minh Hieu
              </p>
              <h1 className="text-balance text-5xl font-semibold tracking-[-0.08em] md:text-7xl">
                Talk is cheap. Ship working products.
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
            <div className="mb-6 flex items-center gap-3 text-sm text-muted-foreground">
              <Sparkles className="size-4" />
              Current focus
            </div>

            <div className="space-y-5">
              {[
                "Content-first interfaces for real browsing flows",
                "Frontend shipping with growing backend depth",
                "Simple deployment workflows that stay easy to maintain",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-border bg-surface px-4 py-4"
                >
                  <p className="text-sm leading-6 text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </MotionReveal>
    </section>
  );
}
