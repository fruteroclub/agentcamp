import { Card, CardContent } from "@/components/ui/card"
import { Section } from "../layout/section"
import { CheckCircle } from "lucide-react"
import { Button } from "../ui/button"

export function PricingSection() {
  const features = [
    "6 sesiones",
    "Certificación NFT",
    "Acceso a Recursos Educativos",
    "Soporte comunitario"
  ]

  return (
    <Section>
      <div className="text-center space-y-4 mb-8">
        <h2 className="text-3xl md:text-4xl font-bold">
          Precios
        </h2>
      </div>

      <div className="w-full md:max-w-sm mx-auto">
        <Card className="w-full">
          <CardContent className="pt-6 w-full">
            <div className="text-center">
              <div className="space-y-2">
                <p className="text-2xl font-semibold">
                  Precio Público General: <br /><span className="text-primary">$50 USD</span>
                </p>
                <p className="text-2xl font-semibold">
                  Precio Referidos: <br /><span className="text-primary">$25 USD</span>
                </p>
              </div>

              <div className="space-y-2 pt-6">
                <p className="font-medium text-lg mb-4">Incluye:</p>
                <ul className="space-y-4">
                  {features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8 flex justify-center">
                <Button>¡Inscríbete ya!</Button></div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Section>
  )
}
