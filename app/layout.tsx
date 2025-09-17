import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Shozab Mehdi - Computer Science Student | Software Engineer | AI Enthusiast",
  description:
    "Portfolio of Shozab Mehdi - Full-Stack Developer and Machine Learning enthusiast. Computer Science student at FAST NUCES with experience in MERN stack, blockchain, and AI projects.",
  keywords: "Shozab Mehdi, Computer Science, Full Stack Developer, Machine Learning, AI, FAST NUCES, Portfolio",
  authors: [{ name: "Shozab Mehdi" }],
  openGraph: {
    title: "Shozab Mehdi - Portfolio",
    description: "Computer Science Student | Software Engineer | AI Enthusiast",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
