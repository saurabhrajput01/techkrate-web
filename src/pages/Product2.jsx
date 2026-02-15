import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Building2, Users, FileCheck, BarChart3, Globe, Lock } from "lucide-react";
import CARSLogo from "../assets/image/CARSLogo.jpg";
import CarsBG from "../assets/image/Cars-bg.jpg";
import UseCaseBG from "../assets/image/use-case.jpg";

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
<div className="min-h-screen bg-black text-white font-sans">
     
      {/* CARS HERO SECTION — MOVAL STYLE */}
{/* CARS HERO SECTION — DESIGN RULE FIXED */}
<section 
  className="relative bg-black overflow-hidden pt-28 pb-24"
  style={{
    fontFamily: "Inter, sans-serif",
    letterSpacing: "-0.01em",
  }}
>

  {/* Soft Blue Glow */}
  <div className="absolute right-[-200px] top-1/2 -translate-y-1/2 
                  w-[800px] h-[800px] bg-[#1F86C7] opacity-10 blur-[200px] rounded-full"></div>

  {/* Background Image */}
  <div
    className="absolute inset-0 w-full h-full bg-cover bg-center opacity-40"
    style={{ backgroundImage: `url(${CarsBG})` }}
  />
  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

  <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

    <div className="flex flex-col lg:flex-row items-center justify-between gap-20">

      {/* LEFT CONTENT */}
      <div className="flex-1 max-w-2xl text-center lg:text-left">

        {/* LOGO + BRAND */}
        <div className="flex items-center justify-center lg:justify-start gap-3 mb-8">

          <img
        src={CARSLogo}
        alt="CARS Logo"
        className="h-12 w-auto opacity-90"
      />

      


        </div>

{/* Heading */}
        <h1 className="
          text-[44px] md:text-[60px] 
          font-light tracking-[-0.03em] 
          leading-[1.05] text-white
          ">
          Unified Assessment <br />
          <span className="block mt-2 text-[46px] md:text-[64px]
            font-medium tracking-[-0.03em]
            bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-300
            bg-clip-text text-transparent">
            & Reporting System
          </span>
          </h1>

          <p className="mt-6 text-[18px] md:text-[19px]
            font-light leading-[1.9]
            text-gray-400 max-w-lg">
          Streamlined workflows, real-time quality control, and comprehensive
          analytics designed for efficient multi-office assessment management.
          </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">

          <a
            href="/request-demo"
            className="
              inline-flex items-center gap-2 justify-center
              px-10 py-4 rounded-full
              bg-white text-black font-medium text-[15px]
              hover:scale-[1.04]
              transition-all duration-300
            "
          >
            Request a demo
          </a>

        </div>

      </div>

    </div>

  </div>
</section>

{/* Key Features Section – CARS (Moval-style) */}
{/* Features Section — CARS PREMIUM (Moval Style) */}
<section className="bg-black py-16 lg:py-24 relative overflow-hidden">

  {/* soft glow background */}
  <div className="absolute inset-0 flex justify-center pointer-events-none">
    <div className="w-[900px] h-[900px] bg-[#1F86C7] opacity-10 blur-[220px] rounded-full"></div>
  </div>

  <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

    {/* Section Header */}
    <motion.div
      initial={{ opacity:0, y:30 }}
      whileInView={{ opacity:1, y:0 }}
      viewport={{ once:true }}
      transition={{ duration:0.8 }}
      className="text-center mb-14"
    >

      <span className="inline-block px-4 py-1.5 bg-[#1F86C7]/20 text-[#1F86C7] text-sm font-medium rounded-full mb-4">
        Key Features
      </span>

<h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-white">
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
  initial={{ opacity:0, y:30 }}
  whileInView={{ opacity:1, y:0 }}
  viewport={{ once:true }}
  transition={{ duration:0.6, delay:index*0.1 }}
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
    bg-[#1F86C7]/20
    flex items-center justify-center
    mb-4
    group-hover:bg-[#1F86C7]
    transition-colors duration-300
  ">
    <Icon className="w-8 h-8 text-[#1F86C7] group-hover:text-white transition"/>
  </div>

  {/* Title */}
  <h3 className="
 text-lg md:text-xl font-semibold text-white mb-2
 group-hover:text-[#1F86C7]
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
    <div className="w-[900px] h-[900px] bg-[#1F86C7] opacity-10 blur-[220px] rounded-full"></div>
  </div>

  <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

    {/* SECTION HEADER */}
    <motion.div
      initial={{ opacity:0, y:30 }}
      whileInView={{ opacity:1, y:0 }}
      viewport={{ once:true }}
      transition={{ duration:0.8 }}
      className="text-center mb-16 lg:mb-20"
    >

      <span className="inline-block px-4 py-1.5 bg-[#1F86C7]/20 text-[#1F86C7] text-sm font-medium rounded-full mb-4">
        Why Choose CARS
      </span>

<h2 className="text-4xl md:text-5xl font-normal text-white">
        Built for <span className="text-[#1F86C7]">Enterprise Assessment Teams</span>
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

        {benefits.slice(0,3).map((item,index)=>(

          <motion.div
            key={index}
            initial={{ opacity:0, x:-30 }}
            whileInView={{ opacity:1, x:0 }}
            transition={{ delay:index*0.1 }}
            className="flex items-start justify-end gap-4 group"
          >

            <p className="text-gray-300 group-hover:text-white transition">
              {item}
            </p>

            <CheckCircle className="w-6 h-6 text-[#1F86C7] shrink-0 mt-1"/>

          </motion.div>

        ))}

      </div>


      {/* CENTER FEATURE (FOCUS VISUAL) */}
      <div className="flex justify-center relative">

        {/* glowing center */}
        <div className="absolute w-[350px] h-[350px] bg-[#1F86C7] opacity-20 blur-[120px] rounded-full"></div>

        <motion.div
          initial={{ opacity:0, scale:0.9 }}
          whileInView={{ opacity:1, scale:1 }}
          transition={{ duration:0.6 }}
          className="relative text-center"
        >

          <div className="w-28 h-28 rounded-full border border-[#1F86C7]/40 flex items-center justify-center mx-auto mb-6 backdrop-blur-sm bg-white/5">
            <Building2 className="w-12 h-12 text-[#1F86C7]" />
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

        {benefits.slice(3,6).map((item,index)=>(

          <motion.div
            key={index}
            initial={{ opacity:0, x:30 }}
            whileInView={{ opacity:1, x:0 }}
            transition={{ delay:index*0.1 }}
            className="flex items-start gap-4 group"
          >

            <CheckCircle className="w-6 h-6 text-[#1F86C7] shrink-0 mt-1"/>

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
      initial={{ opacity:0, y:30 }}
      whileInView={{ opacity:1, y:0 }}
      viewport={{ once:true }}
      transition={{ duration:0.8 }}
      className="text-center mb-16"
    >

      <span className="inline-block px-4 py-1.5 bg-[#2563EB]/20 text-[#2563EB] text-sm font-medium rounded-full mb-4">
        Use Cases
      </span>

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-white">
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
        initial={{ opacity:0, x:-40 }}
        whileInView={{ opacity:1, x:0 }}
        transition={{ duration:0.8 }}
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
            title:"Insurance Surveyors",
            desc:"Manage multiple surveyors, assignments, and reports from a unified intelligent dashboard."
          },
          {
            title:"Loss Assessors",
            desc:"Track assessments across locations while ensuring compliance and operational efficiency."
          },
          {
            title:"Assessment Companies",
            desc:"Scale operations with centralized analytics, automation and secure cloud infrastructure."
          }
        ].map((item,index)=>(
          <motion.div
            key={index}
            initial={{ opacity:0, x:40 }}
            whileInView={{ opacity:1, x:0 }}
            transition={{ delay:index*0.15 }}
            className="flex items-start gap-5 group"
          >

            {/* Icon circle */}
            <div className="w-14 h-14 rounded-xl bg-[#2563EB]/20 flex items-center justify-center shrink-0 group-hover:bg-[#2563EB] transition">
              <CheckCircle className="w-7 h-7 text-[#2563EB] group-hover:text-white"/>
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
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal leading-[1.1] text-white max-w-4xl">
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
