'use client'

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { motion, Variants } from "framer-motion"
import type { ReactNode } from "react"

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom, duration: 0.6, ease: "easeOut" },
  }),
}

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string
  updated?: string
  children: ReactNode
}) {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-40 pb-16 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1
              className="text-3xl md:text-4xl font-bold text-[#4a1d12] uppercase tracking-tight"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={0.3}
            >
              {title}
            </motion.h1>
            {updated && (
              <motion.p
                className="mt-4 text-gray-600"
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                custom={0.5}
              >
                Last updated: {updated}
              </motion.p>
            )}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto legal-content text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {children}
          </motion.div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  )
}
