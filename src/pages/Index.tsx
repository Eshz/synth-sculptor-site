import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroVisual from "@/components/HeroVisual";
import HeroSection from "@/components/HeroSection";
import ProjectCards from "@/components/ProjectCards";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import CustomCursor from "@/components/CustomCursor";

const Index = () => {
  return (
    <>
      <CustomCursor />
      <div className="min-h-screen bg-background">
        <Navbar />
        <HeroVisual />
        <HeroSection />
        <ProjectCards />
        <AboutSection />
        <ContactSection />
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="px-6 md:px-12 lg:px-20 py-8 max-w-[1400px] mx-auto border-t border-border"
        >
          <p className="text-sm text-muted-foreground font-body">
            © 2026 Eshchar Zychlinski
          </p>
        </motion.footer>
      </div>
    </>
  );
};

export default Index;
