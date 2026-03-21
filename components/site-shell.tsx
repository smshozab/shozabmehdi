import type React from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-2xl px-6">{children}</div>
      <Footer />
    </>
  )
}
