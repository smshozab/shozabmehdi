import type { Metadata } from "next"
import Research from "@/components/research"

export const metadata: Metadata = {
  title: "Research",
  description: "Research focus — computer vision, ML, GenAI; publications shared when public. Shozab Mehdi.",
}

export default function ResearchPage() {
  return <Research />
}
