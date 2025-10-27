import Link from "next/link";
import RevealOnScroll from "./framer/reveal-on-scroll";

export default function FinalCTA() {
  return (
    <section className="relative py-32 px-5 bg-gradient-to-br from-[#667eea] via-[#764ba2] to-[#f093fb] overflow-hidden">
      <div className="absolute -top-1/2 -left-1/4 w-[150%] h-[200%] bg-[radial-gradient(circle,_rgba(255,255,255,0.1)_0%,_transparent_70%)] animate-rotate-slow" />

      <div className="relative z-10 text-center max-w-[900px] mx-auto">
        <RevealOnScroll>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight">
            Bring Influencer Credibility Straight Into Your Store
          </h2>
        </RevealOnScroll>
        <RevealOnScroll>
          <p className="text-xl md:text-2xl text-white/95 mb-12 leading-relaxed">
            Join thousands of Shopify merchants already boosting conversions
            with social proof. Start your free trial today!
          </p>
        </RevealOnScroll>
        <RevealOnScroll>
          <Link
            href="#pricing"
            className="inline-flex items-center gap-3 px-14 py-6 rounded-full bg-white text-[#667eea] font-extrabold text-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_30px_80px_rgba(0,0,0,0.4)] hover:-translate-y-2"
          >
            <span>👉 Start Your Free Trial</span>
          </Link>
        </RevealOnScroll>
      </div>
    </section>
  );
}
