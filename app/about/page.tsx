import type { Metadata } from "next"
import About from "@/components/about"

export const metadata: Metadata = {
  title: "About",
  description: "Background, journey, and focus — Shozab Mehdi.",
}

export default function AboutPage() {
  return <About />
}
