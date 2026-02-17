"use client";

import React, { useEffect, useState } from "react";

const desktopFeatures = [
  { title: "AI-Driven Automation", angle: -90 },
  { title: "Data Analytics & Insights", angle: -30 },
  { title: "System Integration", angle: 30 },
  { title: "Cloud Solutions", angle: 90 },
  { title: "IRDA Compliance", angle: 150 },
  { title: "Mobile-First Design", angle: 210 },
];

export default function Features() {
  const [size, setSize] = useState(650);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 480) setSize(320); // mobile ultra compact
      else if (window.innerWidth < 768) setSize(480); // tablet
      else setSize(650); // desktop
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const center = size / 2;
  const radius = size * 0.4;
  const nodeRadius = size * 0.04;
  const centerCircleRadius = size * 0.34 / 2; // center circle radius

  // adaptive angles for mobile
  const features =
    size < 480
      ? desktopFeatures.map((f, i) => ({ ...f, angle: -90 + i * 60 }))
      : desktopFeatures;

  return (
    <section className="relative bg-black py-24 overflow-hidden">

      {/* Glow background */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-[900px] h-[900px] bg-[#2563EB] opacity-10 blur-[240px] rounded-full" />
      </div>

      {/* Header */}
      <div className="relative z-10 text-center mb-20 px-4">
        {/* BUTTON */}
        <span className="inline-block px-4 py-1.5 bg-[#2563EB]/20 text-[#2563EB] text-sm font-medium rounded-full mb-4">
          Features & Capabilities
        </span>

        {/* HEADING */}
        <h2 className="text-[32px] md:text-[44px] lg:text-[48px] text-white font-semibold leading-[1.15] mb-3">
          Enterprise-Grade Platform
        </h2>

        {/* SUBHEADING */}
        <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg lg:text-xl">
          Everything you need to transform your claims processing workflow
        </p>
      </div>

      {/* Radial container */}
      <div className="relative mx-auto" style={{ width: size, height: size }}>

        {/* Rotated dotted rings */}
        {[0.8, 0.58, 0.4].map((factor, idx) => (
          <div
            key={idx}
            className="absolute inset-1/2 rounded-full border border-dashed border-white/20"
            style={{
              width: size * factor,
              height: size * factor,
              transform: "translate(-50%,-50%)",
              animation: `slow-rotate ${60 + idx * 30}s linear infinite ${idx % 2 ? "reverse" : ""}`,
              boxShadow: "0 0 30px rgba(37,99,235,0.3)",
            }}
          />
        ))}

        {/* Center circle */}
        <div
          className="absolute flex items-center justify-center bg-white/5 border border-white/10 backdrop-blur-xl z-10"
          style={{
            width: size * 0.34,
            height: size * 0.34,
            borderRadius: "50%",
            left: center,
            top: center,
            transform: "translate(-50%,-50%)",
          }}
        >
          <p className="text-[#2563EB] font-bold text-center px-4 text-lg md:text-xl lg:text-2xl">
            Enterprise Claims Platform
          </p>
        </div>

        {/* SVG lines (connect center circle edge → nodes) */}
        <svg className="absolute inset-0 pointer-events-none z-0" width={size} height={size}>
          {features.map((item, index) => {
            const rad = (item.angle * Math.PI) / 180;

            const startX = center + centerCircleRadius * Math.cos(rad);
            const startY = center + centerCircleRadius * Math.sin(rad);

            const endX = center + (radius - nodeRadius) * Math.cos(rad);
            const endY = center + (radius - nodeRadius) * Math.sin(rad);

            return (
              <line
                key={index}
                x1={startX}
                y1={startY}
                x2={endX}
                y2={endY}
                stroke="rgba(37,99,235,0.8)"
                strokeWidth="2"
                style={{ filter: "drop-shadow(0 0 4px rgba(37,99,235,0.5))" }}
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
              className="absolute group"
              style={{
                left: center + x,
                top: center + y,
                transform: "translate(-50%,-50%)",
              }}
            >
              {/* Feature title */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-white text-[11px] md:text-sm lg:text-base whitespace-nowrap font-medium">
                {item.title}
              </div>

              {/* Feature node */}
              <div
                className="rounded-full border border-[#2563EB] bg-[#2563EB]/20 flex items-center justify-center text-[#2563EB] font-semibold transition-all duration-300 group-hover:scale-125 group-hover:shadow-[0_0_15px_rgba(37,99,235,0.6)]"
                style={{
                  width: nodeRadius * 2,
                  height: nodeRadius * 2,
                }}
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
