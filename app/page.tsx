import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ExpertiseSection } from "@/components/expertise-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ExpertiseSection />
      <NewsletterSection />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
