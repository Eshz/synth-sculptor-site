import { motion } from "framer-motion";
import projectIntelliframe from "@/assets/project-intelliframe.jpg";
import projectGenway from "@/assets/project-genway.jpg";
import projectTranscript from "@/assets/project-transcript.jpg";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  focusAreas: string[];
  image: string;
}

const projects: Project[] = [
  {
    title: "Cloud IntelliFrame",
    subtitle: "Microsoft Teams",
    description:
      "Designing an AI-powered video system that automatically frames in-room meeting participants to improve hybrid collaboration and meeting equity.",
    focusAreas: ["AI interaction design", "Computer vision UX", "Enterprise collaboration"],
    image: projectIntelliframe,
  },
  {
    title: "AI Research Platform",
    subtitle: "Genway",
    description:
      "Designing agentic workflows that transform user interviews into structured insights using AI analysis.",
    focusAreas: ["AI research workflows", "Insight generation", "Product strategy"],
    image: projectGenway,
  },
  {
    title: "Transcript-Driven Meeting Insights",
    subtitle: "Microsoft",
    description:
      "Exploring how meeting transcripts can power post-meeting productivity tools through AI summarization and conversational interfaces.",
    focusAreas: ["Language models", "Productivity workflows", "AI explainability"],
    image: projectTranscript,
  },
];

const logos = [
  { name: "Microsoft", svg: (
    <svg viewBox="0 0 23 23" className="w-5 h-5" fill="currentColor">
      <rect x="1" y="1" width="10" height="10" />
      <rect x="12" y="1" width="10" height="10" />
      <rect x="1" y="12" width="10" height="10" />
      <rect x="12" y="12" width="10" height="10" />
    </svg>
  )},
  { name: "Google", svg: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" opacity=".6"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" opacity=".7"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" opacity=".55"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" opacity=".65"/>
    </svg>
  )},
  { name: "OpenAI", svg: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M22.28 9.37a5.88 5.88 0 0 0-.51-4.84 5.96 5.96 0 0 0-6.4-2.86A5.9 5.9 0 0 0 10.93 0a5.96 5.96 0 0 0-5.68 4.12 5.88 5.88 0 0 0-3.93 2.85 5.96 5.96 0 0 0 .73 6.98 5.88 5.88 0 0 0 .51 4.84 5.96 5.96 0 0 0 6.4 2.86A5.9 5.9 0 0 0 13.4 24a5.96 5.96 0 0 0 5.68-4.12 5.88 5.88 0 0 0 3.93-2.85 5.96 5.96 0 0 0-.73-6.98v-.68zM13.4 22.34a4.43 4.43 0 0 1-2.84-1.03l.14-.08 4.72-2.73a.77.77 0 0 0 .39-.67v-6.66l2 1.15a.07.07 0 0 1 .04.06v5.52a4.46 4.46 0 0 1-4.45 4.44zM3.73 18.19a4.42 4.42 0 0 1-.53-2.98l.14.08 4.72 2.73a.77.77 0 0 0 .77 0l5.76-3.33v2.31a.07.07 0 0 1-.03.06l-4.77 2.76a4.46 4.46 0 0 1-6.06-1.63zM2.34 7.89a4.42 4.42 0 0 1 2.31-1.95v5.62a.77.77 0 0 0 .39.67l5.76 3.33-2 1.15a.07.07 0 0 1-.07 0L4 13.95a4.46 4.46 0 0 1-1.63-6.06h-.03zM19.26 11.97l-5.76-3.33 2-1.15a.07.07 0 0 1 .07 0l4.77 2.76a4.46 4.46 0 0 1-.68 8.05v-5.62a.77.77 0 0 0-.39-.67l-.01-.04zM21.23 8.79l-.14-.08-4.72-2.73a.77.77 0 0 0-.77 0L9.84 9.31V7a.07.07 0 0 1 .03-.06l4.77-2.76a4.46 4.46 0 0 1 6.59 4.61zM8.68 13.34l-2-1.15a.07.07 0 0 1-.04-.06V6.61a4.46 4.46 0 0 1 7.3-3.42l-.14.08-4.72 2.73a.77.77 0 0 0-.39.67l-.01 6.67zM9.84 11.5L12 10.22l2.16 1.25v2.5L12 15.22l-2.16-1.25v-2.47z"/>
    </svg>
  )},
  { name: "Meta", svg: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7A10 10 0 0 0 22 12.06c0-5.53-4.5-10.02-10-10.02z"/>
    </svg>
  )},
];

const ProjectCards = () => {
  return (
    <section className="px-6 md:px-12 lg:px-20 pb-20 md:pb-32 max-w-[1400px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-between mb-12 md:mb-16"
      >
        <h2 className="font-display text-3xl md:text-4xl text-foreground">
          Selected Work
        </h2>
        <div className="hidden md:flex items-center gap-6">
          <span className="text-xs font-body font-medium tracking-[0.1em] text-muted-foreground uppercase">
            Trusted by
          </span>
          <div className="flex items-center gap-5 text-muted-foreground/50">
            {logos.map((logo) => (
              <div key={logo.name} title={logo.name}>
                {logo.svg}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="grid gap-8 md:gap-10">
        {projects.map((project, i) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group rounded-2xl bg-card border border-border hover:border-foreground/20 transition-colors duration-300 overflow-hidden"
            data-interactive
          >
            {/* Thumbnail */}
            <div className="w-full aspect-[16/7] overflow-hidden">
              <img
                src={project.image}
                alt={`${project.title} project preview`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
            {/* Content */}
            <div className="p-8 md:p-10">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="max-w-xl">
                  <h3 className="font-display text-2xl md:text-3xl text-foreground">
                    {project.title}
                    <span className="text-muted-foreground"> — {project.subtitle}</span>
                  </h3>
                  <p className="mt-4 text-muted-foreground font-body leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 md:pt-1">
                  {project.focusAreas.map((area) => (
                    <span
                      key={area}
                      className="px-3 py-1.5 text-xs font-body font-medium tracking-wide text-muted-foreground bg-secondary rounded-full"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default ProjectCards;
