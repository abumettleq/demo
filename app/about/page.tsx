import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AboutPage() {
  const skills = ["React", "TypeScript", "Next.js", "Tailwind CSS", "Node.js", "Python", "PostgreSQL", "AWS"]

  const team = [
    {
      name: "Alex Johnson",
      role: "Frontend Developer",
      bio: "Passionate about creating beautiful user interfaces and seamless user experiences.",
    },
    {
      name: "Sarah Chen",
      role: "Backend Developer",
      bio: "Expert in building scalable APIs and database architecture.",
    },
    {
      name: "Mike Rodriguez",
      role: "UI/UX Designer",
      bio: "Focused on user-centered design and creating intuitive digital experiences.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're a passionate team of developers and designers creating amazing digital experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                We believe in the power of technology to transform businesses and improve lives. Our mission is to
                create innovative solutions that are not only functional but also beautiful and user-friendly.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Innovation and creativity in everything we do</li>
                <li>• Quality and attention to detail</li>
                <li>• Collaboration and open communication</li>
                <li>• Continuous learning and improvement</li>
              </ul>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-center">Our Skills</h2>
            <div className="flex flex-wrap gap-2 justify-center">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-8 text-center">Meet the Team</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {team.map((member) => (
                <Card key={member.name}>
                  <CardHeader>
                    <CardTitle>{member.name}</CardTitle>
                    <CardDescription>{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
