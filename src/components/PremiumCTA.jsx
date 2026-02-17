import { motion } from "framer-motion";

export default function PremiumCTA() {
  return (
    <section className="relative bg-black py-20 overflow-hidden">

      {/* background glow — subtle & wide */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                        w-[1000px] h-[380px]
                        bg-[#2563EB] opacity-20 blur-[220px]" />
      </div>
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12 xl:px-16">

       <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="
relative max-w-6xl mx-auto
rounded-2xl
bg-gradient-to-r
from-[#1E3A8A]
via-[#0B1120]
to-[#1E3A8A]
border border-white/10
px-10 py-16
text-center
shadow-[0_0_40px_rgba(30,58,138,0.35)]
hover:shadow-[0_0_60px_rgba(30,58,138,0.4)]
transition-all duration-500
"

>

          {/* TEXT — SAME SIZE, 2 LINES */}
          <h2 className="text-3xl md:text-4xl font-medium text-white leading-snug">
            Our solutions will transform your business.
          </h2>

          <h2 className="text-3xl md:text-4xl font-medium text-white leading-snug mt-1">
            Get in touch to see how.
          </h2>

          {/* BUTTON */}
          
        </motion.div>
      </div>
    </section>
  );
}
