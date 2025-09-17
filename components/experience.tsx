import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Contractual Software Developer",
    company: "FarmTriage",
    location: "Remote",
    duration: "Jan 2025 – Jun 2025",
    description: [
      "Designed and developed a landing page for the startup showcasing the product and enabling customers to contact the team.",
      "Architected and initiated a comprehensive agricultural workforce management platform as a solo developer using the MERN Stack (MongoDB, Express.js, React, Node.js) with TypeScript for enhanced type safety and scalability.",
      // "Engineered a sophisticated farmers workforce management system integrated with Monday.com API, implementing RESTful services and real-time data synchronization for optimized resource allocation and task scheduling.",
      "Built an intelligent Google Sheets automation solution using Zapier webhooks and custom JavaScript functions, reducing manual data entry by 85% and improving operational efficiency through automated workflow orchestration.",
    ],
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Express.js",
      "TypeScript",
      // "Monday.com API",
      "Zapier",
      "Google Sheets API",
      "RESTful APIs",
      "Webhooks",
    ],
  },
  {
    title: "Teaching Assistant - Data Structures",
    company: "FAST National University",
    location: "Karachi, Pakistan",
    duration: "Aug 2024 – Dec 2024",
    description: [
      "Facilitated advanced data structures and algorithms coursework for 50+ undergraduate students, covering complex topics including AVL trees, graph algorithms, dynamic programming, and computational complexity analysis.",
      "Developed comprehensive coding assignments and generated a script using Python to export marks from excel to Google Classroom, enabling efficient scoring and marking easiness.",
      "Conducted weekly sessions focusing on practical implementation of data structures, debugging techniques, and code optimization strategies, resulting in a 25% improvement in student performance metrics.",
    ],
    technologies: [
      "C++",
      "Python",
      "Data Structures",
      "Algorithms",
      "Git",
      "Unit Testing",
      "Performance Analysis",
      "Code Review",
    ],
  },
  {
    title: "Tech Advisor & Branding Consultant",
    company: "Executive Council Network",
    location: "Remote",
    duration: "May 2023 – Dec 2023",
    description: [
      "Spearheaded comprehensive UI/UX optimization initiatives, implementing responsive design patterns and accessibility standards (WCAG 2.1) to enhance user engagement and cross-platform compatibility.",
      "Architected modern web solutions using cutting-edge frontend technologies including React.js with hooks, Semantic UI components, and Tailwind CSS utility-first framework for rapid prototyping and consistent design systems.",
      "Developed scalable backend infrastructure using Node.js with Express framework, implementing JWT authentication, rate limiting, and API versioning strategies to ensure robust and secure application architecture.",
    ],
    technologies: [
      "React.js",
      "Node.js",
      "Semantic UI",
      "Tailwind CSS",
      "Express.js",
      "JWT",
      "REST APIs",
      "Responsive Design",
      "UX/UI Design",
      "Git",
    ],
  },
  {
    title: "Web Developer (Freelance)",
    company: "Upwork",
    location: "Remote",
    duration: "Sep 2022 – Jul 2023",
    description: [
      "Delivered full-stack web applications for diverse clients using modern JavaScript frameworks including React.js, Vue.js, etc, with backend implementations in Node.js, Python Flask.",
      "Implemented comprehensive database solutions using both SQL (PostgreSQL, MySQL) and NoSQL (MongoDB, Firebase, Supabase) databases, optimizing query performance and implementing proper indexing strategies for scalable data management.",
      "Integrated third-party APIs, implemented OAuth authentication systems, and deployed applications on cloud platforms (Vercel, Heroku) with CI/CD pipelines using GitHub Actions.",
    ],
    technologies: [
      "React.js",
      "Vue.js",
      // "Angular",
      "Node.js",
      "Python",
      "Flask",
      // "Laravel",
      "PostgreSQL",
      "MongoDB",
      // "AWS",
      // "Stripe API",
      "OAuth",
      "CI/CD",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company: "Pixact",
    location: "Onsite",
    duration: "Nov 2022 – Aug 2023",
    description: [
      "Developed 5+ production-ready web applications using the MERN Stack (MongoDB, Express.js, React, Node.js) and implemented SQL database solutions with optimized query performance and proper normalization techniques.",
      "Collaborated on an innovative Web3 gaming platform, implementing hashing integration with IS algorithms, resolving complex authentication challenges with third-party OAuth providers, and ensuring secure user data management.",
      "Implemented responsive frontend designs using modern CSS frameworks, integrated RESTful APIs, and deployed applications with proper error handling, logging, and monitoring systems for production environments.",
    ],
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Express.js",
      "SQL",
      "Web3",
      "OAuth",
      "Smart Contracts",
      "RESTful APIs",
      "Responsive Design",
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Work Experience</h2>
          <p className="text-lg text-muted-foreground">
            Professional experience in full-stack development and emerging technologies.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <Card key={index} className="mb-6">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <CardTitle className="text-xl">{exp.title}</CardTitle>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CalendarDays className="h-4 w-4" />
                    {exp.duration}
                  </div>
                </div>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <span className="font-medium">{exp.company}</span>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {exp.location}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-muted-foreground">
                      • {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
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
