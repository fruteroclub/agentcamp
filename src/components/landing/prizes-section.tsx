import { Trophy } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Section } from "../layout/section"

export function PrizesSection() {
  const prizes = [
    {
      title: "Primer Lugar",
      prize: "$5,000 USD",
      perks: ["Mentoría VIP", "Acceso a inversores", "Créditos en la nube"]
    },
    {
      title: "Segundo Lugar",
      prize: "$3,000 USD",
      perks: ["Mentoría", "Créditos en la nube"]
    },
    {
      title: "Tercer Lugar",
      prize: "$2,000 USD",
      perks: ["Créditos en la nube"]
    }
  ]

  return (
    <Section className="bg-muted/50">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Premios y Reconocimientos
        </h2>
        <p className="text-xl text-muted-foreground">
          Más de $10,000 USD en premios
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