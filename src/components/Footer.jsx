import { Link } from "react-router-dom";
import { Linkedin, Youtube, Twitter, Globe, ArrowRight } from "lucide-react";
import logo from "../assets/image/logo.svg";

export default function Footer() {
  return (
    <footer className="text-white border-t border-white/5 bg-gradient-to-b from-[#0B0F19] to-[#0f172a]">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-4 pt-12 lg:pt-16 pb-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">

          {/* LEFT COLUMN - Brand, Headline & Social */}
          <div className="lg:col-span-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-1 mb-6">
              <img
                src={logo}
                alt="Techkrate Logo"
                className="w-14 h-auto"
              />
              <span className="text-4xl font-normal tracking-[-0.02rem] font-['Neue']">Techkrate</span>
            </Link>

            {/* Headline */}
            <h2 className="text-[32px] md:text-[48px] font-normal tracking-[-0.01em] leading-[1.15] text-white mb-6 font-['Neue']">
              The speed and accuracy of AI
            </h2>

            <p className="text-gray-400 mb-8 max-w-md font-['Neue'] tracking-[-0.01em] leading-relaxed">
              Transform your insurance claims processing with advanced AI technology.
              Faster assessments, better accuracy, happier customers.
            </p>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-white text-black rounded-full hover:bg-gray-100 transition-all duration-300 group font-['Neue'] font-medium tracking-[-0.01em]"
            >
              <span>Get Started</span>
            </Link>

            {/* Social Icons */}
            <div className="flex items-center space-x-4 mt-10">
              <a
                href="https://www.linkedin.com/company/techkrate/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@techkrate4281"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Side Columns - 3 columns on desktop */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-12">
            {/* COLUMN 1 - Solutions */}
            <div>
              <h3 className="text-sm text-white/70 mb-6 uppercase tracking-wider font-['Neue'] font-medium">Solutions</h3>
              <ul className="space-y-4">
                <li>
                  <Link to="/moval" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-['Neue'] tracking-[-0.01em]">
                    Moval
                  </Link>
                </li>
                <li>
                  <Link to="/cars" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-['Neue'] tracking-[-0.01em]">
                    CARS
                  </Link>
                </li>
                <li>
                  <Link to="/solutions" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-['Neue'] tracking-[-0.01em]">
                    All Solutions
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-['Neue']">
                    Request Demo
                  </Link>
                </li>
              </ul>
            </div>

            {/* COLUMN 2 - Company */}
            <div>
              <h3 className="text-sm text-white/70 mb-6 uppercase tracking-wider font-['Neue'] font-medium">Company</h3>
              <ul className="space-y-4">
                <li>
                  <Link to="/about" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-['Neue'] tracking-[-0.01em]">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/blogs" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-['Neue']">
                    News
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-['Neue']">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-['Neue']">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* COLUMN 3 - Partnership */}
            <div>
              <h3 className="text-sm text-white/70 mb-6 uppercase tracking-wider font-['Neue'] font-medium">Partnership</h3>
              <ul className="space-y-4">
                <li>
                  <Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-['Neue']">
                    Become a Partner
                  </Link>
                </li>
                <li>
                  <Link to="/blogs" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-['Neue']">
                    Press
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-['Neue']">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-gray-500 text-sm font-['Neue'] tracking-[-0.01em]">
              © {new Date().getFullYear()} Techkrate. All Rights Reserved
            </p>

            {/* Links */}
            <div className="flex items-center space-x-6">
              <Link to="/privacypolicy" className="text-gray-500 hover:text-white text-sm transition-colors duration-200 font-['Neue'] tracking-[-0.01em]">
                Privacy Policy
              </Link>
              <Link to="/termsandconditions" className="text-gray-500 hover:text-white text-sm transition-colors duration-200 font-['Neue'] tracking-[-0.01em]">
                Terms of Service
              </Link>
              <button className="flex items-center space-x-1 text-gray-500 hover:text-white text-sm transition-colors duration-200 font-['Neue'] tracking-[-0.01em]">
                <Globe className="w-4 h-4" />
                <span>EN</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
