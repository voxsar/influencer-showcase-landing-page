"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import RevealOnScroll from "./framer/reveal-on-scroll";

const stats = [
  { number: "3.5x", label: "Average Conversion Boost" },
  { number: "92%", label: "Customer Trust Increase" },
  { number: "10k+", label: "Active Stores" },
  { number: "4.9★", label: "Average Rating" },
];

export default function Stats() {
  const isMobile = useIsMobile();

  return (
    <section className="relative py-32 px-5 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a2e]">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat, index) => (
            <RevealOnScroll
              delay={isMobile ? 0 : index * 0.1}
              key={index}
              classname="w-full h-full"
            >
              <motion.div
                className={`h-full w-full flex flex-col justify-center items-center overflow-hidden relative text-center p-10 bg-white/[0.03] border border-white/10 rounded-3xl backdrop-blur-sm transition-all duration-500 hover:-translate-y-3 hover:border-[#667eea]/50 hover:shadow-[0_20px_60px_rgba(102,126,234,0.3)] `}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#667eea]/10 to-[#764ba2]/10 opacity-0 transition-opacity duration-300 hover:opacity-100" />
                <div className="relative text-6xl font-black mb-6 bg-gradient-to-r from-[#667eea] to-[#f093fb] bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="relative text-[#94a3b8] text-lg">
                  {stat.label}
                </div>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
