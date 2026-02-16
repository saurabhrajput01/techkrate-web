"use client";

import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import styles from "./HeroSection.module.css";
import { ArrowRight, ChevronDown } from "lucide-react";
import bgVid from "../assets/video/vid1.mp4";

const slides = [
  {
    title: ["Turning Complexity", "Into Clarity"],
    description:
      "Moval revolutionizes motor claims handling by integrating advanced technology with industry-specific workflows.",
    button: "Explore Platform",
    link: "/solutions",
  },
  {
    title: ["Redefining Motor", "Claims Processing"],
    description:
      "Moval's AI goes beyond damage detection, instantly extracting complex data from assessment sheets.",
    button: "See AI in Action",
    link: "/request-demo",
  },
  {
    title: ["AI-Driven Assessment", "Intelligence"],
    description:
      "Moval ensures survey reports strictly adhere to IRDA guidelines, maintaining compliance and professionalism.",
    button: "View Compliance",
    link: "/about",
  },
  {
    title: ["Regulatory-Compliant", "Survey Reports"],
    description:
      "Moval ensures survey reports strictly adhere to IRDA guidelines, maintaining compliance and professionalism.",
    button: "View Compliance",
    link: "/about",
  },
  {
    title: ["Centralized Control &", "Mobile Approvals"],
    description:
      "Moval offers robust tools for multi-office management and automated estimate imports.",
    button: "Request Demo",
    link: "/request-demo",
  },
];

export default function HeroSection() {
  const sliderRef = useRef(null);
  const videoRef = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.45;
    }

    const interval = setInterval(() => {
      setIndex((prev) => {
        const next = (prev + 1) % slides.length;

        gsap.to(sliderRef.current, {
          xPercent: -100 * next,
          duration: 1.2,
          ease: "power4.inOut",
        });

        return next;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    });
  };

  return (
    <section className={`${styles.hero} relative h-screen overflow-hidden`}>
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={bgVid} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/60" />

      <div ref={sliderRef} className={`${styles.slider} relative z-10 flex h-full`}>
        {slides.map((slide, i) => {
          const [line1, line2] = slide.title;

          return (
            <div key={i} className="min-w-full flex items-center px-6 md:px-12 lg:pl-[72px]">
              <div className="max-w-[1200px]">
                <h1 className={`${styles.title} tracking-[-0.02em] leading-[0.92]`}>
                  <span className="block">{line1}</span>
                  <span className="block">{line2}</span>
                </h1>

                <p className={styles.para}>{slide.description}</p>

                <Link to={slide.link} className={styles.button}>
                  {slide.button} <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      <div className="absolute bottom-10 right-10 z-20">
        <button onClick={scrollToNext} className={styles.scrollBtn}>
          <ChevronDown size={22} />
        </button>
      </div>
    </section>
  );
}
