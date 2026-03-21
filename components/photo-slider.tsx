"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

type SlideImage = {
  src: string
  alt: string
  crop?: boolean
}

const slides: SlideImage[] = [
  { src: "/awards/aiic-indoor.png", alt: "AIIC-2025 – 1st Position, Team AgenticAI.Chain", crop: true },
  { src: "/awards/teknofest.png", alt: "Teknofest FYP Display – Excellence Award" },
  { src: "/awards/procom-cheque.png", alt: "Procom Hackathon – Runner-Up cheque ceremony" },
  { src: "/awards/aiic-outdoor.png", alt: "AIIC-2025 – Team photo at NCP grounds", crop: true },
  { src: "/awards/asani-trophy.png", alt: "Asani.io Hackathon – Winner trophy at NASTP" },
  { src: "/awards/fdss-dataviz.png", alt: "FDSS DataQuest – Data Visualization Runner-Up" },
  { src: "/awards/aiic-building.png", alt: "AIIC-2025 – Team at NCP building", crop: true },
  { src: "/awards/asani-team.png", alt: "Asani Hackathon 2025 – Winning team" },
  { src: "/awards/ncp-fieldmatrix.png", alt: "AiTec NCP – FieldMatrix team display" },
  { src: "/awards/devday-award.png", alt: "Anryton Blockchain NIC Hackathon – Award ceremony" },
  { src: "/awards/fasset-poster.png", alt: "Fasset Blockchain Fest 2024 – Finals selection" },
  { src: "/awards/pitching.png", alt: "IBA Startup Showdown" },
  { src: "/awards/ncp-outdoor.png", alt: "National Centre of Physics, Islamabad" },
  { src: "/awards/procom-23.png", alt: "Procom'23 Startup Showdown" },
  { src: "/awards/meetup-seated.png", alt: "At a tech community meetup" },
  { src: "/awards/networking-1.png", alt: "Networking at tech meetup" },
  { src: "/awards/ncp-scenic.png", alt: "NCP Islamabad campus" },
  { src: "/awards/networking-2.png", alt: "Community event" },
]

export default function PhotoSlider() {
  const [lightbox, setLightbox] = useState<SlideImage | null>(null)

  const track = [...slides, ...slides]

  return (
    <>
      <div className="relative -mx-6 overflow-hidden sm:-mx-10 lg:-mx-16">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-background to-transparent sm:w-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-background to-transparent sm:w-20" />

        <div className="flex w-max animate-[slider-scroll_60s_linear_infinite] gap-3 py-2 hover:[animation-play-state:paused]">
          {track.map((img, i) => (
            <button
              key={`${img.src}-${i}`}
              type="button"
              onClick={() => setLightbox(img)}
              className="group relative h-32 w-48 shrink-0 overflow-hidden rounded-xl border border-border/50 bg-muted/20 transition-all duration-200 hover:border-foreground/20 hover:shadow-md sm:h-40 sm:w-56"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className={cn(
                  "object-cover transition-transform duration-300 group-hover:scale-105",
                  img.crop && "scale-[1.25] object-center",
                )}
                sizes="224px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
              <span className="absolute inset-x-0 bottom-0 translate-y-1 px-2 pb-2 text-left text-[10px] leading-tight text-white opacity-0 transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100">
                {img.alt}
              </span>
            </button>
          ))}
        </div>
      </div>

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
