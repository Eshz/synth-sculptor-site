interface Project {
  title: string;
  subtitle: string;
  description: string;
  focusAreas: string[];
}

const projects: Project[] = [
  {
    title: "Cloud IntelliFrame",
    subtitle: "Microsoft Teams",
    description:
      "Designing an AI-powered video system that automatically frames in-room meeting participants to improve hybrid collaboration and meeting equity.",
    focusAreas: ["AI interaction design", "Computer vision UX", "Enterprise collaboration"],
  },
  {
    title: "AI Research Platform",
    subtitle: "Genway",
    description:
      "Designing agentic workflows that transform user interviews into structured insights using AI analysis.",
    focusAreas: ["AI research workflows", "Insight generation", "Product strategy"],
  },
  {
    title: "Transcript-Driven Meeting Insights",
    subtitle: "Microsoft",
    description:
      "Exploring how meeting transcripts can power post-meeting productivity tools through AI summarization and conversational interfaces.",
    focusAreas: ["Language models", "Productivity workflows", "AI explainability"],
  },
];

const ProjectCards = () => {
  return (
    <section className="px-6 md:px-12 lg:px-20 pb-20 md:pb-32 max-w-[1400px] mx-auto">
      <h2 className="font-display text-3xl md:text-4xl text-foreground mb-12 md:mb-16">
        Selected Work
      </h2>
      <div className="grid gap-8 md:gap-10">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group p-8 md:p-10 rounded-2xl bg-card border border-border hover:border-foreground/20 transition-colors duration-300"
            data-interactive
          >
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
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProjectCards;
