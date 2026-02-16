"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Bot,
  BarChart3,
  Network,
  CloudCog,
  Shield,
  Smartphone,
} from "lucide-react";

const FeatureCard = ({ icon: Icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.03 }}
      className="
        flex items-center gap-6
        px-6 py-6
        bg-gradient-to-r from-[#0B1220] via-[#0F1C3F] to-[#2563EB]
        rounded-2xl
        border border-white/10
        hover:border-[#2563EB]
        transition-all duration-300
        shadow-lg shadow-[#2563EB]/20
      "
    >
      {/* ICON LEFT SIDE */}
      <div className="flex-shrink-0 flex items-center justify-center w-16 h-16">
        <Icon className="w-14 h-14 text-white transition-colors duration-300 group-hover:text-[#2563EB]" />
      </div>

      {/* TEXT */}
      <div>
        <h3 className="font-Helix text-white text-lg lg:text-xl font-semibold mb-1">
          {title}
        </h3>
        <p className="text-gray-200 text-sm lg:text-base leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};  

const Features = () => {
  const features = [
    {
      icon: Bot,
      title: "AI-Driven Automation",
      description:
        "Harness machine learning to automate repetitive tasks, reduce manual effort, and improve accuracy at scale.",
    },
    {
      icon: BarChart3,
      title: "Data Analytics & Insights",
      description:
        "Turn raw data into actionable intelligence with real-time dashboards and predictive analytics.",
    },
    {
      icon: Network,
      title: "System Integration",
      description:
        "Seamlessly connect legacy systems with modern platforms for unified operations and real-time data flow.",
    },
    {
      icon: CloudCog,
      title: "Cloud Solutions",
      description:
        "Secure, scalable infrastructure designed for high availability, disaster recovery, and enterprise compliance.",
    },
    {
      icon: Shield,
      title: "IRDA Compliance",
      description:
        "Built-in compliance with insurance regulatory requirements and reporting standards.",
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description:
        "Access your dashboard and manage claims on-the-go with our responsive mobile applications.",
    },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 xl:px-16">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-[#2563EB]/20 text-[#2563EB] text-sm font-medium rounded-full mb-4">
            Features & Capabilities
          </span>

          <h2 className="text-[32px] md:text-[44px] lg:text-[48px] font-semibold text-white leading-[1.15] mb-3">
            Enterprise-Grade Platform
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            Everything you need to transform your claims processing workflow
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              index={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
