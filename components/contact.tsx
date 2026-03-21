"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Github, Linkedin, Globe, CheckCircle, AlertCircle, Loader2, MessageCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useSectionReveal } from "@/hooks/use-section-reveal"
import { cn } from "@/lib/utils"

const channels = [
  { href: "mailto:shozabb.work@gmail.com", label: "Email", icon: Mail, external: false },
  { href: "tel:+923322049847", label: "Phone", icon: Phone, external: false },
  { href: "https://linkedin.com/in/shozabmehdi/", label: "LinkedIn", icon: Linkedin, external: true },
  { href: "https://github.com/smshozab", label: "GitHub", icon: Github, external: true },
  { href: "https://smshozab.github.io", label: "Site", icon: Globe, external: true },
]

export default function Contact() {
  const { sectionRef, fade } = useSectionReveal()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: result.message || "Message sent successfully!",
        })
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        setSubmitStatus({
          type: "error",
          message: result.error || "Failed to send message. Please try again.",
        })
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" ref={sectionRef} className="relative pb-16 pt-14 sm:pb-20">
      <div
        className="pointer-events-none absolute left-1/2 top-32 h-24 w-24 -translate-x-1/2 rounded-full border border-dashed border-border/35 opacity-30 section-orbit-ring max-sm:hidden"
        style={{ animationDuration: "32s" }}
        aria-hidden
      />

      <div style={fade(0)}>
        <h2 className="flex items-center gap-2 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
          Contact
          <span className="text-base font-normal opacity-60" aria-hidden>
            ✉
          </span>
        </h2>
        <p className="mt-2 max-w-md text-sm text-muted-foreground sm:text-[15px]">
          Quick taps below—or write a longer note in the form.
        </p>
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3" style={fade(80)}>
        {channels.map((c) => {
          const Icon = c.icon
          return (
            <a
              key={c.href}
              href={c.href}
              target={c.external ? "_blank" : undefined}
              rel={c.external ? "noopener noreferrer" : undefined}
              className={cn(
                "section-surface section-pill flex flex-col items-center gap-2 rounded-2xl border border-border/80 bg-card/40 py-5 text-center",
                "text-sm font-medium text-foreground",
              )}
            >
              <Icon className="h-5 w-5 text-muted-foreground" strokeWidth={1.5} aria-hidden />
              <span>{c.label}</span>
            </a>
          )
        })}
        <div
          className={cn(
            "flex flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-border/70 bg-muted/20 py-5 text-center text-sm text-muted-foreground",
          )}
        >
          <MapPin className="h-5 w-5" strokeWidth={1.5} aria-hidden />
          Karachi, PK
        </div>
      </div>

      <Card className="section-surface mt-10 border-border/80 shadow-none" style={fade(160)}>
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-base font-semibold">
            <MessageCircle className="h-4 w-4 text-muted-foreground" strokeWidth={1.5} aria-hidden />
            Message
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {submitStatus.type && (
              <Alert variant={submitStatus.type === "success" ? "default" : "destructive"}>
                {submitStatus.type === "success" ? (
                  <CheckCircle className="h-4 w-4" strokeWidth={1.5} />
                ) : (
                  <AlertCircle className="h-4 w-4" strokeWidth={1.5} />
                )}
                <AlertDescription>{submitStatus.message}</AlertDescription>
              </Alert>
            )}

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-muted-foreground">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="shadow-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-muted-foreground">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="shadow-none"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="mb-1.5 block text-xs font-medium text-muted-foreground">
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="shadow-none"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-muted-foreground">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="shadow-none"
              />
            </div>

            <Button type="submit" className="section-pill w-full sm:w-auto" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending…
                </>
              ) : (
                "Send"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}
