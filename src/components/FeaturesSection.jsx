import React from "react";
import { motion } from "framer-motion";

const features = [
    {
        title: "FNOL Triage",
        points: [
            "INSTANT CLAIM CLASSIFICATION — Capture FNOL photos to instantly classify claims as total loss, repairable, or cash settlement.",
            "FASTER CASH SETTLEMENTS — Offer AI-verified cash settlements for quicker resolutions.",
            "PERSONALIZED CUSTOMER JOURNEYS — Guide customers with personalized journeys to boost satisfaction."
        ]
    },
    {
        title: "AI-generated Preliminary Estimate",
        points: [
            "AI-VERIFIED ESTIMATES — Automatically pre-fill repair cost estimates with AI-verified accuracy.",
            "FASTER, EASIER ADJUSTMENTS — Reduce manual effort for adjusters, improving cycle time."
        ]
    },
    {
        title: "Claim Review",
        points: [
            "AI-POWERED FRAUD DETECTION — Detect potential errors or fraud with AI-driven claim review.",
            "FAIR AND CONSISTENT CLAIMS SETTLEMENTS — Ensure consistency and fairness in claim settlements."
        ]
    },
    {
        title: "Subrogation",
        points: [
            "FASTER RECOVERIES WITH DATA-DRIVEN INSIGHTS — Accelerate subrogation recoveries through precise, data-backed insights.",
            "AUTOMATED SUBROGATION REVIEWS AND REPORTS — Automate the review of in-bound subrogation packets and reports."
        ]
    }
];

export default function FeaturesSection() {
    return (
        <section className="relative bg-black py-24 overflow-hidden">

            {/* soft blue glow */}
            <div className="absolute inset-0 flex justify-center pointer-events-none">
                <div className="w-[900px] h-[900px] bg-[#2563EB] opacity-10 blur-[220px] rounded-full" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <span className="inline-block px-4 py-1.5 bg-[#2563EB]/20 text-[#2563EB] text-sm font-medium rounded-full mb-4">
                        Platform Capabilities
                    </span>

                    <h2 className="text-[32px] md:text-[44px] lg:text-[48px] font-semibold leading-[1.15] text-white">
                        AI-Driven <span className="text-[#2563EB]">Claims Automation</span>
                    </h2>

                    <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                        End-to-end automation designed for modern insurance operations
                    </p>
                </motion.div>

                {/* GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                    {features.map((feature, idx) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="
                relative rounded-2xl border border-white/10
                bg-white/5 backdrop-blur-xl
                p-8 hover:border-[#2563EB]/50
                transition-all duration-300
              "
                        >
                            {/* glow on hover */}
                            <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition">
                                <div className="absolute inset-0 bg-[#2563EB] opacity-10 blur-2xl rounded-2xl" />
                            </div>

                            <div className="
                px-6 py-6
                bg-gradient-to-r
                from-[#0B1220]
                via-[#0F1C3F]
                to-[#2563EB]
                border-b border-white/10
                ">
                                <h3 className="text-white text-xl font-semibold tracking-tight">
                                    {feature.title}
                                </h3>
                            </div>
                            <ul className="relative space-y-5">
                                {feature.points.map((point, i) => (
                                    <li key={i} className="flex gap-4 items-start relative">
                                        {/* Vertical Timeline Line */}
                                        {i < feature.points.length - 1 && (
                                            <div
                                                className="absolute left-[3.5px] top-[28px] w-[1px] h-[calc(100%+20px)] bg-[#2563EB]/20"
                                                aria-hidden="true"
                                            />
                                        )}
                                        <span className="mt-6 w-2 h-2 rounded-full bg-[#2563EB] shrink-0 relative z-10 shadow-[0_0_10px_rgba(37,99,235,0.4)]" />
                                        <p className="text-gray-300 leading-relaxed text-sm mt-5 relative z-10">
                                            {point}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
}