import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, CalendarDays, MapPin } from "lucide-react"

export default function Education() {
  return (
    <section id="education" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Education</h2>
          <p className="text-lg text-muted-foreground">Academic background and achievements in Computer Science.</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl mb-2">BS in Computer Science</CardTitle>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                    <span className="font-medium">FAST National University</span>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        Karachi, Pakistan
                      </div>
                      <div className="flex items-center gap-1">
                        <CalendarDays className="h-4 w-4" />
                        2022 – 2026
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Leadership & Activities</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Dev Deputy at ACM (Association for Computing Machinery)</li>
                    <li>• Tech Lead at GDSC (Google Developer Student Clubs)</li>
                    <li>• Web Dev Lead at Hackops</li>
                    <li>• Active participant in inter- and intra-university competitions</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Relevant Coursework</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm text-muted-foreground">
                    <span>• Linear Algebra</span>
                    <span>• Probability & Statistics</span>
                    <span>• Database Systems</span>
                    <span>• Algorithms</span>
                    <span>• Operating Systems</span>
                    <span>• Data Structures</span>
                    <span>• Object-Oriented Programming</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Academic Achievements</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Dean's List Spring 2024</li>
                    <li>• ICPC Finalist 2024</li>
                    <li>• Built university society website for Hackops</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
