import { Link } from "react-router-dom";
import { Linkedin, Youtube, Twitter, Globe } from "lucide-react";
import logo from "../assets/image/logo.svg";

export default function Footer() {
  return (
    <footer className="text-white border-t border-white/5 bg-gradient-to-b from-[#0B0F19] to-[#0f172a]">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-4 pt-14 lg:pt-20 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-14">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-1 mb-6">
              <img src={logo} alt="Techkrate Logo" className="w-14 h-auto" />
              <span className="text-4xl font-normal tracking-[-0.02rem] font-['Neue']">Techkrate</span>
            </Link>

            {/* Headline */}
            <h2 className="text-[30px] md:text-[44px] lg:text-[40px] font-semibold leading-[1.15] mb-4">
              Turning Complexity Into Clarity
            </h2>

            <p className="text-gray-400 mb-10 max-w-md font-['Neue'] tracking-[-0.01em] leading-relaxed">
              Transform your insurance claims processing with advanced AI technology.
              Faster assessments, better accuracy, happier customers.
            </p>

            {/* ✅ PREMIUM SOCIAL ICONS */}
            <div className="flex items-center space-x-4 mt-6">
              {[
                { Icon: Linkedin, link: "https://www.linkedin.com/company/techkrate/" },
                { Icon: Twitter, link: "https://twitter.com" },
                { Icon: Youtube, link: "https://www.youtube.com/@techkrate4281" },
              ].map(({ Icon, link }, i) => (
                <a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-11 h-11 flex items-center justify-center
                  rounded-xl bg-white/5 border border-white/10
                  hover:bg-white hover:text-black hover:scale-105
                  transition-all duration-300"
                >
                  <Icon className="w-5 h-5 text-gray-300 group-hover:text-black" />
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMNS */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-10 lg:gap-14">
            {/* Solutions */}
            <div>
              <h3 className="text-sm text-white/70 mb-6 uppercase tracking-wider font-['Neue'] font-medium">Solutions</h3>
              <ul className="space-y-4">
                <li><Link to="/moval" className="text-gray-400 hover:text-white text-sm">Moval</Link></li>
                <li><Link to="/cars" className="text-gray-400 hover:text-white text-sm">CARS</Link></li>
                <li><Link to="/solutions" className="text-gray-400 hover:text-white text-sm">All Solutions</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white text-sm">Request Demo</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-sm text-white/70 mb-6 uppercase tracking-wider font-medium">Company</h3>
              <ul className="space-y-4">
                <li><Link to="/about" className="text-gray-400 hover:text-white text-sm">About Us</Link></li>
                <li><Link to="/blogs" className="text-gray-400 hover:text-white text-sm">News</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white text-sm">Careers</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white text-sm">Contact</Link></li>
              </ul>
            </div>

            {/* Partnership */}
            <div>
              <h3 className="text-sm text-white/70 mb-6 uppercase tracking-wider font-medium">Partnership</h3>
              <ul className="space-y-4">
                <li><Link to="/contact" className="text-gray-400 hover:text-white text-sm">Become a Partner</Link></li>
                <li><Link to="/blogs" className="text-gray-400 hover:text-white text-sm">Press</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white text-sm">Support</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Bottom Bar (More spacing & clean alignment) */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-5">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Techkrate. All Rights Reserved
            </p>

            <div className="flex items-center space-x-6">
              <Link to="/privacypolicy" className="text-gray-500 hover:text-white text-sm">Privacy Policy</Link>
              <Link to="/termsandconditions" className="text-gray-500 hover:text-white text-sm">Terms of Service</Link>
              <button className="flex items-center space-x-1 text-gray-500 hover:text-white text-sm">
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

