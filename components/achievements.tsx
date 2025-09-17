import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Award, Star, Crown, Zap, Target } from "lucide-react"

const achievements = [
  {
    year: "2025",
    items: [
      "Winner – National AI Competition AiTec'25, NCP",
      "Winner - Anryton Blockchain NIC Hackathon",
      "Winner - Asani.io Hackathon",
      "Tech Lead - Google Developer Student Clubs (GDSC)",
    ],
  },
  {
    year: "2024",
    items: [
      "ICPC Finalist",
      "Top 10 - lablab.ai llama Hackathon",
      "Winner - FDSS Data Visualization Competition",
      "Dean's List Spring 2024",
      "Finalist - AITEC NCP",
      "National Finalist - Fasset Blockchain Competition",
    ],
  },
  {
    year: "2023",
    items: ["Rising Talent - Upwork", "Finalist - Speed Coding Competition", "Finalist - ACM Coders Cup"],
  },
  {
    year: "2018",
    items: ["Finalist - Google Code-In"],
  },
]

const getIcon = (achievement: string) => {
  if (achievement.toLowerCase().includes("winner")) {
    return <Trophy className="h-6 w-6 text-yellow-500" />
  } else if (achievement.toLowerCase().includes("finalist")) {
    return <Award className="h-6 w-6 text-blue-500" />
  } else if (achievement.toLowerCase().includes("top")) {
    return <Crown className="h-6 w-6 text-purple-500" />
  } else if (achievement.toLowerCase().includes("lead")) {
    return <Target className="h-6 w-6 text-green-500" />
  } else {
    return <Star className="h-6 w-6 text-orange-500" />
  }
}

const getBadgeVariant = (achievement: string) => {
  if (achievement.toLowerCase().includes("winner")) {
    return "default"
  } else if (achievement.toLowerCase().includes("finalist")) {
    return "secondary"
  } else {
    return "outline"
  }
}

const getGradient = (achievement: string) => {
  if (achievement.toLowerCase().includes("winner")) {
    return "from-yellow-500/20 to-orange-500/20"
  } else if (achievement.toLowerCase().includes("finalist")) {
    return "from-blue-500/20 to-purple-500/20"
  } else if (achievement.toLowerCase().includes("top")) {
    return "from-purple-500/20 to-pink-500/20"
  } else {
    return "from-green-500/20 to-teal-500/20"
  }
}

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 gradient-bg relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse animation-delay-300"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black mb-6 heading-gradient">Achievements & Awards</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Recognition for excellence in hackathons, competitions, and academic performance.
          </p>
          <div className="section-divider"></div>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {achievements.map((yearGroup, yearIndex) => (
            <Card
              key={yearGroup.year}
              className={`card-hover shadow-2xl border-0 animate-fade-in-up`}
              style={{ animationDelay: `${yearIndex * 0.2}s` }}
            >
              <CardHeader className="bg-gradient-to-r from-primary/10 via-accent/10 to-destructive/10">
                <CardTitle className="text-2xl flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Zap className="w-6 h-6 text-primary" />
                    <Badge
                      variant="outline"
                      className="text-xl px-4 py-2 font-bold bg-gradient-to-r from-primary to-accent text-white border-0"
                    >
                      {yearGroup.year}
                    </Badge>
                  </div>
                  <div className="text-sm text-muted-foreground font-normal">
                    {yearGroup.items.length} Achievement{yearGroup.items.length > 1 ? "s" : ""}
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid gap-4">
                  {yearGroup.items.map((achievement, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r ${getGradient(achievement)} border border-border/50 card-hover animate-fade-in-right`}
                      style={{ animationDelay: `${yearIndex * 0.2 + index * 0.1}s` }}
                    >
                      <div className="flex-shrink-0">{getIcon(achievement)}</div>
                      <span className="flex-1 font-medium text-lg">{achievement}</span>
                      <Badge variant={getBadgeVariant(achievement)} className="text-xs font-semibold pulse-badge">
                        {achievement.toLowerCase().includes("winner")
                          ? "🏆 Winner"
                          : achievement.toLowerCase().includes("finalist")
                            ? "🥈 Finalist"
                            : achievement.toLowerCase().includes("top")
                              ? "⭐ Top Performer"
                              : "🎯 Achievement"}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats summary */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "15+", label: "Total Awards", color: "from-yellow-500 to-orange-500" },
            { number: "5", label: "Hackathon Wins", color: "from-blue-500 to-purple-500" },
            { number: "3", label: "Leadership Roles", color: "from-green-500 to-teal-500" },
            { number: "7", label: "Years Active", color: "from-pink-500 to-red-500" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center p-6 rounded-2xl bg-gradient-to-br ${stat.color} text-white card-hover animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl font-black mb-2">{stat.number}</div>
              <div className="text-sm font-medium opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
