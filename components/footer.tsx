import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

const footerLinks = {
  product: ["Features", "Pricing", "Demo", "FAQ"],
  company: ["About", "Blog", "Careers", "Contact"],
  legal: ["Privacy", "Terms", "Security", "Cookies"],
};

export default function Footer() {
  const socialMediaLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/profile.php?id=61582123490597",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/influencer.showcase",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/showcase/influencer-showcase",
    },
  ];

  return (
    <footer className="bg-[#0a0a0a] text-[#94a3b8] py-20 px-5 border-t border-white/10">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#667eea] to-[#f093fb] bg-clip-text text-transparent mb-4">
              ✨ Influencer Showcase
            </h3>
            <p className="text-[#64748b] leading-relaxed mb-6">
              Transform your Shopify store with authentic influencer content.
              Build trust, boost engagement, and drive sales.
            </p>
            <div className="flex gap-4">
              {socialMediaLinks.map((sc, i) => (
                <Link
                  key={i}
                  href={sc.href}
                  className="w-10 h-10 bg-[#667eea]/10 border border-[#667eea]/30 rounded-xl flex items-center justify-center text-[#667eea] transition-all duration-300 hover:bg-[#667eea]/20 hover:-translate-y-1"
                >
                  <sc.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="hover:text-[#667eea] transition-colors duration-300"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="hover:text-[#667eea] transition-colors duration-300"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="hover:text-[#667eea] transition-colors duration-300"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 text-center text-[#64748b]">
          <p>
            © {new Date().getFullYear()} Influencer Showcase. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
