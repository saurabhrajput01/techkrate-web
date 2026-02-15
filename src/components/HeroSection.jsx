import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import bgVideo from "../assets/video/vid1.mp4";
import { ArrowRight } from "lucide-react";

const slides = [
  {
    title: "Turning Complexity Into Clarity",
    description:
      "We distill complex challenges into clear solutions, empowering organizations to advance precisely and purposefully.",
    button: "Discover More",
  },
  {
    title: "Redefining Motor Claims Processing",
    description:
      "Moval revolutionizes motor claims handling by integrating advanced technology with industry-specific workflows.",
    button: "Explore Platform",
  },
  {
    title: "AI-Driven Assessment Intelligence",
    description:
      "Moval's AI goes beyond damage detection, instantly extracting complex data from assessment sheets.",
    button: "See AI in Action",
  },
  {
    title: "Regulatory-Compliant Survey Reports",
    description:
      "Moval ensures survey reports strictly adhere to IRDA guidelines, maintaining compliance and professionalism.",
    button: "View Compliance",
  },
  {
    title: "Centralized Control & Mobile Approvals",
    description:
      "Moval offers robust tools for multi-office management and automated estimate imports.",
    button: "Request Demo",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1); // forward
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">

      {/* FULL WIDTH VIDEO */}
      <video
        className="absolute inset-0 w-full h-full object-cover scale-105 animate-[slowZoom_20s_linear_infinite]"
        autoPlay
        muted
        loop
        playsInline
        src={bgVideo}
      />

      {/* BLUE SHADE LEFT */}
      <div className="absolute inset-0 z-10 bg-[linear-gradient(110deg,#0B1220_0%,#1E3A8A_35%,rgba(37,99,235,0.65)_55%,rgba(0,0,0,0.2)_75%,transparent_100%)]" />

      {/* DARK LAYER FOR TEXT READABILITY */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />

      {/* CONTENT */}
      <div className="relative z-20 h-full flex items-center">
        <div className="w-full px-6 lg:px-16">
          <div className="max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: direction === 1 ? 100 : -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction === 1 ? -100 : 100 }}
                transition={{ duration: 1.1, ease: "easeInOut" }}
              >
                <h1 className="text-[38px] sm:text-[50px] md:text-[62px] lg:text-[70px] font-semibold leading-[1.15] tracking-[-0.02em] text-white">
                  {slides[current].title}
                </h1>

                <p className="mt-6 text-lg text-white/80 leading-relaxed">
                  {slides[current].description}
                </p>

                <div className="mt-10">
                  <Link
                    to="/request-demo"
                    className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-medium text-sm transition-all duration-300 hover:bg-blue-600 hover:text-white"
                  >
                    {slides[current].button}
                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* DOT NAVIGATION */}
      <div className="absolute bottom-10 left-10 flex gap-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              current === index
                ? "w-8 bg-white"
                : "w-2 bg-white/40"
            }`}
          />
        ))}
      </div>

    </section>
  );
}
