import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/image/logo.svg";

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const navItems = [
    { label: "HOME", path: "/", type: "link" },
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
      {/* ===== HEADER ===== */}
      <header className="fixed top-6 left-4 right-4 z-50 h-[70px] sm:h-[82px] flex items-center">
        <div className="max-w-8xl mx-auto px-3 sm:px-6 lg:px-8 w-full h-full flex items-center justify-between">

          {/* ===== LOGO ===== */}
          <Link to="/" className="flex items-center ">
            <img src={logo} alt="Logo" className="w-10 sm:w-12 lg:w-16 h-auto" />
            <span className="text-[20px] sm:text-[24px] lg:text-[30px] font-bold tracking-wide text-white">
              Techkrate
            </span>
          </Link>

          {/* ===== DESKTOP NAV ===== */}
          <div className="hidden lg:flex flex-1 justify-center">
            <nav className="flex items-center gap-12">
              {navItems.map((item) =>
                item.type === "dropdown" ? (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {/* Dropdown Button */}
                    <button className="relative flex items-center gap-1.5 text-[16px] text-white font-bold group">
                      {item.label}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform ${
                          activeDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />

                      {/* Hover underline */}
                      <span className="absolute left-0 -bottom-1 h-[2px] bg-white w-0 group-hover:w-full transition-all duration-300" />
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
                    className="relative text-white font-semibold group"
                  >
                    {item.label}
                    {/* Hover underline */}
                    <span className="absolute left-0 -bottom-1 h-[2px] bg-white w-0 group-hover:w-full transition-all duration-300" />
                  </Link>
                )
              )}
            </nav>
          </div>

          {/* ===== REQUEST DEMO BUTTON ===== */}
          <div className="hidden lg:flex items-center">
            <Link
              to="/request-demo"
              className="flex items-center gap-2 px-9 py-3 rounded-full text-[15px] font-semibold tracking-wide
                         border border-white text-black bg-white
                         hover:bg-black hover:text-white
                         transition-all duration-300"
            >
              Request a demo
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* ===== MOBILE MENU BUTTON ===== */}
          <button
            className="lg:hidden p-2 text-white flex items-center justify-center"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* ===== MOBILE MENU ===== */}
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

            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="fixed top-[80px] left-4 right-4 bg-[#0a0a0a] border border-white/10 z-50 rounded-[24px] lg:hidden overflow-hidden shadow-2xl"
            >
              <div className="px-6 py-8">
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

                        {activeDropdown === item.label && (
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
                        )}
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

                {/* Mobile Button */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <Link
                    to="/request-demo"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition shadow-lg"
                  >
                    Request a demo
                    <ArrowRight className="w-4 h-4" />
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
