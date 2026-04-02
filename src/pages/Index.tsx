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
      </div>
    </>
  );
};

export default Index;
