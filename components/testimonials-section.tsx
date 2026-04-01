//for later 
// "use client"

// import { useState } from "react"
// import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
// import { Button } from "@/components/ui/button"

// const testimonials = [
//   {
//     name: "Dazzle Dezine",
//     role: "Business Owner",
//     content: "Very professional and knowledge staff, I highly recommend Finrisers for all your accounting needs.",
//     rating: 5
//   },
//   {
//     name: "Fawad Omer",
//     role: "Entrepreneur",
//     content: "Azam is a thorough professional and committed to delivering excellent service every time. Would not hesitate to recommend to anyone in need of sound financial and business advice.",
//     rating: 5
//   },
//   {
//     name: "Kamran Abdulsalam",
//     role: "Business Owner",
//     content: "Finrisers Consulting is an emblem of quality services, trustworthiness & an incredible professionalism, which stands second to none!",
//     rating: 5
//   }
// ]

// export function TestimonialsSection() {
//   const [currentIndex, setCurrentIndex] = useState(0)

//   const nextTestimonial = () => {
//     setCurrentIndex((prev) => (prev + 1) % testimonials.length)
//   }

//   const prevTestimonial = () => {
//     setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
//   }


  // return (
  //   <section id="testimonials" className="py-20 bg-primary text-primary-foreground">
  //     <div className="container mx-auto px-4">
  //       <div className="text-center max-w-3xl mx-auto mb-12">
  //         <span className="text-primary-foreground/80 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
  //         <h2 className="text-3xl md:text-4xl font-bold mt-4 text-balance">
  //           What Our Clients Say
  //         </h2>
  //       </div>

  //       <div className="max-w-4xl mx-auto">
  //         <div className="relative bg-primary-foreground/10 rounded-2xl p-8 md:p-12">
  //           <Quote className="absolute top-6 left-6 w-12 h-12 text-primary-foreground/20" />

  //           <div className="relative z-10">
  //             <div className="flex justify-center gap-1 mb-6">
  //               {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
  //                 <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
  //               ))}
  //             </div>

  //             <p className="text-xl md:text-2xl text-center leading-relaxed mb-8">
  //               &quot;{testimonials[currentIndex].content}&quot;
  //             </p>

  //             <div className="text-center">
  //               <p className="font-bold text-lg">{testimonials[currentIndex].name}</p>
  //               <p className="text-primary-foreground/70">{testimonials[currentIndex].role}</p>
  //             </div>
  //           </div>

  //           {/* Navigation */}
  //           <div className="flex justify-center gap-4 mt-8">
  //             <Button
  //               variant="outline"
  //               size="icon"
  //               onClick={prevTestimonial}
  //               className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 bg-transparent"
  //             >
  //               <ChevronLeft className="w-5 h-5" />
  //             </Button>
  //             <div className="flex items-center gap-2">
  //               {testimonials.map((_, index) => (
  //                 <button
  //                   key={index}
  //                   onClick={() => setCurrentIndex(index)}
  //                   className={`w-2 h-2 rounded-full transition-all ${index === currentIndex
  //                       ? "bg-primary-foreground w-6"
  //                       : "bg-primary-foreground/40"
  //                     }`}
  //                   aria-label={`Go to testimonial ${index + 1}`}
  //                 />
  //               ))}
  //             </div>
  //             <Button
  //               variant="outline"
  //               size="icon"
  //               onClick={nextTestimonial}
  //               className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 bg-transparent"
  //             >
  //               <ChevronRight className="w-5 h-5" />
  //             </Button>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  // )
// }
