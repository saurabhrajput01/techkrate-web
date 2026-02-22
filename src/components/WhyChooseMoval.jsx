"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const benefits = [
  {
    title: "Work From Anywhere Infrastructure",
    content:
      "Complete freedom from office restrictions with work-from-anywhere access, real-time claims database, mobile-first remote management, and no dependency on office workstations.",
  },
  {
    title: "Integrated Survey Solutions",
    content:
      "Revolutionary integrated survey solutions, including Mobile App Survey, Motor Survey Link, real-time data sync, and instant report readiness without manual errors.",
  },
  {
    title: "Automated Assessment & Calculation",
    content:
      "Advanced automated assessment and calculation tools with error-free engines, automated GST management, smart HSN categorisation, and precise parts and labour loss breakdown.",
  },
  {
    title: "Complete Report Generation Suite",
    content:
      "Complete 16-type report generation suite covering Liability/DO Letters, Status & Preliminary Reports, Bill Check Reports, Scrutiny Sheets, Motor Analysis Sheets, Work Approval & Settlement Sheets, Final Reports, RI, and Fee Bill.",
  },
  {
    title: "Specialised Assessment Reports",
    content:
      "Specialised assessment reports including Net of Salvage (Repair Basis), Total Loss, Net of Sal. (TLB) with/without RC, Cash Loss, and Return To Invoice (RTI) with/without RC.",
  },
  {
    title: "Integrated GST Compliance System",
    content:
      "Integrated GST compliance system generating GSTR-1 and GSTR reports for automated tax filing and regulatory compliance.",
  },
];

export default function WhyChooseMoval() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT RECTANGLE FEATURE BOX */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative bg-[#111111] p-12 rounded-2xl border border-gray-800"
        >
          <div className="absolute -top-6 left-8 bg-blue-600 text-white px-4 py-1 text-sm rounded-full">
            Smart Claims AI
          </div>

          <h3 className="text-3xl font-semibold text-white mb-6">
            Transforming Insurance Technology
          </h3>

          <p className="text-gray-400 leading-relaxed">
            AI-driven automation, faster claim decisions, real-time analytics,
            and secure cloud infrastructure designed for next-generation
            insurance platforms.
          </p>

          <div className="mt-8 border-t border-gray-800 pt-6">
            <p className="text-blue-400 font-medium">
              Scalable • Secure • Automated • Cloud Ready
            </p>
          </div>
        </motion.div>

        {/* RIGHT SIDE CONTENT */}
        <div>
          <span className="inline-block px-4 py-1.5 bg-[#2563EB]/20 text-[#2563EB] text-sm font-medium rounded-full mb-4">
            Why Choose Moval
          </span>

          <h2 className="text-4xl font-semibold text-white mt-4 mb-6">
            Revolutionising Insurance Operations
          </h2>

          <p className="text-gray-400 mb-10 leading-relaxed">
            Transform claims workflows with automation, intelligence and speed —
            designed for modern insurance ecosystems.
          </p>

          {/* ACCORDION */}
          <div className="space-y-6">
            {benefits.map((item, index) => (
              <div key={index} className="border-b border-gray-800 pb-4">

                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center text-left group"
                >
                  <span className="text-lg text-white font-medium group-hover:text-blue-400 transition">
                    {item.title}
                  </span>

                  <ChevronDown
                    className={`w-5 h-5 text-blue-500 transition-transform duration-300 ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-gray-400 mt-4 leading-relaxed pr-6"
                    >
                      {item.content}
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}