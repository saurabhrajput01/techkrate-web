"use client";

import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import bgVid from "../assets/video/vid1.mp4";
import ThirdSection from "./ThirdSection";
import { ArrowRight, ChevronDown } from "lucide-react";

const HeroSection = () => {
  const sliderRef = useRef(null);
  const heroTextRefs = useRef([]);
  const subHeadingRefs = useRef([]);
  const buttonRef = useRef([]);

  const slides = [
    {
      title: "Turning Complexity Into Clarity",
      subHeading:
        "We distil complex challenges into clear solutions, empowering organizations to advance precisely and purposefully.",
      link: "/about",
    },
    {
      title: "Redefining Motor Claims Processing",
      subHeading:
        "Moval revolutionizes motor claims handling by integrating advanced technology with industry-specific workflows.",
      link: "/about",
    },
    {
      title: "AI-Driven Assessment Intelligence",
      subHeading:
        "Moval excels at extracting complex data from estimate PDF files, while also generating an Initial Loss Assessment through damage detection.",
      link: "/about",
    },
    {
      title: "Regulatory-Compliant Survey Reports",
      subHeading:
        "Moval ensures survey reports strictly adhere to IRDA guidelines, maintaining compliance and professionalism.",
      link: "/about",
    },
    {
      title: "Centralized Control & Mobile Approvals",
      subHeading:
        "Moval provides robust tools for multi-office management, enabling admins to give necessary workflow-related approvals.",
      link: "/about",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slides.length;

  // ✅ AUTO SLIDE (Infinite loop)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => prev + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // ✅ SLIDE ANIMATION (Horizontal GSAP)
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
  }, [currentSlide]);

  // ✅ Text animation (unchanged)
  useEffect(() => {
    const heroTextRef = heroTextRefs.current[currentSlide];
    const subHeadingRef = subHeadingRefs.current[currentSlide];

    if (!heroTextRef) return;

    const words = heroTextRef.innerText.split(" ");
    heroTextRef.innerHTML = words
      .map(
        (word) =>
          `<span class="inline-block overflow-hidden"><span class="inline-block">${word}</span></span>`
      )
      .join(" ");

    const splitWords = heroTextRef.querySelectorAll("span > span");

    gsap.fromTo(
      splitWords,
      { y: "100%" },
      { y: "0%", duration: 1, stagger: 0.05, ease: "power4.out" }
    );

    gsap.fromTo(
      subHeadingRef,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1.2 }
    );
  }, [currentSlide]);

  const scrollToThirdSection = () => {
    document
      .getElementById("solutions")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="overflow-hidden h-screen relative font-Helix">
        {/* Background Video */}
        <video
          className="absolute top-0 right-0 w-auto h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={bgVid} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/30"></div>

        {/* ✅ SLIDER WRAPPER */}
        <div className="relative z-20 h-full overflow-hidden">
          <div ref={sliderRef} className="flex h-full">
            {slides.map((slide, index) => (
              <div
                key={index}
                className="min-w-full h-full flex flex-col justify-center"
              >
                <div className="text-left w-full pl-8 pr-4 md:pl-16 md:pr-8 lg:pl-20 pt-12">
                  <h2
                    ref={(el) => (heroTextRefs.current[index] = el)}
                    className="text-5xl sm:text-5xl md:text-7xl lg:text-9xl font-bold text-white mb-4"
                  >
                    {slide.title}
                  </h2>

                  <p
                    ref={(el) => (subHeadingRefs.current[index] = el)}
                    className="text-base sm:text-lg md:text-xl text-[#9C9C9C] max-w-3xl"
                  >
                    {slide.subHeading}
                  </p>

                  <Link
                    to={slide.link}
                    ref={(el) => (buttonRef.current[index] = el)}
                    className="connect-btn inline-block bg-white rounded-full text-black border-2 w-[170px] mt-5"
                  >
                    <div className="flex items-center p-3 justify-center w-full">
                      Discover More
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-30">
          {slides.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2.5 h-2.5 rounded-full bg-white cursor-pointer transition ${
                index === currentSlide ? "opacity-100 scale-125" : "opacity-50"
              }`}
            />
          ))}
        </div>

        {/* Scroll Down Button */}
        <button
          onClick={scrollToThirdSection}
          className="absolute bottom-10 right-8 z-30 bg-white/90 text-black p-3 rounded-full shadow-lg hover:bg-black hover:text-white transition duration-300"
        >
          <ChevronDown className="h-7 w-7" />
        </button>
      </div>
    </>
  );
};

export default HeroSection;
