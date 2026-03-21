"use client"

import { useState } from "react"
import { Briefcase, GraduationCap, FolderKanban } from "lucide-react"
import { cn } from "@/lib/utils"
import { useSectionReveal } from "@/hooks/use-section-reveal"
import Experience from "@/components/experience"
import Education from "@/components/education"
import Projects from "@/components/projects"

const tabs = [
  { id: "experience", label: "Experience", icon: Briefcase, description: "Roles & internships" },
  { id: "education", label: "Education", icon: GraduationCap, description: "Degree & leadership" },
  { id: "projects", label: "Projects", icon: FolderKanban, description: "Builds & research" },
] as const

type TabId = (typeof tabs)[number]["id"]

const panels: Record<TabId, React.ComponentType> = {
  experience: Experience,
  education: Education,
  projects: Projects,
}

export function ProfileTabs() {
  const [active, setActive] = useState<TabId>("experience")
  const { sectionRef, fade } = useSectionReveal()
  const Panel = panels[active]

  return (
    <div ref={sectionRef}>
      <div className="grid grid-cols-3 gap-3 sm:gap-4" style={fade(80)}>
        {tabs.map((tab) => {
          const Icon = tab.icon
          const selected = active === tab.id
          return (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={cn(
                "group relative flex flex-col items-center gap-2 rounded-2xl border p-4 sm:p-5 text-center transition-all duration-200",
                "hover:shadow-sm cursor-pointer",
                selected
                  ? "border-foreground/20 bg-card shadow-sm"
                  : "border-border/60 bg-card/40 hover:border-border hover:bg-card/70",
              )}
            >
              <Icon
                className={cn(
                  "h-5 w-5 transition-colors",
                  selected ? "text-foreground" : "text-muted-foreground group-hover:text-foreground/70",
                )}
                strokeWidth={1.5}
              />
              <span
                className={cn(
                  "text-sm font-medium transition-colors",
                  selected ? "text-foreground" : "text-muted-foreground group-hover:text-foreground/80",
                )}
              >
                {tab.label}
              </span>
              <span className="hidden text-[11px] text-muted-foreground sm:block">
                {tab.description}
              </span>
              {selected && (
                <span className="absolute -bottom-px left-1/2 h-0.5 w-8 -translate-x-1/2 rounded-full bg-foreground/60" />
              )}
            </button>
          )
        })}
      </div>

      <div key={active} className="mt-2">
        <Panel />
      </div>
    </div>
  )
}
