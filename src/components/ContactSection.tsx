import { motion } from "framer-motion";
import { useState } from "react";

const footerLinks = [
  { label: "Email", href: "mailto:eshchar.zych@gmail.com" },
  { label: "Resume", href: "/Resume-EshcharZychlinski.pdf", external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/eshchar-zychlinski/", external: true },
];

const FooterLink = ({ link }: { link: typeof footerLinks[number] }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={link.href}
      {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="relative text-xs font-body font-medium tracking-[0.15em] uppercase transition-colors pb-px"
      data-interactive
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {link.label}
      <motion.span
        className="absolute bottom-0 left-0 h-px bg-white"
        initial={false}
        animate={{ width: hovered ? "100%" : "0%" }}
        transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
      />
    </a>
  );
};

const ContactSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="bg-black text-white py-24 mt-20"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row justify-between items-start gap-12">
        <div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-body font-semibold mb-4 leading-[1.05]">
            Let&apos;s connect.
          </h2>
          <p className="text-white/70 text-base md:text-lg font-light">
            Always open to interesting problems and the right collaborations.
          </p>
        </div>

        <div className="flex flex-wrap items-start gap-6 md:gap-8 pt-1">
          {footerLinks.map((link) => (
            <FooterLink key={link.label} link={link} />
          ))}
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 mt-24 pt-8 border-t border-white/10 text-[10px] font-body font-bold uppercase tracking-[0.18em] text-white/50">
        © 2026 Eshchar Zychlinski. All rights reserved.
      </div>
    </motion.section>
  );
};

export default ContactSection;
