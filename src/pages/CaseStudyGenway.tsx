import { motion } from "framer-motion";
import { Lightbulb, Clock, Target } from "lucide-react";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import CustomCursor from "@/components/CustomCursor";
import genwayLogo from "@/assets/logo-genway.svg";
import genwayTeaser from "@/assets/720p_teaserGenway.mp4";
import genwayLanding from "@/assets/genway-landing.jpg";
import genwayConference from "@/assets/genway-conference.jpg";
import genwayInterview from "@/assets/genway-interview.jpg";
import genwayInsights from "@/assets/genway-insights.jpg";
import genwayFunnel from "@/assets/genway-funnel.svg";
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
        <section className="px-6 md:px-12 lg:px-20 max-w-[1200px] mx-auto pt-12 md:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <img src={genwayLogo} alt="Genway logo" className="h-6 md:h-7 w-auto" />
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-body font-light leading-[1.1] max-w-4xl">
              Designing the First Experience of{" "}
              <span className="font-body">AI Research Platform</span>
            </h1>
          </motion.div>
        </section>

        {/* ─── 1. CONTEXT ─── */}
        <section className="px-6 md:px-12 lg:px-20 max-w-[1200px] mx-auto mt-16">
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
        </article>

        {/* Teaser video */}
        <section className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto my-12 md:my-16">
          <motion.div {...fade} className="relative overflow-hidden rounded-2xl md:rounded-3xl">
            <video
              src={genwayTeaser}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 rounded-2xl md:rounded-3xl ring-1 ring-inset ring-foreground/5 pointer-events-none" />
          </motion.div>
        </section>

        <article className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto">
          <Divider />

          {/* ─── 2. PROBLEM ─── */}
          <SectionTag>Problem</SectionTag>
          <SectionTitle>New users created projects, but too few ever published them.</SectionTitle>
          <Paragraph>
            The funnel made the real issue clear: <Bold>activation was breaking between project creation and publishing.</Bold> Users were curious enough to start, but the experience wasn't helping them build enough confidence to launch their first real study. That gap dragged conversion down and limited adoption at the most important moment.
          </Paragraph>
          <Paragraph>
            The product team's initial instinct was pragmatic: <Bold>increase the number of people who create a project, and the number of people who publish should rise with it.</Bold> More people creating projects would naturally mean more people reaching publish. It was a simple, fast hypothesis and a reasonable place to start.
          </Paragraph>

          <SectionImage
            src={genwayFunnel}
            alt="Funnel chart showing a large drop-off between project creation and publish project"
            caption="Conversion data showed the biggest drop happened before users published their first project"
          />

          <Divider />

          {/* ─── 3. RESEARCH & INSIGHTS ─── */}
          <SectionTag>Research & Insights</SectionTag>
          <SectionTitle>AI moderated research was a new concept for most users.</SectionTitle>
          <Paragraph>
            To understand why people were stalling, I kept the research simple and practical. I combined <Bold>direct conversations with potential users in the field</Bold> and <Bold>product data showing where people dropped off</Bold>.
          </Paragraph>
          <motion.div {...fade} className="my-10">
            <div className="space-y-4">
              {[
                "Talking to stakeholders across product, sales, and the wider team to understand what they believed was blocking adoption.",
                "Running field research at conferences by speaking directly with potential customers and users at the booth.",
                "Analyzing product data after project creation, including drop-off points, churn patterns, heatmaps, and cursor trails to see where users struggled next.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground/70 mt-2.5 shrink-0" />
                  <p className="text-base md:text-lg text-muted-foreground font-body leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <SectionImage
            src={genwayConference}
            alt="Conference booth where Genway met potential customers and users"
            caption="Field research at conferences helped uncover how potential customers first reacted to the product"
          />

          <Paragraph>
            Together, the qualitative conversations and the quantitative data pointed to the same conclusion: <Bold>the challenge was not just onboarding friction inside the product.</Bold> People first needed enough clarity and trust to even want to start a project.
          </Paragraph>

          <motion.div {...fade}>
            <span className="inline-block text-[11px] uppercase tracking-[0.25em] font-body font-medium text-muted-foreground mb-8">
              Key Findings
            </span>
          </motion.div>
          <div className="space-y-10">
            {[
              { num: "01", icon: Lightbulb, title: "Users didn't understand the category", desc: "'AI-moderated research' lacked a familiar mental model. People had no reference point for what the product does or how it differs from traditional survey tools." },
              { num: "02", icon: Clock, title: "The product asked for commitment too early", desc: "Users were required to sign up → configure a full project → then see value. This created friction between curiosity and experimentation." },
              { num: "03", icon: Target, title: "Different personas encounter the product first in different places", desc: "Researchers discover it at conferences. Participants meet the AI interviewer. Stakeholders receive insight reports. Each entry point needed to build trust independently." },
            ].map((item) => (
              <motion.div
                key={item.num}
                {...fade}
                className="flex gap-5"
              >
                <div className="shrink-0 flex flex-col items-center gap-2 pt-1">
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
        </article>

        {/* Reframing callout — dark block */}
        <section className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto mt-12 md:mt-16 mb-10 md:mb-12">
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
          <Paragraph>
            I recommended stepping back and looking at the bigger system: <Bold>who are the people who eventually create a project, where do they first encounter the platform, and what shapes their willingness to start at all?</Bold> Instead of only trying to push more users through project creation, we focused on improving the entry points that make someone want to create a project in the first place.
          </Paragraph>

          <motion.div {...fade} className="my-8 space-y-3">
            {[
              { title: "Discovering", desc: "Explain the category instantly — visual identity at conferences" },
              { title: "Creating", desc: "Teach the concept, reduce commitment — landing page with interactive AI preview" },
              { title: "Participating", desc: "Build participant trust — redesigned interview lobby" },
              { title: "Receiving", desc: "Communicate value to stakeholders — clearer insight summaries" },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground/50 mt-2.5 shrink-0" />
                <p className="text-base text-muted-foreground font-body leading-relaxed">
                  <span className="text-foreground font-medium">{item.title} — </span>{item.desc}
                </p>
              </div>
            ))}
          </motion.div>

          <Divider />

          {/* ─── 5. SOLUTIONS ─── */}
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
                <span className="text-2xl md:text-3xl font-body text-primary block mb-2">{item.metric}</span>
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
              <span className="font-body text-2xl md:text-3xl block mt-4">
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
