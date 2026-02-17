 import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/image/logo.svg";

const Header = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY && currentY > 120) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      lastScrollY = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const navItems = [
    { label: "HOME", path: "/", type: "link" }, // Added Home link
    {
      label: "INDUSTRY SOLUTIONS",
      type: "dropdown",
      items: [
        { label: "Motor Claims", path: "/moval" },
        { label: "Appraisals", path: "/cars" },
      ],
    },
    {
      label: "COMPANY",
      type: "dropdown",
      items: [
        { label: "About Us", path: "/about" },
        { label: "Careers", path: "/about" },
      ],
    },
    { label: "ARTICLES", path: "/blogs", type: "link" },
  ];

  return (
    <>
      <header
        className={`fixed top-1 left-6 right-6 z-50 transition-transform duration-300 h-[72px] sm:h-[82px] lg:h-[92px] flex items-center
        ${isHidden ? "-translate-y-full" : "translate-y-0"}`}
      >
        <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex items-center justify-between">

          {/* ===== LOGO FIXED ===== */}
          <Link to="/" className="flex items-center "> {/* gap reduced from 3 → 2 */}
            <img
              src={logo}
              alt="Techkrate"
              className="w-12 h-12 sm:w-12 sm:h-12 lg:w-14 lg:h-16 object-contain"
            />
            <span className="text-white text-[26px] sm:text-[26px] lg:text-[37px] font-hexin leading-none relative top-[1px]">
              Techkrate
            </span>
          </Link>

          {/* ===== DESKTOP NAV ===== */}
          <div className="hidden lg:flex flex-1 justify-center">
            <nav className="flex items-center gap-8 xl:gap-12">
              {navItems.map((item) =>
                item.type === "dropdown" ? (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className="flex items-center gap-1.5 text-[16px] text-white font-semibold">
                      {item.label}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform ${
                          activeDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {activeDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 12 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 min-w-[160px] bg-black border border-white/10 rounded-xl shadow-xl overflow-hidden py-4 space-y-1"
                        >
                          {item.items.map((sub) => (
                            <Link
                              key={sub.label}
                              to={sub.path}
                              className="block px-6 py-3 text-gray-300 hover:text-white hover:bg-white/5 transition whitespace-nowrap font-medium"
                            >
                              {sub.label}
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
                    className="text-white font-semibold"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>
          </div>

          {/* ===== RIGHT SIDE BUTTON ===== */}
          <div className="hidden lg:flex items-center gap-5">
            <Link
              to="/request-demo"
              className="px-7 py-2.5 rounded-full text-[14px] font-medium tracking-wide 
                        border border-white text-white bg-transparent 
                        hover:bg-white hover:text-black 
                        transition-all duration-300"
            >
              Request a demo
            </Link>
          </div>

          {/* ===== MOBILE MENU BUTTON ===== */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* ================= PREMIUM MOBILE MENU ================= */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Floating Panel */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="fixed top-[80px] sm:top-[90px] left-4 right-4 bg-[#0a0a0a] border border-white/10 z-50 rounded-[24px] lg:hidden overflow-hidden shadow-2xl"
            >
              <div className="px-6 py-8 max-h-[calc(100vh-140px)] overflow-y-auto">
                <div className="space-y-4">
                  {navItems.map((item) =>
                    item.type === "dropdown" ? (
                      <div key={item.label} className="border-b border-white/5 pb-4">
                        <button
                          onClick={() =>
                            setActiveDropdown(
                              activeDropdown === item.label ? null : item.label
                            )
                          }
                          className="w-full flex items-center justify-between text-white text-[16px] py-2"
                        >
                          {item.label}
                          <ChevronDown
                            className={`w-4 h-4 transition-transform ${
                              activeDropdown === item.label ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        <AnimatePresence>
                          {activeDropdown === item.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-4 pt-3 space-y-3">
                                {item.items.map((sub) => (
                                  <Link
                                    key={sub.label}
                                    to={sub.path}
                                    onClick={() => setMobileOpen(false)}
                                    className="block text-gray-400 hover:text-white"
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
                        className="block text-white py-2 border-b border-white/5"
                      >
                        {item.label}
                      </Link>
                    )
                  )}
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <Link
                    to="/request-demo"
                    onClick={() => setMobileOpen(false)}
                    className="w-full block text-center px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition shadow-lg"
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