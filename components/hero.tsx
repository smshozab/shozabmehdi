"use client"

import { ArrowDown, Download, Github, Linkedin, Mail, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 particles-bg gradient-bg relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse animation-delay-300"></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-destructive/10 rounded-full blur-2xl animate-pulse animation-delay-500"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className={`mb-8 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <div className="relative inline-block">
              <Image
                src="/images/shozab-profile.jpg"
                alt="Shozab Mehdi"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-6 border-4 border-primary/30 shadow-2xl glow-primary float-animation"
              />
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center animate-bounce">
                <Sparkles className="w-4 h-4 text-accent-foreground" />
              </div>
            </div>
          </div>

          <div className={`${isVisible ? "animate-fade-in-up animate-delay-200" : "opacity-0"}`}>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black mb-4 leading-tight">
              Hi, I'm <span className="text-gradient bg-clip-text">Shozab Mehdi</span>
            </h1>
          </div>

          <div className={`${isVisible ? "animate-fade-in-up animate-delay-300" : "opacity-0"}`}>
            <div className="relative inline-block">
              <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 font-medium">
                Computer Science Student | Software Engineer | AI Enthusiast
              </p>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary via-accent to-destructive rounded-full"></div>
            </div>
          </div>

          <div className={`${isVisible ? "animate-fade-in-up animate-delay-400" : "opacity-0"}`}>
            <p className="text-lg lg:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Final-year CS student at <span className="text-primary font-semibold">FAST NUCES</span> with expertise in{" "}
              <span className="text-accent font-semibold">Full-Stack Development</span> and a growing passion for{" "}
              <span className="text-destructive font-semibold">Machine Learning</span> and AI innovation.
            </p>
          </div>

          <div
            className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 ${isVisible ? "animate-fade-in-up animate-delay-500" : "opacity-0"}`}
          >
            <Button
              size="lg"
              asChild
              className="w-full sm:w-auto card-hover btn-animate hero-gradient text-white font-semibold px-8 py-4 text-lg shadow-2xl hover:shadow-primary/25 transition-all duration-300"
            >
              <a 
                href="https://drive.google.com/file/d/1QiB1DFGcgoftago-M8eF6qA91ATEUln9/view?usp=sharing" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View My Resume"
              >
                View My Resume
              </a>
            </Button>

            <div className="flex gap-4">
              <Button
                variant="outline"
                size="icon"
                className="w-12 h-12 card-hover glow-primary bg-transparent"
                asChild
              >
                <a href="mailto:shozabb.work@gmail.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="w-12 h-12 card-hover glow-accent bg-transparent" asChild>
                <a
                  href="https://linkedin.com/in/shozabmehdi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="w-12 h-12 card-hover bg-transparent" asChild>
                <a href="https://github.com/smshozab" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          <div className={`${isVisible ? "animate-fade-in-up animate-delay-600" : "opacity-0"}`}>
            <Button
              variant="ghost"
              onClick={scrollToAbout}
              className="animate-bounce hover:animate-none transition-all duration-300 p-4 rounded-full hover:bg-primary/10"
            >
              <ArrowDown className="h-8 w-8 text-primary" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
