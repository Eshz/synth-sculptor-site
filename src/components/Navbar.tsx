import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";

const navLinks = [
  { label: "EMAIL", href: "mailto:esh2005@gmail.com" },
  { label: "RESUME", href: "/Resume-EshcharZychlinski.pdf", external: true },
  { label: "LINKEDIN", href: "https://www.linkedin.com/in/eshchar-zychlinski/", external: true },
];

const NavContent = () => (
  <>
    <span className="font-body text-xs font-medium tracking-[0.15em] uppercase text-foreground">
      Eshchar Zychlinski
    </span>
    <div className="flex items-center gap-6 md:gap-10 text-xs font-body font-medium tracking-[0.15em] text-muted-foreground">
      {navLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="hover:text-foreground hover:opacity-100 active:opacity-70 transition-all duration-200 opacity-60"
          data-interactive
        >
          {link.label}
        </a>
      ))}
    </div>
  </>
);

const Navbar = () => {
  const [showFixed, setShowFixed] = useState(false);
  const lastScrollY = useRef(0);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (current) => {
    const diff = current - lastScrollY.current;
    if (current < 100) {
      setShowFixed(false);
    } else if (diff < -5) {
      setShowFixed(true);
    } else if (diff > 5) {
      setShowFixed(false);
    }
    lastScrollY.current = current;
  });

  return (
    <>
      {/* Static navbar in normal flow */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex items-center justify-between px-6 py-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto"
      >
        <NavContent />
      </motion.nav>

      {/* Fixed navbar on scroll-up */}
      <AnimatePresence>
        {showFixed && (
          <motion.nav
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -80 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
          >
            <div className="flex items-center justify-between px-6 py-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto">
              <NavContent />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
