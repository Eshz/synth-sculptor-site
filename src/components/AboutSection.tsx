import { motion, useTransform, useSpring, useScroll } from "framer-motion";
import profileImg from "@/assets/profile.png";
import { useRef } from "react";

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

  // All effects driven purely by scroll
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scrollTiltX = useTransform(scrollYProgress, [0, 0.5, 1], [14, 0, -14]);
  const scrollTiltY = useTransform(scrollYProgress, [0, 0.5, 1], [-10, 0, 10]);
  const rotateX = useSpring(scrollTiltX, { stiffness: 150, damping: 22 });
  const rotateY = useSpring(scrollTiltY, { stiffness: 150, damping: 22 });

  // Color flash spotlight moves diagonally with scroll
  const glareX = useTransform(scrollYProgress, [0, 1], [15, 85]);
  const glareY = useTransform(scrollYProgress, [0, 1], [15, 85]);
  const flashOpacity = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 0.7, 1, 0.7, 0]);

  return (
    <div style={{ perspective: "1000px" }}>
      <motion.div
        ref={ref}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative rounded-[2rem] overflow-hidden shadow-lg"
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

        {/* Color image revealed by scroll-driven spotlight */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            WebkitMaskImage: useTransform(
              [glareX, glareY],
              ([x, y]) =>
                `radial-gradient(circle 220px at ${x}% ${y}%, black 0%, transparent 100%)`
            ),
            maskImage: useTransform(
              [glareX, glareY],
              ([x, y]) =>
                `radial-gradient(circle 220px at ${x}% ${y}%, black 0%, transparent 100%)`
            ),
            opacity: flashOpacity,
          }}
        >
          <img src={profileImg} alt="" className="w-full h-full object-cover" />
        </motion.div>

        {/* Glare overlay */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: useTransform(
              [glareX, glareY],
              ([x, y]) =>
                `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.12) 0%, transparent 50%)`
            ),
            opacity: flashOpacity,
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
          <p className="text-foreground/72 text-lg leading-relaxed font-body font-light mb-14">
            Leading design across Microsoft Teams and AI startups · turning complex
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
                <ul className="space-y-2.5 text-base text-foreground/72 font-body font-light">
                  {experience.map((item) => (
                    <li key={item.role + item.company} className="flex justify-between">
                      <span>
                        {item.role} · <span className="text-foreground font-medium">{item.company}</span>
                      </span>
                      <span className="text-foreground/55 shrink-0 ml-4">{item.years}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-body font-semibold text-foreground text-sm uppercase tracking-[0.15em] mb-4">
                  Education
                </h3>
                <ul className="space-y-2.5 text-base text-foreground/72 font-body font-light">
                  {education.map((item) => (
                    <li key={item.degree}>
                      <span className="text-foreground font-medium">{item.degree}</span> · {item.school}, {item.years}
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
              <ul className="space-y-2.5 text-base text-foreground/72 font-body font-light">
                {patents.map((item) => (
                  <li key={item.title}>
                    {item.title} <span className="text-foreground/55">· {item.year}</span>
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
