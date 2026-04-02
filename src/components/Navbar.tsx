import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "EMAIL", href: "mailto:eshchar.zych@gmail.com" },
  { label: "RESUME", href: "/Resume-EshcharZychlinski.pdf", external: true },
  { label: "LINKEDIN", href: "https://www.linkedin.com/in/eshchar-zychlinski/", external: true },
];

const DesktopLinks = () => (
  <div className="hidden md:flex items-center gap-10 text-xs font-body font-medium tracking-[0.15em] text-muted-foreground">
    {navLinks.map((link) => (
      <a
        key={link.label}
        href={link.href}
        {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="hover:text-foreground transition-colors duration-200 cursor-pointer"
        data-interactive
      >
        {link.label}
      </a>
    ))}
  </div>
);

const MobileMenu = ({ open, onClose }: { open: boolean; onClose: () => void }) => (
  <AnimatePresence>
    {open && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="fixed inset-0 z-[60] bg-background md:hidden"
      >
        <div className="flex min-h-svh flex-col px-6 pb-10 pt-6">
          <div className="flex items-center justify-between">
            <span className="font-body text-xs font-medium tracking-[0.15em] uppercase text-foreground">
              Eshchar Zychlinski
            </span>
            <button
              className="text-foreground cursor-pointer"
              onClick={onClose}
              aria-label="Close menu"
              data-interactive
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex flex-1 flex-col justify-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                onClick={onClose}
                className="text-2xl font-body font-medium tracking-[0.12em] text-foreground/85 hover:text-foreground transition-colors duration-200 cursor-pointer"
                data-interactive
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

const Navbar = () => {
  const [showFixed, setShowFixed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);
  const { scrollY } = useScroll();

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useMotionValueEvent(scrollY, "change", (current) => {
    const diff = current - lastScrollY.current;
    if (current < 100) {
      setShowFixed(false);
    } else if (diff < -5) {
      setShowFixed(true);
    } else if (diff > 5) {
      setShowFixed(false);
      setMobileOpen(false);
    }
    lastScrollY.current = current;
  });

  const NavBar = ({ children }: { children?: React.ReactNode }) => (
    <>
      <div className="flex items-center justify-between px-6 py-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto">
        <span className="font-body text-xs font-medium tracking-[0.15em] uppercase text-foreground">
          Eshchar Zychlinski
        </span>
        <DesktopLinks />
        <button
          className="md:hidden text-foreground cursor-pointer"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          data-interactive
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {children}
    </>
  );

  return (
    <>
      {/* Static navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <NavBar>
          <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
        </NavBar>
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
            <NavBar>
              <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
            </NavBar>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
