import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroHeading = ({ title }) => {
    const headingRef = useRef(null);

    useEffect(() => {
        const element = headingRef.current;
        if (!element) return;

        // 1. Text ko Words me split karna (Animation ke liye)
        // Save original text to avoid repeating splitting logic if title changes
        const words = title.split(" ");
        element.innerHTML = words
            .map(word => `<span class="inline-block overflow-hidden"><span class="word inline-block">${word}</span></span>`)
            .join(" ");

        // 2. GSAP Animation Logic
        const wordElements = element.querySelectorAll(".word");

        const tl = gsap.fromTo(wordElements,
            { y: "100%" }, // Start position (Niche)
            {
                y: "0%",      // End position (Upar)
                duration: 1.2,
                ease: "power4.out",
                stagger: 0.05,
                scrollTrigger: {
                    trigger: element,
                    start: "top 80%", // Jab 80% screen par dikhe
                    toggleActions: "play none none reverse",
                }
            }
        );

        return () => {
            // Cleanup ScrollTrigger and GSAP animations
            if (tl.scrollTrigger) tl.scrollTrigger.kill();
            tl.kill();
        };
    }, [title]);

    return (
        <div className="overflow-hidden py-2">
            <h2
                ref={headingRef}
                className="font-Helix text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-none lg:leading-tight text-white"
            >
                {title}
            </h2>
        </div>
    );
};

HeroHeading.propTypes = {
    title: PropTypes.string.isRequired,
};

export default HeroHeading;
