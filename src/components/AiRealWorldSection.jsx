import React from 'react';
import { motion } from 'framer-motion';

const RealWorldAISection = () => {
    const features = [
        {
            number: "01",
            title: "Precision & Speed",
            description: "Our AI delivers ultra-precise damage assessments by analyzing images down to the pixel. Certainty scores accompany every estimate, factoring in visibility, image quality, and damage severity, ensuring accuracy and speed for even the most complex claims."
        },
        {
            number: "02",
            title: "Efficiency at Scale",
            description: "Built for high-demand industries, our AI processes thousands of claims daily while also identifying salvaged parts for repair. Scalable across global markets, it transforms workflows to deliver unprecedented efficiency."
        },
        {
            number: "03",
            title: "Seamless Integration",
            description: "Our AI integrates effortlessly with your current systems using open APIs, enabling smooth collaboration between technologies. Its adaptability ensures consistent results across industries and geographies."
        },
        {
            number: "04",
            title: "Continuous Improvement",
            description: "With every deployment, our AI learns and improves. Real-world data and client feedback allow us to refine solutions continuously, ensuring we stay ahead of industry needs while solving real problems faster."
        }
    ];

    return (
        <section className="text-white py-12 lg:py-20 font-['Neue'] overflow-visible">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-4">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 relative items-start">

                    {/* Left Column - Sticky */}
                    <div className="flex flex-col space-y-8 lg:sticky lg:top-24 lg:h-fit">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-[32px] md:text-5xl lg:text-[2.5rem] font-normal leading-tight text-white mb-6 md:mb-0"
                        >
                            Techkrate AI that <br className="hidden lg:block" /> works in the real world
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-[17px] md:text-lg lg:text-1xl text-gray-400 leading-relaxed max-w-xl"
                        >
                            At Techkrate, we harness AI's vast potential to solve real-world problems today, not tomorrow. Built on applied research and trained with millions of data-rich images, our AI delivers fast, accurate assessments for vehicles and properties, transforming industries through:
                        </motion.p>

                        {/* Video Container */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="w-full aspect-video bg-[#111] rounded-lg overflow-hidden mt-4 relative border border-gray-800"
                        >
                            {/* Placeholder image/video area */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                {/* Simulating the phone UI in the reference image would go here */}
                                <div className="w-1/3 h-5/6 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-xl shadow-lg border-4 border-gray-900 transform rotate-3"></div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column - Scrollable Features */}
                    <div className="flex flex-col space-y-12 md:space-y-20 lg:space-y-321 lg:pt-4 pb-12 md:pb-20">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="flex flex-col space-y-3 group max-w-lg"
                            >
                                <span className="text-[28px] md:text-4xl lg:text-3xl  text-[#4F46E5] mb-2 block">
                                    {feature.number}
                                </span>
                                <h3 className="text-[24px] md:text-[40px] lg:text-[25px] font-normal tracking-[-0.01em] leading-[1.15] text-white">
                                    {feature.title}
                                </h3>
                                <p className="text-[16px] md:text-lg text-gray-400 leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default RealWorldAISection;