"use client"

import type { ReactNode } from "react"
import { ArrowUpRight, Layers, Waves, ScanLine, Clapperboard, Workflow, Fish, GraduationCap } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export type Project = {
  title: string
  category: string
  period: string
  preview: string
  meta?: string
  summary: ReactNode
  bullets: string[]
  tags: string[]
  links: { label: string; href: string }[]
}

export function projectId(title: string) {
  return `project-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-$/, "")}`
}

const projectIcons = {
  BeyondMeta: Layers,
  AquaGrid: Waves,
  "Sawari.ai": ScanLine,
  TutorialFlowMCP: Workflow,
  "HyperFrames Launch Video Engine": Clapperboard,
  "AquaSense-Agent": Fish,
  EducationGlobal: GraduationCap,
}

export function ProjectCard({ project, featured = false, id }: { project: Project; featured?: boolean; id?: string }) {
  const Icon = projectIcons[project.title as keyof typeof projectIcons] ?? Layers

  return (
    <article id={id} className={`flex flex-col rounded-2xl border border-border/80 bg-card/60 p-6 transition-colors hover:bg-card ${featured ? "sm:col-span-2 sm:p-7" : ""}`}>
      <div className="mb-5 flex items-center justify-between gap-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-background">
          <Icon className="h-5 w-5 text-muted-foreground" strokeWidth={1.5} aria-hidden />
        </span>
        <span className="text-right text-[11px] text-muted-foreground">
          {project.title === "BeyondMeta" ? "Currently building · Co-founder" : project.category}
        </span>
      </div>
      <h3 className="break-words text-xl font-semibold tracking-tight">{project.title}</h3>
      <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">{project.preview}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="rounded-md bg-muted/70 px-2 py-1 text-[11px] text-muted-foreground">{tag}</span>
        ))}
      </div>
      <div className="mt-auto pt-6">
        <Dialog>
          <DialogTrigger asChild>
            <button type="button" className="inline-flex min-h-10 items-center gap-2 rounded-md text-sm font-medium underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" aria-label={`Explore ${project.title}`}>
              Explore project <ArrowUpRight className="h-4 w-4" aria-hidden />
            </button>
          </DialogTrigger>
          <DialogContent className="max-h-[85dvh] overflow-y-auto rounded-2xl p-6 sm:max-w-2xl sm:p-8">
            <p className="pr-6 text-xs text-muted-foreground">{project.category} · {project.period}</p>
            <DialogTitle className="text-2xl tracking-tight">{project.title}</DialogTitle>
            <DialogDescription>{project.preview}</DialogDescription>
            {project.meta && <p className="text-xs text-muted-foreground">{project.meta}</p>}
            <div className="border-t border-border pt-5 text-sm leading-relaxed text-muted-foreground">
              <h4 className="mb-2 font-medium text-foreground">The build</h4>
              <p>{project.summary}</p>
              <ul className="mt-4 list-disc space-y-2 pl-5">
                {project.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => <span key={tag} className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground">{tag}</span>)}
            </div>
            <div className="flex flex-wrap gap-3 border-t border-border pt-4">
              {project.links.map((link) => (
                <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center gap-1.5 rounded-md text-sm font-medium underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                  {link.label}<ArrowUpRight className="h-4 w-4" aria-hidden />
                </a>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </article>
  )
}
