"use client"

import type { CSSProperties } from "react"
import { useEffect, useLayoutEffect, useRef, useState } from "react"

export function useSectionReveal() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const [inView, setInView] = useState(false)

  useLayoutEffect(() => {
    if (typeof window === "undefined") return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setInView(true)
      return
    }
    const el = sectionRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight + 80) setInView(true)
  }, [])

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) setInView(true)
      },
      { threshold: 0.06, rootMargin: "24px 0px 0px 0px" },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const fade = (delayMs = 0): CSSProperties => ({
    opacity: inView ? undefined : 0,
    animation: inView
      ? `section-fade-up 0.55s cubic-bezier(0.22, 1, 0.36, 1) ${delayMs}ms forwards`
      : undefined,
  })

  return { sectionRef, fade, inView }
}
