import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Bot, BarChart3, Handshake, Network, CodeSquare, ChevronRight } from "lucide-react";
import React from "react";
import MovalLogo from "../assets/image/logo1.png";
import CARSLogo from "../assets/image/CARSLogo.jpg";
import TriImg from "../assets/image/trial.png";

const Solutions = () => {
    const solutions = [
        {
            id: 1,
            title: "Moval",
            description: "Intelligent motor claims platform for automated damage assessment.",
            link: "/moval",
            bgColor: "bg-[#0b1221]",
            textColor: "text-white",
            logo: MovalLogo,
            accent: "blue"
        },
        {
            id: 2,
            title: "CARS",
            description: "Unified Assessment & Reporting System for streamlined workflows.",
            link: "/cars",
            bgColor: "bg-[#f3f4ff]",
            textColor: "text-gray-900",
            logo: CARSLogo,
            accent: "purple"
        },
        {
            id: 3,
            title: "Strategy",
            description: "Digital transformation roadmaps aligned to business objectives.",
            link: "/contact",
            bgColor: "bg-[#e0f2fe]",
            textColor: "text-gray-900",
            icon: <Handshake className="w-16 h-16 text-blue-600 opacity-20" />,
            accent: "sky"
        },
        {
            id: 4,
            title: "Automation",
            description: "Harness AI to automate repetitive tasks and improve accuracy.",
            link: "/contact",
            bgColor: "bg-[#f5f3ff]",
            textColor: "text-gray-900",
            icon: <Bot className="w-16 h-16 text-purple-600 opacity-20" />,
            accent: "indigo"
        },
        {
            id: 5,
            title: "Enterprise",
            description: "Custom-built applications engineered for high performance.",
            link: "/contact",
            bgColor: "bg-[#f0fdf4]",
            textColor: "text-gray-900",
            icon: <CodeSquare className="w-16 h-16 text-green-600 opacity-20" />,
            accent: "emerald"
        }
    ];

    const realWorldPoints = [
        {
            num: "01",
            title: "Precision & Speed",
            desc: "Our AI delivers ultra-precise assessments by analyzing data down to the pixel. Certainty scores accompany every estimate, ensuring accuracy and speed even for the most complex claims."
        },
        {
            num: "02",
            title: "Efficiency at Scale",
            desc: "Built for high-demand industries, our AI processes thousands of claims daily while also identifying salvaged parts for repair. Scalable across global markets, it transforms workflows."
        },
        {
            num: "03",
            title: "Seamless Integration",
            desc: "Our AI integrates effortlessly with your current systems using open APIs, enabling smooth collaboration between technologies. Its adaptability ensures consistent results."
        },
        {
            num: "04",
            title: "Continuous Improvement",
            desc: "With every deployment, our AI learns and improves. Real-time feedback loops ensure Techkrate solutions evolve alongside your business needs and industry standards."
        }
    ];

    return (
        <div
            className="min-h-screen bg-[#0A0A0A] overflow-hidden text-white"
            style={{
                letterSpacing: "-0.01em",
            }}
        >
            {/* --- SECTION 1: HERO & 5 CARDS --- */}
            <section className="pt-24 pb-16 px-6 lg:px-12 min-h-screen flex flex-col justify-center bg-[#0A0A0A]">
                <div className="max-w-[1600px] mx-auto w-full">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="text-[32px] md:text-[44px] lg:text-[48px] font-semibold leading-[1.15] text-white mb-6"
                        >
                            Smart AI solutions to industry challenges
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto"
                        >
                            Find the right solutions for your business
                        </motion.p>
                    </div>

                    {/* 5 Card Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
                        {solutions.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                                className="group h-full"
                            >
                                <div className={`relative h-[550px] rounded-[30px] ${item.bgColor} overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col p-8`}>
                                    <h3 className={`text-2xl font-semibold mb-4 ${item.textColor}`}>
                                        {item.title}
                                    </h3>
                                    <p className={`text-sm md:text-base mb-8 opacity-80 leading-relaxed ${item.textColor}`}>
                                        {item.description}
                                    </p>

                                    <Link to={item.link} className={`mt-auto mb-4 inline-flex items-center justify-center px-6 py-3 rounded-full bg-blue-600 text-white text-sm font-medium w-max transform group-hover:scale-105 transition-all`}>
                                        Learn more
                                    </Link>

                                    {/* Illustration/Visual at bottom */}
                                    <div className="absolute bottom-0 left-0 w-full h-1/3 flex items-end justify-center pb-6 px-4">
                                        <div className="relative w-full h-full flex items-center justify-center opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                                            {item.logo ? (
                                                <img src={item.logo} alt={item.title} className="max-w-full max-h-full object-contain" />
                                            ) : (
                                                item.icon
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- SECTION 2: REAL WORLD --- */}
            <section className="py-24 px-6 lg:px-12 bg-[#0A0A0A] overflow-visible">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
                    {/* Left: Image/Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: "power3.out" }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="relative rounded-[40px] overflow-hidden bg-gray-900 p-8 shadow-inner">
                            <img src={TriImg} alt="AI in Action" className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-700" />
                        </div>
                    </motion.div>

                    {/* Right: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "power3.out" }}
                        className="w-full lg:w-1/2 space-y-12"
                    >
                        <div className="space-y-6">
                            <h2 className="text-[32px] md:text-[44px] lg:text-[48px] font-semibold leading-[1.15] text-white">
                                Techkrate AI that works in the real world
                            </h2>
                            <p className="text-lg text-gray-400 leading-relaxed">
                                At Techkrate, we harness AI's vast potential to solve real-world problems today, not tomorrow. Our AI delivers fast, accurate assessments, transforming industries through precision engineering.
                            </p>
                        </div>

                        <div className="space-y-10">
                            {realWorldPoints.map((point, index) => (
                                <motion.div
                                    key={point.num}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: 0.1 * index }}
                                    className="flex gap-6"
                                >
                                    <span className="text-2xl font-bold text-blue-400">{point.num}</span>
                                    <div>
                                        <h4 className="text-xl font-semibold text-white mb-2">{point.title}</h4>
                                        <p className="text-gray-400 leading-relaxed text-sm md:text-base">{point.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* --- SECTION 3: CTA & NEWSLETTER --- */}
            <section className="py-24 px-6 lg:px-12 bg-[#0A0A0A]">
                <div className="max-w-7xl mx-auto space-y-12">
                    {/* Big CTA Card */}
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[400px] rounded-[50px] overflow-hidden bg-gradient-to-r from-blue-700 via-indigo-800 to-purple-900 flex flex-col items-center justify-center text-center p-8 lg:p-16"
                    >
                        {/* Abstract background blobs */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 blur-[100px] rounded-full"></div>
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 opacity-5 blur-[100px] rounded-full"></div>

                        <h2 className="text-[32px] md:text-[44px] lg:text-[48px] font-semibold leading-[1.15] text-white mb-8 z-10">
                            Our solutions will transform your business. <br /> Get in touch to see how.
                        </h2>

                        <Link to="/request-demo" className="z-10 group bg-blue-600 hover:bg-white text-white hover:text-blue-700 px-10 py-5 rounded-full font-medium text-lg transition-all duration-300 shadow-xl">
                            Request a demo
                        </Link>
                    </motion.div>

                    {/* Subscription Bar */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 bg-blue-600 p-4 md:p-6 rounded-[50px] md:rounded-full">
                        <span className="text-white font-bold text-lg md:ml-10">Subscribe for updates</span>
                        <div className="relative flex-grow max-w-xl w-full">
                            <input
                                type="email"
                                placeholder="example@gmail.com"
                                className="w-full bg-transparent border-none text-white placeholder-blue-300 focus:ring-0 text-lg py-2"
                            />
                        </div>
                        <button className="flex items-center gap-2 bg-transparent text-white font-medium text-lg hover:opacity-80 transition-opacity md:mr-10">
                            Submit
                            <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center">
                                <ChevronRight className="w-4 h-4" />
                            </div>
                        </button>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Solutions;
