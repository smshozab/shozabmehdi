"use client"

import { useEffect, useState } from "react"
import { Briefcase, GraduationCap, FolderKanban, GitBranch } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Experience from "@/components/experience"
import Education from "@/components/education"
import Projects from "@/components/projects"
import OpenSource from "@/components/open-source"

const tabs = [
  { id: "projects", label: "Selected work", icon: FolderKanban },
  { id: "open-source", label: "Open source", icon: GitBranch },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "education", label: "Education", icon: GraduationCap },
] as const

export function ProfileTabs() {
  const [activeTab, setActiveTab] = useState("projects")
  const [scrollTarget, setScrollTarget] = useState<string | null>(null)

  useEffect(() => {
    const followHash = () => {
      const target = window.location.hash.slice(1)
      const tab = target.startsWith("project-") ? "projects" : target
      if (tabs.some((item) => item.id === tab)) {
        setActiveTab(tab)
        setScrollTarget(target)
      }
    }
    followHash()
    window.addEventListener("hashchange", followHash)
    return () => window.removeEventListener("hashchange", followHash)
  }, [])

  useEffect(() => {
    if (!scrollTarget) return
    const frame = requestAnimationFrame(() => {
      document.getElementById(scrollTarget)?.scrollIntoView({ block: "start" })
      setScrollTarget(null)
    })
    return () => cancelAnimationFrame(frame)
  }, [activeTab, scrollTarget])

  return (
    <Tabs value={activeTab} onValueChange={(value) => {
      setActiveTab(value)
      window.history.replaceState(null, "", `#${value}`)
    }} className="gap-6 pb-8">
      <TabsList className="grid h-auto w-full grid-cols-2 gap-1 rounded-xl border border-border/70 bg-muted/40 p-1 sm:grid-cols-4" aria-label="Explore my profile">
        {tabs.map((tab) => {
          const Icon = tab.icon
          return (
            <TabsTrigger
              key={tab.id}
              value={tab.id}
              className="min-h-11 min-w-0 gap-2 rounded-lg px-1 py-3 text-xs text-muted-foreground data-[state=active]:text-foreground sm:px-2 sm:text-sm"
            >
              <Icon
                className="hidden h-4 w-4 text-muted-foreground sm:block"
                strokeWidth={1.5}
                aria-hidden
              />
              <span>
                {tab.label}
              </span>
            </TabsTrigger>
          )
        })}
      </TabsList>
      <TabsContent value="projects" className="mt-0"><Projects /></TabsContent>
      <TabsContent value="open-source" className="mt-0"><OpenSource /></TabsContent>
      <TabsContent value="experience" className="mt-0"><Experience /></TabsContent>
      <TabsContent value="education" className="mt-0"><Education /></TabsContent>
    </Tabs>
  )
}
