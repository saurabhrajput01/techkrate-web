import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "Can I operate Moval without being physically present in my office?",
        answer:
            "Yes. Moval provides complete freedom from office restrictions, allowing you to work from home, field locations, or client meetings with instant access to the full claims database and real-time survey data through its mobile-first system.."
    },
    {
        question: "How does Moval help in conducting vehicle surveys?",
        answer:
            "Moval offers a Mobile App Survey for complete vehicle damage assessment via smartphone or tablet, along with a Motor Survey Link that enables web-based surveys on any internet-enabled device.."
    },
    {
        question: "Does survey data update instantly for office staff?",
        answer:
            "Yes. All survey data is synchronised in real time, making it instantly available to office staff and eliminating delays and manual transcription errors.."
    },
    {
        question: "How does Moval ensure accurate loss assessment and tax calculation?",
        answer:
            "Moval includes automated calculation engines that eliminate human error, smart categorisation of spare parts into the correct HSN codes, automated GST management, and precise breakdowns of parts and labour costs."
    },
    {
        question: "What types of reports can be generated in Moval?",
        answer:
            "Moval generates 16 essential report types, including Liability/DO Letters, Status Reports, Preliminary Reports, Bill Check Reports, Scrutiny Sheets, Motor Analysis Sheets, Work Approval Sheets, Settlement Sheets, Final Reports, RI, Fee Bill, and specialised assessments such as Net of Salvage, Total Loss, Cash Loss, and RTI reports."
    },
    {
        question: "Does Moval support GST compliance and tax filing?",
        answer:
            "Yes. Moval generates GSTR-1 and other GST reports to support automated tax filing and ensure compliance with current and future tax regulations."
    },
    
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
