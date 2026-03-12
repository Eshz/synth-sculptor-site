import { motion } from "framer-motion";

const navLinks = [
  { label: "EMAIL", href: "mailto:hello@eshchar.com" },
  { label: "RESUME", href: "#" },
  { label: "LINKEDIN", href: "https://linkedin.com", external: true },
];

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex items-center justify-between px-6 py-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto"
    >
      <span className="font-display text-xl md:text-2xl tracking-tight text-foreground">
        EZ.
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
