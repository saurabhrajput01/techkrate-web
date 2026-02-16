import { motion } from "framer-motion";

export default function MeasurableImpact() {
    return (
        <section className="relative bg-black py-24 overflow-hidden">

            {/* Soft blue glow */}
            <div className="absolute inset-0 flex justify-center pointer-events-none">
                <div className="w-[900px] h-[900px] bg-[#2563EB] opacity-10 blur-[220px] rounded-full" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mb-16"
                >
                    <h2 className="text-[32px] md:text-[44px] lg:text-[48px] font-semibold leading-[1.15] text-white">
                        Measurable <span className="text-[#2563EB]">Impact</span>
                        <br />
                        Across Industries
                    </h2>

                    <p className="mt-4 text-gray-400 text-lg">
                        Moval’s AI delivers real results by reducing cycle times,
                        boosting operational efficiency, and driving profitability
                        across insurance workflows.
                    </p>
                </motion.div>

                {/* Metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

                    {[
                        {
                            value: "8 Days",
                            label: "Reduction in cycle time with FNOL Triage"
                        },
                        {
                            value: "50%",
                            label: "Reduction in estimate writing time using AI pre-population"
                        },
                        {
                            value: "70%",
                            label: "Claims reviewed without human involvement"
                        },
                        {
                            value: "50%",
                            label: "Reduction in subrogation report creation time"
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative"
                        >
                            <p className="text-5xl font-bold text-[#2563EB]">
                                {item.value}
                            </p>

                            <p className="mt-3 text-gray-400 leading-snug">
                                {item.label}
                            </p>
                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
}
