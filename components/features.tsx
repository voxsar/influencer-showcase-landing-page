"use client";
import {
  Instagram,
  ShieldCheck,
  Tag,
  LayoutGrid,
  TrendingUp,
  Smartphone,
} from "lucide-react";
import TitleSection from "./common/title-section";
import RevealOnScroll from "./framer/reveal-on-scroll";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";

const features = [
  {
    icon: Instagram,
    title: "Instagram Integration",
    description:
      "Influencers securely connect their IG accounts with our safe, official API integration. Seamless authentication in seconds.",
  },
  {
    icon: ShieldCheck,
    title: "Post Approvals",
    description:
      "You maintain full control - decide which tagged posts appear on your store. Review, approve, or reject with one click.",
  },
  {
    icon: Tag,
    title: "Product Tagging",
    description:
      "Highlight products directly inside influencer content for seamless shopping. Link any product to any post instantly.",
  },
  {
    icon: LayoutGrid,
    title: "Storefront Display",
    description:
      "Showcase authentic content on product pages or in a dedicated gallery. Multiple display options to match your brand.",
  },
  {
    icon: TrendingUp,
    title: "Boosted Conversions",
    description:
      "Leverage social proof to dramatically increase buyer confidence and sales. See results in days, not months.",
  },
  {
    icon: Smartphone,
    title: "Mobile Optimized",
    description:
      "Fully responsive design that looks perfect on every device and screen size. Beautiful on desktop, tablet, and mobile.",
  },
];

export default function Features() {
  const isMobile = useIsMobile();

  return (
    <section className="relative py-32 px-5 bg-[#0a0a0a]">
      <div className="max-w-[1400px] mx-auto">
        <TitleSection
          tagline="⚡ POWERFUL FEATURES"
          title="Everything You Need to Succeed"
          description="Turn social proof into sales with our complete influencer showcase platform"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <RevealOnScroll
              delay={index * 0.2}
              classname="w-full h-full"
              key={index}
            >
              <div className="w-full h-full group relative overflow-hidden p-12 bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 rounded-[30px] backdrop-blur-xl transition-all duration-500 hover:-translate-y-4 hover:scale-[1.02] hover:border-[#667eea]/50 hover:shadow-[0_30px_80px_rgba(102,126,234,0.4)]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#667eea]/10 to-[#764ba2]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <motion.div className="relative w-[90px] h-[90px] mb-7 bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-[22px] flex items-center justify-center shadow-[0_10px_30px_rgba(102,126,234,0.4)] group-hover:animate-smooth-bounce">
                  <feature.icon className="w-11 h-11 text-white" />
                </motion.div>

                <h3 className="relative text-2xl font-bold mb-4 text-white ">
                  {feature.title}
                </h3>
                <p className="relative text-[#94a3b8] leading-relaxed text-[17px]">
                  {feature.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
