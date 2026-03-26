'use client'

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import dynamic from "next/dynamic"
import { motion, Variants, Transition } from "framer-motion"

const LeafletMap = dynamic(() => import("./LeafletMap"), { ssr: false })

const defaultTransition: Transition = {
  duration: 0.6,
  ease: [0.42, 0, 0.58, 1]
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number = 1) => ({
    opacity: 1,
    y: 0,
    transition: { ...defaultTransition, delay: custom * 0.2 }
  })
}

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (custom: number = 1) => ({
    opacity: 1,
    transition: { ...defaultTransition, delay: custom * 0.2 }
  })
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '' })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "(408) 415-1696",
      link: "tel:+14084151696"
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@finrisers.com",
      link: "mailto:info@finrisers.com"
    },
    {
      icon: MapPin,
      title: "Office",
      content: "5900 Balcones Drive Suite 100\nAustin, TX 78731"
    },
    {
      icon: Clock,
      title: "Hours",
      content: "Mon-Fri: 9AM - 6PM\nSat-Sun: By Appointment"
    }
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <motion.div
        className="pt-40 pb-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <motion.span className="text-primary font-semibold text-sm uppercase tracking-wider" variants={fadeInUp} custom={0.2}>
              Get in Touch
            </motion.span>
            <motion.h1 className="text-4xl md:text-5xl font-bold text-foreground mt-4 text-balance" variants={fadeInUp} custom={0.4}>
              Contact Us Today
            </motion.h1>
            <motion.p className="mt-6 text-muted-foreground text-lg leading-relaxed" variants={fadeInUp} custom={0.6}>
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Contact Form */}
            <motion.div
              className="bg-card p-8 rounded-xl shadow-sm border border-border"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={0.2}
            >
              <motion.h2 className="text-2xl font-bold text-foreground mb-6" variants={fadeInUp} custom={0.3}>
                Send us a Message
              </motion.h2>
              {submitted && (
                <motion.div
                  className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  Thank you! We've received your message and will get back to you shortly.
                </motion.div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div className="grid md:grid-cols-2 gap-4" variants={fadeInUp} custom={0.4}>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                      placeholder="your@email.com"
                    />
                  </div>
                </motion.div>

                <motion.div className="grid md:grid-cols-2 gap-4" variants={fadeInUp} custom={0.5}>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                      placeholder="Your company"
                    />
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} custom={0.6}>
                  <label className="block text-sm font-medium text-foreground mb-2">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                    placeholder="How can we help?"
                  />
                </motion.div>

                <motion.div variants={fadeInUp} custom={0.7}>
                  <label className="block text-sm font-medium text-foreground mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background resize-none"
                    placeholder="Tell us more about your needs..."
                  />
                </motion.div>

                <motion.div variants={fadeInUp} custom={0.8}>
                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={0.3}
            >
              <motion.h2 className="text-2xl font-bold text-foreground mb-8" variants={fadeInUp} custom={0.4}>
                Contact Information
              </motion.h2>
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <motion.div key={index} className="flex gap-4" variants={fadeInUp} custom={0.5 + index*0.1}>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">{info.title}</h3>
                      {info.link ? (
                        <a href={info.link} className="text-muted-foreground hover:text-primary transition-colors">
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-muted-foreground whitespace-pre-line">{info.content}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Map Section */}
              <motion.div className="mt-12 rounded-xl overflow-hidden h-96" variants={fadeInUp} custom={0.7}>
                <LeafletMap />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section className="py-20 bg-primary" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} custom={0.2}>
        <div className="container mx-auto px-4 text-center max-w-2xl mx-auto">
          <motion.h2 className="text-3xl font-bold text-white mb-6" variants={fadeInUp} custom={0.3}>
            Prefer a Phone Call?
          </motion.h2>
          <motion.p className="text-white text-lg mb-8" variants={fadeInUp} custom={0.4}>
            Call us directly at (408) 415-1696 or schedule a free consultation
          </motion.p>
          <motion.div variants={fadeInUp} custom={0.5}>
            <Button size="lg" className="bg-white hover:bg-gray-100 text-primary">
              Schedule Consultation
            </Button>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
      <ScrollToTop />
    </main>
  )
}