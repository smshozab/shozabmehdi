import { ArrowUpRight, GitMerge } from "lucide-react"
import { ProjectCard } from "@/components/project-card"
import { openSourceContributions, openSourceProjects } from "@/lib/open-source-work"

export default function OpenSource() {
  return (
    <section id="open-source" aria-label="Open source work">
      <p className="mb-5 max-w-2xl text-sm text-muted-foreground">Tools I build in public, and improvements I contribute to the projects I use.</p>
      <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">My tools</h3>
      <div className="grid gap-4 sm:grid-cols-2">
        {openSourceProjects.map((project) => <ProjectCard key={project.title} project={project} />)}
      </div>
      <div className="mt-8 flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">Upstream contributions</h3>
        <span className="text-xs text-muted-foreground">3 merged PRs · 2 projects</span>
      </div>
      <div className="mt-4 space-y-3">
        {openSourceContributions.map((contribution) => (
          <article key={contribution.repository} className="rounded-2xl border border-border/80 bg-card/60 p-5 sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h4 className="text-base font-semibold tracking-tight">{contribution.title}</h4>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-2.5 py-1 text-[11px] text-muted-foreground">
                <GitMerge className="h-3.5 w-3.5" aria-hidden />Merged · {contribution.merged}
              </span>
            </div>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">{contribution.summary}</p>
            <ul className="mt-4 space-y-2">
              {contribution.changes.map((change) => (
                <li key={change.href}>
                  <a href={change.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center gap-2 rounded-md text-sm font-medium underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                    {change.label}<ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
