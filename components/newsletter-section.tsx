"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle, Send } from "lucide-react"
import { motion, easeOut } from "framer-motion"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setEmail("")
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            Subscribe to Our Newsletter for Promotions, Tips, and Strategies for Your Business's Success
          </h2>

          <p className="mt-6 text-muted-foreground text-lg">
            Join our community of small and medium businesses, and receive exclusive access to promotions, tips, and strategies related to reaching the benefits that Finrisers Consulting provides. Stay up-to-date with the latest industry news and trends, and learn how to take your business to the next level.
          </p>

          {isSubmitted ? (
            <motion.div
              className="mt-8 flex items-center justify-center gap-3 p-4 bg-green-50 text-green-700 rounded-lg max-w-md mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1, transition: { duration: 0.4, ease: easeOut } }}
            >
              <CheckCircle className="w-5 h-5" />
              <span>Thank you for subscribing!</span>
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.6, ease: easeOut } }}
              viewport={{ once: true }}
            >
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1"
              />
              <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Send className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </motion.form>
          )}
        </motion.div>
      </div>
    </section>
  )
}