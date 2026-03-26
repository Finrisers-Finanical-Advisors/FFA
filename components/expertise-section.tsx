"use client"

import { motion, easeOut } from "framer-motion"

export function ExpertiseSection() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          className="text-center space-y-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground uppercase tracking-tight">
            At Finrisers Consulting, we are experts in all of these areas and more.
          </h2>

          <motion.p
            className="text-muted-foreground text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.7, ease: easeOut } }}
            viewport={{ once: true }}
          >
            As a financial and business consultancy incorporated under the laws of the USA,
            we have the experience and knowledge to provide comprehensive support and real
            solutions for your business's success. Contact us today to get started.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}