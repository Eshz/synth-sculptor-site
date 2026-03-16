import { motion } from "framer-motion";
import { BarChart3, Users, Eye, MessageSquare, Lightbulb, Clock, Target } from "lucide-react";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import CustomCursor from "@/components/CustomCursor";
import genwayLogo from "@/assets/logo-genway.svg";
import genwayLanding from "@/assets/genway-landing.jpg";
import genwayConference from "@/assets/genway-conference.jpg";
import genwayInterview from "@/assets/genway-interview.jpg";
import genwayInsights from "@/assets/genway-insights.jpg";

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

const SectionImage = ({ src, alt, caption }: { src: string; alt: string; caption?: string }) => (
  <motion.figure {...fade} className="my-12 md:my-20">
    <div className="relative overflow-hidden rounded-2xl md:rounded-3xl">
      <img src={src} alt={alt} className="w-full h-auto object-cover" loading="lazy" />
      <div className="absolute inset-0 rounded-2xl md:rounded-3xl ring-1 ring-inset ring-foreground/5" />
    </div>
    {caption && (
      <figcaption className="mt-4 text-xs text-muted-foreground font-body tracking-wide text-center">
        {caption}
      </figcaption>
    )}
  </motion.figure>
);

const Divider = () => <hr className="border-border my-14 md:my-20" />;

const InsightCard = ({ title, description }: { title: string; description: string }) => (
  <motion.div {...fade} className="bg-card rounded-2xl border border-border p-6 md:p-8">
    <h4 className="text-base font-body font-medium text-foreground mb-2">{title}</h4>
    <p className="text-sm text-muted-foreground font-body leading-relaxed">{description}</p>
  </motion.div>
);

