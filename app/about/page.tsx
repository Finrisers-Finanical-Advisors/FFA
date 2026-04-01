'use client'

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { CheckCircle, Award, Users, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, Variants, Transition } from "framer-motion"
import Link from "next/link"


const highlights = [
  "Deep-rooted knowledge of USA business environment",
  "Expert tax and accounting guidance",
  "Strategic management advisory",
  "Personalized client-focused approach",
  "Results-driven methodology"
]

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "We deliver high-quality services that exceed expectations and drive real results for our clients."
  },
  {
    icon: Users,
    title: "Client-Focused",
    description: "Your success is our priority. We develop customized solutions tailored to your unique business needs."
  },
  {
    icon: Globe,
    title: "Expertise",
    description: "Our team brings years of experience in tax, accounting, finance, and business strategy."
  }
]

const stats = [
  { number: "25+", label: "Years Experience" },
  { number: "25+", label: "Clients Served" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "24/7", label: "Support Available" }
]

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

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <div className="pt-40 pb-20 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-5xl mx-auto">
            <motion.h1
              className="text-3xl md:text-4xl font-bold text-[#4a1d12] mt-4 uppercase tracking-tight"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={0.5}
            >
              About Finrisers Consulting
            </motion.h1>

            <motion.p
              className="mt-4 text-gray-800 text-xl font-light leading-relaxed max-w-3xl mx-auto"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={0.8}
            >
              Specializing in a comprehensive and tailored approach to financial advisory and consulting services for public and private sector businesses.
            </motion.p>

            <motion.div
              className="mt-10 flex justify-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1, transition: { delay: 1, duration: 0.8, ease: [0.42,0,0.58,1] } }}
            >
              <img
                src="/images/aboutbg.jpg"
                alt="About Finrisers Consulting"
                className="rounded-xl shadow-md max-w-3xl w-full"
              />
            </motion.div>

            <motion.div
              className="mt-16 text-left max-w-5xl mx-auto px-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.p className="text-gray-800 text-lg leading-relaxed mb-8 font-light" variants={fadeInUp} custom={0.2}>
                Finrisers Consulting is a financial and business consultancy incorporated under the United States Laws. Headquartered in Austin Area - Texas, Finrisers is specialized in providing a comprehensive and tailored approach in financial advisory and consulting services to public and private sector businesses.
              </motion.p>

              <motion.p className="text-gray-800 text-lg leading-relaxed mb-8 font-light" variants={fadeInUp} custom={0.4}>
                Our team takes great pride in developing a long term relationship with our clients, understanding their specific business needs and providing solutions with an aim to achieve maximum efficiency in financial planning and management of our clients’ businesses. Drawing on more than 30 years of international experience in Finance, Corporate Management, Reporting, Budgeting as well as extensive business and industry know-how, our team of seasoned experts can help you navigate through every aspect of your business’s back-end needs, with the following main areas of our practice:
              </motion.p>

              <motion.ul className="list-none space-y-3 text-gray-800 text-lg font-light mb-8" initial="hidden" whileInView="visible" viewport={{ once: true }}>
                {[
                  "CFO services",
                  "Cash flow and Liquidity Management",
                  "Bookkeeping and Financial Reporting",
                  "Accounting advisory services",
                  "Taxation",
                  "Budgeting, Forecast",
                  "Development of short – medium term business plan and strategy"
                ].map((item, index) => (
                  <motion.li key={index} className="flex items-start" variants={fadeInUp} custom={0.5 + index*0.1}>
                    <span className="inline-block w-2 h-2 rounded-full bg-black mt-2.5 mr-4 shrink-0"></span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.p className="text-gray-800 text-lg leading-relaxed font-light" variants={fadeInUp} custom={1}>
                Furthermore, Finrisers stands on a strong foundation built on our core values of integrity, trust, and transparency, and we are guided by these values whilst delivering our commitments.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
        <div className="py-24 bg-gray-50 mt-16">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div className="w-full h-full flex items-center justify-center" variants={fadeInUp} custom={0.2}>
                <img src="/images/OE.jpg" alt="Business meeting with tablet" className="w-full h-auto object-cover rounded-sm shadow-sm"/>
              </motion.div>
              <motion.div className="flex flex-col justify-center space-y-5 pr-8" variants={fadeInUp} custom={0.4}>
                <h2 className="text-3xl md:text-4xl font-bold text-[#4a1d12] uppercase tracking-tight">Our Experience</h2>
                <p className="text-gray-800 text-xl font-light leading-relaxed">
                  As an industry expert, we decided to alter direction. Now, we share our passion by helping others. Our ramp up process is designed to empower your team and outfit them with the tools they need to succeed. Talk to us today about how we can support your growth, limit your turnover, and put you on a solid track to success and profit.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
        <div className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div className="flex flex-col justify-center space-y-5 pl-4 md:pl-8" variants={fadeInUp} custom={0.2}>
                <h2 className="text-3xl md:text-4xl font-bold text-[#4a1d12] uppercase tracking-tight">Our Approach</h2>
                <p className="text-gray-800 text-xl font-light leading-relaxed">
                  Our service includes a comprehensive consult to help identify gaps and opportunities, a comprehensive report that includes a project plan with timelines and milestones, a cost analysis, and a schedule. We also offer a suite of quality products that will help you get there quickly and smoothly. That's how we ensure your success.
                </p>
              </motion.div>
              <motion.div className="w-full h-full flex items-center justify-center" variants={fadeInUp} custom={0.4}>
                <img src="/images/OA.jpg" alt="Team working with sticky notes" className="w-full h-auto object-cover rounded-sm shadow-sm"/>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
        <div className="py-24 bg-gray-50 mt-16">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div className="w-full h-full flex items-center justify-center" variants={fadeInUp} custom={0.2}>
                <img src="/images/whyus.jpg" alt="Business meeting with tablet" className="w-full h-auto object-cover rounded-sm shadow-sm"/>
              </motion.div>
              <motion.div className="flex flex-col justify-center space-y-5 pr-8" variants={fadeInUp} custom={0.4}>
                <h2 className="text-3xl md:text-4xl font-bold text-[#4a1d12] uppercase tracking-tight">Why Us?</h2>
                <p className="text-gray-800 text-xl font-light leading-relaxed">
                  Business mentors are key—that’s why when it comes to client selection, we’re choosy. We want to give each of you the time and guidance you deserve. Whether you’re seeking a strategic alliance with the right partner or a special skillset or tool, call us today. Together we’ll create and refine your plan for success. We didn’t get there alone. And neither will you.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div variants={fadeInUp} custom={0.2}>
              <h2 className="text-3xl font-bold text-foreground mb-6">Who We Are</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                At Finrisers Consulting, we are dedicated to providing comprehensive business advisory and financial consulting services. As a financial and business consultancy incorporated under the laws of USA, we have the experience and knowledge to provide comprehensive support and real solutions for your business's success.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Our team of experienced consultants brings deep expertise in tax planning, accounting, financial strategy, and business management. We partner with businesses of all sizes to help them overcome challenges, optimize operations, and achieve their growth goals.
              </p>
              <motion.ul className="space-y-3">
                {highlights.map((item, index) => (
                  <motion.li key={index} className="flex items-center gap-3" variants={fadeInUp} custom={0.3 + index*0.1}>
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            <motion.div className="bg-primary/10 rounded-2xl p-8" variants={fadeInUp} custom={0.4}>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div key={index} className="bg-card p-6 rounded-xl text-center shadow-sm" variants={fadeInUp} custom={0.5 + index*0.1}>
                    <p className="text-4xl font-bold text-primary">{stat.number}</p>
                    <p className="text-muted-foreground mt-2 text-sm">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div className="mb-20" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} custom={0.2}>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
              <p className="text-muted-foreground text-lg">The principles that guide everything we do</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div key={index} className="bg-card p-8 rounded-xl border border-border text-center" variants={fadeInUp} custom={0.3 + index*0.2}>
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section className="py-20 bg-primary text-primary-foreground" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} custom={0.2}>
        <div className="container mx-auto px-4 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-lg mb-8 opacity-90">
            Contact us today to discuss how Finrisers Consulting can help your business succeed.
          </p>
          <Link href="/contact">
         <Button
          size="lg"
          variant="secondary"
          className="bg-primary-foreground hover:bg-primary-foreground/90 text-primary"
         >
           Schedule a Consultation
         </Button>
         </Link>
        </div>
      </motion.section>

      <Footer />
      <ScrollToTop />
    </main>
  )
}