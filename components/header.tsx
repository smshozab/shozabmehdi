"use client"

import { useState } from "react"
import Link from "next/link"
import { Github, Linkedin, Mail, Menu, X } from "lucide-react"

const navigation = [
  { name: "about", href: "/about" },
  { name: "profile", href: "/profile" },
  { name: "achievements", href: "/achievements" },
  { name: "research", href: "/research" },
  { name: "contact", href: "/contact" },
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
      <div className="mx-auto flex max-w-2xl items-center justify-between gap-4 px-6 py-5">
        <Link
          href="/"
          className="text-left text-base font-semibold tracking-tight text-foreground hover:opacity-80"
          onClick={() => setMobileOpen(false)}
        >
          Shozab Mehdi
        </Link>

        <nav
          className="hidden max-w-[min(100%,28rem)] flex-wrap items-center justify-end gap-x-0 gap-y-1 text-sm text-muted-foreground md:flex lg:max-w-none"
          aria-label="Primary"
        >
          {navigation.map((item, i) => (
            <span key={item.href} className="flex items-center">
              {i > 0 && <span className="mx-1.5 select-none text-border">/</span>}
              <Link
                href={item.href}
                className="rounded px-1 py-0.5 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {item.name}
              </Link>
            </span>
          ))}
          <span className="mx-3 hidden h-4 w-px shrink-0 bg-border lg:inline-block" aria-hidden />
          <div className="hidden items-center gap-1 lg:flex">
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
        </nav>

        <button
          type="button"
          className="rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground md:hidden"
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
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-left text-muted-foreground hover:text-foreground"
              >
                {item.name}
              </Link>
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
