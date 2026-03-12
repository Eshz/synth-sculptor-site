import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import VideoThumbnail from "@/components/VideoThumbnail";
import projectIntelliframe from "@/assets/project-intelliframe.jpg";
import projectGenway from "@/assets/project-genway.jpg";
import projectTranscript from "@/assets/project-transcript.jpg";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  focusAreas: string[];
  video: string;
  poster: string;
}

const projects: Project[] = [
  {
    title: "Cloud IntelliFrame",
    subtitle: "Microsoft Teams",
    description:
      "Designing an AI-powered video system that automatically frames in-room meeting participants to improve hybrid collaboration and meeting equity.",
    focusAreas: ["AI interaction design", "Computer vision UX", "Enterprise collaboration"],
    video: "https://www.calebwu.ca/images/RD/rd-cover-new.mp4",
    poster: projectIntelliframe,
  },
  {
    title: "AI Research Platform",
    subtitle: "Genway",
    description:
      "Designing agentic workflows that transform user interviews into structured insights using AI analysis.",
    focusAreas: ["AI research workflows", "Insight generation", "Product strategy"],
    video: "https://www.calebwu.ca/images/Axis/AxisCover.mp4",
    poster: projectGenway,
  },
  {
    title: "Transcript-Driven Insights",
    subtitle: "Microsoft",
    description:
      "Exploring how meeting transcripts can power post-meeting productivity tools through AI summarization and conversational interfaces.",
    focusAreas: ["Language models", "Productivity workflows", "AI explainability"],
    video: "https://www.calebwu.ca/images/RD/rd-cover-new.mp4",
    poster: projectTranscript,
  },
];

const ProjectCards = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto bg-brand-ink text-brand-bg rounded-[3rem] my-12">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-xs uppercase tracking-[0.2em] font-body font-medium text-brand-bg/40 block mb-6">
          Selected Work
        </span>
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <h2 className="text-4xl md:text-6xl font-body font-light text-brand-bg">
            A selection of{" "}
            <span className="font-display italic text-brand-bg">AI product design</span>{" "}
            work.
          </h2>
          <p className="text-brand-bg/60 max-w-xs text-sm font-body">
            Across enterprise platforms, innovation teams, and emerging startups.
          </p>
        </div>
      </motion.div>

      <div className="space-y-24">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <div className="group" data-interactive>
              {/* Video Thumbnail */}
              <div className="relative aspect-[16/9] overflow-hidden rounded-3xl mb-8">
                <VideoThumbnail src={project.video} poster={project.poster} alt={project.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-12">
                  <span className="text-brand-bg flex items-center gap-2 font-body font-medium">
                    View Case Study <ArrowUpRight size={20} />
                  </span>
                </div>
              </div>

              {/* Info grid */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                <div className="md:col-span-4">
                  <span className="text-xs uppercase tracking-[0.2em] text-brand-bg/40 block mb-2 font-body">
                    {project.subtitle}
                  </span>
                  <h3 className="text-3xl font-body font-light text-brand-bg">
                    {project.title}
                  </h3>
                </div>
                <div className="md:col-span-5">
                  <p className="text-brand-bg/60 leading-relaxed font-body">
                    {project.description}
                  </p>
                </div>
                <div className="md:col-span-3 flex flex-wrap gap-2 content-start">
                  {project.focusAreas.map((area) => (
                    <span
                      key={area}
                      className="px-3 py-1 border border-brand-bg/20 rounded-full text-[10px] uppercase tracking-wider text-brand-bg/60 font-body"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectCards;
