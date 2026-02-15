import { motion } from "framer-motion";

export default function PremiumCTA() {
  return (
    <section className="relative bg-black py-20 px-6 lg:px-8 overflow-hidden">

      {/* background glow — subtle & wide */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                        w-[1000px] h-[380px]
                        bg-[#2563EB] opacity-20 blur-[220px]" />
      </div>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-4">

      <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="
    relative max-w-6xl mx-auto
    rounded-2xl
    bg-gradient-to-r
    from-[#2563EB]
        via-[black]
    to-[#2563EB]
    border border-white/10
    px-10 py-16
    text-center
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
        <div className="mt-8">
          <a
            href="/request-demo"
            className="
              inline-flex items-center justify-center
              px-9 py-3.5
              rounded-full
              bg-[#2563EB]
              text-white font-semibold
              transition-all duration-300
              hover:scale-[1.04]
              hover:shadow-[0_0_28px_rgba(37,99,235,0.45)]
              active:scale-[0.97]
            "
          >
            Request a demo
          </a>
        </div>
      </motion.div>
      </div>
    </section>
  );
}
