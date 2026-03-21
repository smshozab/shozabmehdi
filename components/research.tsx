"use client"

import type { CSSProperties } from "react"
import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

const interests = [
  { label: "Computer vision", glyph: "◈" },
  { label: "Deep learning", glyph: "◇" },
  { label: "GenAI", glyph: "✦" },
  { label: "Agentic AI", glyph: "⌬" },
]

export default function Research() {
  const rootRef = useRef<HTMLElement>(null)
  const [inView, setInView] = useState(false)
  const [focusTag, setFocusTag] = useState<string | null>(null)

  useLayoutEffect(() => {
    if (typeof window === "undefined") return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setInView(true)
      return
    }
    const el = rootRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight + 80) setInView(true)
  }, [])

  useEffect(() => {
    const el = rootRef.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e?.isIntersecting) setInView(true)
    }, { threshold: 0.06, rootMargin: "24px 0px 0px 0px" })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const fade = (delayMs: number): CSSProperties => ({
    opacity: inView ? undefined : 0,
    animation: inView ? `section-fade-up 0.55s cubic-bezier(0.22, 1, 0.36, 1) ${delayMs}ms forwards` : undefined,
  })

  return (
    <section id="research" ref={rootRef} className="relative pt-14 pb-16 sm:pb-20">
      <div
        className="pointer-events-none absolute -right-4 top-8 h-24 w-24 rounded-full border border-dashed border-border/50 opacity-40 section-orbit-ring sm:right-0"
        aria-hidden
      />

      <header style={fade(0)}>
        <h2 className="flex flex-wrap items-center gap-2 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
          Research
          <span className="text-lg font-normal opacity-80" aria-hidden>
            🔬
          </span>
        </h2>
        <p className="mt-3 max-w-prose text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
          Vision, learning, and systems I can ship—light on specifics until formal write-ups are public.
        </p>
      </header>

      <div className="mt-8" style={fade(60)}>
        <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">Focus</p>
        <div className="flex flex-wrap gap-2" role="list">
          {interests.map((item) => (
            <button
              key={item.label}
              type="button"
              role="listitem"
              onClick={() => setFocusTag((t) => (t === item.label ? null : item.label))}
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
      </div>

      <div className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground sm:text-[15px]" style={fade(120)}>
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

      <div className="mt-10" style={fade(200)}>
        <Collapsible className="rounded-2xl border border-border bg-card transition-shadow hover:shadow-sm">
          <CollapsibleTrigger className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left text-sm font-medium text-foreground transition-colors hover:bg-muted/40 sm:px-6 sm:py-5 [&[data-state=open]>svg]:rotate-180">
            <span className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 shrink-0 text-muted-foreground" strokeWidth={1.5} aria-hidden />
              Teaser — essence only
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
