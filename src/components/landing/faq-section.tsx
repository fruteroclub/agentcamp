import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Section } from "../layout/section"

export function FAQSection() {
  const faqs = [
    {
      question: "¿Necesito experiencia previa en IA?",
      answer: "No es necesario tener experiencia previa en IA, pero se recomienda tener conocimientos básicos de programación."
    },
    {
      question: "¿Cuál es el formato del programa?",
      answer: "El programa es 100% online con sesiones en vivo, proyectos prácticos y mentoría personalizada."
    },
    {
      question: "¿Qué incluye la inscripción?",
      answer: "Acceso a todas las sesiones, materiales, mentorías, comunidad y recursos de partners valorados en más de $5,000 USD."
    },
    {
      question: "¿Hay opciones de financiamiento?",
      answer: "Sí, ofrecemos planes de pago flexibles y becas para casos seleccionados."
    }
  ]

  return (
    <Section id="faq" className="bg-muted/50">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Preguntas Frecuentes
        </h2>
        <p className="text-xl text-muted-foreground">
          Todo lo que necesitas saber
        </p>
      </div>

      <div className="w-full md:max-w-3xl mx-auto">
        <Accordion type="single" collapsible>
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg">{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  )
} 