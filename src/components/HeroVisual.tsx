import { useEffect } from "react";
import { motion } from "framer-motion";

const UNICORN_SCENE_SRC = "/unicorn-portfolio-banner.json.txt";
const UNICORN_SCRIPT_SRC =
  "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.4/dist/unicornStudio.umd.js";

declare global {
  interface Window {
    UnicornStudio?: {
      init?: () => void;
      isInitialized?: boolean;
    };
  }
}

const HeroVisual = () => {
  useEffect(() => {
    const w = window;
    let frameId: number | null = null;

    const initUnicorn = () => {
      if (!w.UnicornStudio?.init) {
        return;
      }

      w.UnicornStudio.init();
      w.UnicornStudio.isInitialized = true;
    };

    if (w.UnicornStudio?.init) {
      frameId = window.requestAnimationFrame(initUnicorn);
      return;
    }

    w.UnicornStudio = w.UnicornStudio ?? { isInitialized: false };

    const existingScript = document.querySelector<HTMLScriptElement>(
      `script[src="${UNICORN_SCRIPT_SRC}"]`,
    );

    const handleScriptLoad = () => {
      if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initUnicorn, { once: true });
        return;
      }

      frameId = window.requestAnimationFrame(initUnicorn);
    };

    if (existingScript) {
      existingScript.addEventListener("load", handleScriptLoad, { once: true });
      handleScriptLoad();

      return () => {
        if (frameId !== null) {
          window.cancelAnimationFrame(frameId);
        }
        existingScript.removeEventListener("load", handleScriptLoad);
        document.removeEventListener("DOMContentLoaded", initUnicorn);
      };
    }

    const script = document.createElement("script");
    script.src = UNICORN_SCRIPT_SRC;
    script.async = true;
    script.addEventListener("load", handleScriptLoad, { once: true });
    (document.head || document.body).appendChild(script);

    return () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
      script.removeEventListener("load", handleScriptLoad);
      document.removeEventListener("DOMContentLoaded", initUnicorn);
    };
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="px-6 md:px-12 lg:px-20 pt-8 pb-8 md:pt-12 md:pb-14 max-w-[1400px] mx-auto"
    >
      <div
        className="w-full overflow-hidden rounded-2xl md:rounded-3xl bg-card border border-border min-h-[68svh] md:min-h-0"
        style={{ aspectRatio: "1440 / 900" }}
      >
        <div
          style={{ width: "100%", height: "100%" }}
          data-us-project-src={UNICORN_SCENE_SRC}
        />
      </div>
    </motion.section>
  );
};

export default HeroVisual;
