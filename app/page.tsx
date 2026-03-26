import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { ValuePropsSection } from "@/components/value-props-section"
import { AboutSection } from "@/components/about-section"
import { ExpertiseSection } from "@/components/expertise-section"
// import { LocationsSection } from "@/components/locations-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <ValuePropsSection />
      <AboutSection />
      <ExpertiseSection />
      {/* <LocationsSection /> */}
      <NewsletterSection />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
