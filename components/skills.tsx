import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Globe, Cpu } from "lucide-react"

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code className="h-5 w-5" />,
    skills: ["C", "C++", "Python", "JavaScript", "TypeScript"],
  },
  {
    title: "Frameworks & Libraries",
    icon: <Globe className="h-5 w-5" />,
    skills: ["React.js", "Next.js", "Express.js", "Node.js", "Bootstrap", "Tailwind CSS"],
  },
  {
    title: "Technologies & Tools",
    icon: <Database className="h-5 w-5" />,
    skills: ["MongoDB", "SQL", "Firebase", "Supabase", "Git", "Docker", "Vercel"],
  },
  {
    title: "Data Science & ML",
    icon: <Cpu className="h-5 w-5" />,
    skills: ["NumPy", "Pandas", "Matplotlib", "TensorFlow", "CNN", "Machine Learning"],
  },
  {
    title: "Specialized Technologies",
    icon: <Globe className="h-5 w-5" />,
    skills: ["Blockchain", "Web3", "WebRTC", "IoT", "OAuth", "RESTful APIs"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-lg text-muted-foreground">
            A comprehensive toolkit for full-stack development and emerging technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  {category.icon}
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
