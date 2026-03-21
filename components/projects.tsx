"use client"

import type React from "react"
import { useSectionReveal } from "@/hooks/use-section-reveal"
import {
  TimelineBody,
  TimelineBulletList,
  TimelineDate,
  TimelineEntry,
  TimelineLinks,
  TimelineMeta,
  TimelinePrimary,
  TimelineRole,
  TimelineTags,
} from "@/components/profile-timeline"

type Project = {
  title: string
  category: string
  period: string
  meta?: string
  summary: React.ReactNode
  bullets: string[]
  tags: string[]
  links: { label: string; href: string }[]
}

const projects: Project[] = [
  {
    title: "AquaGrid",
    category: "RnD FYP / AIoT",
    period: "In progress",
    meta: "Supervision: Dr. Muhammad Farrukh Shahid",
    summary: (
      <>
        <strong className="font-semibold text-foreground">AI-powered tools for aquaculture</strong> and marine science—smart monitoring systems for oceans, lakes, and ecosystems.
        Presented at the <strong className="font-semibold text-foreground">National Centre of Physics (AITec-NCP)</strong>.
      </>
    ),
    bullets: [
      "Building intelligent monitoring pipelines for real-world aquatic environments.",
      "Research-driven approach under faculty supervision with conference exposure.",
    ],
    tags: ["AIoT", "Python", "Machine Learning", "Aquaculture", "Research"],
    links: [{ label: "Live", href: "https://aquagrid.tech" }],
  },
  {
    title: "DeepCV.ai",
    category: "Full stack / Cloud",
    period: "2026",
    summary: (
      <>
        Built with <strong className="font-semibold text-foreground">React and Node.js</strong> on{" "}
        <strong className="font-semibold text-foreground">Azure</strong> services for scalability and analytics. Automated build, test, and deployment through{" "}
        <strong className="font-semibold text-foreground">Azure CI/CD pipelines</strong>.
      </>
    ),
    bullets: [
      "Cloud-native architecture leveraging Azure for hosting and monitoring.",
      "Automated deployment workflows for continuous delivery.",
    ],
    tags: ["React", "Node.js", "Azure", "CI/CD", "Cloud"],
    links: [{ label: "Live", href: "https://deepcv.ai" }],
  },
  {
    title: "Risk Lens AI",
    category: "AI / FinTech",
    period: "2026",
    summary: (
      <>
        Intelligent credit risk tool using <strong className="font-semibold text-foreground">React, Supabase, and Gemini AI</strong> to parse financial PDFs/CSVs and compute key metrics.
        Anomaly detection via <strong className="font-semibold text-foreground">Isolation Forest &amp; statistical outliers</strong> with an LLM-based risk explanation engine.
      </>
    ),
    bullets: [
      "Financial document ingestion and automated metric extraction.",
      "Hybrid anomaly detection paired with LLM-driven risk narratives.",
    ],
    tags: ["React", "Supabase", "Gemini AI", "Isolation Forest", "FinTech"],
    links: [],
  },
  {
    title: "ewastify",
    category: "Full stack / Sustainability",
    period: "2025",
    summary: (
      <>
        Platform for <strong className="font-semibold text-foreground">e-waste logistics</strong>: Vite + React client, Express/Node API, MongoDB, and Firebase for auth and realtime pieces. Includes{" "}
        <strong className="font-semibold text-foreground">live routing</strong> and weather-aware path hints via OpenWeatherMap.
      </>
    ),
    bullets: [
      "Role-based flows and operational dashboards.",
      "Geospatial hooks for pickup and dispatch planning.",
    ],
    tags: ["React", "Vite", "Express", "MongoDB", "Firebase", "Maps API"],
    links: [
      { label: "Overview", href: "https://www.canva.com/design/DAGk2t-MGXI/_yOho9aZWAZhnVhVIDVFZA/view?utm_content=DAGk2t-MGXI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h6c0ac1ed70" },
      { label: "Code", href: "https://github.com/smshozab/devday" },
    ],
  },
  {
    title: "Field Matrix",
    category: "Research / ML",
    period: "2024",
    meta: "Supervision: Dr. Muhammad Farrukh Shahid",
    summary: (
      <>
        Research pipeline for <strong className="font-semibold text-foreground">smart farming</strong>: CNN-based modeling of{" "}
        <strong className="font-semibold text-foreground">inter-crop spacing</strong> to inform yield decisions. Current models land north of{" "}
        <strong className="font-semibold text-foreground">85% accuracy</strong> on the project&apos;s evaluation setup—tuning and field validation continue.
      </>
    ),
    bullets: [
      "Python training stack with emphasis on reproducible experiments.",
      "Computer-vision feature design for agricultural imagery.",
      "Ongoing iteration toward deployable, interpretable outputs.",
    ],
    tags: ["Python", "CNN", "Computer Vision", "Machine Learning", "Agriculture"],
    links: [{ label: "GitHub", href: "https://github.com/smshozab/FieldMatrix" }],
  },
  {
    title: "FAST-StudyCircle",
    category: "Full stack / Community",
    period: "2024",
    summary: (
      <>
        MERN app matching <strong className="font-semibold text-foreground">juniors with verified seniors</strong> for coursework help. Email confirmations via{" "}
        <strong className="font-semibold text-foreground">Nodemailer</strong>, moderation hooks, and a focus on trust signals in the UI.
      </>
    ),
    bullets: ["Matching logic and profile verification story.", "Transactional email and basic admin tooling."],
    tags: ["MongoDB", "Express", "React", "Node.js", "Nodemailer"],
    links: [
      { label: "Walkthrough", href: "https://drive.google.com/drive/folders/1vmOowlPCljLVST7bI-Ai-ARG_tmD_YY6?usp=sharing" },
      { label: "Code", href: "https://github.com/smshozab/FAST-StudyCircle" },
    ],
  },
]

export default function Projects() {
  const { sectionRef, fade } = useSectionReveal()

  return (
    <section id="projects" ref={sectionRef} className="pb-16 pt-4 sm:pb-20">
      <div style={fade(0)}>
        <h2 className="text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground">Projects</h2>
        <p className="mt-2 max-w-lg text-sm text-muted-foreground sm:text-[15px]">
          Selected builds—research, product, and experiments—with links where they&apos;re public.
        </p>
      </div>

      <div className="mt-10 space-y-0" style={fade(70)}>
        {projects.map((p, i) => (
          <TimelineEntry key={p.title} isLast={i === projects.length - 1}>
            <TimelineDate>{p.period.toUpperCase()}</TimelineDate>
            <TimelinePrimary>{p.title}</TimelinePrimary>
            <TimelineRole>{p.category}</TimelineRole>
            {p.meta ? <TimelineMeta>{p.meta}</TimelineMeta> : null}
            <TimelineBody>{p.summary}</TimelineBody>
            <TimelineBulletList items={p.bullets} />
            <TimelineTags tags={p.tags} />
            <TimelineLinks links={p.links} />
          </TimelineEntry>
        ))}
      </div>
    </section>
  )
}
