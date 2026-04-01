//fOr later use

// "use client"

// import { Quote } from "lucide-react"
// import { motion, easeOut } from "framer-motion"

// export function ValuePropsSection() {
//   return (
//     <section className="py-20 bg-white overflow-hidden">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

//           {/* Left Side: Content */}
//           <motion.div
//             className="w-full lg:w-1/2 order-2 lg:order-1"
//             initial={{ opacity: 0, x: -60 }}
//             whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8, ease: easeOut } }}
//             viewport={{ once: true, amount: 0.2 }}
//           >
//             <h2 className="text-2xl md:text-3xl font-bold text-foreground uppercase leading-tight tracking-tight">
//               Attention to Detail for Individual Clients
//             </h2>

//             <motion.p
//               className="mt-6 text-gray-700 text-sm md:text-base leading-relaxed max-w-xl"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.7, ease: easeOut } }}
//               viewport={{ once: true }}
//             >
//               We understand that every client is unique, and we pay close attention
//               to your individual needs and goals. Our personalized attention ensures
//               that we provide the services you need to succeed.
//             </motion.p>
//           </motion.div>

//           {/* Right Side: Image with Overlapping White Testimonial */}
//           <motion.div
//             className="relative w-full lg:w-1/2 order-1 lg:order-2"
//             initial={{ opacity: 0, x: 60 }}
//             whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8, ease: easeOut } }}
//             viewport={{ once: true, amount: 0.2 }}
//           >
//             {/* The Main Image */}
//             <motion.div
//               className="relative h-[300px] md:h-[400px] w-full rounded-sm shadow-lg bg-cover bg-center bg-no-repeat"
//               style={{ backgroundImage: "url('/images/consultation-meeting2.jpg')" }}
//               initial={{ scale: 1.05 }}
//               whileInView={{ scale: 1, transition: { duration: 1.2, ease: easeOut } }}
//               viewport={{ once: true }}
//             >
//               {/* Overlapping White Testimonial Card */}
//               <motion.div
//                 className="absolute -bottom-16 left-0 md:-left-32 bg-white text-black p-10 rounded-3xl shadow-2xl max-w-xs md:max-w-md border border-gray-100 z-20"
//                 initial={{ opacity: 0, y: 50, scale: 0.95 }}
//                 whileInView={{ opacity: 1, y: 0, scale: 1, transition: { delay: 0.3, duration: 0.6, ease: easeOut } }}
//                 viewport={{ once: true }}
//               >
//                 <div className="flex flex-col items-center text-center">
//                   <Quote className="w-12 h-12 mb-4 text-black fill-black" />

//                   <span className="uppercase tracking-[0.3em] text-[10px] mb-4 font-bold text-gray-500">
//                     - FAWAD OMER
//                   </span>

//                   <p className="text-sm leading-relaxed text-gray-800 italic">
//                     Azam is a thorough professional and committed to delivering excellent service every time. Would not hesitate to recommend to anyone in need of sound financial and business advice.
//                   </p>
//                 </div>
//               </motion.div>
//             </motion.div>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   )
// }