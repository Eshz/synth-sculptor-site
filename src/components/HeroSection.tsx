import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import logoMicrosoft from "@/assets/logo-microsoft.png";
import logoTeams from "@/assets/logo-teams.svg";
import logoGenway from "@/assets/logo-genway.svg";
import type { MotionValue } from "framer-motion";

const credibilityLogos = [
  { name: "Microsoft", src: logoMicrosoft },
  { name: "Microsoft Teams", src: logoTeams },
  { name: "Genway", src: logoGenway },
];

const introWords = `I'm Eshchar Zychlinski, a Lead Product Designer. I've worked mostly across innovation teams and startup environments, and I'm most motivated by turning ambiguity into products people can understand, trust, and use.`.split(
  " ",
);

const alwaysHighlightedWords = 7;

const IntroWord = ({
  word,
  progress,
  threshold,
  alwaysHighlighted = false,
}: {
  word: string;
  progress: MotionValue<number>;
  threshold: number;
  alwaysHighlighted?: boolean;
}) => {
  const activeOpacity = useTransform(progress, (value) => {
    const fadeEnd = Math.min(threshold + 0.08, 0.96);

    if (alwaysHighlighted) {
      return 1;
    }

    if (value <= threshold) {
      return 0;
    }

    if (value >= fadeEnd) {
      return 1;
    }

    return (value - threshold) / (fadeEnd - threshold);
  });

  return (
    <span className="relative inline-block">
      {!alwaysHighlighted && <span className="text-[hsl(60_6%_72%)]">{word}</span>}
      <motion.span
        className={alwaysHighlighted ? "" : "absolute inset-0"}
        style={{ opacity: activeOpacity, color: "hsl(220 9% 26%)" }}
      >
        {word}
      </motion.span>
      <span aria-hidden="true">&nbsp;</span>
    </span>
  );
};

const CredibilityLogo = ({
  logo,
  progress,
  index,
}: {
  logo: { name: string; src: string };
  progress: MotionValue<number>;
  index: number;
}) => {
  const start = index * 0.14;
  const end = Math.min(start + 0.22, 1);
  const opacity = useTransform(progress, [start, end], [0.18, 0.4]);
  const y = useTransform(progress, [start, end], [14, 0]);
  const scale = useTransform(progress, [start, end], [0.94, 1]);
  const filter = useTransform(progress, [start, end], [
    "grayscale(1) brightness(0) blur(5px)",
    "grayscale(1) brightness(0) blur(0px)",
  ]);

  return (
    <motion.img
      src={logo.src}
      alt={logo.name}
      title={logo.name}
      style={{ opacity, y, scale, filter }}
      className="h-7 md:h-9 lg:h-10 object-contain"
    />
  );
};

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const logosRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 90%", "start 50%"],
  });
  const { scrollYProgress: logosProgress } = useScroll({
    target: logosRef,
    offset: ["start 72%", "start 34%"],
  });
  const delayedProgress = useSpring(scrollYProgress, {
    stiffness: 42,
    damping: 18,
    mass: 1.05,
  });
  const delayedLogosProgress = useSpring(logosProgress, {
    stiffness: 65,
    damping: 20,
    mass: 0.9,
  });

  return (
    <section
      ref={sectionRef}
      className="px-6 md:px-12 lg:px-20 pb-20 md:pb-32 max-w-[1400px] mx-auto"
    >
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="text-2xl md:text-4xl lg:text-5xl leading-[1.35] font-body font-light p-4"
      >
        {introWords.map((word, index) => {
          const threshold = index / introWords.length;

          return (
            <IntroWord
              key={`${word}-${index}`}
              word={word}
              progress={delayedProgress}
              threshold={threshold}
              alwaysHighlighted={index < alwaysHighlightedWords}
            />
          );
        })}
      </motion.p>

      <motion.div
        ref={logosRef}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-20 md:mt-28 flex flex-col items-center gap-5 md:gap-7"
      >
        <span className="text-[10px] md:text-xs font-body font-medium tracking-[0.1em] text-muted-foreground/60 uppercase">
          Previously designing products at
        </span>
        <div className="flex items-center justify-center gap-8 md:gap-12 lg:gap-14 flex-wrap py-2">
          {credibilityLogos.map((logo, index) => (
            <CredibilityLogo
              key={logo.name}
              logo={logo}
              progress={delayedLogosProgress}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
