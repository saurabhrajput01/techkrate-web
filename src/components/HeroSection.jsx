"use client";

import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import bgVid from "../assets/video/vid1.mp4";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const sliderRef = useRef(null);
  const buttonRef = useRef([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Turning Complexity Into Clarity",
      subHeading:
        "We distil complex challenges into clear solutions, empowering organizations to advance precisely and purposefully.",
      link: "/request-demo",
    },
    {
      title: "Redefining Motor Claims Processing",
      subHeading:
        "Moval revolutionizes motor claims handling by integrating advanced technology with industry-specific workflows.",
      link: "/request-demo",
    },
    {
      title: "AI-Driven Assessment Intelligence",
      subHeading:
        "Moval excels at extracting complex data from estimate PDF files, while also generating an Initial Loss Assessment through damage detection.",
      link: "/request-demo",
    },
    {
      title: "Regulatory-Compliant Survey Reports",
      subHeading:
        "Moval ensures survey reports strictly adhere to IRDA guidelines, maintaining compliance and professionalism.",
      link: "/request-demo",
    },
    {
      title: "Centralized Control & Mobile Approvals",
      subHeading:
        "Moval provides robust tools for multi-office management, enabling admins to give necessary workflow-related approvals.",
      link: "/request-demo",
    },
  ];

  const totalSlides = slides.length;

  // ✅ Auto Slide — 4 sec
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => prev + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // ✅ Smooth animation + reset
  useEffect(() => {
    if (currentSlide === totalSlides) {
      gsap.set(sliderRef.current, { xPercent: 0 });
      setCurrentSlide(0);
      return;
    }

    gsap.to(sliderRef.current, {
      xPercent: -100 * currentSlide,
      duration: 0.8,
      ease: "power2.inOut",
    });
  }, [currentSlide, totalSlides]);

  const handleClick = (index) => {
    gsap.to(buttonRef.current[index], {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
    });
  };

  return (
    <div className="overflow-hidden h-screen relative font-Helix">
      {/* Background Video */}
      <video
        className="absolute top-0 right-0 w-auto h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={bgVid} type="video/mp4" />
      </video>

      {/* Slider */}
      <div className="relative z-20 h-full flex">
        <div ref={sliderRef} className="flex h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="min-w-full h-full flex flex-col justify-center"
            >
              <div className="text-left w-full pl-8 md:pl-16 lg:pl-20 pt-12">

                {/* ✅ UPDATED HEADING STYLE */}
                <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-none lg:leading-tight mb-4 text-white">
                  {slide.title}
                </h2>

                {/* Paragraph unchanged */}
                <p className="text-base sm:text-lg md:text-xl text-[#9C9C9C] max-w-3xl">
                  {slide.subHeading}
                </p>

                {/* Button unchanged */}
                <Link
                  to={slide.link}
                  ref={(el) => (buttonRef.current[index] = el)}
                  onClick={() => handleClick(index)}
                  className="connect-btn inline-block bg-white rounded-full text-black transition-all duration-150 hover:bg-black group overflow-hidden hover:border-white hover:text-white border-2 w-[170px] mt-5"
                >
                  <div className="flex items-center p-3 justify-center w-full">
                    <span className="group-hover:text-white transition-all duration-300 inline-block font-medium">
                      Request a Demo
                    </span>
                    
                  </div>
                </Link>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2.5 h-2.5 rounded-full bg-white cursor-pointer transition-all duration-300 ${
              index === currentSlide ? "opacity-100 scale-125" : "opacity-50"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
