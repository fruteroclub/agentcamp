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
      question: "¿Qué tracks están disponibles?",
      answer: "Ofrecemos dos tracks: 1) Experiencia Completa Agentcamp - un bootcamp intensivo de 3 semanas con mentoría directa y soporte técnico, y 2) AI Buildathon Abierto - una modalidad flexible sin requisitos técnicos previos."
    },
    {
      question: "¿Necesito experiencia previa en IA?",
      answer: "Para el track AI Buildathon no es necesaria experiencia previa. Para el track Agentcamp, se recomienda tener conocimientos básicos de programación, pero no es obligatorio tener experiencia en IA."
    },
    {
      question: "¿Cuál es el formato del programa?",
      answer: "El programa es 100% online con 3 sesiones semanales: 2 sesiones técnicas y 1 sesión con partners. Incluye workshops prácticos, mentorías personalizadas y trabajo en equipo."
    },
    {
      question: "¿Qué incluye la inscripción?",
      answer: "Incluye acceso a todas las sesiones en vivo, material educativo exclusivo, mentorías, comunidad de desarrollo, certificación NFT y la oportunidad de ganar premios en el buildathon."
    },
    {
      question: "¿Cuáles son los requisitos técnicos?",
      answer: "Necesitarás una computadora con acceso a internet estable. Para el track Agentcamp, conocimientos básicos de programación son recomendados. Para el track AI Buildathon, solo necesitas interés en la tecnología IA."
    },
    {
      question: "¿Qué tipo de proyectos puedo desarrollar?",
      answer: "Puedes desarrollar agentes autónomos, herramientas potenciadas por IA (usando ChatGPT o Claude), o aplicaciones creativas con IA. Los proyectos serán evaluados por su innovación, implementación técnica y utilidad práctica."
    },
    {
      question: "¿Cuál es el compromiso de tiempo?",
      answer: "El programa dura 3 semanas, con 3 sesiones semanales. Se recomienda dedicar al menos 10 horas adicionales por semana para trabajo en el proyecto."
    },
    {
      question: "¿Por qué el costo?",
      answer: "Queremos compromiso de parte de los participantes. El programa es intensivo y requiere dedicación. El costo es una inversión en tu desarrollo profesional y en la comunidad de desarrollo."
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
              <AccordionTrigger className="text-lg text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  )
} 