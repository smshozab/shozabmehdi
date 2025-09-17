import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Zap, Brain, Globe, Database, Cpu, Shield } from "lucide-react"

const projects = [
  {
    title: "Field Matrix",
    description:
      "Machine Learning research project working under Dr. Muhammad Farrukh Shahid. Trained CNN model achieving over 85% accuracy in predicting inter-crop distance for smart farming yield optimization.",
    technologies: ["Python", "CNN", "Machine Learning", "Computer Vision"],
    status: "In Progress",
    links: {
      // demo: "#",
      github: "https://github.com/smshozab/FieldMatrix",
    },
    category: "Research",
    icon: <Brain className="w-6 h-6" />,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "BlockTransfer",
    description:
      "Peer-to-peer file sharing application using WebRTC for real-time browser communication and RSA encryption for secure key exchange.",
    technologies: ["WebRTC", "RSA Encryption", "JavaScript", "P2P"],
    year: "2025",
    links: {
      // demo: "#",
      github: "https://github.com/smshozab/blockchain_p2p",
    },
    category: "Web Application",
    icon: <Zap className="w-6 h-6" />,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "ewastify",
    description:
      "E-waste management and automation platform built with Vite React, Express JS, Node JS, MongoDB, and Firebase. Includes live location tracking and path optimization.",
    technologies: ["React", "Vite", "Express.js", "Node.js", "MongoDB", "Firebase", "OpenWeatherMap API"],
    year: "2025",
    links: {
      demo: "https://www.canva.com/design/DAGk2t-MGXI/_yOho9aZWAZhnVhVIDVFZA/view?utm_content=DAGk2t-MGXI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h6c0ac1ed70",
      github: "https://github.com/smshozab/devday",
    },
    category: "Full Stack",
    icon: <Globe className="w-6 h-6" />,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Naiki.pk",
    description:
      "Student Financial Support Platform developed with React.js and Node.js, integrated with Supabase. Fully deployed to production on Vercel with performance testing for 25+ concurrent users.",
    technologies: ["React.js", "Node.js", "Supabase", "Vercel"],
    year: "2025",
    links: {
      demo: "Naiki.pk",
      // github: "#",
    },
    category: "Full Stack",
    icon: <Database className="w-6 h-6" />,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "FAST-StudyCircle",
    description:
      "Full-stack web app (MERN Stack) to match juniors with verified seniors for academic support. Features email confirmation using nodemailer.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "Nodemailer"],
    year: "2024",
    links: {
      demo: "https://drive.google.com/drive/folders/1vmOowlPCljLVST7bI-Ai-ARG_tmD_YY6?usp=sharing",
      github: "https://github.com/smshozab/FAST-StudyCircle",
    },
    category: "Full Stack",
    icon: <Cpu className="w-6 h-6" />,
    color: "from-indigo-500 to-purple-500",
  },
  {
    title: "sahulat.io",
    description:
      "IoT Dashboard with backend logic and automated Python scripts to simulate real-time sensor data and derive quantities from fundamental measurements.",
    technologies: ["Python", "IoT", "Dashboard", "Real-time Data"],
    year: "2024",
    links: {
      demo: "https://asani-hackathon.vercel.app/",
      github: "https://github.com/smshozab/Asani_Hackathon",
    },
    category: "IoT",
    icon: <Zap className="w-6 h-6" />,
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Asset-Sentinel",
    description:
      "Blockchain-based supply chain management system to digitally represent real-world assets as secure, tamper-proof tokens using SHA-2 hashing.",
    technologies: ["Blockchain", "SHA-2", "Smart Contracts", "Supply Chain"],
    year: "2023",
    links: {
      // demo: "#",
      github: "https://github.com/smshozab/Asset-Sentinel",
    },
    category: "Blockchain",
    icon: <Shield className="w-6 h-6" />,
    color: "from-teal-500 to-blue-500",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 gradient-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black mb-6 heading-gradient">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my technical projects spanning web development, machine learning, blockchain, and IoT.
          </p>
          <div className="section-divider"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`h-full flex flex-col card-hover animate-fade-in-up border-0 shadow-xl overflow-hidden`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10`}></div>
                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-2 mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${project.color} text-white shadow-lg`}>
                      {project.icon}
                    </div>
                    <Badge variant="outline" className="text-xs font-mono pulse-badge">
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold mb-2">{project.title}</CardTitle>
                  {(project.year || project.status) && (
                    <p className="text-sm text-muted-foreground font-medium">{project.status || project.year}</p>
                  )}
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col relative">
                <p className="text-muted-foreground mb-6 flex-1 leading-relaxed">{project.description}</p>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className={`text-xs font-mono animate-fade-in-right`}
                        style={{ animationDelay: `${index * 0.1 + techIndex * 0.05}s` }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {project.links.demo && (
                      <Button size="sm" className="btn-animate flex-1 font-medium" asChild>
                        <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-3 w-3 mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
                    {project.links.github && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="btn-animate flex-1 font-medium bg-transparent"
                        asChild
                      >
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-3 w-3 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
