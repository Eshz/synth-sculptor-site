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
        className="font-body font-semibold text-4xl md:text-6xl lg:text-7xl text-foreground mb-6 leading-[1.1]"
      >
        Let's Build the Next Generation of AI
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-muted-foreground text-lg md:text-xl font-light max-w-2xl mx-auto mb-12"
      >
        I'm always interested in collaborating on ambitious AI products and emerging technology platforms. If you're building something new, I'd love to talk.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col items-center gap-4 max-w-md mx-auto"
      >
        <a
          href="mailto:esh2005@gmail.com"
          className="group flex items-center gap-3 text-xl md:text-2xl font-light hover:text-muted-foreground transition-colors w-full"
          data-interactive
        >
          <div className="p-4 rounded-full border border-border group-hover:bg-foreground group-hover:text-background transition-all">
            <Mail className="w-6 h-6" />
          </div>
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/eshchar-zychlinski/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 text-xl md:text-2xl font-light hover:text-muted-foreground transition-colors w-full"
          data-interactive
        >
          <div className="p-4 rounded-full border border-border group-hover:bg-foreground group-hover:text-background transition-all">
            <Linkedin className="w-6 h-6" />
          </div>
          LinkedIn
        </a>
      </motion.div>
    </section>
  );
};

export default ContactSection;
