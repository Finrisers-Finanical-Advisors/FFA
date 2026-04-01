// "use client"

// import { Target, Users, TrendingUp, FileText, Calculator, Briefcase } from "lucide-react"
// import { Quote } from "lucide-react";
// import Image from "next/image";
// import { motion, easeOut } from "framer-motion";

// export function AboutSection() {
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
//               style={{ backgroundImage: "url('/images/consultation-meeting3.jpg')" }}
//               initial={{ scale: 1.05 }}
//               whileInView={{ scale: 1, transition: { duration: 1.2, ease: easeOut } }}
//               viewport={{ once: true }}
//             >
//               <div className="absolute inset-0 bg-black/20" />
//             </motion.div>

//             {/* Overlapping Testimonial Card */}
//             <motion.div
//               className="absolute -bottom-10 -right-0 md:-right-10 bg-black text-white p-8 rounded-3xl shadow-2xl max-w-sm z-20"
//               initial={{ opacity: 0, y: 50, scale: 0.95 }}
//               whileInView={{ opacity: 1, y: 0, scale: 1, transition: { delay: 0.25, duration: 0.6, ease: easeOut } }}
//               viewport={{ once: true }}
//             >
//               <div className="flex flex-col items-center text-center">
//                 <p className="text-sm leading-relaxed font-light">
//                   Finrisers Consulting is an emblem of quality services, trustworthiness & an incredible professionalism, which stands second to none!
//                 </p>
//                 <Quote className="w-10 h-10 mb-4 text-white fill-white" />
//                 <span className="uppercase tracking-[0.3em] text-[10px] mb-4 font-light">
//                   - Kamran Abdulsalam
//                 </span>
//               </div>
//             </motion.div>
//           </motion.div>

//           <motion.div
//             className="w-full lg:w-1/2 mt-16 lg:mt-0"
//             initial={{ opacity: 0, x: 60 }}
//             whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8, ease: easeOut } }}
//             viewport={{ once: true, amount: 0.2 }}
//           >
//             <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-tight uppercase tracking-tight">
//               KPIs Linked to Client Success Rather Than Fees
//             </h2>

//             <motion.div
//               className="mt-6 space-y-6"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.7, ease: easeOut } }}
//               viewport={{ once: true }}
//             >
//               <p className="text-gray-700 text-sm md:text-base leading-relaxed">
//                 Our focus is on your success, not our fees. Our key performance indicators are linked to your success, ensuring that we provide the services you need to achieve your goals.
//               </p>
//             </motion.div>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// }