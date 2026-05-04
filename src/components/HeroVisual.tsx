import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

const Spinner = () => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 36 36"
    className="animate-spin"
    style={{ animationDuration: "1.1s", animationTimingFunction: "linear" }}
  >
    <circle
      cx="18" cy="18" r="14"
      fill="none"
      stroke="rgba(255,255,255,0.12)"
      strokeWidth="1.5"
    />
    <path
      d="M18 4 a14 14 0 0 1 14 14"
      fill="none"
      stroke="rgba(255,255,255,0.75)"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const SplashScreen = () => (
  <motion.div
    key="splash"
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.7, ease: "easeInOut" }}
    className="absolute inset-0 z-10 flex flex-col items-center justify-center"
    style={{ background: "linear-gradient(135deg, hsl(238,52%,14%) 0%, hsl(250,40%,10%) 100%)" }}
  >
    <div className="flex flex-col items-center gap-6">
      <span
        className="font-body text-[11px] font-medium tracking-[0.25em] uppercase"
        style={{ color: "rgba(255,255,255,0.35)" }}
      >
        Eshchar Zychlinski
      </span>
      <Spinner />
    </div>
  </motion.div>
);

const HeroVisual = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Watch for canvas being injected by UnicornStudio, then mark loaded
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Fallback: always hide splash after 5s regardless
    const fallbackTimer = setTimeout(() => setIsLoaded(true), 5000);

    const observer = new MutationObserver(() => {
      const canvas = container.querySelector("canvas");
      if (canvas) {
        observer.disconnect();
        clearTimeout(fallbackTimer);
        // Brief pause so the first frame has time to paint
        setTimeout(() => setIsLoaded(true), 350);
      }
    });

    observer.observe(container, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, []);

  useEffect(() => {
    const w = window;
    let frameId: number | null = null;

    const initUnicorn = () => {
      if (!w.UnicornStudio?.init) return;
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
        if (frameId !== null) window.cancelAnimationFrame(frameId);
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
      if (frameId !== null) window.cancelAnimationFrame(frameId);
      script.removeEventListener("load", handleScriptLoad);
      document.removeEventListener("DOMContentLoaded", initUnicorn);
    };
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        className="absolute inset-0 w-full h-full [&_canvas]:!object-cover [&_canvas]:!w-full [&_canvas]:!h-full"
        data-us-project-src={UNICORN_SCENE_SRC}
      />
      <AnimatePresence>
        {!isLoaded && <SplashScreen />}
      </AnimatePresence>
    </>
  );
};

export default HeroVisual;
