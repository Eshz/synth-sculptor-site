import { motion } from "framer-motion";
import { Video, MessageSquare, Layers, Film, ExternalLink, Info } from "lucide-react";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import CustomCursor from "@/components/CustomCursor";
import logoMicrosoft from "@/assets/logo-microsoft.webp";
import teaserMp4 from "@/assets/intelliframe/intelliframe-teaser.mp4";
import teaserWebm from "@/assets/intelliframe/intelliframe-teaser.webm";
import imageRooms from "@/assets/intelliframe/intelliframe-rooms.webp";
import imageGridView from "@/assets/intelliframe/intelliframe-grid-view.webp";

const fade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6 },
};

const SectionTag = ({ children }: { children: React.ReactNode }) => (
  <motion.span
    {...fade}
    className="inline-block text-[11px] uppercase tracking-[0.25em] font-body font-medium text-muted-foreground mb-5"
  >
    {children}
  </motion.span>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <motion.h2
    {...fade}
    className="text-2xl md:text-4xl font-body font-medium leading-snug mb-6"
  >
    {children}
  </motion.h2>
);

const Paragraph = ({ children }: { children: React.ReactNode }) => (
  <motion.p
    {...fade}
    className="text-base md:text-lg text-muted-foreground font-body leading-relaxed mb-6"
  >
    {children}
  </motion.p>
);

const Bold = ({ children }: { children: React.ReactNode }) => (
  <span className="text-foreground font-medium">{children}</span>
);

const Divider = () => <hr className="border-border my-14 md:my-20" />;

