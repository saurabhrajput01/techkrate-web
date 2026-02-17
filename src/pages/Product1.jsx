import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, ShieldCheck, BrainCircuit, FileText, BarChart4, Smartphone, CloudSun, Section } from "lucide-react";
import MovalLogo from "../assets/image/logo1.png"; // Updated asset
import MovalBG from "../assets/image/moval-bg.jpg"; // Updated asset
import logo from "../assets/image/logo.svg";

import FeaturesSection from "../components/FeaturesSection";
import MeasurableImpact from "../components/MeasurableImpact";
import FAQSection from "../components/FAQSection";

import WhyChoosePremium from "../components/WhyChoosePremium";
const MovalPage = () => {
  const [isVisible, setIsVisible] = useState(false);

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
    <div className="min-h-screen bg-black text-white">

    {/* Hero Section */}
<section className="relative min-h-screen bg-black overflow-hidden flex items-center">

  {/* Background */}
  <div
    className="absolute inset-0 bg-cover bg-center opacity-40"
    style={{ backgroundImage: `url(${MovalBG})` }}
  />

  <div className="absolute inset-0 bg-black/70" />

  {/* CONTENT */}
  <div className="relative z-10 w-full">

    {/* MAIN CONTAINER */}
    <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-28 lg:pt-32">

      {/* Logo */}
      <div className="mb-7">
        <img
          src={MovalLogo}
          alt="Moval Logo"
          className="h-12 lg:h-14 w-auto"
        />
      </div>

      {/* Heading */}
      <h1
        className="
          text-white
          font-semibold
          tracking-[-0.03em]
          leading-[1.02]
          text-[48px]
          sm:text-[64px]
          md:text-[80px]
          lg:text-[96px]
          max-w-5xl
        "
      >
        Intelligent Motor <br />
        Claims Platform
      </h1>

      {/* Subtext */}
      <p
        className="
          mt-8
          text-neutral-400
          text-[16px]
          leading-[1.6]
          max-w-xl
        "
      >
        Automated damage assessment, smart PDF extraction, IRDA compliance,
        and complete end-to-end claims automation for insurance companies.
      </p>

      {/* Button */}
      <div className="mt-8">
        <a
          href="/request-demo"
          className="
            inline-flex items-center gap-3
            rounded-full
            bg-white text-black
            px-8 py-3
            text-[15px]
            font-medium
            transition-all duration-300
            hover:scale-[1.03]
            hover:bg-neutral-100
          "
        >
          Request Demo
          <ArrowRight size={16} />
        </a>
      </div>

    </div>
  </div>
</section>


      {/* Features Section - Moval Premium Grid */}

      <FeaturesSection />
      <MeasurableImpact />

{/* WHY CHOOSE MOVAL - PREMIUM SECTION */}
<WhyChoosePremium/>

<FAQSection />
    </div>
  );
};

export default MovalPage;