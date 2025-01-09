import { Card, CardContent } from "@/components/ui/card"
import { Section } from "../layout/section"

export function CurriculumSection() {
  const weeks = [
    {
      title: "Semana 1: Ideathon",
      subtitle: "Fundamentos y Herramientas",
      topics: [
        "Fundamentos de LLMs y arquitecturas",
        "Ecosistema de herramientas IA y Agentes",
        "Frameworks para desarrollo",
        "Desarrollo de idea de proyecto"
      ]
    },
    {
      title: "Semana 2: Agentnomics",
      subtitle: "Desarrollo y Monetización",
      topics: [
        "Eliza - cómo funciona",
        "Creación de Agentes",
        "Integraciones y APIs",
        "Tokenomics y modelos de negocio"
      ]
    },
    {
      title: "Semana 3: Buildathon",
      subtitle: "Proyecto Final",
      topics: [
        "Desarrollo avanzado de plugins",
        "Integración blockchain",
        "Optimización y escalabilidad",
        "Demo Day y presentaciones"
      ]
    }
  ]

  return (
    <Section className="bg-muted/50">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Curriculum
        </h2>
        <p className="text-xl text-muted-foreground">
          Un programa intensivo de 3 semanas para dominar el desarrollo de agentes IA
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {weeks.map((week) => (
          <Card key={week.title}>
            <CardContent className="pt-6">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold">{week.title}</h3>
                <p className="text-primary text-lg font-medium">{week.subtitle}</p>
              </div>
              <ul className="space-y-3">
                {week.topics.map((topic) => (
                  <li key={topic} className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    {topic}
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