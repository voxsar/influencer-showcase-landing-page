"use client";
import { useIsMobile } from "@/hooks/use-mobile";
import TitleSection from "./common/title-section";
import RevealOnScroll from "./framer/reveal-on-scroll";

const testimonials = [
  {
    stars: 5,
    text: "This app transformed how we showcase our influencer partnerships. Sales increased by 40% in the first month. The setup was incredibly easy!",
    author: "Sarah Martinez",
    role: "Fashion Boutique Owner",
    avatar: "SM",
  },
  {
    stars: 5,
    text: "The ROI is incredible. For just $15/month, we're getting authentic content that converts better than our expensive photo shoots. Game changer!",
    author: "James Wilson",
    role: "Fitness Brand Founder",
    avatar: "JW",
  },
  {
    stars: 5,
    text: "Customer trust went through the roof. People love seeing real influencers using our products. The approval system gives us perfect control.",
    author: "Emma Klein",
    role: "Beauty Products",
    avatar: "EK",
  },
];

export default function Testimonials() {
  const ismobile = useIsMobile();
  return (
    <section className="relative py-32 px-5 bg-[#0a0a0a]">
      <div className="max-w-[1400px] mx-auto">
        <TitleSection
          tagline="💬 TESTIMONIALS"
          title="Loved by Merchants"
          description=" See what store owners are saying about Influencer Showcase"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <RevealOnScroll
              key={index}
              delay={ismobile ? 0 : index * 0.2}
              classname="w-full h-full"
            >
              <div className=" w-full h-full p-10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 rounded-[25px] backdrop-blur-sm transition-all duration-500 hover:-translate-y-3 hover:border-[#667eea]/50 hover:shadow-[0_20px_60px_rgba(102,126,234,0.3)]">
                <div className="flex gap-1 text-[#fbbf24] text-xl mb-5">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>

                <p className="text-[#cbd5e1] text-[17px] leading-relaxed mb-8 italic">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">
                      {testimonial.author}
                    </h4>
                    <p className="text-[#94a3b8] text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
