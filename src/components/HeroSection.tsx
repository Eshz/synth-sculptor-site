import { motion } from "framer-motion";

const credibilityLogos = [
  { name: "Microsoft", svg: (
    <svg viewBox="0 0 23 23" className="w-4 h-4" fill="currentColor">
      <rect x="1" y="1" width="10" height="10" />
      <rect x="12" y="1" width="10" height="10" />
      <rect x="1" y="12" width="10" height="10" />
      <rect x="12" y="12" width="10" height="10" />
    </svg>
  )},
  { name: "Microsoft Teams", svg: (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
      <path d="M19.19 8.77a2.07 2.07 0 1 0 0-4.14 2.07 2.07 0 0 0 0 4.14zm3.31 2.3h-4.6a1.5 1.5 0 0 0-1.5 1.5v4.59a3.81 3.81 0 0 0 3.81 3.81 3.81 3.81 0 0 0 3.79-3.81v-4.59a1.5 1.5 0 0 0-1.5-1.5zM14.5 9.57h-8a1.5 1.5 0 0 0-1.5 1.5v5.86A4.57 4.57 0 0 0 9.57 21.5a4.57 4.57 0 0 0 4.57-4.57v-5.86a1.5 1.5 0 0 0-.64-1.23 1.5 1.5 0 0 0-.86-.27zM10.5 3a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5z"/>
    </svg>
  )},
  { name: "Genway AI", svg: (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      <path d="M12 2L2 7l10 5 10-5-10-5z" fillOpacity=".7"/>
      <path d="M2 17l10 5 10-5" fill="none" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M2 12l10 5 10-5" fill="none" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  )},
];

const HeroSection = () => {
  return (
    <section className="px-6 md:px-12 lg:px-20 pb-20 md:pb-32 max-w-[1400px] mx-auto">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="text-2xl md:text-4xl lg:text-5xl leading-[1.35] text-muted-foreground max-w-4xl font-body font-light"
      >
        I'm Eshchar Zychlinski, a Lead Product Designer specializing in AI-powered
        workflows and human-AI interaction. I help teams turn complex machine
        intelligence into intuitive products people can understand, trust, and use.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-10 md:mt-14 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6"
      >
        <span className="text-xs font-body font-medium tracking-[0.1em] text-muted-foreground/60 uppercase">
          Previously designing AI products at
        </span>
        <div className="flex items-center gap-5">
          {credibilityLogos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center gap-2 text-muted-foreground/50"
              title={logo.name}
            >
              {logo.svg}
              <span className="text-xs font-body font-medium tracking-wide text-muted-foreground/50">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
