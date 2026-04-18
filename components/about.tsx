"use client"

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown } from "lucide-react"
import { useSectionReveal } from "@/hooks/use-section-reveal"
import { cn } from "@/lib/utils"

const highlights = [
  {
    emoji: "🎓",
    title: "FAST NUCES",
    line: "Final-year CS · leadership across ACM, GDSC & Hackops.",
  },
  {
    emoji: "⚙️",
    title: "Build & ship",
    line: "Inferifi, Neospark, 10Pearls, Upwork, plus passion and freelance product work in edtech, medical, agriculture, aquaculture, and blockchain.",
  },
  {
    emoji: "🧭",
    title: "Focus",
    line: "TypeScript stacks, solid systems, ML that lands in real products.",
  },
]

export default function About() {
  const { sectionRef, fade } = useSectionReveal()

  return (
    <section id="about" ref={sectionRef} className="relative pb-16 pt-14 sm:pb-20">
      <div
        className="pointer-events-none absolute -left-6 top-24 h-16 w-16 rounded-full border border-dashed border-border/40 opacity-25 section-orbit-ring max-sm:hidden"
        style={{ animationDuration: "22s" }}
        aria-hidden
      />

      <div style={fade(0)}>
        <h2 className="flex items-center gap-2 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
          About
          <span className="text-base font-normal opacity-70" aria-hidden>
            ◇
          </span>
        </h2>
        <p className="mt-2 max-w-md text-sm text-muted-foreground sm:text-[15px]">
          Reliable software, curious ML, and teams that move fast.
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-3" style={fade(100)}>
        {highlights.map((h) => (
          <div
            key={h.title}
            className={cn(
              "section-surface rounded-2xl border border-border/80 bg-card/40 p-5",
              "flex flex-col gap-2",
            )}
          >
            <span className="text-xl leading-none" aria-hidden>
              {h.emoji}
            </span>
            <h3 className="text-sm font-medium text-foreground">{h.title}</h3>
            <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">{h.line}</p>
          </div>
        ))}
      </div>

      <div className="mt-8" style={fade(260)}>
        <Collapsible className="group rounded-2xl border border-border bg-card transition-shadow hover:shadow-sm">
          <CollapsibleTrigger className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left text-sm font-medium text-foreground transition-colors hover:bg-muted/30 sm:px-6 [&[data-state=open]>svg]:rotate-180">
            <span>More context</span>
            <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" strokeWidth={1.5} />
          </CollapsibleTrigger>
          <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
            <div className="space-y-3 border-t border-border px-5 pb-5 pt-3 text-sm leading-relaxed text-muted-foreground sm:px-6 sm:pb-6 sm:text-[15px]">
              <p>
                I like products that hold up in production—clear architecture, thoughtful UX, and honest tradeoffs.
                Side threads include research-style ML (vision, field data) and communities where juniors level up.
              </p>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </section>
  )
}
