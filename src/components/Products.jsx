import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import MovalLogo from "../assets/image/logo1.png";
import CARSLogo from "../assets/image/CARSLogo.jpg";
import MovalBG from "../assets/image/MovalBG.webp";
import CarsBG from "../assets/image/CarsBG.webp";
import { ArrowRight } from "lucide-react";

const SolutionCard = ({ name, logo, description, background, to }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative group overflow-hidden rounded-2xl aspect-[4/3] lg:aspect-[16/9] transition-all duration-300"
    >
      {/* Background */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${background})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />

      {/* Content */}
      <div className="relative h-full flex flex-col p-5 md:p-8 text-white">
        
        {/* Top Section */}
        <div className="flex items-center justify-between">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-Helix tracking-tight">
            {name}
          </h3>
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <img
              src={logo}
              alt={`${name} logo`}
              className="w-8 h-8 md:w-10 md:h-10 object-contain"
            />
          </div>
        </div>

        {/* Description */}
        <div className="my-4">
          <p className="text-sm md:text-xl text-gray-200 max-w-full md:max-w-lg leading-relaxed">
            {description}
          </p>
        </div>

        {/* CTA - stays inside card */}
        <div className="mt-auto pt-4">
          <Link
            to={to}
            className="inline-flex items-center text-white font-semibold group-hover:underline transition-all duration-300"
          >
            <span>Learn more</span>
            <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>

      {/* Hover Border */}
      <div className="absolute inset-0 border-2 border-white/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  );
};

const Solutions = () => {
  const containerRef = useRef(null);

  return (
    <section id="solutions" className="bg-black py-14">
      {/* Wider container for larger cards */}
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-blue-600/20 text-blue-400 text-sm font-medium rounded-full mb-4">
            Our Solutions
          </span>
          <h2 className="text-[32px] md:text-[44px] lg:text-[48px] font-normal tracking-[-0.01em] leading-[1.15] text-white mb-6">
            Intelligent Solutions for Modern Insurance
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            AI platforms designed to transform your claims processing workflow
          </p>
        </motion.div>

        {/* Grid */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16"
        >
          <SolutionCard
            name="Moval"
            logo={MovalLogo}
            background={MovalBG}
            to="/moval"
            description="The intelligent motor claims platform. Automated damage assessment, PDF data extraction, IRDA compliance, and end-to-end claims management."
          />

          <SolutionCard
            name="CARS"
            logo={CARSLogo}
            background={CarsBG}
            to="/cars"
            description="Unified Assessment & Reporting System. Streamlined workflows, real-time quality control, and comprehensive analytics for multi-office management."
          />
        </div>
      </div>
    </section>
  );
};

export default Solutions;
