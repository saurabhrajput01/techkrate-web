import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle,  Building2,
  ShieldCheck,
  RefreshCw,
  FileSignature,
  Cloud,
  Calculator} from "lucide-react";
import CARSLogo from "../assets/image/CARSLogo.jpg";
import CarsBG from "../assets/image/Cars-bg.jpg";
import UseCaseBG from "../assets/image/use-case.jpg";
import logo from "../assets/image/logo.svg";
import CarFAQSection from "../components/CarFAQSection";

const CARSPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsVisible(true);
  }, []);

  const features = [
  {
    icon: Building2,
    title: "Multi-Office Access",
    description:
      "All branches and remote offices operate on a single centralised platform with no duplication or disconnected spreadsheets."
  },
  {
    icon: ShieldCheck,
    title: "Role-Based Access Control",
    description:
      "Admin, CE, and Office Staff access only the functions and data relevant to their assigned role."
  },
  {
    icon: RefreshCw,
    title: "Real-Time Status Tracking",
    description:
      "Assignments move through defined stages — Data Entry, CE Review, Admin Approval, and Issued — with live status visibility."
  },
  {
    icon: FileSignature,
    title: "Digital Signature on Certificate",
    description:
      "Approved certificates carry the CE’s digital signature, ensuring legal validity for Customs and DGFT submission."
  },
  {
    icon: Cloud,
    title: "Secure Cloud Access",
    description:
      "Hosted on secure cloud infrastructure with encryption and backups, accessible from any office or device."
  },
  {
    icon: Calculator,
    title: "Auto Depreciation & Market Valuation",
    description:
      "Automatically calculates machine value using age-wise depreciation norms, with CE review and confirmation."
  },
  {
    icon: FileSignature,
    title: "Excel-Based Bulk Import",
    description:
      "Office staff can upload a pre-formatted Excel file to import multiple machinery details directly into the system, eliminating repetitive manual entry and reducing errors."
  },
  {
    icon: ShieldCheck,
    title: "QR Code on Every Certificate",
    description:
      "Every issued CE certificate includes a unique QR code that allows customs officers to instantly verify certificate details and raise queries directly through the platform."
  },
  {
    icon: Cloud,
    title: "Machinery Photograph Upload & Auto-Alignment",
    description:
      "Photographs of each machine can be uploaded and automatically formatted into a structured photo annexure within the generated CE certificate."
  }

];

  const benefits = [
  "Standardised Output: Every certificate from every office follows the same approved format and approval chain",
  "Zero Unauthorised Issuance: Letterhead lock ensures no certificate is released without Admin approval",
  "Accurate Master Data: Ports, CHA details, and terms maintained centrally — eliminating errors in legally sensitive fields",
  "Full Admin Oversight: Real-time visibility across all offices and assignments from a single dashboard",
  "Faster Turnaround: Structured digital workflow replaces email chains and manual coordination between offices",
  "Audit-Ready: Complete time stamped records for regulatory compliance and internal governance",
  "Scalable: On-board new offices or staff without additional process complexity",
  "Controlled Consignee Access: Auto-generated expiry links let consignees access the assessed value securely — with the Admin setting exactly how long each link remains valid"
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
          max-w-6xl
        "
      >
       Consignment Appraisal &<br />
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

        {benefits.slice(0, 4).map((item, index) => (

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
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6 }}
  className="relative bg-[#0B0F19] border border-white/10 rounded-2xl px-8 py-10 text-center shadow-xl transition duration-500 hover:border-[#2563EB]/40 hover:shadow-[#2563EB]/10"
>

  {/* Icon Circle */}
  <div className="w-24 h-24 rounded-full border border-[#2563EB]/30 flex items-center justify-center mx-auto mb-6 bg-black">

    <img
      src={logo}
      alt="CARS Logo"
      className="w-16 h-16 object-contain"
    />

  </div>

  <h3 className="text-2xl font-semibold text-white">
    Smart Operations Platform
  </h3>

 <div className="mt-6 grid grid-cols-2 gap-2 max-w-xs mx-auto text-xs text-gray-400">

  <span className="px-3 py-1.5 text-center border border-white/10 rounded-md bg-white/[0.02] hover:border-[#2563EB]/40 hover:text-white transition">
    Multi-Office 
  </span>

  <span className="px-3 py-1.5 text-center border border-white/10 rounded-md bg-white/[0.02] hover:border-[#2563EB]/40 hover:text-white transition">
    Approval-Controlled 
  </span>

  <span className="px-3 py-1.5 text-center border border-white/10 rounded-md bg-white/[0.02] hover:border-[#2563EB]/40 hover:text-white transition">
    Admin-Governed Master Data
  </span>

  <span className="px-3 py-1.5 text-center border border-white/10 rounded-md bg-white/[0.02] hover:border-[#2563EB]/40 hover:text-white transition">
    Auto Valuation
  </span>

  <span className="px-3 py-1.5 text-center border border-white/10 rounded-md bg-white/[0.02] hover:border-[#2563EB]/40 hover:text-white transition">
    QR-Enabled 
  </span>

  <span className="px-3 py-1.5 text-center border border-white/10 rounded-md bg-white/[0.02] hover:border-[#2563EB]/40 hover:text-white transition">
    Expiry-Controlled Consignee Links
  </span>

  <span className="px-3 py-1.5 text-center border border-white/10 rounded-md bg-white/[0.02] hover:border-[#2563EB]/40 hover:text-white transition col-span-2">
    DGFT & FTP Compliance
  </span>

</div>
</motion.div>
      </div>


      {/* RIGHT BENEFITS */}
      <div className="space-y-10 text-left">

        {benefits.slice(4, 8).map((item, index) => (

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


 {/* //use case section */}
<section className="relative bg-black py-24 lg:py-32 overflow-hidden">

{/* glow background */}
<div className="absolute inset-0 flex justify-center pointer-events-none">
  <div className="w-[1000px] h-[1000px] bg-[#2563EB] opacity-10 blur-[220px] rounded-full"></div>
</div>

<div className="relative max-w-[1400px] mx-auto px-6">

{/* HEADER */}
<div className="text-center mb-24">

<span className="inline-block px-4 py-1.5 bg-[#2563EB]/20 text-[#2563EB] text-sm font-medium rounded-full mb-4">
Platform Highlights
</span>

<h2 className="text-[34px] md:text-[46px] lg:text-[52px] font-semibold text-white leading-[1.1]">
CARS <span className="text-[#2563EB]">Highlights</span>
</h2>

<p className="text-gray-400 mt-4 max-w-2xl mx-auto text-[16px] leading-relaxed">
Key capabilities that streamline machinery valuation, certification, and customs verification.
</p>

</div>

{/* FLOW */}
<div className="relative">

{/* timeline line */}
<div className="hidden xl:block absolute left-0 right-0 top-10 h-[2px] bg-gradient-to-r from-transparent via-[#2563EB]/40 to-transparent"></div>

<div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">

{[
{
title:"Auto-Calculated Valuation",
desc:"Current market value is computed automatically using age-wise depreciation norms ensuring consistency across certificates."
},
{
title:"Excel Import — No Bulk Data Entry",
desc:"Multi-machine consignment data can be imported directly from Excel saving time and reducing processing errors."
},
{
title:"QR Code — Real-Time",
desc:"Customs officers can scan the QR code on any issued certificate for instant verification and validation."
},
{
title:"Customs Query",
desc:"Customs can raise a query instantly which reaches the Chartered Engineer in real time for faster resolution."
},
{
title:"Auto-Aligned Photograph Annexure",
desc:"Machine photographs are automatically formatted and appended as a structured annexure in the certificate."
},
{
title:"Auto-Generated Expiry Link",
desc:"Secure time-limited sharing link automatically generated for consignee certificate access."
}
].map((item,index)=>(

<div key={index} className="flex flex-col items-center group h-full">

{/* circle */}
<div className="w-20 h-20 rounded-full border border-[#2563EB]/40 bg-[#0B0F19]
flex items-center justify-center text-[#2563EB] text-lg font-semibold
group-hover:bg-[#2563EB] group-hover:text-white
group-hover:scale-110 transition-all duration-300 mb-6">
{index+1}
</div>

{/* card */}
<div className="flex flex-col h-full w-full bg-white/5 backdrop-blur-md
border border-white/10 rounded-xl p-6
hover:border-[#2563EB]/60
hover:shadow-[0_0_25px_rgba(37,99,235,0.35)]
transition-all duration-300">

{/* accent line */}
<div className="w-10 h-[2px] bg-[#2563EB] mx-auto mb-4"></div>

{/* heading */}
{/* heading */}
<h3 className="text-white font-semibold text-[17px] leading-[1.35] mb-3 text-center line-clamp-2 min-h-[44px]">
{item.title}
</h3>

<p className="text-gray-400 text-[15px] leading-[1.7] text-left max-w-[260px] mx-auto flex-grow">
{item.desc}
</p>
</div>

</div>

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
      <CarFAQSection/>
    </div>
  );
};

export default CARSPage;
