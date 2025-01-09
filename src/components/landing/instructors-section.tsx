import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Section } from "../layout/section"

export function InstructorsSection() {
  const instructors = [
    {
      name: "Frida Ruh",
      role: "Especialista IA",
      company: "AI The New Sexy | Wavy Node",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQEyFQtj1zzENw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1724877818200?e=1741824000&v=beta&t=rh3FvOaTS2-JYgzWAZuai22ybsOBwOiskg071yMda80",
      bio: "Experta en LLMs, datos y desarrollo de soluciones IA"
    },
    {
      name: "mel troopdegen",
      role: "Onchain Builder | DevRel",
      company: "Dabl Club | $REGEN",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQEPXFbyrHCFCg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1711748933909?e=1741824000&v=beta&t=PyxegvtfFZhUaxxci78AIZKgUljLSJfO9J38A2BSzSc",
      bio: "Ing. Biomédico convertido en desarrollador de soluciones Onchain + IA"
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
              <div className="flex gap-2 grid grid-cols-3">
                <div className="col-span-1 flex items-center justify-center md:px-2 lg:px-4">
                  <Image
                    src={instructor.image}
                    alt={instructor.name}
                    width={80}
                    height={80}
                    className="rounded-full aspect-square w-full"
                  />
                </div>
                <div className="col-span-2 space-y-2">
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