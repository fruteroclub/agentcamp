import { CheckCircle } from "lucide-react"
import { Section } from "../layout/section"

export function BenefitsSection() {
  const benefits = [
    {
      title: "Mentoría Personalizada",
      description: "Acceso directo a expertos en IA y emprendimiento"
    },
    {
      title: "Recursos Premium",
      description: "Acceso a herramientas, APIs y créditos valorados en más de $5,000 USD"
    },
    {
      title: "Comunidad Activa",
      description: "Conecta con otros builders y forma parte del ecosistema"
    },
    {
      title: "Aprendizaje Práctico",
      description: "Construye mientras aprendes con proyectos reales"
    },
    {
      title: "Certificación",
      description: "Obtén un certificado avalado por la industria"
    },
    {
      title: "Premios",
      description: "Compite por más de $10,000 USD en premios"
    }
  ]

  return (
    <Section>
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Beneficios del Programa
        </h2>
        <p className="text-xl text-muted-foreground">
          Todo lo que necesitas para tener éxito
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {benefits.map((benefit) => (
          <div key={benefit.title} className="flex gap-4">
            <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
} 