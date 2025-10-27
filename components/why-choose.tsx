"use client";
import { Award, Lock, Zap, Headphones } from "lucide-react";
import TitleSection from "./common/title-section";
import RevealOnScroll from "./framer/reveal-on-scroll";
import { useIsMobile } from "@/hooks/use-mobile";

const reasons = [
  {
    icon: Award,
    title: "Official Shopify App",
    description:
      "Verified integration in the Shopify App Store for complete peace of mind and seamless installation.",
  },
  {
    icon: Lock,
    title: "Secure API Connection",
    description:
      "Safe, official Instagram API ensures your data and your influencers' data stays protected at all times.",
  },
  {
    icon: Zap,
    title: "Easy Setup",
    description:
      "No coding needed - install and configure in minutes. Start showcasing influencer content immediately.",
  },
  {
    icon: Headphones,
    title: "Expert Support",
    description:
      "Backed by Artslab Creatives IT team with guaranteed 24-hour response time and dedicated assistance.",
  },
];

export default function WhyChoose() {
  const ismobile = useIsMobile();
  return (
    <section className="relative py-32 px-5 bg-gradient-to-b from-[#0a0a0a] to-[#1a0a2e]">
      <div className="max-w-[1400px] mx-auto">
        <TitleSection
          tagline="🏆 WHY US"
          title=" Why Choose Influencer Showcase?"
          description="Built for Shopify merchants who demand excellence"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {reasons.map((reason, index) => (
            <RevealOnScroll
              delay={ismobile ? 0 : index * 0.2}
              key={index}
              classname="w-full h-full"
            >
              <div className="group h-full w-full relative overflow-hidden text-center px-6 py-12 bg-white/[0.03] border border-white/10 rounded-[30px] backdrop-blur-sm transition-all duration-500 hover:-translate-y-4 hover:border-[#667eea]/50 hover:shadow-[0_25px_70px_rgba(102,126,234,0.4)]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#667eea]/10 to-[#f093fb]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative w-[100px] h-[100px] mx-auto mb-8 bg-gradient-to-br from-[#667eea]/20 to-[#f093fb]/20 rounded-[25px] flex items-center justify-center border-2 border-[#667eea]/30 group-hover:rotate-[10deg] transition-transform duration-300">
                  <reason.icon className="w-12 h-12 text-[#667eea]" />
                </div>

                <h3 className="relative text-2xl font-bold mb-4 text-white">
                  {reason.title}
                </h3>
                <p className="relative text-[#94a3b8] leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