const CaseStudyGenway = () => {
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
            <img src={genwayLogo} alt="Genway logo" className="h-8 md:h-10 mb-8" />
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-body font-light leading-[1.1] mb-6 max-w-4xl">
              Designing the First Experience of{" "}
              <span className="font-display italic">AI-Moderated Research</span>
            </h1>
          </motion.div>
        </section>

        {/* ─── 1. CONTEXT ─── */}
        <section className="px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto mt-16">
          <motion.div {...fade}>
            <SectionTag>Context</SectionTag>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-border mt-2">
              {[
                { label: "Role", values: ["Head of Product Design"] },
                { label: "Company", values: ["Genway"] },
                { label: "Focus", values: ["Onboarding", "Adoption", "Visual Identity"] },
                { label: "Scope", values: ["End-to-end Experience"] },
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
            Genway is an AI-powered research platform that conducts user interviews autonomously and generates actionable insights. When I joined as Head of Product Design, <Bold>the core technology was strong, but adoption was struggling.</Bold> Most product teams had never encountered a system that could moderate research conversations on its own.
          </Paragraph>

          <Divider />

          {/* ─── 2. PROBLEM ─── */}
          <SectionTag>Problem</SectionTag>
          <SectionTitle>AI moderated research was a new concept for most users.</SectionTitle>
          <Paragraph>
            Through product analytics, user interviews, and feedback from sales teams, we identified several barriers preventing users from adopting the platform. The core challenge wasn't the product's capability — it was that <Bold>users couldn't build a mental model of what AI-moderated research even meant</Bold> before being asked to commit.
          </Paragraph>

          <Divider />

          {/* ─── 3. RESEARCH & INSIGHTS ─── */}
          <motion.span
            {...fade}
            className="font-body text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4 block"
          >
            02 — Research & Insights
          </motion.span>
          <motion.h2
            {...fade}
            className="text-3xl md:text-5xl font-body font-medium tracking-tight leading-[1.1] mb-8 max-w-2xl"
          >
            Understanding why adoption stalled.
          </motion.h2>
          <Paragraph>
            Before jumping to solutions, I ran a focused research sprint to understand the adoption barriers across every touchpoint.
          </Paragraph>
        </article>

        {/* Methods — full width grid */}
        <section className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto mb-20">
          <motion.div {...fade} className="flex items-center gap-4 mb-8">
            <span className="font-body text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Methods</span>
            <div className="h-px flex-1 bg-border" />
          </motion.div>
          <motion.div
            {...fade}
            className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border rounded-2xl overflow-hidden"
          >
            {[
              { icon: BarChart3, method: "Product analytics", detail: "Drop-off rates, session recordings, funnel analysis" },
              { icon: Users, method: "8 user interviews", detail: "With product managers and UX researchers from target teams" },
              { icon: Eye, method: "Conference booth observations", detail: "Watching first reactions to the product in real-time" },
              { icon: MessageSquare, method: "Sales team feedback", detail: "Recurring objections and questions from prospects" },
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

        {/* Key Findings */}
        <section className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto mb-20">
          <motion.div {...fade} className="flex items-center gap-4 mb-12">
            <span className="font-body text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Key Findings</span>
            <div className="h-px flex-1 bg-border" />
          </motion.div>
          <div className="space-y-12">
            {[
              { num: "01", icon: Lightbulb, title: "Users didn't understand the category", desc: "'AI-moderated research' lacked a familiar mental model. People had no reference point for what the product does or how it differs from traditional survey tools." },
              { num: "02", icon: Clock, title: "The product asked for commitment too early", desc: "Users were required to sign up → configure a full project → then see value. This created friction between curiosity and experimentation." },
              { num: "03", icon: Target, title: "Different personas encounter the product first in different places", desc: "Researchers discover it at conferences. Participants meet the AI interviewer. Stakeholders receive insight reports. Each entry point needed to build trust independently." },
            ].map((item) => (
              <motion.div
                key={item.num}
                {...fade}
                className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-6 md:gap-12"
              >
                <div className="flex flex-col gap-4">
                  <span className="font-body text-xs text-muted-foreground/40">{item.num}</span>
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                    <item.icon size={24} className="text-foreground" />
                  </div>
                </div>
                <div className="pt-2">
                  <h4 className="text-xl md:text-2xl font-body font-medium mb-4 tracking-tight text-foreground">{item.title}</h4>
                  <p className="text-muted-foreground font-body leading-relaxed text-lg max-w-2xl">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Reframing callout — dark block */}
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
                Onboarding wasn't a single flow to optimize — it was a{" "}
                <span className="opacity-60 italic">network of first encounters</span>, each needing to independently build understanding and trust.
              </p>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          </motion.div>
        </section>

        <article className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto">
          <Divider />

          {/* ─── 4. STRATEGY ─── */}
          <SectionTag>Strategy</SectionTag>
          <SectionTitle>A network of first encounters, not a single flow.</SectionTitle>
          <Paragraph>
            The traditional approach would have been to optimize the product's onboarding wizard. But our research showed the problem was upstream — <Bold>users were dropping off before they ever reached the product.</Bold>
          </Paragraph>

          <motion.div
            {...fade}
            className="my-10 bg-card border border-border rounded-2xl p-6 md:p-8"
          >
            <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground font-body block mb-4">
              Design principle
            </span>
            <p className="text-lg md:text-xl font-body font-medium text-foreground leading-relaxed">
              Instead of optimizing a single onboarding flow, we optimized each first encounter with the product — ensuring every entry point independently builds understanding and trust.
            </p>
          </motion.div>

          <Paragraph>
            This principle had clear implications for every touchpoint:
          </Paragraph>
        </article>

        {/* Touchpoints grid — tied to solutions */}
        <section className="px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto my-12">
          <motion.div
            {...fade}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { num: "01", title: "Discovering", goal: "Explain the category instantly", solution: "Visual identity at conferences", desc: "Conference booth, marketing materials" },
              { num: "02", title: "Creating", goal: "Teach the concept, reduce commitment", solution: "Landing page + GPT preview", desc: "Landing page, interactive preview" },
              { num: "03", title: "Participating", goal: "Build participant trust", solution: "Interview lobby redesign", desc: "AI interview experience" },
              { num: "04", title: "Receiving", goal: "Communicate value to stakeholders", solution: "Insight summary redesign", desc: "Analysis reports, email delivery" },
            ].map((item) => (
              <div key={item.num} className="bg-card rounded-2xl p-8 border border-border">
                <span className="text-5xl font-display italic text-foreground/10 block mb-4">{item.num}</span>
                <h4 className="text-lg font-body font-medium mb-1 text-foreground">{item.title}</h4>
                <p className="text-xs text-muted-foreground font-body mb-3">{item.desc}</p>
                <div className="pt-3 border-t border-border">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-body block mb-1">Goal</span>
                  <p className="text-sm text-foreground font-body font-medium">{item.goal}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </section>

        {/* Journey map */}
        <section className="px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto my-12">
          <motion.div {...fade} className="bg-card border border-border rounded-2xl p-6 md:p-10 overflow-x-auto">
            <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground font-body block mb-6">
              User journey map
            </span>
            <div className="flex items-start gap-0 min-w-[600px]">
              {[
                { stage: "Conference", outcome: "Category awareness" },
                { stage: "Landing Page", outcome: "Concept understanding" },
                { stage: "Product Creation", outcome: "First success" },
                { stage: "AI Interview", outcome: "Participant trust" },
                { stage: "Insights Delivery", outcome: "Value demonstration" },
              ].map((item, i, arr) => (
                <div key={item.stage} className="flex items-start flex-1">
                  <div className="flex flex-col items-center text-center flex-1">
                    <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-3">
                      <span className="text-xs font-body font-medium text-primary">{i + 1}</span>
                    </div>
                    <span className="text-sm font-body font-medium text-foreground mb-1">{item.stage}</span>
                    <span className="text-xs text-muted-foreground font-body">{item.outcome}</span>
                  </div>
                  {i < arr.length - 1 && (
                    <div className="flex items-center pt-5 px-1">
                      <div className="w-8 h-px bg-border" />
                      <div className="w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[6px] border-l-border" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <article className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto">
          <Divider />

          {/* ─── 5. EXPLORATION ─── */}
          <SectionTag>Exploration</SectionTag>
          <SectionTitle>Testing ways to explain AI research.</SectionTitle>
          <Paragraph>
            Before landing on the final solutions, we explored multiple directions for the most critical challenge: <Bold>how to explain a new product category to someone who's never seen it.</Bold>
          </Paragraph>

          <motion.div {...fade} className="my-8">
            <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground font-body block mb-4">
              Directions explored
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { direction: "Explainer video", outcome: "High production cost, passive experience", selected: false },
                { direction: "Static landing page", outcome: "Low engagement, didn't convey the AI interaction", selected: false },
                { direction: "Interactive prompt", outcome: "Users experience the product before signing up", selected: true },
                { direction: "Guided wizard", outcome: "Too much commitment before showing value", selected: false },
              ].map((item) => (
                <div
                  key={item.direction}
                  className={`rounded-xl border p-5 ${
                    item.selected
                      ? "bg-primary/5 border-primary/20"
                      : "bg-card border-border"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-body font-medium text-foreground">{item.direction}</span>
                    {item.selected && (
                      <span className="text-[9px] uppercase tracking-[0.2em] font-body font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                        Selected
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-muted-foreground font-body">{item.outcome}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <Paragraph>
            The interactive prompt won because it solved the core problem: <Bold>letting users experience AI research before understanding or committing to it.</Bold> This insight shaped both the landing page and in-product onboarding.
          </Paragraph>

          <Divider />

          {/* ─── 6. SOLUTIONS ─── */}
          <SectionTag>Solution — 01 Discovering</SectionTag>
          <SectionTitle>Making AI research approachable at first glance.</SectionTitle>
          <Paragraph>
            At industry conferences, Genway needed to communicate a completely new category in seconds. <Bold>I designed a visual language focused on conversational intelligence, human-AI collaboration, and insights emerging from conversations.</Bold>
          </Paragraph>
        </article>

        <section className="px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto">
          <SectionImage
            src={genwayConference}
            alt="Conference booth design showcasing AI research platform"
            caption="Visual identity designed for conferences — making AI research approachable at first glance"
          />
        </section>

        <article className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto">
          <Divider />

          <SectionTag>Solution — 02 Creating</SectionTag>
          <SectionTitle>Turning the landing page into a product experience.</SectionTitle>
          <Paragraph>
            The landing page originally described the product but did little to help users understand how it worked. <Bold>I redesigned the page as a narrative experience</Bold> guiding users through the concept step by step.
          </Paragraph>

          {/* Landing page narrative flow */}
          <motion.div {...fade} className="my-8">
            <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground font-body block mb-4">
              Information architecture
            </span>
            <div className="space-y-3">
              {[
                { step: "1", label: "Problem", desc: "Why traditional research is slow and expensive" },
                { step: "2", label: "How it works", desc: "AI conducts moderated interviews autonomously" },
                { step: "3", label: "Generated insights", desc: "Real example of analysis output" },
                { step: "4", label: "Try the AI", desc: "Interactive GPT prompt — experience before signing up" },
                { step: "5", label: "Start a project", desc: "Low-friction signup after understanding the value" },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-4 bg-card border border-border rounded-xl p-4">
                  <span className="text-xs font-body font-medium text-muted-foreground mt-0.5 shrink-0 w-5">{item.step}</span>
                  <div>
                    <span className="text-sm font-body font-medium text-foreground">{item.label}</span>
                    <span className="text-xs text-muted-foreground font-body block mt-0.5">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </article>

        <section className="px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto">
          <SectionImage
            src={genwayLanding}
            alt="Redesigned landing page as narrative experience"
            caption="The landing page redesigned as a narrative — teaching AI research step by step"
          />
        </section>

        <article className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto">
          {/* GPT preview */}
          <SectionTitle>Let users try the AI before signing up.</SectionTitle>
          <Paragraph>
            The key innovation was embedding a GPT input field directly on the landing page. <Bold>Users type a research question and the system generates a project preview automatically</Bold> — turning the page from a static explanation into an interactive product experience.
          </Paragraph>

          <motion.div
            {...fade}
            className="my-12 bg-card rounded-2xl border border-border p-8 md:p-12"
          >
            <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground font-body block mb-4">
              Example interaction
            </span>
            <p className="text-lg md:text-xl font-body text-foreground/80 italic leading-relaxed">
              "Why are users abandoning our onboarding flow?"
            </p>
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground font-body leading-relaxed">
                The system generates a research project — including interview questions, research structure, and participant criteria — without requiring signup.
              </p>
            </div>
          </motion.div>

          <Divider />

          <SectionTag>Solution — 02 Creating (continued)</SectionTag>
          <SectionTitle>Fast first success, not complex configuration.</SectionTitle>
          <Paragraph>
            For users who did sign up, the onboarding was redesigned to prioritize speed. <Bold>Instead of configuring complex settings upfront, users follow three simple steps:</Bold>
          </Paragraph>

          <motion.div {...fade} className="my-8 space-y-4">
            {[
              { num: "01", text: "Define what they want to learn" },
              { num: "02", text: "Review AI-generated interview questions" },
              { num: "03", text: "Launch their first AI-moderated interview" },
            ].map((item) => (
              <div key={item.num} className="flex items-start gap-4">
                <span className="text-sm font-body font-medium text-foreground/30 mt-0.5">{item.num}</span>
                <span className="text-base md:text-lg text-muted-foreground font-body">{item.text}</span>
              </div>
            ))}
          </motion.div>

          <Divider />

          <SectionTag>Solution — 03 Participating</SectionTag>
          <SectionTitle>Building trust before the conversation starts.</SectionTitle>
          <Paragraph>
            For many participants, the interview lobby was their first interaction with the system. <Bold>The previous experience lacked clarity about what would happen next.</Bold> I redesigned it to clearly explain the AI process, set expectations, and reduce hesitation.
          </Paragraph>
        </article>

        <section className="px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto">
          <SectionImage
            src={genwayInterview}
            alt="AI interview interface design"
            caption="The redesigned interview lobby — clear, welcoming, and trust-building for participants"
          />
        </section>

        <article className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto">
          <Divider />

          <SectionTag>Solution — 04 Receiving</SectionTag>
          <SectionTitle>Making value clear even for first-time viewers.</SectionTitle>
          <Paragraph>
            For many stakeholders, the analysis results are the first interaction they have with Genway. <Bold>They may not have created the research project — they simply receive the insights.</Bold> I improved the structure and clarity of insight summaries and the notification emails.
          </Paragraph>
        </article>

        <section className="px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto">
          <SectionImage
            src={genwayInsights}
            alt="AI-generated research insights dashboard"
            caption="Insights delivery — making value clear for stakeholders seeing Genway for the first time"
          />
        </section>

        <article className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto">
          <Divider />

          {/* ─── 7. IMPACT ─── */}
          <SectionTag>Impact</SectionTag>
          <SectionTitle>From "I don't understand" to "I want to try this."</SectionTitle>
          <Paragraph>
            The redesigned journey measurably improved how users approach the platform:
          </Paragraph>

          <motion.div
            {...fade}
            className="my-10 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { metric: "+35%", label: "Landing page scroll depth" },
              { metric: "+22%", label: "Project creation rate" },
              { metric: "−40%", label: "Onboarding drop-off" },
              { metric: "+18%", label: "Participant completion" },
            ].map((item) => (
              <motion.div
                key={item.label}
                {...fade}
                className="bg-card border border-border rounded-2xl p-6 text-center"
              >
                <span className="text-2xl md:text-3xl font-display italic text-primary block mb-2">{item.metric}</span>
                <span className="text-xs text-muted-foreground font-body">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            {...fade}
            className="my-16 bg-primary text-primary-foreground rounded-2xl p-8 md:p-12"
          >
            <p className="text-lg md:text-xl font-body font-light leading-relaxed text-center">
              The system now helps users move from
              <span className="font-display italic text-2xl md:text-3xl block mt-4">
                "I don't understand this yet" → "I want to try this."
              </span>
            </p>
          </motion.div>

          <Divider />

          {/* ─── 8. MY ROLE ─── */}
          <SectionTag>My Role</SectionTag>
          <SectionTitle>Strategy, design, and hands-on execution.</SectionTitle>
          <Paragraph>
            As Head of Product Design at an early-stage startup, I operated across strategy and execution. <Bold>While leading the initiative, I remained deeply hands-on</Bold> — designing core flows, prototyping interactions, and working closely with engineering.
          </Paragraph>

          <motion.div {...fade} className="my-8 grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              "Defined the onboarding strategy and design principle",
              "Designed core product flows end-to-end",
              "Directed visual identity for conferences and marketing",
              "Led rapid prototyping and iteration cycles",
              "Mentored a junior designer on the team",
              "Built an internal GPT-based UX writing assistant",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-card border border-border rounded-xl p-4">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span className="text-sm font-body text-foreground">{item}</span>
              </div>
            ))}
          </motion.div>

          <Divider />

          {/* ─── 9. REFLECTION ─── */}
          <SectionTag>Reflection</SectionTag>
          <SectionTitle>What I'd approach differently.</SectionTitle>
          <Paragraph>
            <Bold>Start with participant research earlier.</Bold> We focused heavily on the researcher persona initially. Understanding the participant experience sooner would have accelerated the interview lobby redesign.
          </Paragraph>
          <Paragraph>
            <Bold>Invest more in analytics instrumentation upfront.</Bold> Some impact metrics were only trackable after we improved our event tracking mid-project. Earlier instrumentation would have given us tighter feedback loops.
          </Paragraph>
          <Paragraph>
            <Bold>Prototype the interactive preview sooner.</Bold> The GPT-based landing page preview was one of the highest-impact decisions — we should have tested this concept in week one instead of week four.
          </Paragraph>

          <div className="h-24" />
        </article>
      </CaseStudyLayout>
    </>
  );
};

export default CaseStudyGenway;
