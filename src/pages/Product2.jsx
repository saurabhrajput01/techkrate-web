import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Building2, Users, FileCheck, BarChart3, Globe, Lock } from "lucide-react";
import CARSLogo from "../assets/image/CARSLogo.jpg";
import CarsBG from "../assets/image/Cars-bg.jpg";
import UseCaseBG from "../assets/image/use-case.jpg";
import logo from "../assets/image/logo.svg";

const CARSPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: Building2,
      title: "Multi-Office Management",
      description: "Manage multiple branches and offices from a centralized dashboard with real-time visibility"
    },
    {
      icon: Users,
      title: "Staff Coordination",
      description: "Seamless collaboration between team members with task assignments and progress tracking"
    },
    {
      icon: FileCheck,
      title: "Quality Control",
      description: "Built-in quality checks and validation to ensure accurate assessments and reports"
    },
    {
      icon: BarChart3,
      title: "Comprehensive Analytics",
      description: "Real-time dashboards and reports for performance monitoring and decision making"
    },
    {
      icon: Globe,
      title: "Pan-India Coverage",
      description: "Network of surveyors and assessors across India for comprehensive coverage"
    },
    {
      icon: Lock,
      title: "Enterprise Security",
      description: "Bank-grade security with encrypted data storage and role-based access controls"
    }
  ];

  const benefits = [
    "Centralized platform for multi-location operations",
    "Real-time visibility into all office activities",
    "Streamlined administrative workflows",
    "Improved staff productivity and coordination",
    "Comprehensive audit trails and reporting",
    "Scalable architecture for growing organizations"
  ];

  return (
    <div className="min-h-screen bg-black text-white">

      {/* CARS Hero Section */}
<section className="relative min-h-screen bg-black overflow-hidden flex items-center">

  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center opacity-40"
    style={{ backgroundImage: `url(${CarsBG})` }}
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/70" />

  {/* CONTENT WRAPPER */}
  <div className="relative z-10 w-full">

    {/* MAIN CONTAINER (same alignment as Moval) */}
    <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-28 lg:pt-32">

      {/* Logo */}
      <div className="mb-7">
        <img
          src={CARSLogo}
          alt="CARS Logo"
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
        Unified Assessment <br />
        Reporting System
      </h1>

      {/* Subheading */}
      <p
        className="
          mt-8
          text-neutral-400
          text-[16px]
          leading-[1.6]
          max-w-xl
        "
      >
        Streamlined workflows, real-time quality control, and comprehensive
        analytics designed for efficient multi-office assessment management.
      </p>

      {/* Button */}
      <div className="mt-10">
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
          Request a Demo
          <ArrowRight size={16} />
        </a>
      </div>

    </div>
  </div>
</section>

{/* Key Features Section – CARS (Moval-style) */}
<section className="bg-black py-16 lg:py-24 relative overflow-hidden">

  {/* soft glow background */}
  <div className="absolute inset-0 flex justify-center pointer-events-none">
    <div className="w-[900px] h-[900px] bg-[#2563EB] opacity-10 blur-[220px] rounded-full"></div>
  </div>

  <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

    {/* Section Header */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-14"
    >

      <span className="inline-block px-4 py-1.5 bg-[#2563EB]/20 text-[#2563EB] text-sm font-medium rounded-full mb-4">
        Key Features
      </span>

      <h2 className="text-[32px] md:text-[44px] lg:text-[48px] font-semibold text-white leading-[1.15]">
        Enterprise Assessment Platform
      </h2>

      <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
        Everything you need for centralized assessment and reporting management.
      </p>

    </motion.div>


    {/* Feature Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

      {features.map((feature, index) => {

        const Icon = feature.icon;

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="
              group
              flex flex-col items-center text-center
              p-6
              border border-white/10
              rounded-2xl
              bg-white/5
              hover:bg-white/10
              hover:shadow-lg
              transition-all duration-300
              h-full
            "
          >

            {/* Icon Circle — SAME AS MOVAL */}
            <div className="
              w-16 h-16
              rounded-xl
              bg-[#2563EB]/20
              flex items-center justify-center
              mb-4
              group-hover:bg-[#2563EB]
              transition-colors duration-300
            ">
              <Icon className="w-8 h-8 text-[#2563EB] group-hover:text-white transition" />
            </div>

            {/* Title */}
            <h3 className="
              text-lg md:text-xl font-semibold text-white mb-2
              group-hover:text-[#2563EB]
              transition-colors duration-300
            ">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="
              text-gray-400 text-sm md:text-base leading-relaxed
              group-hover:text-gray-300
              transition-colors duration-300
            ">
              {feature.description}
            </p>

          </motion.div>

        );
      })}

    </div>

  </div>
</section>


      {/* Why Choose CARS Section */}

      {/* WHY CHOOSE CARS — PREMIUM SECTION */}
<section className="bg-black py-16 lg:py-24 relative overflow-hidden">

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
        Why Choose CARS
      </span>

      <h2 className="text-[32px] md:text-[44px] lg:text-[48px] font-semibold text-white leading-[1.15]">
        Built for <span className="text-[#2563EB]">Enterprise Assessment Teams</span>
      </h2>

      <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
        Designed to simplify multi-office operations, improve reporting workflows
        and deliver real-time operational visibility.
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


      {/* CENTER FEATURE (FOCUS VISUAL) */}
      <div className="flex justify-center relative">

        {/* glowing center */}
        <div className="absolute w-[350px] h-[350px] bg-[#2563EB] opacity-20 blur-[120px] rounded-full"></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative text-center"
        >

          {/* ICON CIRCLE WITH LOGO */}
          {/* ICON CIRCLE WITH LOGO */}
            <div className="w-28 h-28 rounded-full border border-[#2563EB]/40 flex items-center justify-center mx-auto mb-6 backdrop-blur-sm bg-white/5 overflow-hidden">

              {/* your logo — INCREASED SIZE */}
              <img
                src={logo}
                alt="CARS Logo"
                className="w-20 h-20 object-contain"
              />

            </div>


          <h3 className="text-2xl font-semibold text-white">
            Smart Operations Platform
          </h3>

          <p className="text-gray-400 mt-3 max-w-xs mx-auto">
            Centralized dashboards, secure workflows and scalable infrastructure
            built for enterprise-level assessment management.
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


      {/* USE CASES — MOVAL PREMIUM STYLE */}
      <section className="relative bg-black py-20 lg:py-28 overflow-hidden">

        {/* Blue glow background */}
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
            className="text-center mb-16"
          >

            <span className="inline-block px-4 py-1.5 bg-[#2563EB]/20 text-[#2563EB] text-sm font-medium rounded-full mb-4">
              Use Cases
            </span>

            <h2 className="text-[32px] md:text-[44px] lg:text-[48px] font-semibold text-white leading-[1.15]">
              Transform Assessment Workflows with
              <span className="text-[#2563EB]"> CARS Platform</span>
            </h2>

            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Built for insurance professionals, surveyors and assessment companies to streamline operations with AI automation.
            </p>

          </motion.div>


          {/* CONTENT GRID */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >

              {/* glow behind image */}
              <div className="absolute w-[500px] h-[500px] bg-[#2563EB] opacity-20 blur-[140px] rounded-full"></div>

              <img
                src={UseCaseBG}
                alt="Use cases"
                className="relative z-10 rounded-2xl border border-white/10"
              />

            </motion.div>


            {/* RIGHT CONTENT */}
            <div className="space-y-10">

              {[
                {
                  title: "Insurance Surveyors",
                  desc: "Manage multiple surveyors, assignments, and reports from a unified intelligent dashboard."
                },
                {
                  title: "Loss Assessors",
                  desc: "Track assessments across locations while ensuring compliance and operational efficiency."
                },
                {
                  title: "Assessment Companies",
                  desc: "Scale operations with centralized analytics, automation and secure cloud infrastructure."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.15 }}
                  className="flex items-start gap-5 group"
                >

                  {/* Icon circle */}
                  <div className="w-14 h-14 rounded-xl bg-[#2563EB]/20 flex items-center justify-center shrink-0 group-hover:bg-[#2563EB] transition">
                    <CheckCircle className="w-7 h-7 text-[#2563EB] group-hover:text-white" />
                  </div>

                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-2 group-hover:text-[#2563EB] transition">
                      {item.title}
                    </h3>

                    <p className="text-gray-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                </motion.div>
              ))}

            </div>

          </div>

        </div>
      </section>




      {/* CTA Section */}
      {/* CTA Section — CARS PREMIUM MATCH THEME */}
      <section className="relative bg-black py-28 px-6 lg:px-8 overflow-hidden">

        {/* Soft background glow */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                  w-[800px] h-[800px] bg-[#2563EB] opacity-10 blur-[220px] rounded-full" />

        {/* subtle divider line */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r 
                  from-transparent via-white/10 to-transparent" />

        <div className="relative max-w-6xl mx-auto text-center">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center"
          >

            {/* Tag */}
            <span className="px-4 py-1.5 bg-[#2563EB]/20 text-[#2563EB] 
                       text-sm font-medium rounded-full mb-6">
              Ready to Transform?
            </span>

            {/* Heading */}
            <h2 className="text-[32px] md:text-[44px] lg:text-[48px] font-semibold leading-[1.1] text-white max-w-4xl">
              Transform Assessment Workflows with
              <span className="text-[#2563EB]"> CARS Platform</span>
            </h2>

            {/* Description */}
            <p className="mt-6 text-white/70 text-lg max-w-2xl">
              Designed for surveyors, loss assessors, and assessment companies,
              CARS streamlines inspections, automates reporting, improves
              collaboration, and accelerates decision-making using intelligent tools.
            </p>

            {/* Buttons */}
            <div className="mt-12 flex flex-col sm:flex-row gap-5">

              {/* Primary Button */}
              <a
                href="/request-demo"
                className="
            px-8 py-4
            rounded-xl
            bg-[#2563EB]
            text-white
            font-semibold
            transition-all duration-300
            hover:scale-[1.04]
            active:scale-[0.98]
            shadow-lg
            hover:shadow-[0_0_30px_rgba(37,99,235,0.4)]
          "
              >
                Request CARS Demo
              </a>

              {/* Secondary Button */}
              <a
                href="/contact"
                className="
            px-8 py-4
            rounded-xl
            border border-white/15
            text-white
            font-semibold
            transition-all duration-300
            hover:border-[#2563EB]
            hover:text-[#2563EB]
            hover:scale-[1.04]
            active:scale-[0.98]
          "
              >
                Explore Use Cases
              </a>

            </div>

          </motion.div>

        </div>
      </section>
    </div>
  );
};

export default CARSPage;
