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
  isEmphasized = false,
  activeColor = "hsl(220, 9%, 26%)",
}: {
  word: string;
  progress: MotionValue<number>;
  threshold: number;
  alwaysHighlighted?: boolean;
  isEmphasized?: boolean;
  activeColor?: string;
}) => {
  const color = useTransform(progress, (value) => {
    if (alwaysHighlighted) return activeColor;
    const fadeEnd = Math.min(threshold + 0.08, 0.96);
    if (value <= threshold) return "hsl(60, 6%, 72%)";
    if (value >= fadeEnd) return activeColor;
    const t = (value - threshold) / (fadeEnd - threshold);
    const h = Math.round(60 + t * 160);
    const s = Math.round(6 + t * 3);
    const l = Math.round(72 - t * 46);
    return `hsl(${h}, ${s}%, ${l}%)`;
  });

  const fontWeight = 300;

  return (
    <span className="inline-block">
      <motion.span style={{ color, fontWeight }}>
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
  const opacity = useTransform(progress, [start, end], [0.18, 0.6]);
  const y = useTransform(progress, [start, end], [14, 0]);
  const scale = useTransform(progress, [start, end], [0.94, 1]);
  const filter = "grayscale(1) brightness(0.28) sepia(0.15) hue-rotate(200deg)";

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
      <motion.span
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-xs uppercase tracking-[0.2em] font-body font-medium text-muted-foreground/60 block mb-6 pt-10 md:pt-16"
      >
        Who am I
      </motion.span>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="text-xl md:text-4xl lg:text-5xl leading-[1.35] font-body"
      >
        {introWords.map((word, index) => {
          const threshold = index / introWords.length;
          const isEmphasized =
            (index >= 11 && index <= 15) || (index >= 24 && index <= 30);
          const activeColor =
            index >= 11 && index <= 15 ? "#6668D8" : "hsl(220, 9%, 26%)";

          return (
            <IntroWord
              key={`${word}-${index}`}
              word={word}
              progress={delayedProgress}
              threshold={threshold}
              alwaysHighlighted={index < alwaysHighlightedWords}
              isEmphasized={isEmphasized}
              activeColor={activeColor}
            />
          );
        })}
      </motion.p>

      <motion.div
        ref={logosRef}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-10 md:mt-14"
      >
        <div className="flex flex-col items-center gap-5 md:gap-7 pt-6 md:pt-10">
          <span className="text-xs uppercase tracking-[0.2em] font-body font-medium text-muted-foreground/60">
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
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
