import { motion } from "framer-motion";
import profileImg from "@/assets/profile.png";

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
          <div className="aspect-square rounded-[2rem] overflow-hidden bg-border">
            <img
              alt="Eshchar Zychlinski"
              className="w-full h-full object-cover grayscale"
              src={profileImg}
            />
          </div>
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
