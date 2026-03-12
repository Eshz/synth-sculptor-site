import { motion } from "framer-motion";
import logoMicrosoft from "@/assets/logo-microsoft.png";
import logoTeams from "@/assets/logo-teams.svg";
import logoGenway from "@/assets/logo-genway.svg";

const credibilityLogos = [
  { name: "Microsoft", src: logoMicrosoft },
  { name: "Microsoft Teams", src: logoTeams },
  { name: "Genway", src: logoGenway },
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
        className="mt-10 md:mt-14 flex flex-col items-center gap-5"
      >
        <span className="text-xs font-body font-medium tracking-[0.1em] text-muted-foreground/60 uppercase">
          Previously designing AI products at
        </span>
        <div className="flex items-center justify-center gap-10">
          {credibilityLogos.map((logo) => (
            <img
              key={logo.name}
              src={logo.src}
              alt={logo.name}
              title={logo.name}
              className="h-8 md:h-9 object-contain opacity-40 grayscale brightness-0"
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
