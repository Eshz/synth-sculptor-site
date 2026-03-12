const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto">
      <span className="font-display text-xl md:text-2xl tracking-tight text-foreground">
        Eshchar Zychlinski
      </span>
      <div className="flex items-center gap-6 md:gap-8 text-sm font-body text-muted-foreground">
        <a
          href="mailto:hello@eshchar.com"
          className="hover:text-foreground transition-colors duration-200"
          data-interactive
        >
          Email
        </a>
        <a
          href="#"
          className="hover:text-foreground transition-colors duration-200"
          data-interactive
        >
          Resume
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground transition-colors duration-200"
          data-interactive
        >
          LinkedIn
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
