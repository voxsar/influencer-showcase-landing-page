import Link from "next/link";
import { PlayCircle, Check } from "lucide-react";
import RevealOnScroll from "./framer/reveal-on-scroll";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#1a0a2e] to-[#16213e] pt-40 pb-24 px-5">
      {/* Animated gradient orbs */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#667eea] to-[#764ba2] blur-[80px] opacity-60 -top-48 -right-24 animate-float" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#f093fb] to-[#f5576c] blur-[80px] opacity-60 -bottom-36 -left-24 animate-float-delayed" />
      <div className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-br from-[#4facfe] to-[#00f2fe] blur-[80px] opacity-60 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-float-delayed-2" />

      <div className="relative z-10 text-center max-w-[1000px] mx-auto">
        {/* <RevealOnScroll> */}
        <div className="inline-block bg-[#667eea]/20 border border-[#667eea]/40 text-[#a5b4fc] px-7 py-3 rounded-full text-sm font-semibold mb-8 backdrop-blur-sm animate-fade-in-down">
          🚀 Now Available on Shopify App Store
        </div>
        {/* </RevealOnScroll> */}

        <h1 className="text-6xl md:text-7xl font-black mb-8 leading-tight tracking-tight bg-gradient-to-r from-white via-[#a5b4fc] to-[#667eea] bg-clip-text text-transparent animate-fade-in-up">
          Turn Instagram Influence into Storefront Power
        </h1>

        <p
          className="text-xl md:text-2xl text-[#cbd5e1] mb-12 leading-relaxed max-w-[800px] mx-auto animate-fade-in-up opacity-0"
          style={{ animationDelay: "0.2s" }}
        >
          Showcase approved influencer posts directly on your Shopify store.
          Build trust, boost engagement, and drive sales for only $15/month.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-5 justify-center mb-16 animate-fade-in-up opacity-0"
          style={{ animationDelay: "0.4s" }}
        >
          <Link
            href="#pricing"
            className="relative overflow-hidden inline-flex items-center gap-3 px-12 py-5 rounded-full bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white font-bold text-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_60px_rgba(102,126,234,0.6)] group"
          >
            <span className="relative z-10">👉 Start Free Trial</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#764ba2] to-[#667eea] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>

          <Link
            href="#preview"
            className="inline-flex items-center gap-3 px-12 py-5 rounded-full bg-white/10 backdrop-blur-sm text-white font-bold text-xl border-2 border-white/20 transition-all duration-300 hover:bg-white/20 hover:border-white/40 hover:-translate-y-1"
          >
            <PlayCircle className="w-6 h-6" />
            <span>See Demo</span>
          </Link>
        </div>

        <div
          className="flex flex-col sm:flex-row justify-center gap-10 text-[#94a3b8] animate-fade-in-up opacity-0"
          style={{ animationDelay: "0.6s" }}
        >
          <div className="flex items-center gap-3">
            <Check className="w-5 h-5 text-[#10b981]" />
            <span>14-Day Free Trial</span>
          </div>
          <div className="flex items-center gap-3">
            <Check className="w-5 h-5 text-[#10b981]" />
            <span>No Credit Card Required</span>
          </div>
          <div className="flex items-center gap-3">
            <Check className="w-5 h-5 text-[#10b981]" />
            <span>Cancel Anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
}
