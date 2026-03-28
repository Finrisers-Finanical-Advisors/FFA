"use client"

import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter } from "lucide-react"
import { motion, easeOut } from "framer-motion"

export function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-card py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div
                className="w-16 h-16 rounded-lg bg-[url('/images/finrisers.png')] bg-center bg-no-repeat bg-contain"
                aria-label="Finrisers Logo"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-card">Finrisers</span>
                <span className="text-xs text-card/70 -mt-1">FINANCIAL SUCCESS</span>
              </div>
            </div>
            <p className="text-card/80 leading-relaxed">
              Your trusted partner for business advisory, management consulting, and financial services
              in United States.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0, transition: { delay: 0.1, duration: 0.7, ease: easeOut } }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-lg font-bold text-card mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {["Home","Services","Careers","About Us","Contact"].map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link === "Home" ? "/" : `/${link.toLowerCase().replace(/\s/g,'')}`} 
                    className="text-card/80 hover:text-primary transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.7, ease: easeOut } }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-lg font-bold text-card mb-6">Our Services</h3>
            <ul className="space-y-3">
              {["Tax Management","Financial Consultancy","Business Planning","Management Advisory","Growth Strategy"].map((service, idx) => (
                <li key={idx} className="text-card/80">{service}</li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.7, ease: easeOut } }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-lg font-bold text-card mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-card/80">
                  5900 Balcones Drive Suite 100 Austin<br />
                  TX 78731 States L8P 1A1
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+19055551234" className="text-card/80 hover:text-primary transition-colors">
                  (408) 415-1696
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:info@finrisers.com" className="text-card/80 hover:text-primary transition-colors">
                  info@finrisers.com
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {[
                //add there links later!!
                { Icon: Facebook, url: "https://www.facebook.com/YourPage" },
                { Icon: Linkedin, url: "https://www.linkedin.com/in/YourProfile" },
                { Icon: Twitter, url: "https://twitter.com/YourHandle" },
              ].map(({ Icon, url }, idx) => (
                <a
                  key={idx}
                  href={url}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 bg-card/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label="social"
                >
                  <Icon className="w-5 h-5 text-card" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-card/20 mt-12 pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.7, ease: easeOut } }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-card/60 text-sm">
              © {new Date().getFullYear()} Finrisers FINANCIAL SUCCESS. All rights reserved.
            </p>
            <div className="flex gap-6">
              {["Privacy Policy","Terms of Service"].map((link, idx) => (
                <Link key={idx} href="#" className="text-card/60 hover:text-primary text-sm transition-colors">
                  {link}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}