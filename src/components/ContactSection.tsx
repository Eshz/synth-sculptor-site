import { motion } from "framer-motion";

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
            Let&apos;s build the future.
          </h2>
          <p className="text-white/70 text-base md:text-lg font-light">
            Available for new opportunities in product design.
          </p>
        </div>

        <div className="flex flex-wrap items-start gap-6 md:gap-8 pt-1">
          <a
            href="mailto:eshchar.zych@gmail.com"
            className="text-xs font-body font-medium tracking-[0.15em] uppercase hover:text-white/60 transition-colors"
            data-interactive
          >
            Email
          </a>
          <a
            href="/Resume-EshcharZychlinski.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-body font-medium tracking-[0.15em] uppercase hover:text-white/60 transition-colors"
            data-interactive
          >
            Resume
          </a>
          <a
            href="https://www.linkedin.com/in/eshchar-zychlinski/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-body font-medium tracking-[0.15em] uppercase hover:text-white/60 transition-colors"
            data-interactive
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 mt-24 pt-8 border-t border-white/10 text-[10px] font-body font-bold uppercase tracking-[0.18em] text-white/50">
        © 2026 Eshchar Zychlinski. All rights reserved.
      </div>
    </motion.section>
  );
};

export default ContactSection;
