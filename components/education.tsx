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
  const { sectionRef, fade } = useSectionReveal()

  return (
    <section id="education" ref={sectionRef} className="pb-16 pt-4 sm:pb-20">
      <div style={fade(0)}>
        <h2 className="text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground">Education</h2>
        <p className="mt-2 max-w-lg text-sm text-muted-foreground sm:text-[15px]">
          Degree, leadership, and coursework in one thread.
        </p>
      </div>

      <div className="mt-10" style={fade(70)}>
        <TimelineEntry isLast>
          <TimelineDate>2022 – 2026 · IN PROGRESS</TimelineDate>
          <TimelinePrimary>FAST National University</TimelinePrimary>
          <TimelineRole>Bachelor of Science in Computer Science</TimelineRole>
          <TimelineMeta>Karachi, Pakistan</TimelineMeta>
          <TimelineBody>
            Rigorous CS foundation with heavy emphasis on systems, math, and software engineering practice. Outside
            lectures, most of my energy goes to{" "}
            <strong className="font-semibold text-foreground">student societies</strong>,{" "}
            <strong className="font-semibold text-foreground">competitions</strong>, and{" "}
            <strong className="font-semibold text-foreground">shipping real tools</strong> for peers and orgs on campus.
          </TimelineBody>

          <p className="mt-6 text-[11px] font-medium uppercase tracking-[0.12em] text-muted-foreground">Leadership &amp; activities</p>
          <TimelineBulletList items={leadership} />

          <p className="mt-6 text-[11px] font-medium uppercase tracking-[0.12em] text-muted-foreground">Relevant coursework</p>
          <TimelineBulletList items={coursework} />

          <p className="mt-6 text-[11px] font-medium uppercase tracking-[0.12em] text-muted-foreground">Academic highlights</p>
          <TimelineBulletList items={highlights} />

          <TimelineTags tags={["FAST NUCES", "Karachi", "BS Computer Science", "2026"]} />
        </TimelineEntry>
      </div>
    </section>
  )
}
