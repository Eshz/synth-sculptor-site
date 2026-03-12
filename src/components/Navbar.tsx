import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState, useRef } from "react";

const navLinks = [
  { label: "EMAIL", href: "mailto:hello@eshchar.com" },
  { label: "RESUME", href: "#" },
  { label: "LINKEDIN", href: "https://linkedin.com", external: true },
];

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [isFixed, setIsFixed] = useState(false);
  const lastScrollY = useRef(0);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (current) => {
    const diff = current - lastScrollY.current;
    if (current < 100) {
      setVisible(true);
      setIsFixed(false);
    } else if (diff < -5) {
      setVisible(true);
      setIsFixed(true);
    } else if (diff > 5) {
      setVisible(false);
      setIsFixed(true);
    }
    lastScrollY.current = current;
  });

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : -80 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`flex items-center justify-between px-6 py-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto ${
        isFixed
          ? "fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
          : ""
      }`}
    >
      <span className="font-body text-xs font-medium tracking-[0.15em] uppercase text-foreground">
        Eshchar Zychlinski
      </span>
      <div className="flex items-center gap-6 md:gap-10 text-xs font-body font-medium tracking-[0.15em] text-muted-foreground">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="hover:text-foreground transition-colors duration-200"
            data-interactive
          >
            {link.label}
          </a>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;
