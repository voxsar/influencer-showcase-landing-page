import React from "react";
import RevealOnScroll from "../framer/reveal-on-scroll";

type Props = {
  tagline: string;
  title: string;
  description: string;
};

function TitleSection({ tagline, title, description }: Props) {
  return (
    <div className="text-center mb-20">
      <RevealOnScroll initialY={-20}>
        <div className="inline-block bg-gradient-to-r from-[#667eea]/20 to-[#764ba2]/20 text-[#a5b4fc] px-6 py-2.5 rounded-full text-sm font-bold mb-5 border border-[#667eea]/30">
          {tagline}
        </div>
      </RevealOnScroll>
      <RevealOnScroll>
        <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white to-[#a5b4fc] bg-clip-text text-transparent leading-tight ">
          {title}
        </h2>
      </RevealOnScroll>
      <RevealOnScroll>
        <p className="text-xl text-[#94a3b8] max-w-[700px] mx-auto leading-relaxed">
          {description}
        </p>
      </RevealOnScroll>
    </div>
  );
}

export default TitleSection;
