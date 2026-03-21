import type { Metadata } from "next"
import Contact from "@/components/contact"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch — Shozab Mehdi.",
}

export default function ContactPage() {
  return <Contact />
}
