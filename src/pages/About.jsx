
"use client";
import React, { useEffect, useRef, Suspense, useLayoutEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

import LalitBG from "../assets/image/LalitBG.webp";
import UtkarshBG from "../assets/image/UtkarshBG.webp";

gsap.registerPlugin(ScrollTrigger);

// Sphere Model
const SphereModel = React.forwardRef((props, ref) => {
  const { scene } = useGLTF("/model/Sphere.glb");

  useLayoutEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        const newMaterial = new THREE.MeshStandardMaterial({
          color: new THREE.Color("#145CCF"),
          metalness: 0.9,
          roughness: 0.3,
        });
        child.material = newMaterial;
      }
    });
  }, [scene]);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.005;
    }
  });

  return <primitive object={scene} {...props} ref={ref} />;
});

const AboutUs = () => {
  const charterRef = useRef(null);
  const ceoRef = useRef(null);
  const cooRef = useRef(null);
  const teamHeaderRef = useRef(null);
  const sphereRef = useRef(null);
  const aboutUsSectionRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const heroTextRef = document.querySelector(".hero-text");
    if (heroTextRef) {
      gsap.fromTo(
        heroTextRef,
        { scale: 0.8, opacity: 0, y: 50 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power3.out",
        }
      );
    }

    if (aboutUsSectionRef.current) {
      gsap.fromTo(
        aboutUsSectionRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: aboutUsSectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    const fadeInAnimation = (element) => {
      if (element) {
        gsap.fromTo(
          element,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    };

    fadeInAnimation(charterRef.current);
    fadeInAnimation(teamHeaderRef.current);

    if (ceoRef.current) {
      gsap.fromTo(
        ceoRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ceoRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    if (cooRef.current) {
      gsap.fromTo(
        cooRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cooRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden font-sans">
      {/* HERO SECTION */}
{/* HERO SECTION */}
{/* HERO SECTION */}
<div className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden bg-black">

  {/* Moving Premium Grid */}
  <div
    className="absolute inset-0"
    style={{
      backgroundImage: `
        linear-gradient(rgba(37,99,235,0.5) 1px, transparent 1px),
        linear-gradient(90deg, rgba(37,99,235,0.5) 1px, transparent 1px)
      `,
      backgroundSize: "90px 90px",
      animation: "gridMoveX 25s linear infinite, gridGlow 6s ease-in-out infinite",
    }}
  />

  {/* Subtle Radial Dark Fade */}
  <div
    className="absolute inset-0"
    style={{
      background: "radial-gradient(circle at center, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.85) 70%)",
    }}
  />

  {/* Content */}
  <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">

  {/* Heading */}
  <h1 className="
  text-[44px]
  sm:text-[52px]
  md:text-[68px]
  lg:text-[76px]
  font-light
  leading-[1.05]
  tracking-[-0.03em]
  text-white
  mb-6
">
  What does <span className="text-[#2563EB]">Techkrate</span> do?
</h1>


  {/* Subheading */}
  <p className="
    text-gray-400
    text-[15px] sm:text-[18px] md:text-[20px]
    leading-relaxed
    max-w-2xl
    mx-auto
  ">
    Simplifying complex digital systems through intelligent SaaS
    solutions designed for clarity, scalability, and innovation.
  </p>

</div>

</div>


{/* About Us section */}
{/* About Us Section */}
<div
  ref={aboutUsSectionRef}
  className="relative z-10 bg-black text-white overflow-hidden"
>

  <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 sm:py-24">
    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* LEFT SIDE — TEXT */}
      <div className="order-2 lg:order-1 w-full text-center lg:text-left">

        <h1 className="text-[44px] md:text-[60px] font-light tracking-[-0.03em] leading-[1.05] text-white mb-8">
          About <span className="text-[#2563EB]">Us</span>
        </h1>

        <div className="text-base sm:text-lg text-gray-300 leading-relaxed space-y-6">

          <p>
            Your gateway to simplifying the complex. We develop software and
            SaaS solutions that empower individuals and businesses to navigate
            and thrive in an increasingly digital world. Our approach
            transforms intricate problems into clear, actionable tools that
            work for everyone, regardless of expertise or experience.
          </p>

          <p>
            Imagine easily managing your business operations, scaling
            confidently, or solving daily challenges with absolute clarity.
            Whether you're a seasoned tech professional or a first-time user,
            Techkrate ensures that the experience is intuitive, powerful, and
            adaptable to your needs.
          </p>

          <p>
            We don't just build software; we create tools that bridge the gap
            between complexity and understanding. The future is
            complex—Techkrate makes it clear.
          </p>

          <p className="mt-4 text-[#2563EB] font-semibold text-xl">
            The future is complex — Techkrate makes it clear.
          </p>

        </div>
      </div>

      {/* RIGHT SIDE — VISUAL (Desktop Only) */}
      <div className="order-1 lg:order-2 hidden lg:flex justify-center items-center relative">

        <div className="relative w-[420px] h-[420px] flex items-center justify-center">

          {/* Medium-Speed Rotating Ring */}
         <div
  className="absolute w-full h-full rounded-full border-4 
             border-t-primary-500 
             border-r-transparent 
             border-b-transparent 
             border-l-transparent animate-spin"
></div>


          {/* Soft Glow */}
          <div className="absolute w-[260px] h-[260px] rounded-full bg-primary-600/20 blur-3xl"></div>

          {/* Core Circle */}
          <div className="absolute w-[200px] h-[200px] rounded-full bg-primary-700"></div>

        </div>

      </div>

    </div>
  </div>
</div>




{/* Charter Section */}
<div className="relative z-10 bg-black text-white">
  <div
    ref={charterRef}
    className="max-w-7xl mx-auto px-6 lg:px-8 py-16 sm:py-24"
  >
    {/* Header */}
    <div className="text-center mb-16">
<h2 className="text-[44px] md:text-[60px] font-light tracking-[-0.03em] leading-[1.05] text-white mb-4">
      Our <span className="text-[#2563EB]">Charter</span>
    </h2>

      <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mt-6 max-w-3xl mx-auto">
        At Techkrate, we don’t just build software — we architect scalable,
        intelligent SaaS systems designed to simplify complexity and
        accelerate business growth.
      </p>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
      {[
        {
          title: "Operational Simplification at Scale",
          content:
            "We abstract complexity from mission-critical workflows, delivering SaaS platforms that streamline operations and drive efficiency across organizations of all sizes.",
        },
        {
          title: "User-Centric Innovation Framework",
          content:
            "Our philosophy prioritizes intuitive UX, modular architecture, and seamless integrations—ensuring our platforms evolve with business needs.",
        },
        {
          title: "Enterprise-Grade Reliability & Security",
          content:
            "We uphold the highest standards of security, performance, and compliance, delivering resilient infrastructures enterprises can trust.",
        },
        {
          title: "Vision-Driven Ecosystem Leadership",
          content:
            "We lead with a forward-looking vision—building ecosystems that empower businesses to redefine benchmarks and deliver exponential value.",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="
            relative p-8 rounded-2xl
            bg-white/5
            border border-white/10
            shadow-lg
            hover:shadow-xl
            transition-all duration-300
            transform hover:-translate-y-2
          "
        >
          {/* Glow Circle Accent */}
          <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#1F86C7]/20 flex items-center justify-center text-[#1F86C7] text-sm font-bold">
            ✓
          </div>

          {/* Title */}
          <h4 className="text-xl lg:text-2xl font-semibold text-white mb-4">
            {item.title}
          </h4>

          {/* Content */}
          <p className="text-gray-300 text-base leading-relaxed">
            {item.content}
          </p>

          {/* Bottom Glow Line */}
          <div className="absolute bottom-0 left-0 w-full h-[4px] bg-[#1F86C7]/40 rounded-b-2xl"></div>

          {/* Soft glow background */}
          <div className="absolute inset-0 rounded-2xl bg-[#1F86C7]/5 blur-[60px] opacity-20 -z-10"></div>
        </div>
      ))}
    </div>
  </div>


 {/* team section */}
<div className="bg-black py-20">
  {/* Section Header */}
  <div className="text-center mb-16 px-6">
    <h2 className="text-[44px] md:text-[60px] font-light tracking-[-0.03em] leading-[1.05] text-white mb-4 drop-shadow-lg">
Leading Techkrate
    </h2>
    <p className="text-gray-400 max-w-2xl mx-auto text-lg sm:text-xl leading-relaxed">
      Visionaries, builders, and innovators—driving intelligent claims automation with clarity and precision.
    </p>
  </div>

  {/* Team Members */}
  <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-20">

    {/* Member 1 - Image Left */}
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
      <div className="lg:w-1/2 relative group rounded-2xl overflow-hidden shadow-lg">
        <img
          src={LalitBG}
          alt="Lalit Singh Chauhan"
          className="w-full h-96 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
      </div>
      <div className="lg:w-1/2 text-left">
        <h3 className="text-3xl sm:text-4xl font-semibold text-white mb-2">
          Lalit Singh Chauhan
        </h3>
        <p className="text-[#2563EB] font-medium mb-4">Chief Executive Officer</p>
        <p className="text-gray-300 leading-relaxed mb-6">
          Lalit envisions a future where complexity is simplified for everyone. He empowers businesses with transformative tools to navigate the digital era with clarity and confidence.
        </p>
        <a
          href="https://www.linkedin.com/in/lalit-singh-chauhan-86b42425"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-[#2563EB] hover:text-blue-400 transition-colors text-xl"
        >
          <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
        </a>
      </div>
    </div>

    {/* Member 2 - Image Right */}
    <div className="flex flex-col lg:flex-row-reverse items-center lg:items-start gap-8">
      <div className="lg:w-1/2 relative group rounded-2xl overflow-hidden shadow-lg">
        <img
          src={UtkarshBG}
          alt="Utkarsh Chauhan"
          className="w-full h-96 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
      </div>
      <div className="lg:w-1/2 text-left">
        <h3 className="text-3xl sm:text-4xl font-semibold text-white mb-2">
          Utkarsh Chauhan
        </h3>
        <p className="text-[#2563EB] font-medium mb-4">Chief Operating Officer</p>
        <p className="text-gray-300 leading-relaxed mb-6">
          Utkarsh ensures operational excellence across every platform and solution. He bridges cutting-edge technology with seamless execution for maximum impact.
        </p>
        <a
          href="https://www.linkedin.com/in/utkarsh-chauhan-techkrate"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-[#2563EB] hover:text-blue-400 transition-colors text-xl"
        >
          <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
        </a>
      </div>
    </div>

    {/* Add more members in same alternating style */}
    
  </div>
</div>
   </div> {/* End Charter Section */}

   {/* Testimonial Section */}
<div className="bg-black py-28 px-6 lg:px-8">
  <div className="max-w-6xl mx-auto text-center">

    {/* Quote Icon */}
    <div className="text-[#2563EB] text-5xl mb-8 opacity-80">
      “
    </div>

    {/* Main Quote */}
    <h2 className="
      text-[40px] md:text-[58px]
      font-light
      leading-[1.1]
      tracking-[-0.02em]
      text-white
      mb-12
    ">
      Techkrate brings the right advice, network,
      and support. They make a significant impact
      on every digital transformation journey.
    </h2>

    {/* Author */}
    {/* Author */}
<div className="flex flex-col items-center justify-center mt-12">

  {/* Small Divider Line */}
  <div className="w-12 h-[2px] bg-[#2563EB] mb-6"></div>

  {/* Name */}
  <h4 className="text-white text-xl font-medium tracking-tight">
    Utkarsh Chauhan
  </h4>

  {/* Role */}
  <p className="text-gray-400 text-sm mt-1">
    Chief Operating Officer
  </p>

</div>

  </div>
</div>

    </div>
  );
};

export default AboutUs;