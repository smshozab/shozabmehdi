"use client"

import { useSectionReveal } from "@/hooks/use-section-reveal"

export function ProfileIntro() {
  const { sectionRef, fade } = useSectionReveal()

  return (
    <header id="profile" ref={sectionRef} className="relative pb-6 pt-12">
      <div
        className="pointer-events-none absolute -right-2 top-10 h-20 w-20 rounded-full border border-dashed border-border/40 opacity-30 section-orbit-ring sm:right-0"
        aria-hidden
      />
      <div style={fade(0)}>
        <h2 className="flex flex-wrap items-center gap-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          A little of what I do
          <span className="text-base opacity-70" aria-hidden>
            ✳
          </span>
        </h2>
        <p className="mt-2 max-w-md text-sm text-muted-foreground sm:text-[15px]">
          Explore my builds, the teams I&apos;ve worked with, and where I&apos;m learning.
        </p>
      </div>
    </header>
  )
}
