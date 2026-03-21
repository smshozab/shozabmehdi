import { ThemeToggle } from "@/components/theme-toggle"

export default function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto flex max-w-2xl flex-col gap-4 px-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} | Shozab Mehdi</p>
        <ThemeToggle />
      </div>
    </footer>
  )
}
