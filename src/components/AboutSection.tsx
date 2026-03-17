import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
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

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-8, 8]), { stiffness: 200, damping: 20 });
  const glareX = useTransform(mouseX, [0, 1], [0, 100]);
  const glareY = useTransform(mouseY, [0, 1], [0, 100]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  }, [mouseX, mouseY]);

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  }, [mouseX, mouseY]);

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
          <img
            src={profileImg}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Main image */}
        <div className="aspect-square bg-border">
          <img
            alt="Eshchar Zychlinski"
            className="w-full h-full object-cover grayscale"
            src={profileImg}
          />
        </div>

        {/* Glare overlay */}
        <motion.div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: useTransform(
              [glareX, glareY],
              ([x, y]) =>
                `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.15) 0%, transparent 60%)`
            ),
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
