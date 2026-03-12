const ContactSection = () => {
  return (
    <section className="px-6 md:px-12 lg:px-20 pb-20 md:pb-32 max-w-[1400px] mx-auto">
      <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground max-w-3xl leading-[1.1]">
        Let's Build the Next Generation of AI Products
      </h2>
      <div className="mt-8 max-w-xl space-y-4 text-muted-foreground font-body text-lg leading-relaxed font-light">
        <p>
          I'm always interested in collaborating on ambitious AI products and
          emerging technology platforms.
        </p>
        <p>If you're building something new, I'd love to talk.</p>
      </div>
      <div className="mt-10 flex gap-4">
        <a
          href="mailto:hello@eshchar.com"
          className="inline-flex items-center px-6 py-3 rounded-full bg-foreground text-background font-body text-sm font-medium hover:opacity-90 transition-opacity duration-200"
          data-interactive
        >
          Email
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 rounded-full border border-border text-foreground font-body text-sm font-medium hover:bg-secondary transition-colors duration-200"
          data-interactive
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
