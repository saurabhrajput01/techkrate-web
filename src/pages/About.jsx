"use client";
import React, { useEffect, useRef, Suspense, useLayoutEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

// Import your assets
import LalitBG from "../assets/image/LalitBG.webp";
import UtkarshBG from "../assets/image/UtkarshBG.webp";

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const bgVid =
  "https://videos.pexels.com/video-files/857032/857032-hd_1280_720_25fps.mp4";

// The updated SphereModel component with rotation
const SphereModel = React.forwardRef((props, ref) => {
  const { scene } = useGLTF("/model/Sphere.glb");

  useLayoutEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        const newMaterial = new THREE.MeshStandardMaterial({
          color: new THREE.Color("#145CCF"), // Blue tone
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
const vantaRef = useRef(null);
const vantaEffect = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
// VANTA NET – Top Header only
if (window.VANTA && !vantaEffect.current) {
  vantaEffect.current = window.VANTA.NET({
    el: vantaRef.current,
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
    color: 0x3f8eff,
     backgroundColor: 0x08040f
  });
}

    // Hero text zoom-in animation along with fade-in
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
          ease: "power3.out"
        }
      );
    }

    // Fade-in animation for the About Us section
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

  if (vantaEffect.current) {
    vantaEffect.current.destroy();
    vantaEffect.current = null;
  }
};
}, []);


    
return (
<div className="relative w-full overflow-hidden font-sans">
<div
  ref={vantaRef}
  className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden"
  style={{
    fontFamily: "Inter, sans-serif",
    letterSpacing: "-0.01em",
  }}
>

  {/* dark overlay for readability */}
  <div className="absolute inset-0 bg-black/40"></div>

  <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">

<h1
  className="
    text-[44px] md:text-[60px] 
    font-light tracking-[-0.03em] 
    leading-[1.05] text-white
    mb-6
  "
  style={{ textShadow: "0 6px 18px rgba(0,0,0,0.6)" }}
>
  What does <span className="text-[#2563EB]">Techkrate</span> do?
</h1>

   
    <p className="
      text-white/80
      text-lg
      sm:text-xl
      max-w-2xl
      mx-auto
      leading-relaxed
    ">
      Simplifying complex digital systems through intelligent SaaS
      solutions designed for clarity, scalability, and innovation.
    </p>

  </div>
</div>



      {/* About Us section */}
    <div
      ref={aboutUsSectionRef}
      className="relative z-10 bg-black text-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
{/* Text - Full width on mobile/tablet, left side on desktop */}
          <div className="order-2 lg:order-1 w-full lg:w-auto text-center lg:text-left">

<h1 className="text-[44px] md:text-[60px] font-light tracking-[-0.03em] leading-[1.05] text-white mb-6">
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
              <p className="mt-3 text-blue-400 font-bold text-xl">
                The future is complex — Techkrate makes it clear.
              </p>
            </div>
          </div>

{/* 3D Sphere - Only visible on desktop/laptop (lg and above) */}
          <div className="order-1 lg:order-2 h-[400px] lg:h-[500px] rounded-xl hidden lg:block">
            <Canvas camera={{ position: [0, 0, 5], fov: 70 }}>
              <ambientLight intensity={0.8} />
              <directionalLight
                position={[2, 4, 5]}
                intensity={2}
                color={"#1d4ed8"}
              />
              <Suspense fallback={null}>
                <SphereModel
                  ref={sphereRef}
                  scale={[2.7, 2.7, 2.7]}
                  position={[0, 0, 0]}
                />
              </Suspense>
            </Canvas>
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
    </div>
  );
};

export default AboutUs;