
"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Bot,
  BarChart3,
  Handshake,
  Network,
  CloudCog,
  CodeSquare,
  Zap,
  Shield,
  Smartphone
} from "lucide-react";

const FeatureCard = ({ icon: Icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group bg-white/5 hover:bg-white/10 rounded-2xl p-8 lg:p-10 transition-all duration-300 border border-white/10 hover:border-white/30"
      style={{ fontFamily: "'Neue', sans-serif" }}
    >
      <div className="w-14 h-14 rounded-xl bg-blue-600/20 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
        <Icon className="w-7 h-7 text-blue-400 group-hover:text-white transition-colors duration-300" />
      </div>
      <h3 className="text-[20px] font-normal text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-[16px] text-gray-400 leading-[1.6] group-hover:text-gray-300 transition-colors duration-300">
        {description}
      </p>
    </motion.div>
  );
};

const Features = () => {
  const features = [
    {
      icon: Bot,
      title: "AI-Driven Automation",
      description: "Harness machine learning to automate repetitive tasks, reduce manual effort, and improve accuracy at scale."
    },
    {
      icon: BarChart3,
      title: "Data Analytics & Insights",
      description: "Turn raw data into actionable intelligence with real-time dashboards and predictive analytics."
    },
    {
      icon: Network,
      title: "System Integration",
      description: "Seamlessly connect legacy systems with modern platforms for unified operations and real-time data flow."
    },
    {
      icon: CloudCog,
      title: "Cloud Solutions",
      description: "Secure, scalable infrastructure designed for high availability, disaster recovery, and enterprise compliance."
    },
    {
      icon: Shield,
      title: "IRDA Compliance",
      description: "Built-in compliance with insurance regulatory requirements and reporting standards."
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Access your dashboard and manage claims on-the-go with our responsive mobile applications."
    }
  ];

  return (
    <section className="py-6 lg:py-12" style={{ fontFamily: "'Neue', sans-serif" }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 lg:mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-blue-600/20 text-blue-400 text-[17px] font-normal rounded-full mb-6">
            Features & Capabilities
          </span>
          <h2 className="text-[32px] md:text-[48px] font-normal tracking-[-0.01em] leading-[1.15] text-white mb-4">
            Enterprise-Grade Platform
          </h2>
          <p className="text-[17px] font-normal leading-[1.6] text-gray-400 max-w-2xl mx-auto">
            Everything you need to transform your claims processing workflow
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 pb-8 lg:pb-0">
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
