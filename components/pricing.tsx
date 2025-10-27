import Link from "next/link";
import { Check } from "lucide-react";
import TitleSection from "./common/title-section";
import RevealOnScroll from "./framer/reveal-on-scroll";

const pricingFeatures = [
  { text: "Unlimited", highlight: true, suffix: " influencers" },
  { text: "Unlimited", highlight: true, suffix: " approved posts" },
  { text: "Unlimited", highlight: true, suffix: " product tags" },
  { text: "Full Instagram API integration", highlight: false },
  { text: "Advanced analytics dashboard", highlight: false },
  { text: "24/7 priority support", highlight: false },
  { text: "Custom branding options", highlight: false },
];
const pricingFeature2 = [
  { text: "Unlimited", highlight: true, suffix: " influencers" },
  { text: "Unlimited", highlight: true, suffix: " approved posts" },
  { text: "Unlimited", highlight: true, suffix: " product tags" },
  { text: "Full Instagram API integration", highlight: false },
  { text: "Advanced analytics dashboard", highlight: false },
  { text: "24/7 priority support", highlight: false },
  { text: "Custom branding options", highlight: false },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-32 px-5 bg-[#0a0a0a]">
      <div className="max-w-[1400px] mx-auto">
        <TitleSection
          tagline="💎 SIMPLE PRICING"
          title="One Price, Unlimited Everything"
          description="No hidden fees, no surprises. Just straightforward pricing that grows with you."
        />

        <RevealOnScroll>
          <div className="max-w-5xl mx-auto">
            <div className="w-full h-full rounded-[40px]  p-[2px] bg-gradient-to-br from-[#667eea] to-[#764ba2] ">
              <div className="w-full h-full bg-black rounded-[40px]">
                <div
                  className="relative overflow-hidden px-6 sm:px-14 py-14 bg-gradient-to-br from-white/[0.05] to-white/[0.02]  rounded-[40px] backdrop-blur-xl shadow-[0_40px_100px_rgba(102,126,234,0.3)]"
                  // style={{
                  //   borderImage:
                  //     "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%) 1",
                  //   borderRadius: "40px",
                  // }}
                >
                  <div className="absolute top-9 -right-14 bg-gradient-to-r from-[#f093fb] to-[#f5576c] text-white px-16 py-2.5 text-xs font-black rotate-45 shadow-[0_4px_15px_rgba(245,87,108,0.5)] tracking-wider">
                    MOST POPULAR
                  </div>

                  <div className="text-center mb-10">
                    <div className="text-5xl md:text-6xl font-black leading-none mb-8 bg-gradient-to-r from-[#667eea] to-[#f093fb] bg-clip-text text-transparent">
                      $15<span className="text-2xl text-[#94a3b8]">/mo</span>
                    </div>
                    <p className="text-lg text-[#cbd5e1]">
                      Flat rate, unlimited everything
                    </p>
                  </div>

                  <ul className="space-y-3 mb-10 grid md:grid-cols-2 grid-cols-1 gap-3">
                    {pricingFeatures.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-4 p-5 bg-white/[0.03] rounded-xl border border-white/5 transition-all duration-300 hover:bg-[#667eea]/10 hover:border-[#667eea]/30 hover:translate-x-1"
                      >
                        <div className="flex-shrink-0 w-9 h-9 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-full flex items-center justify-center shadow-[0_4px_15px_rgba(16,185,129,0.4)]">
                          <Check className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-[#e2e8f0] text-[17px]">
                          {feature.highlight ? (
                            <>
                              <strong className="bg-gradient-to-r from-[#667eea] to-[#f093fb] bg-clip-text text-transparent">
                                {feature.text}
                              </strong>
                              {feature.suffix}
                            </>
                          ) : (
                            feature.text
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-center items-center">
                    <Link
                      href="#"
                      className="relative max-w-sm overflow-hidden w-full inline-flex items-center justify-center gap-3 px-12 py-5 rounded-full bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white font-bold text-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_60px_rgba(102,126,234,0.6)] group"
                    >
                      <span className="relative z-10">
                        👉 Try Free for 14 Days
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-[#764ba2] to-[#667eea] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
