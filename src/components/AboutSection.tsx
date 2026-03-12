import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="px-6 md:px-12 lg:px-20 pb-20 md:pb-32 max-w-[1400px] mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="font-body font-semibold text-3xl md:text-4xl text-foreground mb-10 md:mb-14"
      >
        About
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="max-w-2xl space-y-6 text-muted-foreground font-body text-lg leading-relaxed font-light"
      >
        <p>
          I'm a Lead Product Designer with over 8 years of experience designing
          AI-powered products and emerging technology experiences.
        </p>
        <p>
          My background includes leading design initiatives across Microsoft Teams
          and early-stage AI platforms, translating complex technical capabilities
          into intuitive user experiences.
        </p>
        <p>
          I specialize in working at the intersection of product, design, and
          machine learning — helping teams shape new AI capabilities into real
          products that users adopt and trust.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutSection;
