import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import Stats from "@/components/stats";
import Features from "@/components/features";
import Preview from "@/components/preview";
import Pricing from "@/components/pricing";
import WhyChoose from "@/components/why-choose";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
import FinalCTA from "@/components/final-cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen scroll-smooth">
      <Navigation />
      <Hero />
      {/* <Stats /> */}
      <Features />
      <Preview />
      <Pricing />
      <WhyChoose />
      <Testimonials />
      <Contact />
      <FinalCTA />
      <Footer />
    </main>
  );
}
