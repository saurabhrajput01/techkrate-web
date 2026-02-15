import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import bgVideo from "../assets/video/vid1.mp4";
import logo from "../assets/image/logo.svg";

const HeroSection = () => {
  const heroRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 120);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden bg-black"
      style={{
        fontFamily: "Inter, sans-serif",
        letterSpacing: "-0.01em",
      }}
    >
      {/* Right Side Video - Full width on mobile, right side on desktop */}
      <div className="absolute inset-0 lg:left-auto lg:w-2/3 lg:right-0 overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          src={bgVideo}
        />
      </div>

      {/* Gradient Overlay - Stronger on mobile for better text readability */}
<div
  className="
    absolute inset-0 z-10
    bg-gradient-to-r
    from-black/80
    via-black/60
    to-transparent
    sm:from-black
    sm:via-black/55
    lg:via-black/80
  "
/>


      {/* Noise Overlay */}
      <div className="absolute inset-0 z-10 opacity-[0.035] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Content */}
      <div
        className="relative z-20 h-full flex items-start justify-start
                   pt-60 sm:pt-28 md:pt-32 lg:pt-40"
        style={{
          opacity: isLoaded ? 1 : 0,
          transition: "opacity 1.2s ease",
        }}
      >
        <div className="w-full max-w-7xl px-8 sm:px-5 md:px-8 lg:pl-60 text-left">

          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-3 py-1.5 mb-4 sm:mb-5 rounded-full"
          >
            <img src={logo} alt="Techkrate" className="h-28 sm:h-32 md:h-40 w-auto" />
          </motion.span>

          {/* Heading - Responsive sizing for better readability */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-[30px] sm:text-[38px] md:text-[48px] lg:text-[60px] 
            font-light tracking-[-0.02em] sm:tracking-[-0.03em]
            leading-[1.1] sm:leading-[1.08] text-white"
          >
            Transforming Motor Claims
          </motion.h1>

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="block mt-1.5 sm:mt-2 text-[34px] sm:text-[40px] md:text-[52px] lg:text-[64px]
            font-medium tracking-[-0.02em] sm:tracking-[-0.03em]
            bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-300
            bg-clip-text text-transparent"
          >
            With AI Intelligence
          </motion.span>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-5 sm:mt-6 text-[15px] sm:text-[17px] md:text-[19px]
            font-light leading-[1.7] sm:leading-[1.8] md:leading-[1.9]
            text-gray-400 max-w-lg"
          >
            Accelerate claims assessment, reduce operational costs,
            and deliver faster, fairer payouts using our intelligent
            AI-driven insurance platform.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 sm:mt-10 md:mt-12"
          >
            <Link
              to="/request-demo"
              className="
                inline-flex items-center gap-2
                px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 rounded-full
                bg-white text-black font-medium text-[14px] sm:text-[15px]
                hover:scale-[1.04]
                transition-all duration-300
              "
            >
              Request a demo
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
