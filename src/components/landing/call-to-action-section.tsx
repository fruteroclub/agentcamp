import { Button } from "@/components/ui/button"
import { Section } from "../layout/section"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function CallToActionSection() {
  return (
    <Section className="">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            ¿Listo para construir el futuro con IA?
          </h2>
          <p className="text-xl text-muted-foreground">
            Únete a una comunidad de builders y expertos.<br />
            Comienza tu viaje en el desarrollo de agentes IA.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="https://lu.ma/6rl9wlja" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="text-lg px-8 group">
              Inscríbete Ahora
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <div className="space-y-2 pt-4">
          <p className="text-primary font-medium">
            Inicio: 13 de enero 2025
          </p>
          <p className="text-sm text-muted-foreground">
            ¡Cupos limitados! Asegura tu lugar hoy.
          </p>
        </div>
      </div>
    </Section>
  )
} 