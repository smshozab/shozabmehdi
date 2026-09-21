import { Briefcase, GraduationCap, FolderKanban } from "lucide-react"
import Experience from "@/components/experience"
import Education from "@/components/education"
import Projects from "@/components/projects"

const tabs = [
  { id: "experience", label: "Experience", icon: Briefcase, description: "Roles & internships" },
  { id: "education", label: "Education", icon: GraduationCap, description: "Degree & leadership" },
  { id: "projects", label: "Projects", icon: FolderKanban, description: "Builds & research" },
] as const

export function ProfileTabs() {
  return (
    <div>
      <nav className="grid grid-cols-3 gap-3 sm:gap-4" aria-label="Profile sections">
        {tabs.map((tab) => {
          const Icon = tab.icon
          return (
            <a
              key={tab.id}
              href={`#${tab.id}`}
              className="group relative flex flex-col items-center gap-2 rounded-2xl border border-border/60 bg-card/40 p-4 text-center transition-all duration-200 hover:border-border hover:bg-card/70 hover:shadow-sm sm:p-5"
            >
              <Icon
                className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-foreground/70"
                strokeWidth={1.5}
              />
              <span className="text-sm font-medium text-muted-foreground transition-colors group-hover:text-foreground/80">
                {tab.label}
              </span>
              <span className="hidden text-[11px] text-muted-foreground sm:block">
                {tab.description}
              </span>
            </a>
          )
        })}
      </nav>

      <div className="mt-2">
        <Experience />
        <Education />
        <Projects />
      </div>
    </div>
  )
}
