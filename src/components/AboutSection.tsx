import { motion, useMotionValue, useTransform, useSpring, useScroll } from "framer-motion";
import profileImg from "@/assets/profile.png";
import { useRef, useCallback } from "react";

const experience = [
  { role: "Head of Product Design", company: "Genway AI", years: "2025–Present" },
  { role: "Senior UX Designer", company: "Microsoft", years: "2023–2024" },
  { role: "UX Designer II", company: "Microsoft", years: "2022–2023" },
  { role: "UX Designer", company: "Microsoft", years: "2018–2022" },
];

const education = [
  { degree: "MA Human Computer Interaction", school: "Reichman University", years: "2020–2022" },
  { degree: "BDes Visual Communication", school: "Bezalel Academy", years: "2014–2018" },
];

const patents = [
  { title: "Optimal Resolution Selection For A Video Stream", year: "2025" },
  { title: "Generating A Gallery View From An Area View", year: "2022" },
  { title: "Botcasts – AI Based Personalized Podcasts", year: "2021" },
  { title: "Providing Responses To Queries Of Transcripts", year: "2021" },
];

const ProfileImage = () => {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const isHovered = useMotionValue(0);

  // Scroll-based tilt
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scrollTiltX = useTransform(scrollYProgress, [0, 0.5, 1], [10, 0, -10]);

  // Combine mouse + scroll for rotateX
  const mouseRotateX = useTransform(mouseY, [0, 1], [8, -8]);
  const combinedRotateX = useTransform(
    [mouseRotateX, scrollTiltX, isHovered],
    ([mouseVal, scrollVal, hovered]: number[]) =>
      hovered ? mouseVal : scrollVal
  );
  const rotateX = useSpring(combinedRotateX, { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-8, 8]), { stiffness: 200, damping: 20 });
  const glareX = useTransform(mouseX, [0, 1], [0, 100]);
  const glareY = useTransform(mouseY, [0, 1], [0, 100]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
    isHovered.set(1);
  }, [mouseX, mouseY, isHovered]);

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0.5);
    mouseY.set(0.5);
    isHovered.set(0);
  }, [mouseX, mouseY, isHovered]);

  return (
    <div className="group" style={{ perspective: "1000px" }}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative rounded-[2rem] overflow-hidden shadow-lg transition-shadow duration-500 hover:shadow-2xl"
      >
        {/* Ambient blur blob behind */}
        <div className="absolute -z-10 inset-0 opacity-80 blur-[64px] pointer-events-none">
          <img src={profileImg} alt="" className="w-full h-full object-cover" />
        </div>

        {/* Grayscale base image */}
        <div className="aspect-square bg-border">
          <img
            alt="Eshchar Zychlinski"
            className="w-full h-full object-cover grayscale"
            src={profileImg}
          />
        </div>

        {/* Color image revealed by flashlight mask */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            WebkitMaskImage: useTransform(
              [glareX, glareY],
              ([x, y]) =>
                `radial-gradient(circle 120px at ${x}% ${y}%, black 0%, transparent 100%)`
            ),
            maskImage: useTransform(
              [glareX, glareY],
              ([x, y]) =>
                `radial-gradient(circle 120px at ${x}% ${y}%, black 0%, transparent 100%)`
            ),
            opacity: isHovered,
          }}
        >
          <img
            src={profileImg}
            alt=""
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Glare overlay */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: useTransform(
              [glareX, glareY],
              ([x, y]) =>
                `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.1) 0%, transparent 50%)`
            ),
            opacity: isHovered,
          }}
        />
      </motion.div>
    </div>
  );
};

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start"
    >
      {/* Left — Photo */}
      <div className="md:col-span-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <ProfileImage />
        </motion.div>
      </div>

      {/* Right — Content */}
      <div className="md:col-span-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="text-xs uppercase tracking-[0.2em] font-body font-medium text-muted-foreground/60 block mb-6">
            About
          </span>
          <h2 className="text-4xl md:text-5xl font-body font-light text-foreground mb-8">
            Lead Product Designer with{" "}
            <span className="font-display italic">8+ years</span> of experience.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed font-body font-light mb-14">
            Leading design across Microsoft Teams and AI startups — turning complex
            machine intelligence into products people understand, trust, and use.
          </p>

          {/* Resume details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left column: Experience + Education */}
            <div className="space-y-10">
              <div>
                <h3 className="font-body font-semibold text-foreground text-sm uppercase tracking-[0.15em] mb-4">
                  Experience
                </h3>
                <ul className="space-y-2.5 text-base text-muted-foreground font-body font-light">
                  {experience.map((item) => (
                    <li key={item.role + item.company} className="flex justify-between">
                      <span>
                        {item.role} — <span className="text-foreground/80 font-medium">{item.company}</span>
                      </span>
                      <span className="text-muted-foreground/40 shrink-0 ml-4">{item.years}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-body font-semibold text-foreground text-sm uppercase tracking-[0.15em] mb-4">
                  Education
                </h3>
                <ul className="space-y-2.5 text-base text-muted-foreground font-body font-light">
                  {education.map((item) => (
                    <li key={item.degree}>
                      <span className="text-foreground/80 font-medium">{item.degree}</span> — {item.school}, {item.years}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right column: Patents */}
            <div>
              <h3 className="font-body font-semibold text-foreground text-sm uppercase tracking-[0.15em] mb-4">
                Patents
              </h3>
              <ul className="space-y-2.5 text-base text-muted-foreground font-body font-light">
                {patents.map((item) => (
                  <li key={item.title}>
                    {item.title} <span className="text-muted-foreground/40">· {item.year}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
