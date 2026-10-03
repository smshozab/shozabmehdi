"use client"

import Image from "next/image"
import { ArrowUpRight, ChevronDown, Loader2, MessageCircle } from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { useRef, useState, useEffect, useCallback } from "react"
import { useSectionReveal } from "@/hooks/use-section-reveal"
import { cn } from "@/lib/utils"

const quickPrompts = [
  { label: "Background", query: "Tell me about yourself and your background" },
  { label: "Builds", query: "What projects have you built?" },
  { label: "Work", query: "What's your work experience?" },
  { label: "Skills", query: "What are your main technical skills?" },
]

type Message = { role: "user" | "assistant"; content: string }

export default function Hero() {
  const [chatOpen, setChatOpen] = useState(false)
  const [draft, setDraft] = useState("")
  const [messages, setMessages] = useState<Message[]>([])
  const [streaming, setStreaming] = useState(false)
  const { sectionRef, fade } = useSectionReveal()
  const chatEndRef = useRef<HTMLDivElement>(null)
  const abortRef = useRef<AbortController | null>(null)

  const scrollToBottom = useCallback(() => {
    const container = chatEndRef.current?.parentElement
    if (container) container.scrollTop = container.scrollHeight
  }, [])

  useEffect(scrollToBottom, [messages, scrollToBottom])

  const sendMessage = async (text: string) => {
    const trimmed = text.trim()
    if (!trimmed || streaming) return

    const userMsg: Message = { role: "user", content: trimmed }
    const newMessages = [...messages, userMsg]
    setMessages(newMessages)
    setDraft("")
    setStreaming(true)

    const assistantMsg: Message = { role: "assistant", content: "" }
    setMessages([...newMessages, assistantMsg])

    try {
      abortRef.current = new AbortController()
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
        signal: abortRef.current.signal,
      })

      if (!res.ok) {
        const err = await res.json().catch(() => ({ error: "Something went wrong" }))
        setMessages((prev) => {
          const updated = [...prev]
          updated[updated.length - 1] = { role: "assistant", content: err.error || "Something went wrong. Try again!" }
          return updated
        })
        setStreaming(false)
        return
      }

      const reader = res.body?.getReader()
      const decoder = new TextDecoder()
      let accumulated = ""

      if (reader) {
        let buffer = ""
        while (true) {
          const { done, value } = await reader.read()
          if (done) break

          buffer += decoder.decode(value, { stream: true })
          const lines = buffer.split("\n")
          buffer = lines.pop() || ""

          for (const line of lines) {
            const trimLine = line.trim()
            if (!trimLine.startsWith("data: ")) continue
            const data = trimLine.slice(6)
            if (data === "[DONE]") break

            try {
              const parsed = JSON.parse(data)
              const delta = parsed.candidates?.[0]?.content?.parts
                ?.map((part: { text?: string }) => part.text || "")
                .join("")
              if (delta) {
                accumulated += delta
                setMessages((prev) => {
                  const updated = [...prev]
                  updated[updated.length - 1] = { role: "assistant", content: accumulated }
                  return updated
                })
              }
            } catch {
              // skip malformed chunks
            }
          }
        }
      }
    } catch (e: unknown) {
      if (e instanceof DOMException && e.name === "AbortError") return
      setMessages((prev) => {
        const updated = [...prev]
        updated[updated.length - 1] = { role: "assistant", content: "Something went wrong. Try again!" }
        return updated
      })
    } finally {
      setStreaming(false)
      abortRef.current = null
    }
  }

  const handleQuickPrompt = (query: string) => {
    sendMessage(query)
  }

  const hasChat = messages.length > 0

  return (
    <section id="home" ref={sectionRef} className="relative pb-8 pt-10 sm:pb-10 sm:pt-14">
      <div
        className="pointer-events-none absolute right-0 top-16 h-28 w-28 rounded-full border border-dashed border-border/45 opacity-35 section-orbit-ring max-sm:hidden"
        aria-hidden
      />

      <div id="about" className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8" style={fade(0)}>
        <div className="shrink-0 self-start">
          <div className="section-surface relative overflow-hidden rounded-full border border-border p-0.5">
            <Image
              src="/images/shozab-profile.png"
              alt="Shozab Mehdi"
              width={112}
              height={112}
              className="h-28 w-28 rounded-full object-cover grayscale transition-all duration-300 hover:grayscale-0 sm:h-32 sm:w-32"
              priority
            />
          </div>
        </div>
        <div className="min-w-0 flex-1 space-y-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">Developer · Builder · Curious about AI</p>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Hey, I&apos;m Shozab <span aria-hidden>👋</span>
          </h1>
          <p className="max-w-lg text-[15px] leading-relaxed text-muted-foreground sm:text-base">
            I&apos;m a fresh Computer Science graduate from FAST NUCES. I build useful software and explore how AI can help with real-world problems, with a soft spot for thoughtful products and clear systems.
          </p>
          <p className="max-w-lg text-sm leading-relaxed text-muted-foreground"><span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-emerald-600" aria-hidden /><span className="font-medium text-foreground">Currently:</span> co-building BeyondMeta and exploring ML for aquatic and agricultural environments.</p>
          <div className="flex flex-wrap items-center gap-5 pt-1">
            <a href="#profile" className="inline-flex min-h-10 items-center gap-1.5 rounded-md text-sm font-medium underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Explore my work<ArrowUpRight className="h-4 w-4" aria-hidden /></a>
            <a href="#contact" className="inline-flex min-h-10 items-center gap-1.5 rounded-md text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Let&apos;s connect</a>
          </div>
        </div>
      </div>

      <Collapsible
        open={chatOpen}
        onOpenChange={setChatOpen}
        className="group mt-7 rounded-2xl border border-border bg-card/50"
        style={fade(120)}
      >
        <CollapsibleTrigger className="flex min-h-14 w-full items-center justify-between gap-3 rounded-2xl px-5 py-4 text-left text-sm hover:bg-muted/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring [&[data-state=open]>svg]:rotate-180">
          <span className="flex flex-wrap items-center gap-x-3 gap-y-1"><MessageCircle className="h-4 w-4 text-muted-foreground" aria-hidden /><span className="font-medium">Ask about my work</span><span className="text-xs text-muted-foreground">An AI guide to my profile</span></span>
          <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform motion-reduce:transition-none" aria-hidden />
        </CollapsibleTrigger>
        <CollapsibleContent className="border-t border-border px-5 py-5 sm:px-6">
        {!hasChat && (
          <>
            <div className="flex gap-3">
              <div
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-foreground text-sm font-medium text-background"
                aria-hidden
              >
                S
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                Ask me anything — my experience, projects, education, or skills. Powered by AI.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {quickPrompts.map((p) => (
                <button
                  key={p.label}
                  type="button"
                  onClick={() => handleQuickPrompt(p.query)}
                  className={cn(
                    "section-pill inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-1.5 text-xs text-foreground sm:text-sm",
                  )}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </>
        )}

        {hasChat && (
          <div className="max-h-72 space-y-4 overflow-y-auto pr-1 sm:max-h-80">
            {messages.map((msg, i) => (
              <div key={i} className={cn("flex gap-3", msg.role === "user" && "flex-row-reverse")}>
                <div
                  className={cn(
                    "flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-medium",
                    msg.role === "assistant"
                      ? "bg-foreground text-background"
                      : "bg-muted text-muted-foreground",
                  )}
                  aria-hidden
                >
                  {msg.role === "assistant" ? "S" : "Y"}
                </div>
                <div
                  className={cn(
                    "max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed",
                    msg.role === "assistant"
                      ? "bg-muted/50 text-foreground"
                      : "bg-foreground/5 text-foreground",
                  )}
                >
                  {msg.content || (
                    <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                  )}
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
        )}

        <div className={cn("border-t border-border pt-6", hasChat ? "mt-4" : "mt-8")}>
          <div className="flex items-end gap-2">
            <label htmlFor="hero-ask" className="sr-only">
              Message
            </label>
            <input
              id="hero-ask"
              type="text"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault()
                  sendMessage(draft)
                }
              }}
              placeholder={hasChat ? "Ask a follow-up…" : "Ask me anything…"}
              disabled={streaming}
              className="min-h-10 flex-1 border-0 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-0 disabled:opacity-50"
            />
            <button
              type="button"
              onClick={() => sendMessage(draft)}
              disabled={streaming || !draft.trim()}
              className="section-pill flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground disabled:opacity-40"
              aria-label="Send"
            >
              {streaming ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <ArrowUpRight className="h-4 w-4 rotate-[-45deg]" strokeWidth={1.5} />
              )}
            </button>
          </div>
        </div>

        {hasChat && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {quickPrompts.map((p) => (
              <button
                key={p.label}
                type="button"
                onClick={() => handleQuickPrompt(p.query)}
                disabled={streaming}
                className="rounded-full border border-border/60 px-2.5 py-1 text-[11px] text-muted-foreground transition-colors hover:border-border hover:text-foreground disabled:opacity-40"
              >
                {p.label}
              </button>
            ))}
          </div>
        )}
        </CollapsibleContent>
      </Collapsible>
    </section>
  )
}
