"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import logo from "../assets/image/logo.svg";

const benefits = [
  "Reduce claims processing time by up to 70%",
  "Improve assessment accuracy with AI-powered analysis",
  "Streamline surveyor workflow and coordination",
  "Generate comprehensive reports in minutes",
  "Ensure regulatory compliance automatically",
  "Centralize all claim data in one secure platform",
];

export default function WhyChooseMoval() {
  return (
    <section className="bg-black py-24 relative overflow-hidden">

      {/* Soft Blue Glow Background */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-[900px] h-[900px] bg-[#2563EB] opacity-10 blur-[220px] rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="inline-block px-4 py-1.5 bg-[#2563EB]/20 text-[#2563EB] text-sm font-medium rounded-full mb-4">
            Why Choose Moval
          </span>

          <h2 className="text-[32px] md:text-[44px] lg:text-[48px] font-semibold tracking-[-0.03em] leading-[1.05] text-white">
            Built for <span className="text-[#2563EB]">Modern Insurance</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
            Transform claims workflows with automation, intelligence and speed — designed for next-generation insurance platforms.
          </p>
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-center">

          {/* LEFT BENEFITS */}
          <div className="space-y-10 text-right">
            {benefits.slice(0, 3).map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start justify-end gap-4 group"
              >
                <p className="text-gray-300 group-hover:text-white transition">
                  {item}
                </p>
                <CheckCircle className="w-6 h-6 text-[#2563EB] shrink-0 mt-1" />
              </motion.div>
            ))}
          </div>

          {/* CENTER FEATURE CARD */}
          <div className="flex justify-center relative">

            {/* glowing circles */}
            <div className="absolute w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] bg-[#2563EB] opacity-20 blur-[80px] rounded-full animate-pulse"></div>
            <div className="absolute w-[150px] h-[150px] sm:w-[220px] sm:h-[220px] bg-[#3b82f6] opacity-30 blur-[60px] rounded-full animate-pulse"></div>

            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative z-10 text-center w-[260px] sm:w-[280px] h-[320px] sm:h-[360px]
                         rounded-[40px]
                         bg-gradient-to-b from-white/5 to-white/10
                         border border-white/10
                         backdrop-blur-xl
                         shadow-[0_0_80px_rgba(37,99,235,0.3)]
                         flex flex-col justify-center items-center px-6
                         hover:scale-105 transition duration-300"
            >

              {/* ICON CIRCLE */}
             {/* ICON CIRCLE */}
{/* ICON CIRCLE */}
<div
  className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full
  border border-[#2563EB]/40
  flex items-center justify-center mb-6
  bg-gradient-to-tr from-white/10 to-white/5
  shadow-[0_0_50px_rgba(37,99,235,0.6)]
  backdrop-blur-lg overflow-hidden"
>

  {/* glow layer */}
  <div className="absolute inset-0 rounded-full blur-xl bg-[#2563EB]/30"></div>

  {/* BIGGER LOGO */}
  <img
    src={logo}
    alt="Moval Logo"
    className="relative w-24 h-24 sm:w-28 sm:h-28 object-contain drop-shadow-xl"
  />

</div>


              <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-2">
                Smart Claims AI
              </h3>

              <p className="text-gray-400 mt-2 max-w-xs mx-auto text-sm sm:text-base leading-relaxed">
                AI-driven automation, faster claim decisions, real-time analytics, and secure cloud infrastructure.
              </p>
            </motion.div>
          </div>

          {/* RIGHT BENEFITS */}
          <div className="space-y-10 text-left">
            {benefits.slice(3, 6).map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 group"
              >
                <CheckCircle className="w-6 h-6 text-[#2563EB] shrink-0 mt-1" />
                <p className="text-gray-300 group-hover:text-white transition">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
