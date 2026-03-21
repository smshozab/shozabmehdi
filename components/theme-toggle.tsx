"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Monitor, Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  const { setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="flex h-8 w-[88px] items-center justify-end" aria-hidden />
  }

  const btn =
    "rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"

  return (
    <div className="flex items-center gap-0.5" role="group" aria-label="Theme">
      <button type="button" className={btn} aria-label="Light mode" onClick={() => setTheme("light")}>
        <Sun className="h-4 w-4" strokeWidth={1.5} />
      </button>
      <button type="button" className={btn} aria-label="Dark mode" onClick={() => setTheme("dark")}>
        <Moon className="h-4 w-4" strokeWidth={1.5} />
      </button>
      <button type="button" className={btn} aria-label="System theme" onClick={() => setTheme("system")}>
        <Monitor className="h-4 w-4" strokeWidth={1.5} />
      </button>
    </div>
  )
}
