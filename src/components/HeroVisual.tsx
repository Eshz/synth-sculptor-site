import { useEffect } from "react";

const HeroVisual = () => {
  useEffect(() => {
    // Load Unicorn Studio script
    const w = window as any;
    if (w.UnicornStudio && w.UnicornStudio.init) {
      w.UnicornStudio.init();
    } else {
      w.UnicornStudio = { isInitialized: false };
      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.3/dist/unicornStudio.umd.js";
      script.onload = () => {
        if (document.readyState === "loading") {
          document.addEventListener("DOMContentLoaded", () => {
            (window as any).UnicornStudio.init();
          });
        } else {
          (window as any).UnicornStudio.init();
        }
      };
      (document.head || document.body).appendChild(script);
    }
  }, []);

  return (
    <section className="px-6 md:px-12 lg:px-20 pt-8 pb-16 md:pt-12 md:pb-24 max-w-[1400px] mx-auto">
      <div
        className="w-full overflow-hidden rounded-2xl md:rounded-3xl bg-card border border-border"
        style={{ aspectRatio: "1440 / 900" }}
      >
        <div
          style={{ width: "100%", height: "100%" }}
          data-us-project="LFOtdADhJEiavafxfW4j"
        />
      </div>
    </section>
  );
};

export default HeroVisual;
