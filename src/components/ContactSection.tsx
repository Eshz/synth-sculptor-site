import { motion } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="px-6 md:px-12 lg:px-20 pb-20 md:pb-32 max-w-[1400px] mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="font-body font-semibold text-3xl md:text-5xl lg:text-6xl text-foreground mb-4 leading-[1.1]"
      >
        Let's Connect
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-muted-foreground text-base md:text-lg font-light max-w-xl mx-auto mb-10 md:mb-12"
      >
        Open to collaborating on ambitious AI products.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 w-full max-w-md mx-auto"
      >
        <a
          href="mailto:esh2005@gmail.com"
          className="group flex items-center justify-center gap-3 text-lg md:text-xl font-light hover:text-muted-foreground transition-colors w-full md:w-auto"
          data-interactive
        >
          <div className="p-3 md:p-4 rounded-full border border-border group-hover:bg-foreground group-hover:text-background transition-all">
            <Mail className="w-5 h-5 md:w-6 md:h-6" />
          </div>
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/eshchar-zychlinski/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center gap-3 text-lg md:text-xl font-light hover:text-muted-foreground transition-colors w-full md:w-auto"
          data-interactive
        >
          <div className="p-3 md:p-4 rounded-full border border-border group-hover:bg-foreground group-hover:text-background transition-all">
            <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
          </div>
          LinkedIn
        </a>
      </motion.div>
    </section>
  );
};

export default ContactSection;
