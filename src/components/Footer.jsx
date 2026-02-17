import { Link } from "react-router-dom";
import { Linkedin, Youtube, Twitter, Globe } from "lucide-react";
import logo from "../assets/image/logo.svg";

export default function Footer() {
  return (
    <footer className="text-white border-t border-white/5 bg-black">
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-4 pt-14 lg:pt-20 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-14">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center space-x-1 mb-6">
              <img src={logo} alt="Techkrate Logo" className="w-14 h-auto" />
              <span className="text-4xl font-normal tracking-[-0.02rem]">
                Techkrate
              </span>
            </Link>

            <h2 className="text-[30px] md:text-[44px] lg:text-[40px] font-semibold leading-[1.15] mb-4">
              Turning Complexity Into Clarity
            </h2>

            <p className="text-gray-400 mb-10 max-w-md tracking-[-0.01em] leading-relaxed">
              Transform your insurance claims processing with advanced AI technology.
              Faster assessments, better accuracy, happier customers.
            </p>

            {/* Social Icons */}
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
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14">
            
            {/* Solutions */}
            <div>
              <h3 className="text-sm text-white/70 mb-6 uppercase tracking-wider font-medium">
                Solutions
              </h3>
              <ul className="space-y-4">
                <li><Link to="/moval" className="text-gray-400 hover:text-white text-sm">Moval</Link></li>
                <li><Link to="/cars" className="text-gray-400 hover:text-white text-sm">CARS</Link></li>
                <li><Link to="/solutions" className="text-gray-400 hover:text-white text-sm">All Solutions</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white text-sm">Request Demo</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-sm text-white/70 mb-6 uppercase tracking-wider font-medium">
                Company
              </h3>
              <ul className="space-y-4">
                <li><Link to="/about" className="text-gray-400 hover:text-white text-sm">About Us</Link></li>
                <li><Link to="/blogs" className="text-gray-400 hover:text-white text-sm">News</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white text-sm">Careers</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white text-sm">Contact</Link></li>
              </ul>
            </div>

            {/* Partnership */}
            <div>
              <h3 className="text-sm text-white/70 mb-6 uppercase tracking-wider font-medium">
                Partnership
              </h3>
              <ul className="space-y-4">
                <li><Link to="/contact" className="text-gray-400 hover:text-white text-sm">Become a Partner</Link></li>
                <li><Link to="/blogs" className="text-gray-400 hover:text-white text-sm">Press</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white text-sm">Support</Link></li>
              </ul>
            </div>

            {/* Our Location */}
            <div>
              <h3 className="text-sm text-white/70 mb-6 uppercase tracking-wider font-medium">
                Our Location
              </h3>
              <div className="w-full h-40 rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-colors duration-300">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.002060346923!2d77.36605417511863!3d28.659656975649895!2m3!1f0!2f0!3f0!2m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfaa2966d969d%3A0x4ccc339bfb64f56a!2sSG%20Estates%20-%20SG%20Alpha%20Tower%2C%20Vasundhara!5e0!3m2!1sen!2sin!4v1737911576814!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Techkrate Office Location"
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
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
