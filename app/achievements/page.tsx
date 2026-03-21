import type { Metadata } from "next"
import Achievements from "@/components/achievements"

export const metadata: Metadata = {
  title: "Achievements",
  description: "Hackathons, competitions, and awards — Shozab Mehdi.",
}

export default function AchievementsPage() {
  return <Achievements />
}
