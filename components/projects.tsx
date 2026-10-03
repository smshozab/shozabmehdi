"use client"

import { useEffect, useState } from "react"
import { ArrowDown } from "lucide-react"
import { ProjectCard, projectId, type Project } from "@/components/project-card"
import { openSourceProjects } from "@/lib/open-source-work"

const projects: Project[] = [
  ...openSourceProjects,
  {
    title: "AquaGrid",
    preview: "Research-led monitoring tools for aquaculture and aquatic ecosystems.",
    category: "Research / AIoT",
    period: "2025",
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
    links: [
      { label: "Web Link", href: "https://aquagrid.tech" },
      { label: "App", href: "https://app.aquagrid.tech/" },
    ],
  },
  {
    title: "DeepCV.ai",
    preview: "Full-stack product delivery with cloud infrastructure and automated deployments.",
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
    preview: "Turning financial documents into credit-risk metrics and understandable explanations.",
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
    links: [{ label: "GitHub", href: "https://github.com/smshozab/RiskLens-AI" }],
  },
  {
    title: "Sawari.ai",
    preview: "Vehicle damage detection, cost estimates, and inspection reports powered by AI.",
    category: "AI / Computer Vision",
    period: "2026",
    summary: (
      <>
        <strong className="font-semibold text-foreground">Vehicle Inspections with AI</strong>—instantly detect damage, estimate costs, and generate professional reports using advanced AI technology.
      </>
    ),
    bullets: [
      "AI-powered damage detection for vehicle inspections.",
      "Automated cost estimation based on detected damage.",
      "Professional report generation using advanced AI technology.",
    ],
    tags: ["AI", "Computer Vision", "Vehicle Inspection", "Deep Learning"],
    links: [
      { label: "GitHub", href: "https://github.com/SameerVers3/Sawari.Ai" },
      { label: "Live", href: "https://sawari-ai.vercel.app/" },
    ],
  },
  {
    title: "BeyondMeta",
    preview: "Helping researchers turn study data into reproducible meta-analyses without writing code.",
    category: "AI / Research",
    period: "2026",
    summary: (
      <>
        AI-powered <strong className="font-semibold text-foreground">meta-analysis platform</strong> featuring an intelligent analysis goal-based agent for structured reasoning over clinical datasets.
        Automated effect-size computation (OR, RR, MD), heterogeneity detection, and interactive statistical visualizations (forest plots, bias analysis).
      </>
    ),
    bullets: [
      "Intelligent analysis goal-based agent for structured reasoning over clinical datasets.",
      "Automated effect-size computation (Odds Ratio, Risk Ratio, Mean Difference).",
      "Heterogeneity detection and interactive statistical visualizations.",
      "Forest plots and bias analysis to support data-driven research decision-making.",
    ],
    tags: ["AI", "Meta-Analysis", "Clinical Research", "Statistics", "Python"],
    links: [{ label: "Live", href: "https://www.beyondmeta.tech/" }],
  },
  {
    title: "ewastify",
    preview: "Making e-waste pickups and dispatch easier with routing and operational dashboards.",
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
    title: "AquaSense-Agent",
    preview: "A multimodal diagnostic agent combining images, farmer descriptions, and sensor data for aquaculture.",
    category: "Research / Agentic AI",
    period: "Jun 2026",
    summary: "Developed a fish-disease diagnostic agent that brings together visual, textual, and environmental inputs through Late Bayesian Fusion. A Continual RAG knowledge base and Supervisor Agent support context-aware routing and diagnosis.",
    bullets: [
      "Combines fish images, farmer descriptions, and IoT sensor readings.",
      "Uses Late Bayesian Fusion to combine evidence from the three modalities.",
      "Routes queries with a Supervisor Agent backed by a Continual RAG knowledge base.",
    ],
    tags: ["Multimodal AI", "RAG", "Bayesian Fusion", "IoT", "Aquaculture"],
    links: [{ label: "GitHub", href: "https://github.com/smshozab/AG-AquaSense" }],
  },
  {
    title: "EducationGlobal",
    preview: "A coaching-management platform that brings everyday education operations into one place.",
    category: "Full stack / EdTech",
    period: "2026",
    summary: "Co-created a Next.js platform for managing students, teachers, classes, attendance, and results. It serves 1,000+ team members across 8+ coaching organizations, replacing paperwork with end-to-end operational workflows.",
    bullets: [
      "Brings students, teachers, classes, attendance, and results into a shared platform.",
      "Automates coaching operations that previously required days of manual paperwork.",
    ],
    tags: ["Next.js", "EdTech", "Workflow automation"],
    links: [{ label: "Live", href: "https://educationglobal.live/" }],
  },
]

const featuredTitles = ["BeyondMeta", "TutorialFlowMCP", "HyperFrames Launch Video Engine"]
const orderedProjects = [
  ...featuredTitles.map((title) => projects.find((project) => project.title === title)!),
  ...projects.filter((project) => !featuredTitles.includes(project.title)),
]

export default function Projects() {
  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    const revealLinkedProject = () => {
      const target = window.location.hash.slice(1)
      if (orderedProjects.slice(3).some((project) => projectId(project.title) === target)) {
        setShowAll(true)
        requestAnimationFrame(() => document.getElementById(target)?.scrollIntoView({ block: "start" }))
      }
    }
    revealLinkedProject()
    window.addEventListener("hashchange", revealLinkedProject)
    return () => window.removeEventListener("hashchange", revealLinkedProject)
  }, [])

  const visibleProjects = showAll ? orderedProjects : orderedProjects.slice(0, 3)

  return (
    <section id="projects" aria-label="Selected projects">
      <div className="mb-5 flex items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">A few builds I&apos;d love you to explore.</p>
        <span className="shrink-0 font-mono text-[11px] text-muted-foreground">{String(visibleProjects.length).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</span>
      </div>
      <div id="project-grid" className="grid gap-4 sm:grid-cols-2">
        {visibleProjects.map((project, index) => (
          <ProjectCard key={project.title} id={projectId(project.title)} project={project} featured={index === 0} />
        ))}
      </div>
      <button type="button" onClick={() => setShowAll(!showAll)} aria-expanded={showAll} aria-controls="project-grid" className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-lg border border-border px-4 text-sm text-muted-foreground hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
        {showAll ? "Back to selected work" : `View all ${projects.length} projects`}<ArrowDown className={`h-4 w-4 transition-transform motion-reduce:transition-none ${showAll ? "rotate-180" : ""}`} aria-hidden />
      </button>
    </section>
  )
}
