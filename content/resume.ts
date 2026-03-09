export type ResumeEntry = {
  title: string;
  subtitle: string;
  period: string;
  bullets: string[];
};

export type ResumeData = {
  name: string;
  role: string;
  location: string;
  summary: string;
  availability: string;
  contact: {
    github: string;
    email?: string;
    linkedin?: string;
  };
  skills: string[];
  highlights: string[];
  experience: ResumeEntry[];
  projects: ResumeEntry[];
};

export const resumeData: ResumeData = {
  name: "Truong Nguyen Minh Hieu",
  role: "Full-stack Developer",
  location: "Vietnam",
  summary:
    "Full-stack developer building practical web products with React, Next.js, Java, and Spring Boot. My work leans toward fast interfaces, clear structure, and small systems that are easy to ship, maintain, and improve.",
  availability:
    "Open to freelance, internship, and junior full-stack opportunities.",
  contact: {
    github: "https://github.com/HieuThu16",
    email: "truongnguyenminhhieu100@gmail.com",
  },
  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "Java",
    "Spring Boot",
    "JavaScript",
    "Tailwind CSS",
    "REST APIs",
    "C#",
    "Git",
    "GitHub Actions",
    "Progressive Web Apps",
  ],
  highlights: [
    "Builds content-heavy interfaces with attention to browsing speed and low-friction navigation.",
    "Works across frontend delivery and backend learning projects instead of staying in a single layer.",
    "Learns in public through shipping demos, Spring Boot practice, and algorithm study repositories.",
  ],
  experience: [
    {
      title: "Independent Product Development",
      subtitle: "Personal projects, portfolio work, and continuous learning",
      period: "2024 - Present",
      bullets: [
        "Built and deployed personal web products with React, Next.js, TypeScript, and Vercel-based workflows.",
        "Explored backend structure and API design through Java and Spring Boot practice repositories and course projects.",
        "Maintained a public GitHub profile with project demos, study repositories, and iterative learning across JavaScript, Java, C#, and algorithms.",
      ],
    },
  ],
  projects: [
    {
      title: "phimfree",
      subtitle: "Movie streaming and discovery web app",
      period: "Live Project",
      bullets: [
        "Built a TypeScript-based movie interface with genre, country, and catalog browsing for fast content discovery.",
        "Focused on dense media layouts, quick navigation, and a lightweight deployment flow for public access.",
      ],
    },
    {
      title: "ReadBook PWA",
      subtitle: "Installable reading library progressive web app",
      period: "Live Project",
      bullets: [
        "Built a category-driven reading interface with a static asset library and mobile-friendly layout.",
        "Structured the app to support a lightweight, installable PWA experience.",
      ],
    },
    {
      title: "Learn_Spring-Boot",
      subtitle: "Backend learning repository for Spring Boot concepts",
      period: "Practice Project",
      bullets: [
        "Used hands-on exercises to learn backend structure, service layering, and API-oriented application flow.",
        "Supported the transition from frontend-focused work into broader full-stack development.",
      ],
    },
  ],
};
