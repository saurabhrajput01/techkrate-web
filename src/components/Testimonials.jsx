import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "With real-time damage assessment and AI-driven reporting, our claims processing has become significantly faster and more reliable.",
    author: "N. Vishwanath",
    company: "IISLA Fellow Member",
  },
  {
    quote:
      "Moval's intuitive cloud platform and mobile app empower surveyors with state-of-the-art tools to execute precise inspections and deliver comprehensive reports effortlessly.",
    author: "Sandeep Saxena",
    company: "Surveyor & Loss Assessor",
  },
  {
    quote:
      "As a chartered engineer, CARS offers an intuitive, hybrid platform that simplifies report management, enhances staff coordination, and streamlines administrative tasks.",
    author: "Naveen Arora",
    company: "ACE Consulting Pvt. Ltd.",
  },
  {
    quote:
      "Techkrate exemplifies technological innovation, delivering transformative solutions that drive efficiency, scalability, and digital evolution for modern enterprises.",
    author: "RNS Kushwaha",
    company: "IIISLA Fellow Member",
  },
  {
    quote:
      "Moval's AI-driven modules seamlessly integrate precision and speed, revolutionizing motor survey processes with unparalleled claim analysis and automation.",
    author: "Manoj Sharma",
    company: "RMS Associates",
  },
  {
    quote:
      "I was hesitant to leave my 5-6 years-old desktop software, but as I started using MOVAL, within few months I am completely glad that we switched to it.",
    author: "Mr. Amit Shrivastava",
    company: "Senior Surveyor, Raipur (Chhattisgarh)",
  },
  {
    quote:
      "Managing multiple offices was not easy but MOVAL's centralized platform changed everything. Now I have real-time visibility into all locations from a single dashboard.",
    author: "Mr. Shyam Chhabra",
    company: "Director - 'apt' Insurance Surveyor & Loss Assessors Pvt. Ltd.",
  },
  {
    quote:
      "Just completed my first month with MOVAL. The difference is night and day. The peace of mind knowing everything is automatically backed up and secure is invaluable.",
    author: "Mr. Naveen Kumar N",
    company: "Surveyor & Loss Assessor, Bengaluru (Karnataka)",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  // Auto-rotation effect
  useEffect(() => {
    const startInterval = () => {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 4500); // 4.5 seconds
    };

    if (!isPaused) {
      startInterval();
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused]);

  // Interaction handlers
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);
  const handleTouchStart = () => setIsPaused(true);
  const handleTouchEnd = () => setIsPaused(false);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-black">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 xl:px-16">

        <div className="grid gap-8 lg:gap-16 lg:grid-cols-2 items-center">
          <div>

            <h2 className="text-[32px] md:text-[44px] lg:text-[48px] font-semibold leading-[1.15] mb-6 text-white">
              Trusted by Insurance Leaders
            </h2>
            <p className="text-[17px] font-normal leading-[1.6] text-gray-400 mb-8 max-w-xl  tracking-[-0.01em]">
              Discover how leading insurance companies transform their claims operations with our AI-powered solutions. Real results from real enterprises.
            </p>

            {/* Dot Navigation */}
            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`relative group cursor-pointer`}
                  aria-label={`Go to testimonial ${index + 1}`}
                >
                  <span
                    className={`block w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                      ? "bg-white scale-110"
                      : "bg-gray-600 hover:bg-gray-400"
                      }`}
                  />
                  {/* Active indicator ring */}
                  {index === currentIndex && (
                    <span className="absolute inset-0 w-3 h-3 rounded-full border border-white/30 animate-pulse" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column - Testimonial Card */}
          <div className="relative">
            {/* Decorative glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/5 via-cyan-500/5 to-purple-500/5 rounded-[28px] blur-xl" />

            {/* Glass-style card */}
            <div
              className="relative premium-card p-8 md:p-10 lg:p-12 shadow-2xl"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 md:w-10 md:h-10 text-white/10" />

              {/* Testimonial Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="relative z-10 min-h-[240px] md:min-h-[220px]"
                >
                  <p className="text-[18px] md:text-[20px] text-gray-300 leading-[1.6] mb-9 font-Neue tracking-tight">
                    "{testimonials[currentIndex].quote}"
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white font-medium text-[16px] font-Neue shadow-lg">
                      {testimonials[currentIndex].author.charAt(0)}
                    </div>
                    <div>
                      <p className="text-white font-semibold text-[17px] font-Neue tracking-tight">
                        {testimonials[currentIndex].author}
                      </p>
                      <p className="text-gray-400 text-[15px] font-Neue tracking-normal">
                        {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation arrows */}
              <div className="flex gap-3 mt-8">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all duration-300 cursor-pointer"
                  aria-label="Previous testimonial"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all duration-300 cursor-pointer"
                  aria-label="Next testimonial"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

