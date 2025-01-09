import { BenefitsSection } from "@/components/landing/benefits-section"
import { CallToActionSection } from "@/components/landing/call-to-action-section"
import { CurriculumSection } from "@/components/landing/curriculum-section"
import { FAQSection } from "@/components/landing/faq-section"
import { HeroSection } from "@/components/landing/hero-section"
import { InstructorsSection } from "@/components/landing/instructors-section"
import { PartnersSection } from "@/components/landing/partners-section"
import { PricingSection } from "@/components/landing/pricing-section"
import { PrizesSection } from "@/components/landing/prizes-section"
import { ProgramOverviewSection } from "@/components/landing/program-overview-section"
import PageWithAppbar from "@/components/layout/pageWithAppbar"

export default function Home() {
  return (
    <PageWithAppbar>
      <div className="page pt-16 md:pt-24">
        <HeroSection />
        <ProgramOverviewSection />
        <PricingSection />
        <CurriculumSection />
        <BenefitsSection />
        <PrizesSection />
        <PartnersSection />
        <InstructorsSection />
        <FAQSection />
        <CallToActionSection />
      </div>
    </PageWithAppbar>
  )
}
