"use client"

import { useSectionReveal } from "@/hooks/use-section-reveal"
import {
  TimelineBody,
  TimelineBulletList,
  TimelineDate,
  TimelineEntry,
  TimelineMeta,
  TimelinePrimary,
  TimelineRole,
  TimelineTags,
} from "@/components/profile-timeline"

const experiences = [
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
    company: "FarmTriage",
    title: "Contractual Software Developer",
    location: "Remote",
    duration: "Jan 2025 – Jun 2025",
    summary: (
      <>
        Shipped the startup&apos;s marketing site, then owned an <strong className="font-semibold text-foreground">agricultural workforce</strong> product on the{" "}
        <strong className="font-semibold text-foreground">MERN stack with TypeScript</strong> end-to-end. Automated ops with{" "}
        <strong className="font-semibold text-foreground">Zapier + Google Sheets</strong> and custom JS—cutting manual data entry by about{" "}
        <strong className="font-semibold text-foreground">85%</strong>.
      </>
    ),
    bullets: [
      "Landing page for product discovery and inbound contact.",
      "Solo-initiated workforce management platform: MongoDB, Express, React, Node—typed for maintainability.",
      "Webhook-driven workflows and spreadsheet integrations for teams in the field.",
    ],
    tags: ["React", "Node.js", "MongoDB", "TypeScript", "Zapier", "REST", "Webhooks"],
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
  const { sectionRef, fade } = useSectionReveal()

  return (
    <section id="experience" ref={sectionRef} className="pb-16 pt-4 sm:pb-20">
      <div style={fade(0)}>
        <h2 className="text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground">Experience</h2>
        <p className="mt-2 max-w-lg text-sm text-muted-foreground sm:text-[15px]">Roles in engineering, product, teaching, and consulting—newest first.</p>
      </div>

      <div className="mt-10 space-y-0" style={fade(60)}>
        {experiences.map((exp, i) => (
          <TimelineEntry key={exp.company + exp.duration} isLast={i === experiences.length - 1}>
            <TimelineDate>{exp.duration.toUpperCase()}</TimelineDate>
            <TimelinePrimary>{exp.company}</TimelinePrimary>
            <TimelineRole>{exp.title}</TimelineRole>
            <TimelineMeta>{exp.location}</TimelineMeta>
            <TimelineBody>{exp.summary}</TimelineBody>
            <TimelineBulletList items={exp.bullets} />
            <TimelineTags tags={exp.tags} />
          </TimelineEntry>
        ))}
      </div>
    </section>
  )
}
