import { motion } from "framer-motion";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import CustomCursor from "@/components/CustomCursor";
import projectIntelliframe from "@/assets/project-intelliframe.jpg";

const CaseStudyIntelliframe = () => {
  return (
    <>
      <CustomCursor />
      <CaseStudyLayout>
        <section className="relative">
          <div className="aspect-[21/9] md:aspect-[21/7] overflow-hidden">
            <motion.img
              initial={{ scale: 1.05, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              src={projectIntelliframe}
              alt="Cloud IntelliFrame"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        </section>

        <section className="px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto -mt-24 md:-mt-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="text-xs uppercase tracking-[0.2em] font-body font-medium text-muted-foreground block mb-4">
              Microsoft Teams
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-body font-light leading-[1.1] mb-6 max-w-4xl">
              Cloud{" "}
              <span className="font-display italic">IntelliFrame</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-body max-w-2xl leading-relaxed">
              Designing an AI-powered video system that automatically frames in-room meeting participants to improve hybrid collaboration and meeting equity.
            </p>
          </motion.div>
        </section>

        <article className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto mt-24 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-2xl border border-border p-12 text-center"
          >
            <p className="text-lg text-muted-foreground font-body mb-6">
              This project is covered by NDA. Please contact me to discuss details.
            </p>
            <a
              href="mailto:esh2005@gmail.com"
              className="inline-flex items-center px-6 py-3 rounded-full bg-foreground text-background font-body text-sm font-medium hover:opacity-90 transition-opacity duration-200"
              data-interactive
            >
              Get in Touch
            </a>
          </motion.div>
        </article>
      </CaseStudyLayout>
    </>
  );
};

export default CaseStudyIntelliframe;
