'use client'

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, Variants, easeOut } from "framer-motion"

const services = [
  {
    image: "/images/AFT.jpg", 
    title: "Accounting/Finance/Taxation",
    description: "Includes bookkeeping, day to day controller ship activities, month end accrual and closing, preparation of financial statements, financial reporting, CFO services, tax management (preparation of tax returns and successful submission).",
  },
  {
    image: "/images/management.jpg",
    title: "Management Control",
    description: "Includes management reporting, budgets, forecast, financial planning and analysis, cash flow management and planning amongst others.",
  },
  {
    image: "/images/BSP.jpg",
    title: "Business Strategy and Planning",
    description: "Includes preparation of business plans, strategy formation, business planning, provide help for successful execution of business strategies and plans.",
  },
]

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOut },
  },
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section id="services-hero" className="relative min-h-screen flex items-center pt-32 pb-20">
        <div
          className="absolute inset-0 bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/servicebg.jpg')" }}
        />
      </section>

      <motion.div
        className="container mx-auto px-4 py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto mb-16">
          <h1 className="text-2xl md:text-4xl font-extrabold text-[#4a1d12] uppercase tracking-tight leading-tight">
            We have your back, <br />
            Right from bookkeeping to tax management.
          </h1>

          <p className="mt-8 text-gray-700 text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
            Whether it is management reporting, financial planning, month-end accrual and closing, 
            preparation of financial statements, financial reporting, or CFO services we have it 
            tailored as per your needs.
          </p>

          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.8, ease: easeOut } }}
          >
            <Button 
              size="lg" 
              className="bg-primary/90 hover:bg-white text-white hover:text-primary/90 p-0 rounded-none overflow-hidden flex items-center h-14 transition-all group shadow-sm"
            >
              <div className="bg-black h-full px-4 flex items-center justify-center">
                <ArrowUpRight className="w-5 h-5 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
              <span className="px-10 font-semibold text-sm md:text-base">
                Let's Talk!
              </span>
            </Button>
          </motion.div>
        </div>
      </motion.div>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="flex flex-col"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0, transition: { delay: index * 0.2, duration: 0.8, ease: easeOut } }
                }}
              >
                <div className="aspect-[4/3] overflow-hidden mb-8 rounded-lg shadow-lg hover:scale-105 transition-transform duration-500">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4 leading-tight">
                  {service.title}
                </h3>
                
                <p className="text-[#4a4a4a] text-base leading-relaxed font-light">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white border-y border-gray-100">
        <div className="flex flex-col md:flex-row items-center w-full">
          <motion.div
            className="w-full md:w-1/2 h-[400px] md:h-[600px] overflow-hidden rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8, ease: easeOut } }}
            viewport={{ once: true }}
          >
            <img 
              src="/images/LBP.jpg"
              alt="Person using laptop"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 p-8 md:p-20 flex flex-col justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8, ease: easeOut } }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#4a1d12] uppercase tracking-tight mb-6">
              Latest Blog Posts
            </h2>
            
            <p className="text-gray-700 text-lg leading-relaxed mb-10 max-w-xl font-light">
              Keep yourself updated with the latest news and blogs by Finrisers Consulting 
              (CPA Professional Corporation) that you can count on from tax management 
              to financial consultancy for your business-related query.
            </p>

            <div className="flex justify-start">
              <Button 
                size="lg" 
                className="bg-primary/90 hover:bg-white text-white hover:text-primary/90 p-0 rounded-none overflow-hidden flex items-center h-14 transition-all group shadow-sm"
              >
                <div className="bg-black h-full px-4 flex items-center justify-center">
                  <ArrowUpRight className="w-5 h-5 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <span className="px-10 font-semibold text-sm md:text-base">
                  View All Posts
                </span>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <motion.section 
        className="py-20 bg-primary text-primary-foreground"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg mb-8 opacity-90">
            Schedule a free consultation with our team to discuss how we can help your business succeed.
          </p>
          <Button size="lg" variant="secondary" className="bg-primary-foreground hover:bg-primary-foreground/90 text-primary">
            Schedule Consultation
          </Button>
        </div>
      </motion.section>

      <Footer />
      <ScrollToTop />
    </main>
  )
}