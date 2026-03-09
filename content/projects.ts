export type Project = {
  name: string;
  description: string;
  tech: string[];
  demoUrl: string;
  repoUrl?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    name: "phimfree",
    description:
      "A movie streaming interface built around fast browsing, region filters, and dense content layouts for low-friction discovery.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    demoUrl: "https://phimfree.vercel.app/",
    repoUrl: "https://github.com/HieuThu16/phimfree",
    featured: true,
  },
  {
    name: "ReadBook PWA",
    description:
      "A progressive web app for browsing a personal digital library with category filters, offline-friendly structure, and clean reading-first UX.",
    tech: ["React", "PWA", "JavaScript", "Static Assets", "Vercel"],
    demoUrl: "https://react-pwa-app-read-book.vercel.app/user",
    featured: true,
  },
  {
    name: "Portfolio Platform",
    description:
      "This portfolio is built as a static-exported Next.js app for GitHub Pages, keeping deployment simple while preserving a clean App Router structure.",
    tech: ["Next.js 14", "TypeScript", "Tailwind CSS v4", "GitHub Pages"],
    demoUrl: "https://hieuthu16.github.io/Portfolio/",
    repoUrl: "https://github.com/HieuThu16/Portfolio",
    featured: false,
  },
];
