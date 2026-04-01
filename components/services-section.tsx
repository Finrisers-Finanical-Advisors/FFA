//For when services are again added

// "use client"
// import { Target, Users, TrendingUp, FileText, Calculator, Briefcase } from "lucide-react"
// import { Quote } from "lucide-react";
// import Image from "next/image";
// import { motion, easeOut } from "framer-motion";

// export function ServicesSection() {
//   return (
//     <section id="services" className="py-20 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

//           {/* Left Side: Image and Overlapping Quote */}
//           <motion.div
//             className="relative w-full lg:w-1/2"
//             initial={{ opacity: 0, x: -60 }}
//             whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8, ease: easeOut } }}
//             viewport={{ once: true, amount: 0.2 }}
//           >
//             <motion.div
//               className="relative h-[300px] md:h-[450px] w-full overflow-hidden rounded-sm shadow-xl bg-cover bg-center bg-no-repeat"
//               style={{ backgroundImage: "url('/images/consultation-meeting.jpg')" }}
//               initial={{ scale: 1.05 }}
//               whileInView={{ scale: 1, transition: { duration: 1.2, ease: easeOut } }}
//               viewport={{ once: true }}
//             >
//               <div className="absolute inset-0 bg-black/20" />
//             </motion.div>

//             {/* Overlapping Testimonial Card */}
//             <motion.div
//               className="absolute -bottom-10 -right-0 md:-right-10 bg-black text-white p-8 rounded-3xl shadow-2xl max-w-sm z-20"
//               initial={{ opacity: 0, y: 40, scale: 0.95 }}
//               whileInView={{ opacity: 1, y: 0, scale: 1, transition: { delay: 0.3, duration: 0.6, ease: easeOut } }}
//               viewport={{ once: true }}
//             >
//               <div className="flex flex-col items-center text-center">
//                 <Quote className="w-10 h-10 mb-4 text-white fill-white" />
//                 <span className="uppercase tracking-[0.3em] text-[10px] mb-4 font-light">
//                   - DAZZLE DEZINE
//                 </span>
//                 <p className="text-sm leading-relaxed font-light">
//                   Very professional and knowledge staff, I highly recommend Finrisers for all your accounting needs.
//                 </p>
//               </div>
//             </motion.div>
//           </motion.div>

//           {/* Right Side: Content */}
//           <motion.div
//             className="w-full lg:w-1/2 mt-16 lg:mt-0"
//             initial={{ opacity: 0, x: 60 }}
//             whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8, ease: easeOut } }}
//             viewport={{ once: true, amount: 0.2 }}
//           >
//             <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-tight tracking-tight">
//               Business Advisor and Management Consultant Assisting You to Get Your Business on Track
//             </h2>

//             <div className="mt-6 space-y-6">
//               <p className="text-gray-700 text-sm md:text-base leading-relaxed">
//                 Our team of experts has deep-rooted knowledge of tax, accounting, management advisory, and the Canadian business environment. We provide comprehensive support, from tax management and financial consultancy to refining your business plan for success.
//               </p>
//             </div>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// }