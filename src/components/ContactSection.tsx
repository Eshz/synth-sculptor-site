import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section className="px-6 md:px-12 lg:px-20 pb-20 md:pb-32 max-w-[1400px] mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="font-body font-semibold text-3xl md:text-5xl lg:text-6xl text-foreground max-w-3xl leading-[1.1]"
      >
        Let's Build the Next Generation of AI Products
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-8 max-w-xl space-y-4 text-muted-foreground font-body text-lg leading-relaxed font-light"
      >
        <p>
          I'm always interested in collaborating on ambitious AI products and
          emerging technology platforms.
        </p>
        <p>If you're building something new, I'd love to talk.</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-10 flex gap-4"
      >
        <a
          href="mailto:hello@eshchar.com"
          className="inline-flex items-center px-6 py-3 rounded-full bg-foreground text-background font-body text-sm font-medium hover:opacity-90 transition-opacity duration-200"
          data-interactive
        >
          Email
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 rounded-full border border-border text-foreground font-body text-sm font-medium hover:bg-secondary transition-colors duration-200"
          data-interactive
        >
          LinkedIn
        </a>
      </motion.div>
    </section>
  );
};

export default ContactSection;
