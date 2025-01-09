import { Button } from "@/components/ui/button"
import { Section } from "../layout/section"

export function HeroSection() {
  return (
    <Section className="text-center space-y-8">
      <div className="space-y-4">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tighter">
          De Cero a Agente <br />en 3 Semanas
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-[42rem] mx-auto">
          Desde los fundamentos hasta la implementación<br />
          <span className="text-secondary">Todo lo que necesitas para</span><br /><span className="text-secondary text-2xl font-bold">triunfar en IA</span>
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Button size="lg" className="text-lg px-8">
          Inscríbete Ahora
        </Button>
      </div>
      <div className="space-y-8">
        <p className="text-secondary text-xl font-medium">
          Inicio: 13 de enero 2025 <br /> <span className="text-primary font-bold">Cupos limitados</span>
        </p>
      </div>
    </Section>
  )
} 