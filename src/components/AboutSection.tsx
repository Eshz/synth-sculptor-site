import { motion } from "framer-motion";

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

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto"
    >
      {/* Header with name + photo */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="flex items-start justify-between gap-12 mb-16"
      >
        <div>
          <span className="text-xs uppercase tracking-[0.2em] font-body font-medium text-muted-foreground/60 block mb-6">
            About
          </span>
          <h2 className="text-4xl md:text-5xl font-body font-light text-foreground mb-6">
            Eshchar Zychlinski
          </h2>
          <div className="flex flex-wrap gap-2">
            {["UX Designer", "Builder", "AI Product Thinker"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 border border-border rounded-full text-[10px] uppercase tracking-wider text-muted-foreground font-body"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <img
          src="https://picsum.photos/seed/designer/800/1000"
          alt="Eshchar Zychlinski"
          className="hidden md:block w-40 h-40 lg:w-52 lg:h-52 rounded-full object-cover border border-border shadow-sm shrink-0 grayscale"
        />
      </motion.div>

      {/* Two-column content */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="grid md:grid-cols-2 gap-12"
      >
        {/* Left — bio */}
        <div className="space-y-4 text-muted-foreground font-body font-light leading-relaxed">
          <p className="text-foreground/80 text-lg">
            I'm a UX designer who operates at the intersection of product, technology, and storytelling.
          </p>
          <p>
            My background spans patents, research, product design, and front-end development — but what really defines me is that I don't just design interfaces. I build systems, tools, and narratives that move products forward.
          </p>
        </div>

        {/* Right — experience, education, patents */}
        <div className="space-y-8">
          {/* Experience */}
          <div>
            <h3 className="font-body font-medium text-foreground text-sm uppercase tracking-[0.15em] mb-3">
              Experience
            </h3>
            <ul className="space-y-1.5 text-sm text-muted-foreground font-body">
              {experience.map((item) => (
                <li key={item.role + item.company} className="flex justify-between">
                  <span>
                    {item.role} — <span className="text-foreground/80">{item.company}</span>
                  </span>
                  <span className="text-muted-foreground/50 shrink-0 ml-2">{item.years}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Education */}
          <div>
            <h3 className="font-body font-medium text-foreground text-sm uppercase tracking-[0.15em] mb-3">
              Education
            </h3>
            <ul className="space-y-1.5 text-sm text-muted-foreground font-body">
              {education.map((item) => (
                <li key={item.degree}>
                  <span className="text-foreground/80">{item.degree}</span> — {item.school}, {item.years}
                </li>
              ))}
            </ul>
          </div>

          {/* Patents */}
          <div>
            <h3 className="font-body font-medium text-foreground text-sm uppercase tracking-[0.15em] mb-3">
              Patents
            </h3>
            <ul className="space-y-1.5 text-sm text-muted-foreground font-body">
              {patents.map((item) => (
                <li key={item.title}>
                  {item.title} <span className="text-muted-foreground/50">· {item.year}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
