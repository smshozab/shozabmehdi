"use client"

import { useState } from "react"
import { ArrowDown, ArrowUpRight, ChevronDown } from "lucide-react"

const relatedProjects: Record<string, { title: string; href: string }> = {
  BeyondMeta: { title: "BeyondMeta", href: "#project-beyondmeta" },
  "Neospark Solutions": { title: "DeepCV.ai", href: "#project-deepcv-ai" },
}

const experiences = [
  {
    company: "BeyondMeta",
    title: "Technical Co-Founder",
    location: "Remote",
    duration: "2026 – Present",
    summary: (
      <>
        Co-founded and architected the full technical stack for an <strong className="font-semibold text-foreground">AI-assisted, R-validated meta-analysis platform</strong> that turns structured study data into defensible, reproducible results without requiring researchers to write code.
      </>
    ),
    bullets: [
      "Engineered study-data ingestion, AI-assisted CSV/XLSX cleanup and field mapping, data-health checks, analysis-plan approval, and the end-to-end analysis workbench.",
      "Integrated deterministic R/metafor workflows for pooled estimates, confidence intervals, heterogeneity statistics, forest and funnel plots, and bias analysis.",
      "Built transparent reproducibility exports containing source data, plots, and the exact R scripts behind every computed result.",
    ],
    tags: ["Technical Co-Founder", "Full-stack", "AI", "R", "metafor", "Data pipelines", "Reproducibility"],
  },
  {
    company: "Inferifi",
    title: "Software Engineering Trainee",
    location: "Illinois, US · Remote",
    duration: "Nov 2025 – Present",
    summary: (
      <>
        Full-time trainee role focused on <strong className="font-semibold text-foreground">production software engineering</strong> workflows and hands-on delivery within a fast-moving team.
      </>
    ),
    bullets: [],
    tags: ["Engineering", "Full-time"],
  },
  {
    company: "FarmTriage",
    title: "Freelance Software Engineer",
    location: "Canada · Remote",
    duration: "May 2026",
    summary: (
      <>
        Built an <strong className="font-semibold text-foreground">AI-powered feature</strong> for automated field boundary mapping for precision farming workflows.
      </>
    ),
    bullets: [
      "Improved field-boundary delineation accuracy from 59% to 87% after integrating a U-Net segmentation model on Sentinel-2 imagery.",
      "Shipped VRA prescription-export pipelines compatible with three major drone platforms (DJI Agras, EAVision, XAG) for precision-agriculture workflows.",
    ],
    tags: ["AI", "U-Net", "Sentinel-2", "Drones", "Freelance"],
  },
  {
    company: "Neospark Solutions",
    title: "Software Development Intern",
    location: "Australia · Remote",
    duration: "Nov 2025 – Jan 2026",
    summary: (
      <>
        Shipped features on <strong className="font-semibold text-foreground">deepcv.ai</strong> using the MERN stack. Set up{" "}
        <strong className="font-semibold text-foreground">Azure CI/CD</strong> pipelines and integrated{" "}
        <strong className="font-semibold text-foreground">LLM-based capabilities</strong> with structured prompts and modular service design.
      </>
    ),
    bullets: [
      "RESTful APIs and efficient MongoDB data modeling for the core product.",
      "End-to-end feature ownership—implementation through deployment alongside founders.",
    ],
    tags: ["React", "Node.js", "MongoDB", "Azure", "LLM", "CI/CD", "REST"],
  },
  {
    company: "10Pearls",
    title: "Full Stack Developer Intern",
    location: "Karachi, Pakistan · Hybrid",
    duration: "Sep 2025 – Nov 2025",
    summary: (
      <>
        Built <strong className="font-semibold text-foreground">Notely</strong>, a MERN-based notes app with secure auth, an{" "}
        <strong className="font-semibold text-foreground">AI chatbot</strong>, tagging, full-text search, and auto-save. Deployed on Vercel with a full{" "}
        <strong className="font-semibold text-foreground">CI/CD pipeline</strong> and maintained quality via unit tests, UAT, and SonarQube.
      </>
    ),
    bullets: [
      "Structured logging with PinoLogger and custom exception-handling middleware.",
      "Git-driven collaboration with detailed PR reviews and disciplined commit workflow.",
    ],
    tags: ["MERN", "React", "Node.js", "Vercel", "CI/CD", "SonarQube", "AI"],
  },
  {
    company: "Passion & freelance product work",
    title: "Product Engineer",
    location: "Remote",
    duration: "Jan 2025 – Present",
    summary: (
      <>
        <strong className="font-semibold text-foreground">Product engineering</strong> across self-driven and client projects in{" "}
        <strong className="font-semibold text-foreground">edtech</strong>, <strong className="font-semibold text-foreground">medical</strong>,{" "}
        <strong className="font-semibold text-foreground">agriculture</strong>, <strong className="font-semibold text-foreground">aquaculture</strong>, and{" "}
        <strong className="font-semibold text-foreground">blockchain</strong>—from discovery and UX through implementation, integrations, and shipping.
      </>
    ),
    bullets: [
      "End-to-end builds: requirements, architecture, full-stack delivery, and iteration with stakeholders.",
      "Domain-spanning work—learning each space quickly while keeping systems maintainable and production-minded.",
      "APIs, data layers, and modern web stacks tailored to each product; on-chain and off-chain pieces where blockchain fit the problem.",
    ],
    tags: ["Product", "Full-stack", "TypeScript", "React", "Node.js", "Web3", "REST", "MongoDB"],
  },
  {
    company: "FAST National University",
    title: "Teaching Assistant — Data Structures",
    location: "Karachi, Pakistan",
    duration: "Aug 2024 – Dec 2024",
    summary: (
      <>
        Supported <strong className="font-semibold text-foreground">50+ students</strong> through DS&amp;A—trees, graphs, DP, and complexity. Built grading tooling in{" "}
        <strong className="font-semibold text-foreground">Python</strong> (Excel → Google Classroom) and ran weekly hands-on labs; cohort metrics improved roughly{" "}
        <strong className="font-semibold text-foreground">25%</strong>.
      </>
    ),
    bullets: [
      "Lectures and assignments spanning AVL, graph algorithms, and dynamic programming.",
      "Automation scripts to streamline marking and exports.",
      "Practical sessions on debugging, profiling, and clean implementation patterns.",
    ],
    tags: ["C++", "Python", "Algorithms", "Teaching", "Git"],
  },
  {
    company: "Executive Council Network",
    title: "Tech Advisor & Branding Consultant",
    location: "Remote",
    duration: "May 2023 – Dec 2023",
    summary: (
      <>
        Led <strong className="font-semibold text-foreground">UI/UX</strong> upgrades with responsive patterns and{" "}
        <strong className="font-semibold text-foreground">WCAG 2.1</strong> in mind. Delivered React + Tailwind frontends and{" "}
        <strong className="font-semibold text-foreground">Node/Express</strong> APIs with JWT, rate limits, and versioning.
      </>
    ),
    bullets: [
      "Design-system style components with Semantic UI and Tailwind for speed.",
      "Backend auth, API hardening, and deployment-minded structure.",
    ],
    tags: ["React", "Node.js", "Express", "JWT", "Tailwind", "Accessibility"],
  },
  {
    company: "Upwork",
    title: "Web Developer (Freelance)",
    location: "Remote",
    duration: "Sep 2022 – Jul 2023",
    summary: (
      <>
        Delivered <strong className="font-semibold text-foreground">full-stack</strong> client work across{" "}
        <strong className="font-semibold text-foreground">React, Vue</strong>, and{" "}
        <strong className="font-semibold text-foreground">Node / Flask</strong> with SQL and NoSQL data layers, OAuth integrations, and{" "}
        <strong className="font-semibold text-foreground">CI/CD</strong> on Vercel, Heroku, and GitHub Actions.
      </>
    ),
    bullets: [
      "PostgreSQL, MySQL, MongoDB, Firebase, and Supabase where each fit best.",
      "Third-party APIs and production deploy pipelines.",
    ],
    tags: ["React", "Vue", "Node.js", "Flask", "PostgreSQL", "MongoDB", "OAuth", "CI/CD"],
  },
]

