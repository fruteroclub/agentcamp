import { Button } from "@/components/ui/button"
import { Section } from "../layout/section"

export function HeroSection() {
  return (
    <Section className="text-center space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
          De Cero a Agente en 3 Semanas
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-[42rem] mx-auto">
          Aprende a construir, entrenar y monetizar agentes de IA en un programa intensivo respaldado por expertos
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Button size="lg" className="text-lg px-8">
          Inscríbete Ahora
        </Button>
      </div>

      <div className="pt-8 space-y-8">
        <p className="text-muted-foreground">
          Inicio: 13 de enero 2024 | Cupos limitados
        </p>
        <Button size="sm" variant="outline" className="text-base px-8">
          Conoce el Programa
        </Button>
      </div>
    </Section>
  )
} 