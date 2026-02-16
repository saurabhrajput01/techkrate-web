import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "How does Moval AI reduce claim cycle times?",
        answer:
            "By automating FNOL triage, AI-based damage assessment, and estimate pre-population, Moval significantly accelerates decision-making and settlement workflows."
    },
    {
        question: "What types of damage can Moval AI assess?",
        answer:
            "Moval AI assesses vehicle exterior and structural damage using image intelligence, document analysis, and historical claims data."
    },
    {
        question: "Is Moval AI compatible with existing insurance systems?",
        answer:
            "Yes. Moval integrates seamlessly with core insurance platforms, claims management systems, and third-party tools via secure APIs."
    },
    {
        question: "How does Moval ensure fairness in claim settlements?",
        answer:
            "AI-driven validations, standardized workflows, and audit-ready decision logs ensure consistent and unbiased claim settlements."
    },
    {
        question: "How does AI impact customer satisfaction?",
        answer:
            "Faster resolutions, transparent decisions, and reduced manual delays lead to improved customer experience and higher satisfaction scores."
    }
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="relative bg-black py-24 overflow-hidden">

            {/* soft blue glow */}
            <div className="absolute inset-0 flex justify-center pointer-events-none">
                <div className="w-[900px] h-[900px] bg-[#2563EB] opacity-10 blur-[220px] rounded-full" />
            </div>

            <div className="relative max-w-4xl mx-auto px-6 lg:px-8">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-12"
                >
                    <h2 className="text-[32px] md:text-[44px] lg:text-[48px] font-semibold leading-[1.15] text-white">
                        Do you have <span className="text-[#2563EB]">any questions?</span>
                    </h2>
                </motion.div>

                {/* FAQ List */}
                <div className="divide-y divide-white/10">

                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div key={index} className="py-6">

                                {/* Question */}
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="w-full flex items-center justify-between text-left"
                                >
                                    <span className="text-lg font-medium text-white">
                                        {faq.question}
                                    </span>

                                    <ChevronDown
                                        className={`w-5 h-5 text-[#2563EB] transition-transform ${isOpen ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>

                                {/* Answer */}
                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <p className="mt-4 text-gray-400 leading-relaxed max-w-3xl">
                                                {faq.answer}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                            </div>
                        );
                    })}

                </div>
            </div>
        </section>
    );
}
