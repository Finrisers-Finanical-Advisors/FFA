"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"
import { motion, easeOut } from "framer-motion"

export function HeroSection() {
  const [formData, setFormData] = useState({ firstName: "", email: "" })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: easeOut }}
      >
        <div className="absolute inset-0 bg-foreground/70" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-card">
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-white text-balance uppercase mb-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: easeOut }}
            >
              FINRISERS CONSULTING – Your Trusted Partner <br className="hidden md:block" />
              for Financial Health and Success
            </motion.h1>

            <motion.p
              className="text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: easeOut }}
            >
              We are your business partners, dedicated to providing reliable and relevant insight about your business's financial health at the right time, managing day-to-day operations, taxes and regulations, and recommending the best management practices. Our focus is on your success, not our fees.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6, ease: easeOut }}
            >
              <Link href="/contact">
                <Button 
              size="lg" 
              className="bg-primary/90 hover:bg-white text-white hover:text-primary/90 p-0 rounded-none overflow-hidden flex items-center h-14 transition-all group shadow-sm"
            >
              <div className="bg-black h-full px-4 flex items-center justify-center">
                <ArrowUpRight className="w-5 h-5 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
              <span className="px-10 font-semibold text-sm md:text-base">
                Get in Touch
              </span>
            </Button>
              </Link>
            </motion.div>
          </div>

          {/* Right - Lead Capture Form */}
          {/* ... */}
        </div>
      </div>
    </section>
  )
}