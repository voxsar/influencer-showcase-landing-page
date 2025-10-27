"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <motion.nav
      initial={{ y: "-50%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "linear" }}
      className={`fixed top-0 w-full z-50 ${
        isScrolled
          ? "bg-gradient-to-r from-[#667eea]/10 via-[#764ba2]/10 to-[#f093fb]/10 backdrop-blur-2xl shadow-lg shadow-purple-500/10 border-b border-white/20"
          : "bg-black/20 backdrop-blur-md border-b border-white/5"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex justify-between items-center py-5">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            width={1000}
            height={1000}
            src="/logo3.png"
            alt="influencer showcase"
            className="h-10 sm:h-14 md:h-20 w-auto"
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-white font-medium transition-all duration-300 relative group hover:bg-gradient-to-r hover:from-[#667eea] hover:to-[#764ba2] hover:bg-clip-text hover:text-transparent"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#667eea] to-[#764ba2] group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="#pricing"
            className="hidden sm:block relative overflow-hidden px-6 md:px-8 py-2.5 md:py-3.5 rounded-full bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white text-sm md:text-base font-bold transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_30px_rgba(102,126,234,0.6)] group"
          >
            <span className="relative z-10">Start Free Trial</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
          </Link>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-gradient-to-r hover:from-[#667eea]/20 hover:to-[#764ba2]/20 rounded-lg transition-all duration-300"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-gradient-to-b from-[#667eea]/10 to-[#764ba2]/10 backdrop-blur-2xl border-t border-white/10">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white/80 hover:text-white font-medium transition-colors duration-300 py-2"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#pricing"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 text-center px-6 py-3 rounded-full bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white font-bold"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      )}
    </motion.nav>
  );
}
