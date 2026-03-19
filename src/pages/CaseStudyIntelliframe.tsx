import { motion } from "framer-motion";
import { Video, Users, Eye, MessageSquare, Monitor, Layers, Shield, Zap, Settings } from "lucide-react";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import CustomCursor from "@/components/CustomCursor";
import logoMicrosoft from "@/assets/logo-microsoft.png";
import logoTeams from "@/assets/logo-teams.svg";

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
        <section className="px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto pt-12 md:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <img src={logoTeams} alt="Microsoft Teams logo" className="h-8 md:h-10 dark:invert" />
              <img src={logoMicrosoft} alt="Microsoft logo" className="h-6 md:h-7" />
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-body font-light leading-[1.1] mb-6 max-w-4xl">
              Designing Cloud{" "}
              <span className="font-display italic">IntelliFrame</span>{" "}
              for Microsoft Teams
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-body max-w-2xl leading-relaxed">
              Turning unpredictable room video into a natural hybrid meeting experience at scale.
            </p>
          </motion.div>
        </section>

        {/* ─── CONTEXT ─── */}
        <section className="px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto mt-16">
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
          {/* Overview */}
          <SectionTitle>Overview</SectionTitle>
          <Paragraph>
            Cloud IntelliFrame is an AI-powered feature for Microsoft Teams that helps remote participants better see and follow people in shared meeting rooms. Instead of showing the room as one distant wide shot, <Bold>the system identifies in-room participants and presents them more clearly as individual framed people</Bold> within the meeting experience.
          </Paragraph>
          <Paragraph>
            When I worked on the product, the challenge was not simply to design a new visual layout. The deeper problem was how to translate probabilistic computer vision and highly variable physical environments into a meeting experience that felt clear, useful, and trustworthy at mass-market scale.
          </Paragraph>
          <Paragraph>
            Hybrid meetings are inherently uneven. People joining remotely often struggle to read the room, understand who is present, or follow the conversation naturally. Cloud IntelliFrame aimed to reduce that gap — but making that possible required much more than detecting faces and placing them into tiles.
          </Paragraph>

          <Divider />

          {/* ─── PROBLEM ─── */}
          <SectionTag>Problem</SectionTag>
          <SectionTitle>It's not simply "cutting" faces into tiles.</SectionTitle>
          <Paragraph>
            At first glance, Cloud IntelliFrame can look like a straightforward AI feature: find faces in a room feed, crop them, and display them individually. In practice, <Bold>the UX challenge was far more complex.</Bold>
          </Paragraph>
          <Paragraph>
            Room behavior is unpredictable. People move, turn away, overlap one another, enter and leave the frame, or sit in positions that are difficult to detect consistently. Rooms vary widely in size, layout, lighting, seating arrangements, and hardware quality. Different cameras produce different visual inputs. Meeting sizes vary. And because the underlying system is AI-driven, results are probabilistic rather than perfectly deterministic.
          </Paragraph>
          <Paragraph>
            The real design challenge was to create a user experience that could <Bold>absorb all of that variability while still feeling coherent and natural</Bold> to end users.
          </Paragraph>
        </article>

        {/* Key problems */}
        <section className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto mb-16">
          <motion.div {...fade}>
            <span className="inline-block text-[11px] uppercase tracking-[0.25em] font-body font-medium text-muted-foreground mb-5">
              Key Problems
            </span>
          </motion.div>
          <div className="space-y-10">
            {[
              { num: "01", icon: Users, title: "Room behavior is unpredictable", desc: "People move — they are not static images. Natural behavior creates constant edge cases for AI detection." },
              { num: "02", icon: Monitor, title: "Hardware variability affects reliability", desc: "Different camera devices and hardware setups produce different visual inputs, changing the quality of the output." },
              { num: "03", icon: Layers, title: "Room types create different conditions", desc: "Room geometry, furniture, participant placement, lighting, and seating all change what the system can reliably interpret." },
              { num: "04", icon: Video, title: "Meeting size changes representation needs", desc: "The way people should be represented depends on how many participants are present and how they are positioned." },
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
          <Divider />

          {/* ─── RESEARCH & CONSTRAINTS ─── */}
          <SectionTag>Research & Constraints</SectionTag>
          <SectionTitle>Designing for a moving target.</SectionTitle>
          <Paragraph>
            Because the technology and UX were evolving in parallel, this project required an agile and highly collaborative design process. Early in the work, there was no fully working pipeline, usable data was limited, and many questions were still open about what the system could reliably do.
          </Paragraph>
          <Paragraph>
            That meant the design process could not begin with a polished end-state interface. Instead, <Bold>I worked closely with engineering, research, and stakeholders</Bold> to understand the system's capabilities, identify its constraints, and shape the UX as the product matured.
          </Paragraph>
        </article>

        {/* Methods grid */}
        <section className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto mb-16">
          <motion.div {...fade}>
            <span className="inline-block text-[11px] uppercase tracking-[0.25em] font-body font-medium text-muted-foreground mb-5">
              Methods
            </span>
          </motion.div>
          <motion.div
            {...fade}
            className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border rounded-2xl overflow-hidden"
          >
            {[
              { icon: Settings, method: "Engineering partnership", detail: "Close collaboration with teams building the composer pipeline" },
              { icon: Users, method: "Stakeholder alignment", detail: "Technical education and alignment on AI capabilities and limitations" },
              { icon: Video, method: "Data collection sessions", detail: "Across varied room conditions to generate representative inputs" },
              { icon: Eye, method: "Qualitative UX analysis", detail: "Reviewed generated outputs through internal tools and bug-bash sessions" },
              { icon: MessageSquare, method: "User studies & interviews", detail: "Conducted user studies, interviews, and competitive analysis" },
              { icon: Monitor, method: "Quantitative analysis", detail: "Experiments dashboards and quantitative evaluation of patterns" },
            ].map((item) => (
              <div key={item.method} className="bg-background p-8 flex flex-col gap-4 hover:bg-muted/50 transition-colors">
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
          <Paragraph>
            Unlike most digital product flows, the input environment here was not stable. The system depended on real-world spaces, real-time behavior, and AI interpretation. <Bold>That changed the role of design.</Bold> Instead of defining one fixed screen behavior, I had to help define a flexible behavioral system that could perform across many possible scenarios.
          </Paragraph>

          <Divider />

          {/* ─── KEY INSIGHTS ─── */}
          <SectionTag>Key Insights</SectionTag>
          <SectionTitle>Understanding the real UX challenge.</SectionTitle>
          <Paragraph>
            As we moved from early exploration into a more functional pipeline, several patterns became clear.
          </Paragraph>
        </article>

        <section className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto mb-16">
          <div className="space-y-10">
            {[
              { num: "01", icon: Layers, title: "The input environment was inherently unstable", desc: "This was not a controlled UI environment. Room geometry, furniture, participant placement, lighting, and hardware all changed the quality of the output." },
              { num: "02", icon: Users, title: "Human behavior created constant edge cases", desc: "People in meeting rooms do not behave like neat training examples. They move naturally, partially occlude one another, lean in and out, and create ambiguous visual moments constantly." },
              { num: "03", icon: Zap, title: "AI quality alone would not solve the experience", desc: "Even when the detection and framing worked reasonably well, the UX still needed rules for transitions, layout behavior, and fallbacks. A technically impressive system could still feel confusing if the experience was unstable." },
              { num: "04", icon: Monitor, title: "Mass-market scale raised the bar", desc: "The solution could not be optimized for one ideal room or one premium setup. It had to work well enough across a broad range of customer environments, including imperfect ones." },
              { num: "05", icon: Shield, title: "Trust depends on behavior, not just accuracy", desc: "Users do not judge AI systems only by whether they are technically correct. They judge them by whether the experience feels understandable, stable, and appropriate in context." },
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

        <article className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto">
          <Divider />

          {/* ─── STRATEGY ─── */}
          <SectionTag>Strategy</SectionTag>
          <SectionTitle>A flexible UX system for an unpredictable environment.</SectionTitle>
          <Paragraph>
            Rather than designing a one-size-fits-all visual treatment for a perfect room setup, <Bold>I focused on shaping a UX framework that could adapt intelligently across many environments.</Bold>
          </Paragraph>
          <Paragraph>
            The strategy was to define principles and behavioral rules for how the system should respond to variation — across room layouts, hardware conditions, meeting states, and confidence levels in the AI output.
          </Paragraph>
        </article>

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

        <article className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto">
          <Divider />

          {/* ─── PROCESS ─── */}
          <SectionTag>Process</SectionTag>
          <SectionTitle>Agile UX development alongside evolving technology.</SectionTitle>
          <Paragraph>
            A large part of the project's complexity came from the fact that the design process evolved with the technical maturity of the system.
          </Paragraph>
        </article>

        {/* Phase cards */}
        <section className="px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto my-12">
          <motion.div
            {...fade}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                num: "01",
                title: "Early Exploration",
                desc: "Engineering was still building the composer pipeline. Limited data, no stable end-to-end experience.",
                contributions: [
                  "AI and technical education with stakeholders",
                  "Data collection sessions for representative inputs",
                  "Early concept creation including cardboard puppet testing",
                  "Gallery template direction exploration",
                  "User studies, interviews, and competitive analysis",
                  "Delivery of initial UX guideline spec",
                ],
              },
              {
                num: "02",
                title: "Working Pipeline",
                desc: "Functional pipeline existed. Shifted from speculation to evaluation with large amounts of generated data.",
                contributions: [
                  "Prioritized key UX pain points",
                  "Custom Gallery Tagger tool for labeling data",
                  "Qualitative UX analysis using collated video",
                  "Quantitative analysis through experiments dashboards",
                  "Continued user studies with custom ImageTagger tool",
                  "Refined guidance into stronger V2 spec",
                ],
              },
              {
                num: "03",
                title: "Post-GA",
                desc: "Focus shifted to structured product growth, risk management, explainability, and discoverability.",
                contributions: [
                  "Camera onboarding and block-list flows",
                  "Explainability and discoverability improvements",
                  "Ongoing qualitative and quantitative analysis",
                  "Continued user studies and tool refinement",
                  "Design guidance improved to V3 spec",
                ],
              },
            ].map((phase) => (
              <div key={phase.num} className="bg-card rounded-2xl p-8 border border-border flex flex-col">
                <span className="text-5xl font-display italic text-foreground/10 block mb-4">{phase.num}</span>
                <h4 className="text-lg font-body font-medium mb-2 text-foreground">{phase.title}</h4>
                <p className="text-xs text-muted-foreground font-body mb-6 leading-relaxed">{phase.desc}</p>
                <div className="pt-4 border-t border-border space-y-2 mt-auto">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-body block mb-2">
                    Contributions
                  </span>
                  {phase.contributions.map((c) => (
                    <div key={c} className="flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-xs font-body text-foreground/80">{c}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </section>

        <article className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto">
          <Divider />

          {/* ─── SOLUTION ─── */}
          <SectionTag>Solution</SectionTag>
          <SectionTitle>Building rules, not a single layout.</SectionTitle>
          <Paragraph>
            The outcome of the work was not one static screen design. It was a <Bold>UX framework that could help the system behave intelligently across dynamic real-world conditions.</Bold>
          </Paragraph>
          <Paragraph>
            I helped define a set of UX guidelines covering template logic, event handling, interactive states, and transitions — all designed to adapt to room variability, participant behavior, and hardware differences.
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

        <article className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto">
          <Divider />

          {/* ─── IMPACT ─── */}
          <SectionTag>Impact</SectionTag>
          <SectionTitle>Translating technical ambiguity into a productized experience.</SectionTitle>
          <Paragraph>
            Cloud IntelliFrame moved from an ambiguous technical capability to a structured UX system that could support productization and continued iteration inside Microsoft Teams.
          </Paragraph>
        </article>

        <section className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto mb-16">
          <motion.div {...fade} className="space-y-3">
            {[
              "Translated complex AI behavior into clearer product decisions",
              "Created reusable UX guidelines for templates, states, and transitions",
              "Established workflows for evaluating probabilistic output more systematically",
              "Supported launch readiness and post-GA iteration",
              "Improved hybrid meeting experience by making in-room presence more legible and human-centered",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-card border border-border rounded-xl p-4">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span className="text-sm font-body text-foreground">{item}</span>
              </div>
            ))}
          </motion.div>
        </section>

        <section className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto mb-16">
          <motion.div
            {...fade}
            className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12"
          >
            <p className="text-lg md:text-xl font-body font-light leading-relaxed text-center">
              Where many AI projects stay at the level of technical possibility, this work focused on
              <span className="font-display italic text-2xl md:text-3xl block mt-4">
                what it takes to make that capability usable at scale.
              </span>
            </p>
          </motion.div>
        </section>

        <article className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto">
          <Divider />

          {/* ─── MY ROLE ─── */}
          <SectionTag>My Role</SectionTag>
          <SectionTitle>Strategy, systems thinking, and hands-on design.</SectionTitle>
          <Paragraph>
            I worked across strategy and execution, helping define how the product should behave while staying deeply involved in the practical design process.
          </Paragraph>

          <motion.div {...fade} className="my-8 grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              "Defined the UX framing beyond the raw AI capability",
              "Partnered closely with engineering and research teams",
              "Drove early concept exploration and stakeholder alignment",
              "Led qualitative review of generated outputs and pain points",
              "Shaped UX guidelines for templates, transitions, and edge cases",
              "Contributed to experimentation and post-launch refinement",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-card border border-border rounded-xl p-4">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span className="text-sm font-body text-foreground">{item}</span>
              </div>
            ))}
          </motion.div>

          <Paragraph>
            <Bold>A large part of my value on this project was helping turn a technically complex system into a design problem the team could reason about together.</Bold>
          </Paragraph>

          <Divider />

          {/* ─── REFLECTION ─── */}
          <SectionTag>Reflection</SectionTag>
          <SectionTitle>What I learned.</SectionTitle>
          <Paragraph>
            This project reinforced that <Bold>designing AI experiences is often less about specifying one perfect interface</Bold> and more about defining behaviors, guardrails, and fallback logic for uncertain conditions.
          </Paragraph>
          <Paragraph>
            It also showed me that design can create leverage far beyond screens. In a system like Cloud IntelliFrame, <Bold>guidelines, evaluation frameworks, and shared decision principles were just as important as the visible interface itself.</Bold>
          </Paragraph>
          <Paragraph>
            Most importantly, I learned that trust in AI products is not created by technical intelligence alone. It comes from making the system's behavior feel stable, understandable, and appropriate in context.
          </Paragraph>
          <Paragraph>
            That lesson continues to shape how I approach AI product design today.
          </Paragraph>

          <div className="h-24" />
        </article>
      </CaseStudyLayout>
    </>
  );
};

export default CaseStudyIntelliframe;
