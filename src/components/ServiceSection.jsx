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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="relative group rounded-2xl pt-20 pb-8 px-6 lg:px-8 min-h-[220px] bg-black/20 hover:bg-black/30 transition-all duration-300"
    >
      {/* ICON */}
      <div className="absolute top-6 left-6 w-16 h-16 flex items-center justify-center">
        <Icon className="w-12 h-12 text-blue-400 group-hover:text-white transition-colors duration-300" />
      </div>

      {/* CONTENT (SPACING ADDED HERE) */}
      <div className="mt-6">
        <h3 className="font-Helix text-white text-xl lg:text-2xl mb-2 group-hover:text-blue-400 transition-colors duration-300">
          {title}
        </h3>

        <p className="text-gray-400 text-sm lg:text-base leading-6 group-hover:text-gray-300 transition-colors duration-300">
          {description}
        </p>
      </div>

      {/* BORDER */}
      <div className="absolute inset-0 border border-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
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
      {/* PROFESSIONAL LEFT RIGHT SPACING (LIKE ENTERPRISE SITES) */}
  <div className="max-w-[1400px] mx-auto px-6 lg:px-12 xl:px-16">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-blue-600/20 text-blue-400 text-sm font-medium rounded-full mb-4">
            Features & Capabilities
          </span>

          <h2 className="font-Helix text-[32px] md:text-[44px] lg:text-[48px] text-white leading-[1.15] mb-3">
            Enterprise-Grade Platform
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            Everything you need to transform your claims processing workflow
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
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
