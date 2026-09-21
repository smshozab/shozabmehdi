"use client"

import { useState } from "react"
import Link from "next/link"
import { Github, Linkedin, Mail, Menu, X } from "lucide-react"

const navigation = [
  { name: "about", href: "/#about" },
  { name: "profile", href: "/#profile" },
  { name: "achievements", href: "/#achievements" },
  { name: "research", href: "/#research" },
  {
    name: "resume",
    href: "https://drive.google.com/file/d/1LYr_8xHgOCg0RjBAzN3fHSpIW9l650zW/view?usp=sharing",
    external: true,
  },
  { name: "contact", href: "/#contact" },
]

const social = [
  { href: "https://github.com/smshozab", label: "GitHub", icon: Github },
  { href: "https://linkedin.com/in/shozabmehdi/", label: "LinkedIn", icon: Linkedin },
  { href: "mailto:shozabb.work@gmail.com", label: "Email", icon: Mail },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-sm">
      <div className="mx-auto flex max-w-4xl items-center gap-4 px-6 py-5">
        <Link
          href="/"
          className="shrink-0 whitespace-nowrap text-left text-base font-semibold tracking-tight text-foreground hover:opacity-80"
          onClick={() => setMobileOpen(false)}
        >
          Shozab Mehdi
        </Link>

        <nav
          className="ml-auto hidden items-center justify-end whitespace-nowrap text-sm text-muted-foreground md:flex"
          aria-label="Primary"
        >
          {navigation.map((item, i) => (
            <span key={item.href} className="flex items-center">
              {i > 0 && <span className="mx-1.5 select-none text-border">/</span>}
              {item.external ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Resume (opens in Google Drive)"
                  className="rounded px-1 py-0.5 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  href={item.href}
                  className="rounded px-1 py-0.5 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {item.name}
                </Link>
              )}
            </span>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-1 border-l border-border pl-3 lg:flex">
          {social.map(({ href, label, icon: Icon }) => (
            <a
              key={href}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="rounded p-1.5 text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Icon className="h-4 w-4" strokeWidth={1.5} />
            </a>
          ))}
        </div>

        <button
          type="button"
          className="ml-auto rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground md:hidden"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border/60 bg-background px-6 py-4 md:hidden">
          <div className="flex flex-col gap-3 text-sm">
            {navigation.map((item) => (
              item.external ? (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Resume (opens in Google Drive)"
                  onClick={() => setMobileOpen(false)}
                  className="text-left text-muted-foreground hover:text-foreground"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-left text-muted-foreground hover:text-foreground"
                >
                  {item.name}
                </Link>
              )
            ))}
            <div className="flex gap-2 pt-2">
              {social.map(({ href, label, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="rounded p-2 text-muted-foreground hover:bg-muted hover:text-foreground"
                >
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
