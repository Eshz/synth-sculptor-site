import { motion, useInView, useMotionValueEvent, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";

const ViewCaseStudyLink = ({ slug }: { slug: string }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      to={`/work/${slug}`}
      className="relative inline-flex items-center gap-3 text-brand-ink font-body font-medium pb-px"
      data-interactive
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      View Case Study
      <ArrowUpRight className={`transition-transform duration-200 ${hovered ? "translate-x-1 -translate-y-1" : ""}`} />
      <motion.span
        className="absolute bottom-0 left-0 h-px bg-brand-ink"
        initial={false}
        animate={{ width: hovered ? "calc(100% - 28px)" : "0%" }}
        transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
      />
    </Link>
  );
};
import projectIntelliframe from "@/assets/cover-intelliframe.gif";
import projectIntelliframeThumbnail from "@/assets/cover-thumbnail-intelliframe.png";
import projectGenway from "@/assets/cover-genway.mp4";
import projectGenwaythumbnail from "@/assets/cover-thumbnail-genway.png";
import projectTranscript from "@/assets/cover-transcriptProject.png";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  focusAreas: string[];
  poster: string;
  slug: string;
  accent: string; // used for small spine dot
}

const projects: Project[] = [
  {
    title: "AI Research Platform",
    subtitle: "Genway",
    description:
      "Designing agentic workflows that transform user interviews into structured insights using AI analysis.",
    focusAreas: ["AI research workflows", "Insight generation", "Product strategy"],
    poster: projectGenway,
    slug: "genway",
    accent: "#6759DF",
  },
  {
    title: "Cloud IntelliFrame",
    subtitle: "Microsoft Teams",
    description:
      "Designing an AI-powered video system that automatically frames in-room meeting participants to improve hybrid collaboration and meeting equity.",
    focusAreas: ["AI interaction design", "Computer vision UX", "Enterprise collaboration"],
    poster: projectIntelliframe,
    slug: "intelliframe",
    accent: "#1E1E1E",
  },
];

// Piecewise linear interpolation for scroll tilt
const getScrollTilt = (p: number) => ({
  x: p < 0.5 ? 4 + (p / 0.5) * (-18) : -14 + ((p - 0.5) / 0.5) * (-14),
  y: p < 0.5 ? 18 + (p / 0.5) * (10) : 28 + ((p - 0.5) / 0.5) * (10),
});

