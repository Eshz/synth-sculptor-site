import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section className="px-6 md:px-12 lg:px-20 pb-20 md:pb-32 max-w-[1400px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
        className="flex gap-4 justify-center"
      >
        <a
          href="mailto:esh2005@gmail.com"
          className="inline-flex items-center px-6 py-3 rounded-full bg-foreground text-background font-body text-sm font-medium hover:opacity-90 transition-opacity duration-200"
          data-interactive
        >
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/eshchar-zychlinski/"
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
