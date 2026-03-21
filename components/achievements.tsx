"use client"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { useSectionReveal } from "@/hooks/use-section-reveal"
import { cn } from "@/lib/utils"

type AchievementItem = {
  text: string
  image?: string
}

type GalleryImage = {
  src: string
  alt: string
  crop?: boolean
}

type YearGroup = {
  year: string
  items: AchievementItem[]
  gallery: GalleryImage[]
}

const achievements: YearGroup[] = [
  {
    year: "2026",
    items: [
      { text: "Top 10 – Teknofest FYP Display Competition" },
      { text: "Runner-Up – Procom Hackathon" },
      { text: "Research paper accepted at an international conference" },
    ],
    gallery: [
      { src: "/awards/teknofest.png", alt: "Teknofest FYP Display – Excellence Award" },
      { src: "/awards/procom-cheque.png", alt: "Procom Hackathon – Runner-Up cheque ceremony" },
    ],
  },
  {
    year: "2025",
    items: [
      { text: "Winner – National AI Competition AiTec'25, NCP" },
      { text: "Winner - Anryton Blockchain NIC Hackathon" },
      { text: "Winner - Asani.io Hackathon" },
      { text: "Tech Lead - Google Developer Student Clubs (GDSC)" },
    ],
    gallery: [
      { src: "/awards/aiic-indoor.png", alt: "AIIC-2025 – 1st Position, Team AgenticAI.Chain", crop: true },
      { src: "/awards/aiic-outdoor.png", alt: "AIIC-2025 – Team photo at NCP grounds", crop: true },
      { src: "/awards/aiic-building.png", alt: "AIIC-2025 – Team at NCP building", crop: true },
      { src: "/awards/asani-trophy.png", alt: "Asani.io Hackathon – Winner trophy at NASTP" },
      { src: "/awards/asani-team.png", alt: "Asani Hackathon 2025 – Winning team" },
      { src: "/awards/devday-award.png", alt: "Anryton Blockchain NIC Hackathon – Award ceremony" },
      { src: "/awards/ncp-scenic.png", alt: "NCP Islamabad campus" },
    ],
  },
  {
    year: "2024",
    items: [
      { text: "ICPC Finalist" },
      { text: "Top 10 - lablab.ai llama Hackathon" },
      { text: "Winner - FDSS Data Visualization Competition" },
      { text: "Dean's List Spring 2024" },
      { text: "Finalist - AITEC NCP" },
      { text: "National Finalist - Fasset Blockchain Competition" },
    ],
    gallery: [
      { src: "/awards/ncp-fieldmatrix.png", alt: "AiTec NCP – FieldMatrix team display" },
      { src: "/awards/ncp-outdoor.png", alt: "National Centre of Physics, Islamabad" },
      { src: "/awards/fdss-dataviz.png", alt: "FDSS DataQuest – Data Visualization Runner-Up" },
      { src: "/awards/fasset-poster.png", alt: "Fasset Blockchain Fest 2024 – Finals selection" },
      { src: "/awards/pitching.png", alt: "IBA Startup Showdown" },
    ],
  },
  {
    year: "2023",
    items: [
      { text: "Rising Talent - Upwork" },
      { text: "Finalist - Speed Coding Competition" },
      { text: "Finalist - ACM Coders Cup" },
    ],
    gallery: [
      { src: "/awards/procom-23.png", alt: "Procom'23 Startup Showdown" },
      { src: "/awards/meetup-seated.png", alt: "At a tech community meetup" },
      { src: "/awards/networking-1.png", alt: "Networking at tech meetup" },
      { src: "/awards/networking-2.png", alt: "Community event" },
    ],
  },
  {
    year: "2018",
    items: [{ text: "Finalist - Google Code-In" }],
    gallery: [],
  },
]

function iconFor(text: string) {
  const t = text.toLowerCase()
  if (t.includes("winner")) return "🏆"
  if (t.includes("finalist") || t.includes("top") || t.includes("runner")) return "★"
  if (t.includes("lead")) return "◎"
  if (t.includes("research") || t.includes("paper") || t.includes("dean")) return "✦"
  return "✦"
}

export default function Achievements() {
  const { sectionRef, fade } = useSectionReveal()
  const defaultYear = achievements[0]?.year ?? "2025"
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null)

  return (
    <>
      <section id="achievements" ref={sectionRef} className="pb-16 pt-14 sm:pb-20">
        <div style={fade(0)}>
          <h2 className="flex items-center gap-2 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            Achievements
            <span className="text-base font-normal opacity-60" aria-hidden>
              🏆
            </span>
          </h2>
          <p className="mt-2 max-w-md text-sm text-muted-foreground sm:text-[15px]">
            By year—scan the chips, click the photos.
          </p>
        </div>

        <div className="mt-8" style={fade(90)}>
          <Tabs defaultValue={defaultYear} className="w-full">
            <TabsList
              className={cn(
                "mb-6 flex h-auto w-full flex-wrap justify-start gap-1.5 rounded-xl border border-border/80 bg-muted/30 p-1.5",
              )}
            >
              {achievements.map((g) => (
                <TabsTrigger
                  key={g.year}
                  value={g.year}
                  className="section-pill rounded-lg border border-transparent px-3 py-2 text-xs font-medium data-[state=active]:border-border data-[state=active]:bg-background data-[state=active]:shadow-sm sm:text-sm"
                >
                  {g.year}
                </TabsTrigger>
              ))}
            </TabsList>

            {achievements.map((g) => (
              <TabsContent key={g.year} value={g.year} className="mt-0 outline-none">
                <div className="flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <div
                      key={item.text}
                      className="section-surface flex max-w-full items-center gap-2 rounded-full border border-border/80 bg-card/40 px-3 py-2 text-left text-xs text-foreground sm:text-sm"
                    >
                      <span className="shrink-0 text-sm opacity-80" aria-hidden>
                        {iconFor(item.text)}
                      </span>
                      <span className="leading-snug text-muted-foreground">{item.text}</span>
                    </div>
                  ))}
                </div>

                {g.gallery.length > 0 && (
                  <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                    {g.gallery.map((img) => (
                      <button
                        key={img.src}
                        type="button"
                        onClick={() => setLightbox(img)}
                        className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-border/60 bg-muted/20 transition-all duration-200 hover:border-foreground/20 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          className={cn(
                            "object-cover transition-transform duration-300 group-hover:scale-105",
                            img.crop && "scale-[1.25] object-center",
                          )}
                          sizes="(max-width: 640px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                        <span className="absolute inset-x-0 bottom-0 translate-y-1 px-2.5 pb-2.5 text-left text-[11px] leading-tight text-white opacity-0 transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100">
                          {img.alt}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <Dialog open={!!lightbox} onOpenChange={(open) => !open && setLightbox(null)}>
        <DialogContent className="max-w-3xl border-border/60 bg-background/95 p-2 backdrop-blur-sm sm:p-3">
          <DialogTitle className="sr-only">{lightbox?.alt ?? ""}</DialogTitle>
          {lightbox && (
            <div className="flex flex-col gap-3">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                <Image
                  src={lightbox.src}
                  alt={lightbox.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 768px"
                />
              </div>
              <p className="px-1 pb-1 text-center text-sm text-muted-foreground">{lightbox.alt}</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