const BookMock = ({ project }: { project: Project }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { amount: 0.5, margin: "-30% 0px -30% 0px" });
  const isPointerOverRef = useRef(false);

  // Scroll-based tilt — direct spring updates, no intermediate motion values
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rotateXSpring = useSpring(4, { stiffness: 220, damping: 26, mass: 0.6 });
  const rotateYSpring = useSpring(18, { stiffness: 220, damping: 26, mass: 0.6 });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (isPointerOverRef.current) return;
    const { x, y } = getScrollTilt(latest);
    rotateXSpring.set(x);
    rotateYSpring.set(y);
  });

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = containerRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    isPointerOverRef.current = true;
    rotateXSpring.set(-12 + (0.5 - py) * 2 * 6);
    rotateYSpring.set(28 + (px - 0.5) * 2 * 8);
  };

  const onPointerLeave = () => {
    isPointerOverRef.current = false;
    const { x, y } = getScrollTilt(scrollYProgress.get());
    rotateXSpring.set(x);
    rotateYSpring.set(y);
  };

  const coverSrc =
    project.slug === "intelliframe" && !isInView
      ? projectIntelliframeThumbnail
      : project.slug === "genway" && !isInView
        ? projectGenwaythumbnail
        : project.poster;

  return (
    <div
      ref={containerRef}
      className="book3d-container"
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      <div className="book3d-shadow" />
      <motion.div
        className="book3d"
        style={{
          rotateX: rotateXSpring,
          rotateY: rotateYSpring,
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
        aria-hidden
      >
        {/* Inner page (content preview) */}
        <div className="book3d-face book3d-inner">
          <div className="h-full flex flex-col">
            <span className="text-[10px] uppercase tracking-[0.18em] text-brand-ink/40 mb-4 block font-body">
              Case Study Overview
            </span>
            <h3 className="text-xl font-body font-medium mb-4 text-brand-ink">{project.title}</h3>
            <p className="text-xs leading-relaxed text-brand-ink/70 mb-6 font-body">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.focusAreas.map((area) => (
                <span
                  key={area}
                  className="px-2 py-1 border border-brand-ink/10 rounded-full text-[8px] uppercase tracking-wider text-brand-ink/50 font-body"
                >
                  {area}
                </span>
              ))}
            </div>

            <div className="book3d-overlay">
              <span className="bg-brand-ink text-brand-bg px-6 py-3 rounded-full text-[10px] uppercase tracking-[0.15em] font-body font-medium shadow-lg">
                View case study
              </span>
            </div>
          </div>
        </div>

        {/* Page edges */}
        <div className="book3d-face book3d-page-right" />
        <div className="book3d-face book3d-page-top" />
        <div className="book3d-face book3d-page-bottom" />

        {/* Spine */}
        <div className="book3d-face book3d-spine">
          <div className="h-full flex flex-col justify-between items-center py-6">
            <div className="flex flex-col items-center gap-8">
              <div
                className="font-body text-[10px] uppercase tracking-[0.18em] text-brand-ink/70"
                style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
              >
                {project.subtitle}
              </div>
              <div
                className="font-body font-medium text-sm tracking-wide text-brand-ink"
                style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
              >
                {project.title}
              </div>
            </div>
            <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: project.accent }} />
          </div>
        </div>

        {/* Back */}
        <div className="book3d-face book3d-back">
          <div className="h-full p-6 flex flex-col">
            <div className="flex justify-between font-body text-[10px] uppercase tracking-[0.12em] text-brand-ink/60 border-b border-brand-ink/10 pb-2 mb-4">
              <span>Product Design</span>
              <span>V.2026</span>
            </div>
            <h4 className="text-base font-body font-medium text-brand-ink mb-3">{project.title}</h4>
            <p className="text-xs leading-relaxed text-brand-ink/70 font-body">{project.description}</p>
            <div className="mt-auto pt-6 flex items-end justify-between">
              <div className="h-6 w-20 bg-[repeating-linear-gradient(to_right,rgba(17,17,17,0.9)_0,rgba(17,17,17,0.9)_1px,transparent_1px,transparent_2px,rgba(17,17,17,0.9)_2px,rgba(17,17,17,0.9)_3px,transparent_3px,transparent_5px)]" />
              <div className="font-body text-[10px] uppercase tracking-[0.18em] text-brand-ink/70">
                Portfolio edition
              </div>
            </div>
          </div>
        </div>

        {/* Front cover group */}
        <div className="book3d-front-group">
          <div className="book3d-front-outside">
            <div className="h-full p-6 flex flex-col relative">
              <div className="absolute top-3 left-3 w-2 h-2 border border-brand-bg/30 opacity-60 border-r-0 border-b-0" />
              <div className="absolute top-3 right-3 w-2 h-2 border border-brand-bg/30 opacity-60 border-l-0 border-b-0" />
              <div className="absolute bottom-3 left-3 w-2 h-2 border border-brand-bg/30 opacity-60 border-r-0 border-t-0" />
              <div className="absolute bottom-3 right-3 w-2 h-2 border border-brand-bg/30 opacity-60 border-l-0 border-t-0" />

              <div className="flex justify-between font-body text-[10px] uppercase tracking-[0.12em] text-brand-ink/60">
                <span>{project.subtitle}</span>
                <span>Product Design</span>
              </div>

              <div className="flex-1 my-6 rounded-sm overflow-hidden bg-brand-ink shadow-[inset_0_2px_8px_rgba(0,0,0,0.15),0_1px_0_rgba(255,255,255,0.8)]">
                {project.slug === "genway" && isInView ? (
                  <video
                    src={projectGenway}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={coverSrc}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                )}
              </div>

              <div className="mt-auto">
                <h3 className="text-3xl font-body font-medium tracking-[-0.04em] leading-[0.9] text-brand-ink mb-2">
                  {project.title}
                </h3>
                <p className="text-xs text-brand-ink/70 font-body leading-snug line-clamp-3 max-w-[220px]">
                  {project.description}
                </p>
              </div>

              <div className="mt-6 flex justify-between items-end font-body text-[10px] uppercase tracking-[0.18em] text-brand-ink/70">
                <span>Portfolio 2026</span>
                <span className="opacity-70">EZ</span>
              </div>
            </div>
          </div>

          <div className="book3d-front-inside">
            <div className="border border-brand-ink/10 h-full flex flex-col items-center justify-center text-center text-brand-ink/40 font-body text-[10px] uppercase tracking-[0.18em]">
              <div className="opacity-60">{project.subtitle}</div>
              <div className="my-5 text-sm text-brand-ink font-medium tracking-[0.18em]">
                {project.title.toUpperCase()}
              </div>
              <div className="opacity-40">© 2026</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ProjectCards = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 50%", "start 12%"],
  });
  const { scrollYProgress: projectsProgress } = useScroll({
    target: projectsRef,
    offset: ["start 70%", "end 30%"],
  });
  const pinkOverlayOpacity = useSpring(
    useTransform(projectsProgress, [0.3, 0.7], [0, 1]),
    { stiffness: 60, damping: 20 }
  );

  const sectionRadius = useTransform(scrollYProgress, [0, 1], ["2rem", "0rem"]);

  return (
    <motion.section ref={sectionRef} className="relative my-6 md:my-12 overflow-hidden" style={{ borderRadius: sectionRadius }}>
      {/* Indigo gradient — visible for first project */}
      <div className="selectedwork-ambient absolute inset-0" />
      {/* Pink gradient — fades in for second project */}
      <motion.div
        className="selectedwork-ambient-pink absolute inset-0"
        style={{
          opacity: pinkOverlayOpacity,
          willChange: "opacity",
        }}
      />
      <div className="relative z-10 py-12 md:py-24 text-brand-ink">
        <div className="mx-auto max-w-[1400px] px-12 md:px-24 lg:px-32">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] font-body font-medium text-brand-ink/50 block mb-6">
              Recent Work
            </span>
            <div className="flex flex-col gap-6 mb-14 md:mb-16">
              <h2 className="text-4xl md:text-6xl font-body font-light text-brand-ink max-w-4xl">
                Some things I&apos;ve worked on <span className="font-body text-brand-ink">recently</span>.
              </h2>
            </div>
          </div>

          <div ref={projectsRef} className="space-y-16 md:space-y-28 mt-12 md:mt-20">
            {projects.map((project, i) => (
              <div key={project.title}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
                  <div className="order-1 lg:order-1 h-[450px] md:h-[600px] flex items-center justify-center">
                    <Link to={`/work/${project.slug}`} className="block" data-interactive>
                      <BookMock project={project} />
                    </Link>
                  </div>

                  <div className="order-2 lg:order-2">
                    <div className="max-w-md">
                      <span className="text-xs uppercase tracking-[0.2em] text-brand-ink/50 block mb-2 font-body">
                        {project.subtitle}
                      </span>
                      <h3 className="text-3xl md:text-5xl font-body font-light text-brand-ink mb-4 md:mb-6">
                        {project.title}
                      </h3>
                      <p className="text-brand-ink/60 leading-relaxed font-body mb-6 md:mb-8 text-base md:text-lg">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 md:gap-3 mb-8 md:mb-12">
                        {project.focusAreas.map((area) => (
                          <span
                            key={area}
                            className="px-3 md:px-4 py-1 md:py-1.5 border border-brand-ink/15 rounded-full text-[9px] md:text-[10px] uppercase tracking-wider text-brand-ink/60 font-body bg-white/30 backdrop-blur-[2px]"
                          >
                            {area}
                          </span>
                        ))}
                      </div>
                      <ViewCaseStudyLink slug={project.slug} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectCards;
