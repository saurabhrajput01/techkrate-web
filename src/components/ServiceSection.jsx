"use client";

import React from "react";

const features = [
  { title: "AI-Driven Automation", angle: -90 },
  { title: "Data Analytics & Insights", angle: -30 },
  { title: "System Integration", angle: 30 },
  { title: "Cloud Solutions", angle: 90 },
  { title: "IRDA Compliance", angle: 150 },
  { title: "Mobile-First Design", angle: 210 },
];

export default function Features() {
  const size = 650;
  const center = size / 2;
  const radius = 260;

  return (
    <section className="relative bg-black py-24 overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-[900px] h-[900px] bg-[#2563EB] opacity-10 blur-[240px] rounded-full" />
      </div>

      {/* Subtle Radial Depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.08),transparent_60%)]" />

      {/* Header */}
      <div className="relative z-10 text-center mb-28">
        <span className="inline-block px-4 py-1.5 bg-[#2563EB]/20 text-[#2563EB] text-sm font-medium rounded-full mb-4">
          Features & Capabilities
        </span>

        <h2 className="text-[32px] md:text-[44px] lg:text-[48px] text-white font-semibold leading-[1.15] mb-3">
          Enterprise-Grade Platform
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
          Everything you need to transform your claims processing workflow
        </p>
      </div>

      {/* Ring System */}
      <div className="relative mx-auto w-[650px] h-[650px]">
        {/* Rings */}
        <div
          className="absolute inset-1/2 w-[520px] h-[520px] rounded-full 
          border border-dashed border-white/10"
          style={{
            animation: "slow-rotate 60s linear infinite",
            transform: "translate(-50%, -50%)",
          }}
        />

        <div
          className="absolute inset-1/2 w-[380px] h-[380px] rounded-full 
          border border-dashed border-white/10"
          style={{
            animation: "slow-rotate 90s linear infinite reverse",
            transform: "translate(-50%, -50%)",
          }}
        />

        <div
          className="absolute inset-1/2 w-[260px] h-[260px] rounded-full 
          border border-dashed border-white/10"
          style={{
            animation: "slow-rotate 120s linear infinite",
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* Center Core */}
        <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 
          w-[220px] h-[220px] rounded-full 
          bg-white/5 border border-white/10 backdrop-blur-xl 
          flex items-center justify-center 
          shadow-[0_0_60px_rgba(37,99,235,0.15)]
          animate-pulse"
        >
          <p className="text-white font-extrabold text-center px-6 text-[22px] leading-snug tracking-wide">
        Enterprise Claims Platform
      </p>

        </div>

        {/* Connector Lines */}
        <svg
          className="absolute inset-0 pointer-events-none"
          width={size}
          height={size}
        >
          {features.map((item, index) => {
            const rad = (item.angle * Math.PI) / 180;
            const nodeRadius = 20;

            const endX = center + (radius - nodeRadius) * Math.cos(rad);
            const endY = center + (radius - nodeRadius) * Math.sin(rad);

            return (
              <line
                key={index}
                x1={center}
                y1={center}
                x2={endX}
                y2={endY}
                stroke="rgba(255,255,255,0.25)"
                strokeWidth="1"
              />
            );
          })}
        </svg>

        {/* Nodes */}
        {features.map((item, index) => {
          const rad = (item.angle * Math.PI) / 180;
          const x = radius * Math.cos(rad);
          const y = radius * Math.sin(rad);

          return (
            <div
              key={index}
              className="absolute left-1/2 top-1/2 group"
              style={{
                transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
              }}
            >
              {/* Title */}
            <div
            className="absolute -top-9 left-1/2 -translate-x-1/2
                      text-center
                      text-white text-[18px] font-semibold tracking-wide
                      whitespace-nowrap opacity-90
                      transition-all duration-300
                      group-hover:opacity-100 group-hover:text-[#60A5FA]"
          >
            {item.title}
          </div>


              {/* Number */}
              <div
                className="w-10 h-10 rounded-full 
                border border-[#2563EB] 
                bg-[#2563EB]/20
                flex items-center justify-center 
                text-[#2563EB] 
                text-sm font-semibold 
                shadow-[0_0_14px_rgba(37,99,235,0.35)]
                transition-all duration-300
                group-hover:scale-110
                group-hover:shadow-[0_0_24px_rgba(37,99,235,0.6)]"
              >
                {String(index + 1).padStart(2, "0")}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
