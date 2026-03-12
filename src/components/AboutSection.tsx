import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center"
    >
      <div className="md:col-span-5">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-border">
            <img
              alt="Eshchar Zychlinski"
              className="w-full h-full object-cover grayscale"
              src="https://picsum.photos/seed/designer/800/1000"
            />
          </div>
        </motion.div>
      </div>

      <div className="md:col-span-7">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="text-xs uppercase tracking-[0.2em] font-body font-medium text-muted-foreground/60 block mb-6">
            About
          </span>
          <h2 className="text-4xl md:text-5xl font-body font-light text-foreground mb-8">
            Lead Product Designer with{" "}
            <span className="font-display italic">8+ years</span> of experience.
          </h2>
          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed font-body font-light">
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
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
