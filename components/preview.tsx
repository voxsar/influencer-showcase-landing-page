"use client";
import { Check, ImageIcon } from "lucide-react";
import TitleSection from "./common/title-section";
import RevealOnScroll from "./framer/reveal-on-scroll";
import { motion } from "framer-motion";

const previewFeatures = [
  "Dedicated influencer gallery showing approved Instagram posts",
  'Posts appear seamlessly on product pages with "Shop Now" links',
  "Fully responsive and mobile-friendly design",
  "Blends perfectly with your existing store theme",
  "Real-time updates when influencers post new content",
];

export default function Preview() {
  return (
    <section
      id="preview"
      className="relative py-32 px-5 bg-gradient-to-b from-[#0a0a0a] to-[#1a0a2e]"
    >
      <div className="max-w-[1400px] mx-auto">
        <TitleSection
          tagline="🚀 LIVE PREVIEW"
          title="Experience the Power"
          description="Give your customers the experience of shopping with influencer
            credibility built right in"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <RevealOnScroll>
              <h3 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
                Authentic, Social, and Shoppable
              </h3>
            </RevealOnScroll>

            <ul className="space-y-4">
              {previewFeatures.map((feature, index) => (
                <RevealOnScroll key={index} delay={index * 0.1}>
                  <li
                    key={index}
                    className="flex items-center gap-5 p-6 bg-white/[0.03] border border-white/10 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:bg-[#667eea]/10 hover:border-[#667eea]/30 hover:translate-x-2"
                  >
                    <div className="flex-shrink-0 w-9 h-9 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-full flex items-center justify-center shadow-[0_4px_15px_rgba(16,185,129,0.4)]">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-[#cbd5e1] text-lg font-medium">
                      {feature}
                    </span>
                  </li>
                </RevealOnScroll>
              ))}
            </ul>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, ease: "easeOut" },
            }}
            className=""
          >
            <div className=" relative perspective-[1000px]">
              <motion.div
                // initial={{ opacity: 0, y: 20 }}
                // whileInView={{
                //   opacity: 1,
                //   y: 20,
                //   transition: { duration: 0.5, ease: "easeOut" },
                // }}
                // viewport={{ once: false }}
                className="relative bg-gradient-to-br from-[#667eea] via-[#764ba2] to-[#f093fb] rounded-[30px] p-10 shadow-[0_40px_100px_rgba(102,126,234,0.5)]
                  rotate-x-[5deg] rotate-y-[-5deg] hover:rotate-x-[0deg] hover:rotate-y-[0deg] hover:scale-[1.05] transition-all duration-500
                "
              >
                <div className="bg-[#1a1a2e] rounded-[20px] p-8 shadow-[inset_0_4px_20px_rgba(0,0,0,0.3)]">
                  <div className="grid grid-cols-3 gap-5">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="aspect-square bg-gradient-to-br from-white/10 to-white/5 rounded-2xl flex items-center justify-center border border-white/10 transition-all duration-300 hover:bg-white/15 hover:scale-110 hover:border-white/30 animate-fadeIn"
                        style={{ animationDelay: `${i * 100}ms` }}
                      >
                        <ImageIcon className="w-12 h-12 text-white/60" />
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
//
