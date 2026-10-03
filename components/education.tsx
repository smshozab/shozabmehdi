"use client"

import { ChevronDown, GraduationCap } from "lucide-react"

const leadership = [
  "Dev Deputy — ACM (Association for Computing Machinery)",
  "Tech Lead — Google Developer Student Clubs (GDSC)",
  "Web Dev Lead — Hackops",
  "Regular participant in inter- and intra-university competitions",
]

const coursework = [
  "Linear Algebra · Probability & Statistics",
  "Database Systems · Algorithms · Operating Systems",
  "Data Structures · Object-Oriented Programming",
]

const highlights = [
  "Dean's List — Spring 2024",
  "ICPC Finalist — 2024",
  "Built and shipped the Hackops society website",
]

export default function Education() {
  return (
    <section id="education" aria-label="Education">
      <p className="mb-5 text-sm text-muted-foreground">A CS foundation, with plenty of learning outside the classroom.</p>
      <article className="rounded-2xl border border-border/80 bg-card/60 p-5 sm:p-6">
        <div className="flex items-start gap-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-background"><GraduationCap className="h-5 w-5 text-muted-foreground" strokeWidth={1.5} aria-hidden /></span>
          <div><h3 className="text-lg font-semibold tracking-tight">FAST National University</h3><p className="mt-1 text-sm text-muted-foreground">Bachelor of Science in Computer Science</p><p className="mt-2 text-xs text-muted-foreground">2022 – 2026 · Graduated · Karachi, Pakistan</p></div>
        </div>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Leadership across ACM, GDSC, and Hackops, alongside competitions and building tools for the campus community.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">{highlights.map((highlight) => <span key={highlight} className="rounded-lg bg-muted/60 px-3 py-2 text-xs text-muted-foreground">{highlight}</span>)}</div>
        <details className="group mt-5 border-t border-border/60 pt-3">
          <summary className="flex min-h-10 cursor-pointer list-none items-center gap-2 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring [&::-webkit-details-marker]:hidden">More about my education<ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180 motion-reduce:transition-none" aria-hidden /></summary>
          <div className="pt-3 text-sm leading-relaxed text-muted-foreground">
            <p className="max-w-2xl">
            My degree gave me a rigorous CS foundation with heavy emphasis on systems, math, and software engineering practice. Outside
            lectures, I put my energy into{" "}
            <strong className="font-semibold text-foreground">student societies</strong>,{" "}
            <strong className="font-semibold text-foreground">competitions</strong>, and{" "}
            <strong className="font-semibold text-foreground">shipping real tools</strong> for peers and orgs on campus.
            </p>

          <p className="mt-6 text-[11px] font-medium uppercase tracking-[0.12em] text-muted-foreground">Leadership &amp; activities</p>
          <ul className="mt-3 list-disc space-y-2 pl-5">{leadership.map((item) => <li key={item}>{item}</li>)}</ul>

          <p className="mt-6 text-[11px] font-medium uppercase tracking-[0.12em] text-muted-foreground">Relevant coursework</p>
          <ul className="mt-3 list-disc space-y-2 pl-5">{coursework.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
        </details>
      </article>
    </section>
  )
}
