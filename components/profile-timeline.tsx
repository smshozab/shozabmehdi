import type React from "react"
import { cn } from "@/lib/utils"

/** One row on the vertical timeline (dot + connector + content). */
export function TimelineEntry({
  isLast,
  children,
  className,
}: {
  isLast?: boolean
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn("flex gap-5 sm:gap-7", className)}>
      <div className="flex w-[11px] shrink-0 flex-col items-center pt-1 sm:w-3" aria-hidden>
        <div
          className={cn(
            "z-[1] h-2.5 w-2.5 shrink-0 rounded-full border-2 border-muted-foreground/40 bg-background",
            "ring-2 ring-background",
          )}
        />
        {!isLast ? <div className="mt-2 min-h-[4rem] w-px flex-1 bg-border/80 sm:min-h-[4.5rem]" /> : null}
      </div>
      <div className="min-w-0 flex-1 pb-11 sm:pb-14">{children}</div>
    </div>
  )
}

export function TimelineDate({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground sm:text-xs">{children}</p>
  )
}

export function TimelinePrimary({ children }: { children: React.ReactNode }) {
  return <h3 className="mt-1 text-base font-semibold tracking-tight text-foreground sm:text-lg">{children}</h3>
}

export function TimelineRole({ children }: { children: React.ReactNode }) {
  return <p className="mt-0.5 text-sm italic text-muted-foreground sm:text-[15px]">{children}</p>
}

export function TimelineMeta({ children }: { children: React.ReactNode }) {
  return <p className="mt-1 text-xs text-muted-foreground/90 sm:text-sm">{children}</p>
}

export function TimelineBody({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("mt-4 text-sm leading-[1.65] text-muted-foreground sm:text-[15px]", className)}>{children}</div>
  )
}

/** Light grey bullets like the reference lists. */
export function TimelineBulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 space-y-2 pl-0.5 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5">
          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/45" aria-hidden />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export function TimelineTags({ tags }: { tags: string[] }) {
  return <p className="mt-4 text-xs leading-relaxed text-muted-foreground/85 sm:text-sm">{tags.join(" · ")}</p>
}

export function TimelineLinks({ links }: { links: { label: string; href: string }[] }) {
  return (
    <p className="mt-3 text-sm text-muted-foreground">
      {links.map((l, i) => (
        <span key={l.href}>
          {i > 0 ? <span className="text-border"> · </span> : null}
          <a
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground underline-offset-4 transition-colors hover:underline"
          >
            {l.label}
          </a>
        </span>
      ))}
    </p>
  )
}
