"use client";
import React from "react";
import { Shield, CheckCircle, Lock } from "lucide-react";

const CarInsuranceHero = () => {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-2xl">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      
      {/* City bokeh effect - subtle blurred circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-10 left-[10%] w-32 h-32 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-[30%] w-24 h-24 bg-cyan-400/15 rounded-full blur-2xl"></div>
        <div className="absolute bottom-5 right-[20%] w-40 h-40 bg-sky-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-[10%] w-28 h-28 bg-indigo-400/15 rounded-full blur-2xl"></div>
      </div>

      {/* Road/ground line */}
      <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-slate-950 to-transparent"></div>
      
      {/* Car silhouette - modern stylized car */}
      <div className="absolute bottom-[15%] left-1/2 -translate-x-1/2 w-[85%] max-w-md">
        {/* Car body */}
        <svg viewBox="0 0 400 150" className="w-full h-auto drop-shadow-2xl">
          {/* Car shadow */}
          <ellipse cx="200" cy="140" rx="160" ry="10" fill="rgba(0,0,0,0.4)" />
          
          {/* Car body - main */}
          <path 
            d="M40,100 L60,70 L100,55 L160,45 L280,45 L340,55 L370,70 L380,90 L380,110 L370,120 L340,125 L60,125 L40,110 Z" 
            fill="url(#carGradient)"
          />
          
          {/* Car roof/windows */}
          <path 
            d="M110,60 L155,48 L255,48 L290,58 L280,70 L120,70 Z" 
            fill="#1e293b"
          />
          {/* Window highlight */}
          <path 
            d="M120,65 L150,52 L200,52 L200,68 L125,68 Z" 
            fill="rgba(148,163,184,0.3)"
          />
          <path 
            d="M210,52 L250,52 L275,65 L210,65 Z" 
            fill="rgba(148,163,184,0.3)"
          />
          
          {/* Headlights */}
          <ellipse cx="365" cy="85" rx="8" ry="12" fill="#fef9c3" className="drop-shadow-lg" />
          <ellipse cx="45" cy="85" rx="6" ry="10" fill="#fef9c3" className="drop-shadow-lg" />
          
          {/* Wheels */}
          <circle cx="90" cy="125" r="28" fill="#0f172a" />
          <circle cx="90" cy="125" r="18" fill="#334155" />
          <circle cx="90" cy="125" r="8" fill="#64748b" />
          
          <circle cx="310" cy="125" r="28" fill="#0f172a" />
          <circle cx="310" cy="125" r="18" fill="#334155" />
          <circle cx="310" cy="125" r="8" fill="#64748b" />
          
          {/* Door lines */}
          <path d="M150,50 L150,115" stroke="#1e40af" strokeWidth="1" opacity="0.5" />
          <path d="M250,50 L250,115" stroke="#1e40af" strokeWidth="1" opacity="0.5" />
          
          {/* Car shine */}
          <path 
            d="M70,75 L100,62 L160,52 L220,52" 
            stroke="rgba(255,255,255,0.3)" 
            strokeWidth="2" 
            fill="none"
            strokeLinecap="round"
          />
          
          <defs>
            <linearGradient id="carGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#1d4ed8" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Trust badges overlay */}
      <div className="absolute top-6 right-6 flex flex-col gap-4">
        {/* Shield badge */}
        <div className="flex items-center gap-3 bg-black/40 backdrop-blur-sm px-4 py-3 rounded-full border border-white/10">
          <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
            <Shield className="w-5 h-5 text-green-400" />
          </div>
          <div className="text-left">
            <p className="text-white text-xs font-semibold">Fully Insured</p>
            <p className="text-gray-400 text-[10px]">Protected coverage</p>
          </div>
        </div>
        
        {/* Checkmark badge */}
        <div className="flex items-center gap-3 bg-black/40 backdrop-blur-sm px-4 py-3 rounded-full border border-white/10">
          <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
            <CheckCircle className="w-5 h-5 text-blue-400" />
          </div>
          <div className="text-left">
            <p className="text-white text-xs font-semibold">Verified</p>
            <p className="text-gray-400 text-[10px]">Trusted by thousands</p>
          </div>
        </div>
        
        {/* Security badge */}
        <div className="flex items-center gap-3 bg-black/40 backdrop-blur-sm px-4 py-3 rounded-full border border-white/10">
          <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
            <Lock className="w-5 h-5 text-purple-400" />
          </div>
          <div className="text-left">
            <p className="text-white text-xs font-semibold">Secure</p>
            <p className="text-gray-400 text-[10px]">256-bit encryption</p>
          </div>
        </div>
      </div>

      {/* Corner accent lines */}
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-blue-500/30 rounded-bl-2xl"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-blue-500/30 rounded-br-2xl"></div>
    </div>
  );
};

export default CarInsuranceHero;

