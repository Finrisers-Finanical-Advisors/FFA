'use client'

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { motion, Variants } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CheckCircle, Award, Users, Globe } from "lucide-react"

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom, duration: 0.6, ease: "easeOut" },
  }),
}

export default function CareersPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
     <section className="pt-40 pb-20 bg-gradient-to-b from-secondary to-background">
  <div className="container mx-auto px-4">
    <div className="text-center max-w-5xl mx-auto">
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-[#4a1d12] mt-4 uppercase tracking-tight"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        custom={0.5}
      >
        Please Send in Your Resume
      </motion.h1>

      <motion.p
        className="mt-4 text-gray-800 text-xl font-light leading-relaxed max-w-3xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        custom={0.8}
      >
        Student & Experienced Professionals are Welcomed.
      </motion.p>

      <motion.p
        className="mt-2 text-gray-800 text-lg font-light max-w-3xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        custom={1}
      >
        Let us connect:{" "}
        <a
          href="mailto:careers@finrisers.com"
          className="font-semibold text-primary underline hover:text-primary/80"
        >
          careers@finrisers.com
        </a>
      </motion.p>

      {/* Image below the text */}
      <motion.div
        className="mt-8 flex justify-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}
      >
        <img
          src="/images/career.jpeg"
          alt="Careers at Finrisers"
          className="w-full max-w-3xl rounded-xl shadow-lg"
        />
      </motion.div>
    </div>
  </div>
</section>

      <Footer />
      <ScrollToTop />
    </main>
  )
}