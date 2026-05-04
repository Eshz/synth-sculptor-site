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
        {/* Full-bleed hero with navbar overlaid */}
        <div className="relative w-full" style={{ height: "100svh", minHeight: 560 }}>
          <HeroVisual />
          {/* Top gradient for navbar legibility over dark WebGL */}
          <div
            className="absolute inset-x-0 top-0 h-32 pointer-events-none z-10"
            style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.28) 0%, transparent 100%)" }}
          />
          <div className="absolute inset-x-0 top-0 z-20">
            <Navbar heroMode />
          </div>
        </div>
        <HeroSection />
        <ProjectCards />
        <AboutSection />
        <ContactSection />
      </div>
    </>
  );
};

export default Index;
