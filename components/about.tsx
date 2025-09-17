import { Card, CardContent } from "@/components/ui/card"
import { Target, Users, Rocket, Code2, Brain, Zap } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black mb-6 heading-gradient">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate about creating innovative solutions through code and exploring the frontiers of artificial
            intelligence.
          </p>
          <div className="section-divider"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-left">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gradient">My Journey</h3>
              <div className="space-y-4 text-lg leading-relaxed">
                <p className="text-muted-foreground">
                  I'm currently a final-year Computer Science student at{" "}
                  <span className="text-primary font-semibold">FAST National University</span>, where I've been actively
                  engaged in various societies and leadership roles. As{" "}
                  <span className="text-accent font-semibold">Dev Deputy at ACM</span>,{" "}
                  <span className="text-destructive font-semibold">Tech Lead at GDSC</span>, and{" "}
                  <span className="text-primary font-semibold">Web Dev Lead at Hackops</span>, I've had the opportunity
                  to lead teams and work on impactful projects.
                </p>
                <p className="text-muted-foreground">
                  My professional journey began with a Full Stack Developer internship at{" "}
                  <span className="text-accent font-semibold">Pixact</span>, where I developed and delivered 5+ live website projects
                  using the MERN stack and worked on innovative web3 gaming solutions. This experience solidified my
                  passion for full-stack development and introduced me to the exciting world of blockchain technology.
                </p>
                <p className="text-muted-foreground">
                  Currently, I'm working as a Full Stack Developer Intern at 10Pearls and expanding my expertise into{" "}
                  <span className="text-destructive font-semibold">Machine Learning and AI</span>, working on research
                  projects that combine my development skills with data-driven innovation. I believe in the power of
                  technology to solve real-world problems and am always eager to learn and take on new challenges.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6 animate-fade-in-right">
            <Card className="card-hover glow-primary">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-primary to-accent rounded-xl text-white">
                    <Target className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold">Current Focus</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Machine Learning research in smart farming, full-stack development, and AI applications.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover glow-accent">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-accent to-destructive rounded-xl text-white">
                    <Users className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold">Leadership</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Dev Deputy at ACM, Tech Lead at GDSC, Web Dev Lead at Hackops - leading teams and driving innovation.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-destructive to-primary rounded-xl text-white">
                    <Rocket className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold">Goals</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To contribute to cutting-edge AI research while building scalable software solutions that make a
                  difference.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Skills highlight */}
        <div className="mt-20">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Code2 className="w-8 h-8" />,
                label: "Full-Stack Development",
                color: "from-blue-500 to-cyan-500",
              },
              { icon: <Brain className="w-8 h-8" />, label: "Machine Learning", color: "from-purple-500 to-pink-500" },
              { icon: <Zap className="w-8 h-8" />, label: "Blockchain & Web3", color: "from-yellow-500 to-orange-500" },
            ].map((skill, index) => (
              <div
                key={skill.label}
                className={`text-center p-6 rounded-2xl bg-gradient-to-br ${skill.color} text-white card-hover animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex justify-center mb-4">{skill.icon}</div>
                <p className="font-semibold">{skill.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
