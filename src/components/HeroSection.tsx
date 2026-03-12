import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="px-6 md:px-12 lg:px-20 pb-20 md:pb-32 max-w-[1400px] mx-auto">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="text-2xl md:text-4xl lg:text-5xl leading-[1.35] text-muted-foreground max-w-4xl font-body font-light"
      >
        I'm Eshchar Zychlinski, a Lead Product Designer specializing in AI-powered
        workflows and human-AI interaction. I help teams turn complex machine
        intelligence into intuitive products people can understand, trust, and use.
      </motion.p>
    </section>
  );
};

export default HeroSection;
