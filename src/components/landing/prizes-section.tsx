import { Trophy } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Section } from "../layout/section"

export function PrizesSection() {
  const prizes = [
    {
      title: "Dabl Club Track",
      prize: "$500 USD",
      perks: ["Track técnico", "Integración Polygon", "Creación de Agente con cualquier Framework"]
    },
    {
      title: "Frutero Club Track",
      prize: "$500 USD",
      perks: ["Track técnico", "Creación de Agente con Eliza", "Herramientas IA Comunitarias"]
    },
    {
      title: "AI Tools Track",
      prize: "$250 USD",
      perks: ["Track abierto", "Desarrollo de Asistentes IA (ChatGPT/Claude)", "Ejecución de Tareas con IA"]
    }
  ]

  return (
    <Section className="bg-muted/50">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Premios y Reconocimientos
        </h2>
        <p className="text-xl text-muted-foreground">
          Más de $1,000 USD en premios
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {prizes.map((prize) => (
          <Card key={prize.title}>
            <CardContent className="pt-6">
              <div className="text-center mb-6">
                <Trophy className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-2xl font-bold">{prize.title}</h3>
                <div className="text-xl font-semibold text-primary mt-2">
                  {prize.prize}
                </div>
              </div>
              <ul className="space-y-2">
                {prize.perks.map((perk) => (
                  <li key={perk} className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    {perk}
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