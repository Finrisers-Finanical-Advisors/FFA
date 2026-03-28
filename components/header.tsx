"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, easeOut } from "framer-motion"
import { usePathname } from "next/navigation"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const linkClasses = (path: string) =>
    `relative font-medium transition-all duration-300 ${
      pathname === path ? "text-primary" : "text-foreground"
    } hover:text-primary hover:scale-105 
    after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-primary after:transition-all after:duration-300
    ${pathname === path ? "after:w-full" : "after:w-0 hover:after:w-full"}`

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } }}
    >
      {/* Top bar */}
      <motion.div
        className="bg-primary text-primary-foreground py-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.5 } }}
      >
        <div className="container mx-auto px-4 flex flex-wrap justify-center md:justify-between items-center gap-4 text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+19055551234" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone className="w-4 h-4" />
              <span>(408) 415-1696</span>
            </a>
            <a href="mailto:info@finrisers.com" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Mail className="w-4 h-4" />
              <span>info@finrisers.com</span>
            </a>
          </div>
        </div>
      </motion.div>

      {/* Main navigation */}
      <motion.nav
        className="container mx-auto px-4 py-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.5, ease: easeOut } }}
      >
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div
              className="w-16 h-16 rounded-lg bg-[url('/images/finrisers.png')] bg-center bg-no-repeat bg-contain"
              aria-label="Finrisers Logo"
            ></div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground">Finrisers</span>
              <span className="text-xs text-muted-foreground -mt-1">FINANCIAL SUCCESS</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className={linkClasses("/")}>
              Home
            </Link>
            <Link href="/services" className={linkClasses("/services")}>
              Services
            </Link>
            <Link href="/careers" className={linkClasses("/careers")}>
              Careers
            </Link>
            <Link href="/about" className={linkClasses("/about")}>
              About Us
            </Link>
            <Link href="/contact" className={linkClasses("/contact")}>
              Contact
            </Link>
          </div>

          <div className="hidden lg:block">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-105">
              Free Consultation
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={
            isMenuOpen
              ? { height: "auto", opacity: 1 }
              : { height: 0, opacity: 0 }
          }
          transition={{ duration: 0.4, ease: easeOut }}
          className="overflow-hidden"
        >
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4">
              <div className="flex flex-col gap-4">
                <Link href="/" className="transition-all duration-300 hover:text-primary hover:translate-x-1" onClick={() => setIsMenuOpen(false)}>
                  Home
                </Link>
                <Link href="/services" className="transition-all duration-300 hover:text-primary hover:translate-x-1" onClick={() => setIsMenuOpen(false)}>
                  Services
                </Link>
                <Link href="/careers" className="transition-all duration-300 hover:text-primary hover:translate-x-1" onClick={() => setIsMenuOpen(false)}>
                  Careers
                </Link>
                <Link href="/about" className="transition-all duration-300 hover:text-primary hover:translate-x-1" onClick={() => setIsMenuOpen(false)}>
                  About Us
                </Link>       
                <Link href="/contact" className="transition-all duration-300 hover:text-primary hover:translate-x-1" onClick={() => setIsMenuOpen(false)}>
                  Contact
                </Link>
              </div>
            </div>
          )}
        </motion.div>
      </motion.nav>
    </motion.header>
  )
}