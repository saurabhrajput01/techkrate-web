"use client";
import React, { useEffect, useRef } from "react";

const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let particles = [];
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Create particles
    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.opacity = Math.random() * 0.5 + 0.1;
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
        this.pulse = 0;
        this.hue = Math.random() * 40 + 200; // Blue to cyan range
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.pulse += this.pulseSpeed;

        // Wrap around screen
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
      }

      draw() {
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.size * 3
        );
        gradient.addColorStop(0, `hsla(${this.hue}, 90%, 60%, ${this.opacity * (0.5 + Math.sin(this.pulse) * 0.5)})`);
        gradient.addColorStop(1, "transparent");
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }
    }

    // Create abstract shapes
    class Shape {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 100 + 50;
        this.speedX = (Math.random() - 0.5) * 0.2;
        this.speedY = (Math.random() - 0.5) * 0.2;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.002;
        this.opacity = Math.random() * 0.03 + 0.01;
        this.type = Math.floor(Math.random() * 3); // 0: circle, 1: hexagon, 2: triangle
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.rotation += this.rotationSpeed;

        if (this.x < -this.size) this.x = canvas.width + this.size;
        if (this.x > canvas.width + this.size) this.x = -this.size;
        if (this.y < -this.size) this.y = canvas.height + this.size;
        if (this.y > canvas.height + this.size) this.y = -this.size;
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, this.size);
        gradient.addColorStop(0, `rgba(37, 99, 235, ${this.opacity})`);
        gradient.addColorStop(0.5, `rgba(31, 134, 199, ${this.opacity * 0.5})`);
        gradient.addColorStop(1, "transparent");
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        
        if (this.type === 0) {
          // Circle
          ctx.arc(0, 0, this.size, 0, Math.PI * 2);
        } else if (this.type === 1) {
          // Hexagon
          for (let i = 0; i < 6; i++) {
            const angle = (i * Math.PI * 2) / 6;
            const x = Math.cos(angle) * this.size;
            const y = Math.sin(angle) * this.size;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.closePath();
        } else {
          // Triangle
          for (let i = 0; i < 3; i++) {
            const angle = (i * Math.PI * 2) / 3 - Math.PI / 2;
            const x = Math.cos(angle) * this.size;
            const y = Math.sin(angle) * this.size;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.closePath();
        }
        
        ctx.fill();
        ctx.restore();
      }
    }

    // Initialize particles and shapes
    const initParticles = () => {
      particles = [];
      // Create particles
      for (let i = 0; i < 60; i++) {
        particles.push(new Particle());
      }
      // Create shapes
      for (let i = 0; i < 8; i++) {
        particles.push(new Shape());
      }
    };
    
    initParticles();

    // Light rays
    let time = 0;
    const drawLightRays = () => {
      time += 0.005;
      
      // Central light glow
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      // Radial gradient for center glow
      const centerGradient = ctx.createRadialGradient(
        centerX, centerY, 0,
        centerX, centerY, Math.max(canvas.width, canvas.height) * 0.6
      );
      centerGradient.addColorStop(0, "rgba(37, 99, 235, 0.08)");
      centerGradient.addColorStop(0.3, "rgba(31, 134, 199, 0.04)");
      centerGradient.addColorStop(0.6, "rgba(0, 212, 255, 0.02)");
      centerGradient.addColorStop(1, "transparent");
      
      ctx.fillStyle = centerGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Animated light rays
      const rayCount = 5;
      for (let i = 0; i < rayCount; i++) {
        const angle = (i / rayCount) * Math.PI * 2 + time * 0.5;
        const rayLength = Math.max(canvas.width, canvas.height) * 1.2;
        
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(angle);
        
        const rayGradient = ctx.createLinearGradient(0, 0, rayLength, 0);
        rayGradient.addColorStop(0, "rgba(37, 99, 235, 0.06)");
        rayGradient.addColorStop(0.5, "rgba(0, 212, 255, 0.03)");
        rayGradient.addColorStop(1, "transparent");
        
        ctx.beginPath();
        ctx.moveTo(0, -30);
        ctx.lineTo(rayLength, 0);
        ctx.lineTo(0, 30);
        ctx.closePath();
        ctx.fillStyle = rayGradient;
        ctx.fill();
        ctx.restore();
      }
    };

    // Connection lines
    const drawConnections = () => {
      const particleArray = particles.filter(p => p instanceof Particle);
      const maxDistance = 150;
      
      for (let i = 0; i < particleArray.length; i++) {
        for (let j = i + 1; j < particleArray.length; j++) {
          const dx = particleArray[i].x - particleArray[j].x;
          const dy = particleArray[i].y - particleArray[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.1;
            ctx.beginPath();
            ctx.moveTo(particleArray[i].x, particleArray[i].y);
            ctx.lineTo(particleArray[j].x, particleArray[j].y);
            ctx.strokeStyle = `rgba(37, 99, 235, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
    };

    // Animation loop
    const animate = () => {
      // Clear with dark background
      ctx.fillStyle = "#0a0f1c";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw light rays first
      drawLightRays();
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      // Draw connections
      drawConnections();
      
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full -z-10"
      style={{ background: "#0a0f1c" }}
    />
  );
};

export default AnimatedBackground;

