import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Palette, Smartphone, Zap, Shield, Globe, Heart } from "lucide-react"

const features = [
  {
    icon: Palette,
    title: "Beautiful Design",
    description: "Carefully crafted interfaces with attention to every detail and modern aesthetics.",
  },
  {
    icon: Smartphone,
    title: "Fully Responsive",
    description: "Perfect experience across all devices, from mobile phones to desktop computers.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance with fast loading times and smooth interactions.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Built with security best practices and reliable infrastructure.",
  },
  {
    icon: Globe,
    title: "Global Ready",
    description: "Internationalization support with multiple languages and regions.",
  },
  {
    icon: Heart,
    title: "Made with Love",
    description: "Every pixel is crafted with passion and dedication to excellence.",
  },
]

export function Features() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose Our Platform?</h2>
          <p className="text-lg text-muted-foreground">
            We combine cutting-edge technology with thoughtful design to deliver exceptional digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <Card key={feature.title} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
