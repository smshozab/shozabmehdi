"use client"

import { useSectionReveal } from "@/hooks/use-section-reveal"

export function ProfileIntro() {
  const { sectionRef, fade } = useSectionReveal()

  return (
    <header ref={sectionRef} className="relative pb-8 pt-14">
      <div
        className="pointer-events-none absolute -right-2 top-10 h-20 w-20 rounded-full border border-dashed border-border/40 opacity-30 section-orbit-ring sm:right-0"
        aria-hidden
      />
      <div style={fade(0)}>
        <h1 className="flex flex-wrap items-center gap-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Profile
          <span className="text-base opacity-70" aria-hidden>
            ✳
          </span>
        </h1>
        <p className="mt-2 max-w-md text-sm text-muted-foreground sm:text-[15px]">
          Work, school, and builds—one vertical thread, newest first.
        </p>
      </div>
    </header>
  )
}
