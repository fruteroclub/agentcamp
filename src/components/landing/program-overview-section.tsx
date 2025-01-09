import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Section } from "../layout/section"
import { CheckCircle } from "lucide-react"

export function ProgramOverviewSection() {
  const tracks = [
    {
      title: "Experiencia Completa Agentcamp",
      features: [
        "Bootcamp intensivo de 3 semanas",
        "Aprendizaje y desarrollo estructurado",
        "Mentoría directa y soporte técnico",
        "Inmersión profunda en desarrollo de agentes",
        "Preparación para hackathon ETHGlobal"
      ]
    },
    {
      title: "AI Buildathon Abierto",
      features: [
        "Abierto a todos los niveles de experiencia",
        "Sin requisitos técnicos previos",
        "Construye cualquier herramienta con IA",
        "Usa cualquier plataforma (ChatGPT, Claude, etc.)",
        "Enfoque en creatividad y aplicaciones prácticas"
      ]
    }
  ]

  return (
    <Section>
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold ">
          Dos Tracks. <span className="text-primary font-bold">Un Objetivo.</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-[42rem] mx-auto">
          Elige tu camino según tus objetivos y disponibilidad. Ambas modalidades culminan en la presentación final y premiación.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto pt-4">
        {tracks.map((track) => (
          <Card key={track.title} className="relative overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl">{track.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {track.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  )
} 