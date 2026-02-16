import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, ShieldCheck, BrainCircuit, FileText, BarChart4, Smartphone, CloudSun } from "lucide-react";
import MovalLogo from "../assets/image/logo1.png"; // Updated asset
import MovalBG from "../assets/image/cr.jpeg"; // Updated asset
import FeaturesSection from "../components/FeaturesSection";
import MeasurableImpact from "../components/MeasurableImpact";
import FAQSection from "../components/FAQSection";


import WhyChoosePremium from "../components/WhyChoosePremium";

const MovalPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsVisible(true);
  }, []);

  // Professional, logo-matching colors for icons


  const benefits = [
    "Reduce claims processing time by up to 70%",
    "Improve assessment accuracy with AI-powered analysis",
    "Streamline surveyor workflow and coordination",
    "Generate comprehensive reports in minutes",
    "Ensure regulatory compliance automatically",
    "Centralize all claim data in one secure platform"
  ];


  return (
    <div className="min-h-screen bg-black text-white font-sans">

      {/* Hero Section */}
      <section
        className="relative bg-black overflow-hidden pt-28 pb-24 min-h-[90vh]"
        style={{
          fontFamily: '"Inter Tight", Inter, sans-serif',
          letterSpacing: "-0.01em",
        }}
      >

        {/* Soft Blue Glow */}
        <div
          className="absolute right-[-200px] top-1/2 -translate-y-1/2
               w-[800px] h-[800px] bg-[#2563EB] opacity-10
               blur-[200px] rounded-full"
        />

        {/* Background Image (SAME AS CARS STYLE) */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(${MovalBG})` }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

          <div className="flex flex-col lg:flex-row items-center justify-between gap-20">

            {/* LEFT CONTENT (LOCKED LEFT — SAME AS CARS) */}
            <div className="flex-1 max-w-2xl text-center lg:text-left">

              {/* LOGO */}
              <div className="flex justify-center lg:justify-start mb-10">
                <img
                  src={MovalLogo}
                  alt="Moval Logo"
                  className="h-12 w-auto opacity-90"
                />
              </div>

              {/* HEADING */}
              <h1
                className="
            text-[32px] md:text-[44px] lg:text-[48px] 
            font-semibold tracking-[-0.03em] 
            leading-[1.05] text-white
          "
              >
                Intelligent Motor <br />
                <span className="block mt-2 text-[34px] md:text-[50px]
            font-semibold tracking-[-0.03em]
            bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-300
            bg-clip-text text-transparent">Claims Platform</span>
              </h1>

              {/* DESCRIPTION */}
              <p className="mt-6 text-lg
            font-light leading-[1.9]
            text-gray-400 max-w-lg">
                Automated damage assessment, smart PDF extraction, IRDA compliance,
                and complete end-to-end claims automation for insurance companies.
              </p>

              {/* BUTTONS */}
              <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">

                <a
                  href="/request-demo"
                  className="
              inline-flex items-center justify-center
              px-10 py-4 rounded-full
              bg-white text-black font-medium text-[15px]
              hover:scale-[1.04]
              transition-all duration-300
            "
                >
                  Request a Demo
                </a>

              </div>
            </div>

          </div>

        </div>
      </section>



      {/* Features Section - Moval Premium Grid */}

      <FeaturesSection />
      <MeasurableImpact />

      {/* WHY CHOOSE MOVAL - PREMIUM SECTION */}
      <section className="bg-black py-24 relative overflow-hidden">

        {/* soft blue glow background */}
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


          {/* PREMIUM FLOW LAYOUT */}
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


            {/* CENTER FEATURE (UNIQUE VISUAL FOCUS) */}
            <div className="flex justify-center relative">

              {/* glowing center */}
              <div className="absolute w-[350px] h-[350px] bg-[#2563EB] opacity-20 blur-[120px] rounded-full"></div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative text-center"
              >

                <div className="w-28 h-28 rounded-full border border-[#2563EB]/40 flex items-center justify-center mx-auto mb-6 backdrop-blur-sm bg-white/5">
                  <BrainCircuit className="w-12 h-12 text-[#2563EB]" />
                </div>

                <h3 className="text-2xl font-semibold text-white">
                  Smart Claims AI
                </h3>

                <p className="text-gray-400 mt-3 max-w-xs mx-auto">
                  AI-driven automation, faster claim decisions, real-time analytics and secure cloud infrastructure.
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


      <FAQSection />

      {/* CTA PREMIUM SECTION */}

      {/* CTA PREMIUM SECTION - Rendered Globally */}


    </div>
  );
};

export default MovalPage;