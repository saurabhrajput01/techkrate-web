import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/image/logo.svg";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        setMobileOpen(false);
        setActiveDropdown(null);
    }, [location]);

    const navItems = [
        {
            label: "Industry Solutions",
            type: "dropdown",
            items: [
                { label: "Motor Claims", path: "/moval" },
                { label: "Consignments & Appraisals", path: "/cars" }
            ]
        },
        {
            label: "Company",
            type: "dropdown",
            items: [
                { label: "About ", path: "/about" },
                { label: "Careers ", path: "/about" }
            ]
        },
        { label: "Articles", path: "/blogs", type: "link" }
    ];

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-[70px] sm:h-[80px] lg:h-[90px] flex items-center max-w-full overflow-visible`}
                style={{ width: '100%' }}
            >
                <div className="w-full max-w-full h-full flex items-center justify-between px-4 sm:px-5 md:px-6 lg:pl-[40px] lg:pr-[140px] box-border">

                    {/* LEFT: LOGO */}
                    <div className="flex-shrink-0 flex items-center z-10">
                        <Link to="/" className="flex items-center gap-2 sm:gap-3">
                            <img
                                src={logo}
                                alt="Techkrate"
                                className="w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain flex-shrink-0"
                            />
                            <span
                                className="text-[20px] sm:text-[22px] lg:text-[24px] leading-tight tracking-[-0.02em] text-white"
                            >
                                Techkrate
                            </span>
                        </Link>
                    </div>

                    {/* CENTER: NAV */}
                    <div className="hidden lg:flex flex-1 justify-center">
                        <nav className="flex items-center gap-8 xl:gap-12">
                            {navItems.map((item) =>
                                item.type === "dropdown" ? (
                                    <div
                                        key={item.label}
                                        className="relative group py-4"
                                        onMouseEnter={() => setActiveDropdown(item.label)}
                                        onMouseLeave={() => setActiveDropdown(null)}
                                    >
                                        <button
                                            className="flex items-center gap-1.5 text-[15px] font-normal tracking-[0.02em] text-white/90 hover:text-white transition-colors"
                                        >
                                            {item.label}
                                            <ChevronDown className={`w-3.5 h-3.5 opacity-60 transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                                        </button>

                                        {/* DROPDOWN */}
                                        <AnimatePresence>
                                            {activeDropdown === item.label && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 15 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 15 }}
                                                    transition={{ duration: 0.2, ease: "easeOut" }}
                                                    className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[260px]
                                                      bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/10
                                                      rounded-2xl shadow-[0_24px_48px_rgba(0,0,0,0.6)]
                                                      overflow-hidden py-3"
                                                >
                                                    {item.items.map((sub) => (
                                                        <Link
                                                            key={sub.label}
                                                            to={sub.path}
                                                            className="flex items-center justify-between
                                                              px-6 py-3
                                                              hover:bg-white/5 transition-colors group/item"
                                                        >
                                                            <span className="text-[14px] font-normal text-gray-300 group-hover/item:text-white transition-colors tracking-wide">
                                                                {sub.label}
                                                            </span>
                                                            <ChevronRight className="w-3.5 h-3.5 text-gray-500 group-hover/item:text-white transition-colors opacity-0 group-hover/item:opacity-100 transform -translate-x-2 group-hover/item:translate-x-0 duration-300" />
                                                        </Link>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ) : (
                                    <Link
                                        key={item.label}
                                        to={item.path}
                                        className="text-[15px] font-normal tracking-[0.02em] text-white/90 hover:text-white transition-colors"
                                    >
                                        {item.label}
                                    </Link>
                                )
                            )}
                        </nav>
                    </div>

                    {/* RIGHT: BUTTON + ICON */}
                    <div className="hidden lg:flex items-center flex-shrink-0 gap-6">
                        {/* Request Demo Button */}
                        <Link
                            to="/request-demo"
                            className="px-7 py-2.5 rounded-full text-[14px] font-medium tracking-wide 
                            border border-white text-white bg-transparent 
                            hover:bg-white hover:text-black 
                            transition-all duration-300"
                        >
                            Request a demo
                        </Link>

                        {/* Globe Icon + EN */}
                        <button className="flex items-center gap-2 text-white hover:text-white/80 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>
                            <span className="text-[13px] font-normal">EN</span>
                        </button>
                    </div>

                    {/* MOBILE MENU ICON - Fixed position for stability */}
                    <button
                        className="lg:hidden text-white p-1.5 sm:p-2 flex-shrink-0 z-50"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X size={26} strokeWidth={1.5} /> : <Menu size={26} strokeWidth={1.5} />}
                    </button>
                </div>
            </header>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {mobileOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 lg:hidden"
                            onClick={() => setMobileOpen(false)}
                        />

                        {/* Floating Menu Panel */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="fixed top-[78px] sm:top-[90px] left-4 right-4 bg-[#0a0a0a] backdrop-blur-xl border border-white/10 z-50 rounded-[24px] lg:hidden overflow-hidden shadow-2xl"
                        >
                            <div className="px-6 py-8 max-h-[calc(100vh-140px)] overflow-y-auto">
                                <div className="space-y-4">
                                    {navItems.map((item) =>
                                        item.type === "dropdown" ? (
                                            <div key={item.label} className="border-b border-white/5 pb-4 last:border-0">
                                                <button
                                                    onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                                                    className="w-full flex items-center justify-between text-white text-[16px] py-2 font-normal"
                                                >
                                                    <span>{item.label}</span>
                                                    <ChevronDown strokeWidth={1.5} className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                                                </button>
                                                <AnimatePresence>
                                                    {activeDropdown === item.label && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: "auto", opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            transition={{ duration: 0.3 }}
                                                            className="overflow-hidden"
                                                        >
                                                            <div className="pl-4 pt-3 space-y-3 pb-2">
                                                                {item.items.map((sub) => (
                                                                    <Link
                                                                        key={sub.label}
                                                                        to={sub.path}
                                                                        onClick={() => setMobileOpen(false)}
                                                                        className="block text-gray-400 hover:text-white transition-colors text-[14px] font-normal"
                                                                    >
                                                                        {sub.label}
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        ) : (
                                            <Link
                                                key={item.label}
                                                to={item.path}
                                                onClick={() => setMobileOpen(false)}
                                                className="block text-white text-[16px] py-2 border-b border-white/5 pb-4 font-normal"
                                            >
                                                {item.label}
                                            </Link>
                                        )
                                    )}
                                </div>

                                <div className="mt-8 pt-6 border-t border-white/10 flex flex-col gap-4">
                                    <Link
                                        to="/request-demo"
                                        onClick={() => setMobileOpen(false)}
                                        className="w-full text-center px-6 py-3 rounded-full text-[14px] font-medium 
                                        border border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300"
                                    >
                                        Request a demo
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
