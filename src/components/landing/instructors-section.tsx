import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Section } from "../layout/section"

export function InstructorsSection() {
  const instructors = [
    {
      name: "Ana García",
      role: "AI Research Lead",
      company: "OpenAI",
      image: "/team/ana.jpg",
      bio: "Experta en LLMs y desarrollo de agentes inteligentes"
    },
    {
      name: "Carlos Ruiz",
      role: "Tech Lead",
      company: "Anthropic",
      image: "/team/carlos.jpg",
      bio: "Especialista en arquitectura de sistemas AI"
    }
  ]

  return (
    <Section>
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Instructores
        </h2>
        <p className="text-xl text-muted-foreground">
          Aprende de expertos en la industria
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {instructors.map((instructor) => (
          <Card key={instructor.name}>
            <CardContent className="pt-6">
              <div className="flex gap-6">
                <Image
                  src={instructor.image}
                  alt={instructor.name}
                  width={80}
                  height={80}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-semibold text-lg">{instructor.name}</h3>
                  <p className="text-primary">
                    {instructor.role} @ {instructor.company}
                  </p>
                  <p className="text-muted-foreground mt-2">
                    {instructor.bio}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  )
} 