export default function Experience() {
  const [showAll, setShowAll] = useState(false)
  const visibleExperiences = showAll ? experiences : experiences.slice(0, 2)

  return (
    <section id="experience" aria-label="Work experience">
      <p className="mb-5 text-sm text-muted-foreground">The teams and products I&apos;ve helped move forward.</p>
      <div id="experience-list" className="space-y-3">
        {visibleExperiences.map((exp) => (
          <article key={exp.company + exp.duration} className="rounded-2xl border border-border/80 bg-card/60 p-5 sm:p-6">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
              <div><h3 className="text-base font-semibold tracking-tight">{exp.company}</h3><p className="mt-1 text-sm text-muted-foreground">{exp.title}</p></div>
              <p className="shrink-0 text-xs text-muted-foreground sm:pt-1">{exp.duration}</p>
            </div>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">{exp.summary}</p>
            <details className="group mt-4 border-t border-border/60 pt-3">
              <summary className="flex min-h-10 cursor-pointer list-none items-center gap-2 rounded-md text-xs font-medium text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring [&::-webkit-details-marker]:hidden">
                Role details <ChevronDown className="h-3.5 w-3.5 transition-transform group-open:rotate-180 motion-reduce:transition-none" aria-hidden />
              </summary>
              <div className="pt-2 text-sm leading-relaxed text-muted-foreground">
                <p className="text-xs">{exp.location}</p>
                {exp.bullets.length > 0 && <ul className="mt-3 list-disc space-y-2 pl-5">{exp.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
                <p className="mt-4 text-xs">{exp.tags.join(" · ")}</p>
                {relatedProjects[exp.company] && <a href={relatedProjects[exp.company].href} className="mt-3 inline-flex min-h-10 items-center gap-1.5 rounded-md font-medium text-foreground underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Explore {relatedProjects[exp.company].title}<ArrowUpRight className="h-4 w-4" aria-hidden /></a>}
              </div>
            </details>
          </article>
        ))}
      </div>
      <button type="button" onClick={() => setShowAll(!showAll)} aria-expanded={showAll} aria-controls="experience-list" className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-lg border border-border px-4 text-sm text-muted-foreground hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
        {showAll ? "Show recent roles" : "Show 7 earlier roles"}<ArrowDown className={`h-4 w-4 transition-transform motion-reduce:transition-none ${showAll ? "rotate-180" : ""}`} aria-hidden />
      </button>
    </section>
  )
}
