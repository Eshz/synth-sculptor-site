import { motion } from "framer-motion";
import { Video, Users, Eye, MessageSquare, Monitor, Layers, Shield, Zap, Settings, Film, ExternalLink, Info } from "lucide-react";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import CustomCursor from "@/components/CustomCursor";
import logoMicrosoft from "@/assets/logo-microsoft.png";
import coverGif from "@/assets/cover-intelliframe.gif";
import teaserGif from "@/assets/intelliframe/intelliframe-teaser.gif";
import coverThumbnail from "@/assets/cover-thumbnail-intelliframe.png";
import projectImage from "@/assets/project-intelliframe.jpg";
import imageRooms from "@/assets/intelliframe/intelliframe-rooms.png";
import imageGridView from "@/assets/intelliframe/intelliframe-grid-view.png";

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

        {/* Teaser gif */}
        <section className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto mt-12 mb-16">
          <motion.div {...fade} className="rounded-2xl overflow-hidden bg-muted">
            <img src={teaserGif} alt="IntelliFrame in action" className="w-full object-cover" />
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
            <img src={imageRooms} alt="IntelliFrame room scenarios" className="w-full object-cover" />
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
            The manual work — recorded scenarios, human puppets, video mockups — was never the final method. <Bold>It was the foundation needed to give engineers something to build toward.</Bold> While that groundwork was happening, the engineering team was building the pipeline in parallel, and the research team was working on the underlying algorithms and model creation.
          </Paragraph>
          <Paragraph>
            Once the pipeline was ready, everything shifted. For the first time, it was possible to test with <Bold>real generated data at scale</Bold> — actual room feeds processed by the system across a wide range of conditions. The initial guidelines now had something real to be validated against. The work moved from speculation to evaluation.
          </Paragraph>
        </article>

        {/* Pipeline feedback methods */}
        <section className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto mb-16">
          <div className="space-y-10">
            {[
              { num: "01", icon: Eye, title: "Qualitative — labeling & analysis", desc: "Generated outputs were labeled and sent to participants for review. Collated video was used for systematic qualitative UX analysis, identifying key failure themes across room types and behaviors." },
              { num: "02", icon: Users, title: "Qualitative — hallway interviews", desc: "Informal interviews with people in hallways and in-office gave fast, unfiltered reactions to real system outputs — helping surface issues that formal studies often missed." },
              { num: "03", icon: Monitor, title: "Quantitative — experiments dashboards", desc: "Experiments dashboards enabled data analysis across large volumes of generated outputs. Churn was evaluated early but proved unreliable as a signal — requiring alternative metrics." },
              { num: "04", icon: Layers, title: "Quantitative — defining a system", desc: "Quantitative analysis helped define behavioral rules at scale: bandwidth thresholds, jitter tolerance, significant vs. minor events. Tools like MaxScale showed how guidelines could be rapidly validated across thousands of samples." },
            ].map((item) => (
              <motion.div
                key={item.num}
                {...fade}
                className="flex gap-5"
              >
                <div className="shrink-0 flex flex-col items-center gap-2 pt-1">
                  <span className="text-xs font-body text-muted-foreground/40">{item.num}</span>
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                    <item.icon size={20} className="text-foreground" />
                  </div>
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-body font-medium mb-2 text-foreground">{item.title}</h4>
                  <p className="text-base text-muted-foreground font-body leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <article className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto">
          <Paragraph>
            The pipeline didn't just enable testing — it enabled the work to become systematic. <Bold>Custom tooling like Gallery Tagger and ImageTagger</Bold> was built to support the volume of data: labeling outputs, running user studies, and tracking patterns across hundreds of generated samples. This infrastructure turned ad-hoc observation into structured design evidence, and initial guidelines into a stronger, more defensible V2 spec.
          </Paragraph>
        </article>

        {/* Reframing callout */}
        <section className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto mb-16">
          <motion.div
            {...fade}
            className="bg-primary text-primary-foreground rounded-[2rem] p-8 md:p-16 relative overflow-hidden"
          >
            <div className="relative z-10">
              <span className="font-body text-[10px] uppercase tracking-[0.3em] opacity-50 mb-6 block">
                Reframing the problem
              </span>
              <p className="text-2xl md:text-3xl font-body font-medium leading-tight max-w-3xl">
                Cloud IntelliFrame was not a feature for visualizing AI detections. It was a system for helping remote participants{" "}
                <span className="opacity-60 italic">make sense of in-room presence.</span>
              </p>
              <p className="text-base md:text-lg mt-6 opacity-80 font-body leading-relaxed max-w-2xl">
                How do we design a meeting experience that remains useful, understandable, and trustworthy despite unstable inputs and imperfect outputs?
              </p>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          </motion.div>
        </section>

        {/* Design principles */}
        <section className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto mb-16">
          <motion.div {...fade}>
            <span className="inline-block text-[11px] uppercase tracking-[0.25em] font-body font-medium text-muted-foreground mb-5">
              Design Principles
            </span>
          </motion.div>
          <motion.div {...fade} className="space-y-4">
            {[
              { title: "Prioritize clarity over technical sophistication", desc: "If a behavior felt visually impressive but made the meeting harder to follow, it was not the right solution." },
              { title: "Make transitions feel natural", desc: "Because people move and detections change, transitions needed to feel stable rather than jumpy or distracting." },
              { title: "Preserve trust when the system is uncertain", desc: "The UX needed sensible fallbacks and behavior that did not overstate confidence." },
              { title: "Optimize for remote participant comprehension", desc: "The primary goal was to help remote attendees better understand who is in the room and what is happening." },
              { title: "Design for variability, not ideal conditions", desc: "The system had to be resilient across a wide range of customer realities, not just controlled demos." },
            ].map((item) => (
              <motion.div
                key={item.title}
                {...fade}
                className="bg-card rounded-2xl border border-border p-6 md:p-8"
              >
                <h4 className="text-base font-body font-medium text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Grid view image */}
        <section className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto mt-12 mb-16">
          <motion.div {...fade} className="rounded-2xl overflow-hidden bg-muted">
            <img src={imageGridView} alt="IntelliFrame grid view" className="w-full object-cover" />
          </motion.div>
        </section>

        <article className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto">
          <Divider />

          {/* ─── SOLUTION ─── */}
          <SectionTag>Solution</SectionTag>
          <SectionTitle>A behavioral framework, not a static spec.</SectionTitle>
          <Paragraph>
            Rather than designing for an ideal room, <Bold>the focus was on building a UX framework that could adapt across many environments.</Bold> That meant defining behavioral rules — how the system should respond to room variation, participant movement, hardware differences, and changing AI confidence — rather than specifying a single static layout.
          </Paragraph>
          <Paragraph>
            The deliverable wasn't a screen. It was a <Bold>set of UX guidelines that defined how the system should behave across conditions</Bold> — covering template logic, participant event handling, transition rules, and fallback states. Designed to adapt, not to assume a perfect environment.
          </Paragraph>
        </article>

        {/* Core solution areas */}
        <section className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto mb-16">
          <div className="space-y-10">
            {[
              { num: "01", title: "Template logic for different room conditions", desc: "The experience needed different layout behaviors depending on how many people were present, how they were positioned, and what the system could confidently interpret. Designing this meant thinking in systems rather than single screens." },
              { num: "02", title: "Event handling for dynamic participant behavior", desc: "The UX needed clear rules for what should happen when people entered the frame, moved, overlapped, turned away, or otherwise changed the visual scene." },
              { num: "03", title: "Transitions that preserved continuity", desc: "Because system outputs could shift moment to moment, transitions needed to feel stable and understandable rather than abrupt. This was critical for trust and usability." },
              { num: "04", title: "Tooling and review workflows", desc: "A meaningful part of the solution involved enabling better review and evaluation of generated results. Internal labeling and analysis workflows helped the team identify repeated patterns and shape design decisions more systematically." },
              { num: "05", title: "Explainability and onboarding for post-launch", desc: "As the feature matured, the experience also needed clearer ways to help users understand what Cloud IntelliFrame was doing, when it appeared, and what value it added." },
            ].map((item) => (
              <motion.div
                key={item.num}
                {...fade}
                className="flex gap-5"
              >
                <span className="text-sm font-body font-medium text-foreground/30 mt-0.5 shrink-0">{item.num}</span>
                <div>
                  <h4 className="text-base md:text-lg font-body font-medium mb-2 text-foreground">{item.title}</h4>
                  <p className="text-base text-muted-foreground font-body leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Design tension callout */}
        <section className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto mb-16">
          <motion.div
            {...fade}
            className="bg-card rounded-2xl border border-border p-8 md:p-12"
          >
            <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground font-body block mb-4">
              Example Design Tension
            </span>
            <h4 className="text-lg md:text-xl font-body font-medium text-foreground mb-4">
              Balancing intelligence with trust
            </h4>
            <p className="text-base text-muted-foreground font-body leading-relaxed mb-4">
              A more aggressive framing strategy could make the feature feel more dynamic and impressive in ideal conditions. But in real meetings, that same behavior could feel unstable if people moved frequently or if the system's confidence changed.
            </p>
            <p className="text-base text-muted-foreground font-body leading-relaxed">
              <Bold>The best UX decision was not always the most technically ambitious one.</Bold> It was the one that helped people follow the meeting naturally.
            </p>
          </motion.div>
        </section>

        {/* Project image */}
        <section className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto mt-12 mb-16">
          <motion.div {...fade} className="rounded-2xl overflow-hidden bg-muted">
            <img src={projectImage} alt="IntelliFrame project overview" className="w-full object-cover" />
          </motion.div>
        </section>

        <article className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto">
          <Divider />

          {/* ─── IMPACT & REFLECTION ─── */}
          <SectionTag>Impact & Reflection</SectionTag>
          <SectionTitle>From ambiguous capability to shipped product.</SectionTitle>
          <Paragraph>
            IntelliFrame went from an open-ended AI experiment to a structured, shippable experience inside Microsoft Teams — with a UX system that could support continued iteration after launch. Lead product designer from early exploration through post-GA, the primary contribution was <Bold>turning a technically complex, uncertain system into a design problem the team could reason about and ship.</Bold>
          </Paragraph>
        </article>

        <section className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto mb-16">
          <motion.div {...fade} className="space-y-3">
            {[
              "Translated complex AI behavior into clearer product decisions",
              "Created reusable UX guidelines for templates, states, and transitions",
              "Established workflows for evaluating probabilistic output systematically",
              "Supported launch readiness and post-GA iteration",
              "Improved hybrid meeting experience by making in-room presence more legible",
              "Authored UX guidelines across three spec iterations",
              "Owned post-launch onboarding and explainability design",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-card border border-border rounded-xl p-4">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span className="text-sm font-body text-foreground">{item}</span>
              </div>
            ))}
          </motion.div>
        </section>

        <article className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto">
          <Paragraph>
            IntelliFrame made clear that <Bold>AI product design isn't about specifying a perfect screen — it's about defining how the system should behave across conditions you can't fully control.</Bold> Guidelines, evaluation frameworks, and shared decision principles were just as important as any visible UI.
          </Paragraph>
          <Paragraph>
            It also sharpened a conviction that trust in AI isn't earned through technical accuracy. It's earned through consistency, predictability, and an experience that feels appropriate even when the output is imperfect.
          </Paragraph>

          <Divider />

          {/* ─── KEY INSIGHTS ─── */}
          <SectionTag>Key Insights</SectionTag>
          <SectionTitle>What the research made clear.</SectionTitle>
        </article>

        <section className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto mb-16">
          <div className="space-y-10">
            {[
              { num: "01", icon: Zap, title: "Technical quality ≠ good experience", desc: "Even when detection worked well, the UX still needed rules for transitions, layout fallbacks, and edge states. A technically impressive system could still feel broken if the behavior was unpredictable." },
              { num: "02", icon: Monitor, title: "Designing for the median, not the ideal", desc: "The solution had to hold across imperfect rooms, mixed hardware, and messy real-world meetings — not just the controlled demo scenario." },
              { num: "03", icon: Shield, title: "Trust comes from behavior, not accuracy", desc: "Users judge AI by whether it feels stable and understandable — not whether it's technically correct. Perception of reliability mattered as much as actual reliability." },
            ].map((item) => (
              <motion.div
                key={item.num}
                {...fade}
                className="flex gap-5"
              >
                <div className="shrink-0 flex flex-col items-center gap-2 pt-1">
                  <span className="text-xs font-body text-muted-foreground/40">{item.num}</span>
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                    <item.icon size={20} className="text-foreground" />
                  </div>
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-body font-medium mb-2 text-foreground">{item.title}</h4>
                  <p className="text-base text-muted-foreground font-body leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <article className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto">
          <div className="h-24" />
        </article>
      </CaseStudyLayout>
    </>
  );
};

export default CaseStudyIntelliframe;
