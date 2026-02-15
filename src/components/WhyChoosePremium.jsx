import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const WhyChoosePremium = ({ benefits = [], eyebrow = "WHY CHOOSE MOVAL", title = "Why Choose Moval", subtitle = "Built to transform insurance workflows with automation, intelligence and speed.", centerTitle = "Smart Claims AI", centerText = "AI-driven automation, faster claim decisions, real-time analytics, and secure cloud architecture — all in one platform." }) => {
  return (
<section className="relative bg-black py-32 overflow-hidden font-['Neue']">

      {/* BIG background glow */}
      <div className="absolute left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[#2563EB] opacity-10 blur-[250px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">

{/* Heading */}
        <div className="text-center mb-24">
          <h2 className="text-5xl font-normal text-white font-['Neue'] tracking-[-0.01em]">
            {title.split(" ")[0]} <span className="text-[#2563EB]">{title.split(" ").slice(1).join(" ")}</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto font-['Neue']">{subtitle}</p>
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-3 items-center gap-10">

          {/* LEFT SIDE */}
          <div className="flex flex-col gap-10">
            {benefits.slice(0, 3).map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.09 }}
                className="group flex items-center gap-5 p-6 rounded-2xl
                           bg-gradient-to-r from-[#2563EB]/8 to-transparent
                           border border-white/8 backdrop-blur-lg
                           hover:scale-105 hover:border-[#2563EB]/40
                           transition-all duration-300"
              >
                <CheckCircle className="text-[#2563EB] w-6 h-6" />
                <p className="text-gray-300 group-hover:text-white transition">{item}</p>
              </motion.div>
            ))}
          </div>

          {/* CENTER - STRONG VISUAL */}
          <div className="relative flex justify-center">

            {/* glow behind */}
            <div className="absolute w-[300px] h-[500px] bg-gradient-to-b from-[#2563EB] to-transparent opacity-40 blur-[120px] rounded-full"></div>

            {/* vertical glass card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative z-10 w-[260px] h-[460px]
                         rounded-[40px]
                         bg-gradient-to-b from-white/6 to-white/3
                         border border-white/8
                         backdrop-blur-xl
                         shadow-[0_0_60px_rgba(37,99,235,0.25)]
                         flex flex-col justify-center items-center text-center px-6"
            >
<h3 className="text-white text-2xl font-normal mb-4 font-['Neue']">{centerTitle}</h3>

              <p className="text-gray-400 text-sm leading-relaxed">{centerText}</p>

            </motion.div>

          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-10">
            {benefits.slice(3, 6).map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.09 }}
                className="group flex items-center gap-5 p-6 rounded-2xl
                           bg-gradient-to-l from-[#2563EB]/8 to-transparent
                           border border-white/8 backdrop-blur-lg
                           hover:scale-105 hover:border-[#2563EB]/40
                           transition-all duration-300"
              >
                <CheckCircle className="text-[#2563EB] w-6 h-6" />
                <p className="text-gray-300 group-hover:text-white transition">{item}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChoosePremium;