const CaseStudyIntelliframe = () => {
  return (
    <>
      <CustomCursor />
      <CaseStudyLayout>
        {/* Logo + Title block */}
        <section className="px-6 md:px-12 lg:px-20 max-w-[1200px] mx-auto pt-12 md:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <img src={logoMicrosoft} alt="Microsoft logo" className="h-6 md:h-7" />
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-body font-light leading-[1.1] mb-6 max-w-4xl">
              Transforming meeting room video into an intelligent participant gallery at scale
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-body max-w-2xl leading-relaxed">
              Microsoft Teams · 2022–2023
              {" · "}
              <a
                href="https://patents.google.com/patent/US20240104699"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 underline underline-offset-4 decoration-muted-foreground/40 hover:text-foreground hover:decoration-foreground transition-colors"
              >
                <ExternalLink className="shrink-0 w-[1em] h-[1em]" />
                Published as US patent
              </a>
            </p>

          </motion.div>
        </section>

        {/* ─── CONTEXT ─── */}
        <section className="px-6 md:px-12 lg:px-20 max-w-[1200px] mx-auto mt-16">
          <motion.div {...fade}>
            <SectionTag>Context</SectionTag>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-border mt-2">
              {[
                { label: "Role", values: ["Lead Product Designer"] },
                { label: "Company", values: ["Microsoft"] },
                { label: "Focus", values: ["AI UX", "Hybrid Meetings", "Systems Design"] },
                { label: "Timeline", values: ["2022–2023"] },
              ].map((item) => (
                <div key={item.label}>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-body block mb-2">
                    {item.label}
                  </span>
                  {item.values.map((v) => (
                    <span key={v} className="text-sm font-body font-medium text-foreground block leading-relaxed">
                      {v}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <article className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto mt-16 md:mt-24">
          {/* NDA disclaimer */}
          <motion.div
            {...fade}
            className="flex items-start gap-3 mb-12 bg-muted/60 border border-border rounded-xl px-5 py-4 font-body"
          >
            <Info size={16} className="shrink-0 mt-0.5 text-foreground/50" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Due to NDA constraints, I'm not able to share the full scope of this project publicly. I'd be happy to provide additional context or walk through specific parts of the work upon request.{" "}
              <a
                href="mailto:esh2005@gmail.com"
                className="text-foreground font-medium underline underline-offset-4 decoration-foreground/20 hover:decoration-foreground transition-colors"
              >
                Reach out
              </a>
            </p>
          </motion.div>

          {/* Overview */}
          <SectionTitle>Overview</SectionTitle>
          <Paragraph>
            Cloud IntelliFrame is an AI feature for Microsoft Teams that <Bold>turns a single wide room feed into individual, clearly framed participants</Bold> — helping remote attendees actually see and follow the people in the room. The UX challenge wasn't the layout. It was building an experience that felt stable and trustworthy despite probabilistic AI outputs, wildly variable room conditions, and mass-market hardware diversity.
          </Paragraph>
          <Paragraph>
            Hybrid meetings are inherently uneven. Remote participants struggle to read the room and follow conversations naturally. IntelliFrame aimed to close that gap — but doing it right required far more than cropping faces into tiles.
          </Paragraph>

        </article>

        {/* Teaser video */}
        <section className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto mt-12 mb-16">
          <motion.div {...fade} className="rounded-2xl overflow-hidden bg-muted">
            <video autoPlay muted loop playsInline preload="none" className="w-full object-cover" aria-label="IntelliFrame in action">
              <source src={teaserWebm} type="video/webm" />
              <source src={teaserMp4} type="video/mp4" />
            </video>
          </motion.div>
        </section>

        <article className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto">
          <Divider />

          {/* ─── PROBLEM ─── */}
          <SectionTag>Problem</SectionTag>
          <SectionTitle>It's not simply "cutting" faces into tiles.</SectionTitle>
          <Paragraph>
            On the surface, IntelliFrame looks simple: detect faces, crop, display. In practice, <Bold>the UX problem was designing for a system that could never fully control its inputs.</Bold>
          </Paragraph>
          <Paragraph>
            People move, overlap, and turn away. Rooms vary in size, lighting, and seating. Cameras differ wildly. Meeting sizes shift. And because the system is AI-driven, outputs are probabilistic — not guaranteed. <Bold>Every design decision had to hold up across all of that variability, not just in the ideal demo scenario.</Bold>
          </Paragraph>
        </article>

        {/* Rooms image */}
        <section className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto mt-12 mb-16">
          <motion.div {...fade} className="rounded-2xl overflow-hidden bg-muted">
            <img src={imageRooms} alt="IntelliFrame room scenarios" className="w-full object-cover" loading="lazy" />
          </motion.div>
        </section>

        <article className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto">
          <Divider />

          {/* ─── RESEARCH & CONSTRAINTS ─── */}
          <SectionTag>Research & Constraints</SectionTag>
          <SectionTitle>No data. No pipeline. No playbook.</SectionTitle>
          <Paragraph>
            Early in the project, <Bold>none of the standard research inputs existed.</Bold> There was no working pipeline to test against, no data to analyze, and no established precedent for what a cloud-based AI participant gallery should do.
          </Paragraph>
          <Paragraph>
            Getting to real design decisions required building the research infrastructure from scratch — which became one of the most creatively demanding parts of the work.
          </Paragraph>
        </article>

        {/* Constraints list */}
        <section className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto mb-16">
          <motion.div {...fade}>
            <span className="inline-block text-[11px] uppercase tracking-[0.25em] font-body font-medium text-muted-foreground mb-5">
              How to work around it
            </span>
          </motion.div>
          <motion.div
            {...fade}
            className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border rounded-2xl overflow-hidden"
          >
            {[
              { icon: Video, method: "Recorded data & human puppets", detail: "With no pipeline to generate outputs, representative room scenarios were recorded from scratch. During COVID, with no real rooms available, the team physically acted out participant behavior and edge cases." },
              { icon: Film, method: "Video mockups", detail: "Premiere and PowerPoint composites were used to prototype the gallery experience — testing layout behavior before the system could produce real outputs." },
              { icon: Layers, method: "Competitive analysis", detail: "Existing gallery and broadcast systems were studied to understand what already worked — dynamic grids, hard limits on participant count, motion behavior, and vertical vs. horizontal framing." },
              { icon: MessageSquare, method: "User studies & interviews", detail: "Studies and interviews were conducted to validate hypotheses and pressure-test the experience across different participant and room configurations." },
            ].map((item) => (
              <div key={item.method} className="bg-background p-8 flex flex-col gap-4">
                <div className="text-muted-foreground">
                  <item.icon size={20} />
                </div>
                <div>
                  <h4 className="font-body font-medium text-base text-foreground mb-1">{item.method}</h4>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </section>


        <article className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto">
          <Divider />

          {/* ─── PIPELINE ─── */}
          <SectionTag>Working Pipeline</SectionTag>
          <SectionTitle>From manual proxies to real generated data at scale.</SectionTitle>
          <Paragraph>
            The manual work — recorded scenarios, human puppets, video mockups — was the foundation needed to give engineers something to build toward. Once the pipeline was ready, the work shifted from speculation to evaluation: <Bold>real room feeds processed at scale, validated against initial guidelines, and iterated into a stronger V2 spec.</Bold> Custom tooling like Gallery Tagger and ImageTagger turned ad-hoc observation into structured design evidence.
          </Paragraph>
          <Paragraph>
            This reframed the core question: IntelliFrame wasn't a feature for visualizing AI detections — it was a system for helping remote participants <Bold>make sense of in-room presence</Bold> despite unstable inputs and imperfect outputs.
          </Paragraph>

          {/* ─── SOLUTION & IMPACT ─── */}
          <Divider />
          <SectionTag>Solution & Impact</SectionTag>
          <SectionTitle>A behavioral framework, not a static spec.</SectionTitle>
          <Paragraph>
            The deliverable wasn't a screen — it was a <Bold>set of UX guidelines defining how the system should behave across conditions</Bold>: template logic, participant event handling, transition rules, fallback states, and post-launch explainability. Designed to adapt across room variability, not assume a perfect environment.
          </Paragraph>
        </article>

        {/* Grid view image */}
        <section className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto mt-12 mb-16">
          <motion.div {...fade} className="rounded-2xl overflow-hidden bg-muted">
            <img src={imageGridView} alt="IntelliFrame grid view" className="w-full object-cover" loading="lazy" />
          </motion.div>
        </section>

        <article className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto">
          <Paragraph>
            IntelliFrame shipped inside Microsoft Teams and earned a <Bold>US patent</Bold>. The primary contribution was turning a technically complex, probabilistic system into a design problem the team could reason about, evaluate, and ship — with UX guidelines that supported continued iteration after GA.
          </Paragraph>
        </article>

        {/* NDA disclaimer */}
        <section className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto my-16">
          <motion.div
            {...fade}
            className="bg-primary text-primary-foreground rounded-[2rem] p-8 md:p-16 relative overflow-hidden"
          >
            <div className="relative z-10">
              <span className="font-body text-[10px] uppercase tracking-[0.3em] opacity-50 mb-6 block">
                Want to know more?
              </span>
              <p className="text-2xl md:text-3xl font-body font-medium leading-tight max-w-3xl">
                There's a lot more to this story —{" "}
                <span className="opacity-60 italic">let's talk.</span>
              </p>
              <p className="text-base md:text-lg mt-6 opacity-80 font-body leading-relaxed max-w-2xl">
                The research methods, UX guidelines, and design decisions behind IntelliFrame go deeper than what's shown here. I'd love to walk you through it.{" "}
                <a
                  href="mailto:esh2005@gmail.com"
                  className="underline underline-offset-4 decoration-white/30 hover:decoration-white transition-colors font-medium"
                >
                  Get in touch →
                </a>
              </p>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          </motion.div>
        </section>

        <article className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto">
          <div className="h-24" />
        </article>
      </CaseStudyLayout>
    </>
  );
};

export default CaseStudyIntelliframe;
