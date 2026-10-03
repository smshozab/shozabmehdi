"use client"

import { useState } from "react"
import { useSectionReveal } from "@/hooks/use-section-reveal"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

const interests = [
  { label: "Computer vision", glyph: "◈", detail: "Making sense of images from fields, aquatic environments, and vehicle inspections.", project: "Sawari.ai", href: "#project-sawari-ai" },
  { label: "Deep learning", glyph: "◇", detail: "Combining visual, textual, and environmental evidence for aquaculture health and fish-disease diagnosis.", project: "AquaSense-Agent", href: "#project-aquasense-agent" },
  { label: "GenAI", glyph: "✦", detail: "Using language models to make complex documents and research workflows easier to work with.", project: "Risk Lens AI", href: "#project-risk-lens-ai" },
  { label: "Agentic AI", glyph: "⌬", detail: "Building guided analysis workflows that pair AI assistance with reproducible statistical results.", project: "BeyondMeta", href: "#project-beyondmeta" },
]

export default function Research() {
  const { sectionRef, fade } = useSectionReveal()
  const [focusTag, setFocusTag] = useState("Computer vision")
  const activeInterest = interests.find((item) => item.label === focusTag) ?? interests[0]

  return (
    <section id="research" ref={sectionRef} className="relative pb-10 pt-8 sm:pb-12">
      <div
        className="pointer-events-none absolute right-0 top-8 h-24 w-24 rounded-full border border-dashed border-border/50 opacity-40 section-orbit-ring max-sm:hidden"
        aria-hidden
      />

      <header style={fade(0)}>
        <h2 className="flex flex-wrap items-center gap-2 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
          What I&apos;m exploring
          <span className="text-lg font-normal opacity-80" aria-hidden>
            🔬
          </span>
        </h2>
        <p className="mt-3 max-w-prose text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
          My interests, and the builds where I put them into practice.
        </p>
      </header>

      <div className="mt-8" style={fade(60)}>
        <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">Focus</p>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Research interests">
          {interests.map((item) => (
            <button
              key={item.label}
              type="button"
              aria-pressed={focusTag === item.label}
              aria-controls="research-focus"
              onClick={() => setFocusTag(item.label)}
              className={cn(
                "section-pill inline-flex items-center gap-1.5 rounded-full border bg-background px-3 py-1.5 text-xs text-foreground sm:text-sm",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                focusTag === item.label
                  ? "border-foreground/40 bg-muted/60"
                  : "border-border hover:border-border",
              )}
            >
              <span className="text-muted-foreground" aria-hidden>
                {item.glyph}
              </span>
              {item.label}
            </button>
          ))}
        </div>
        <div id="research-focus" className="mt-4 rounded-xl border border-border/80 bg-card/50 p-5" aria-live="polite" aria-atomic="true">
          <h3 className="text-sm font-medium">{activeInterest.label}</h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">{activeInterest.detail}</p>
          <a href={activeInterest.href} className="mt-3 inline-flex min-h-10 items-center rounded-md text-sm font-medium underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Explore {activeInterest.project} ↗</a>
        </div>
      </div>

      <div className="mt-5 grid gap-4 text-sm leading-relaxed text-muted-foreground sm:grid-cols-2" style={fade(120)}>
        <div className="flex gap-3 rounded-xl border border-border/80 bg-card/50 p-4 transition-colors hover:bg-card sm:p-5">
          <span className="select-none text-lg leading-none" aria-hidden>
            🌾
          </span>
          <div>
            <h3 className="text-sm font-medium text-foreground">Agriculture &amp; field ML</h3>
            <p className="mt-1.5">
              ML and product-side work in ag / smart-farming—deeper detail stays with published or public artifacts.
            </p>
          </div>
        </div>

        <div className="flex gap-3 rounded-xl border border-border/80 bg-card/50 p-4 transition-colors hover:bg-card sm:p-5">
          <span className="select-none text-lg leading-none" aria-hidden>
            📍
          </span>
          <div>
            <h3 className="text-sm font-medium text-foreground">ICETAS · Bahrain · Mar 2026</h3>
            <p className="mt-1.5">
              One paper is <span className="text-foreground">accepted</span>; a <span className="text-foreground">journal</span>{" "}
              version follows. Title, links, and full detail once they&apos;re officially out.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-5" style={fade(200)}>
        <Collapsible className="rounded-2xl border border-border bg-card transition-shadow hover:shadow-sm">
          <CollapsibleTrigger className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left text-sm font-medium text-foreground transition-colors hover:bg-muted/40 sm:px-6 sm:py-5 [&[data-state=open]>svg]:rotate-180">
            <span className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 shrink-0 text-muted-foreground" strokeWidth={1.5} aria-hidden />
              A closer look at aquaculture research
            </span>
            <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" strokeWidth={1.5} />
          </CollapsibleTrigger>
          <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
            <div className="border-t border-border px-5 pb-5 pt-1 text-sm leading-relaxed text-muted-foreground sm:px-6 sm:pb-6 sm:text-[15px]">
              <p>
                Visual screening for <span className="text-foreground">aquaculture health</span>: a staged vision
                pipeline (localize → classify) with <span className="text-foreground">modern deep models</span>,{" "}
                <span className="text-foreground">interpretability</span> where decisions need to be legible, and an eye on{" "}
                <span className="text-foreground">deployment</span> constraints. Exact numbers, architecture, and data
                stay reserved until publication.
              </p>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </section>
  )
}
