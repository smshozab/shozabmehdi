import type React from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="mx-auto min-h-screen max-w-4xl px-5 sm:px-6">{children}</main>
      <Footer />
    </>
  )
}
