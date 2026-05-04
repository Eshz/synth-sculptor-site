import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";
import { Lightbulb, Clock, Target } from "lucide-react";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import CustomCursor from "@/components/CustomCursor";
import genwayLogo from "@/assets/logo-genway.svg";
import genwayTeaser from "@/assets/genway/720p_teaserGenway.mp4";
import genwayFunnel from "@/assets/genway/genway-funnel.svg";
import genwayGPTLoop from "@/assets/genway/genwayGPT-loop.mp4";
import genwayCreative1 from "@/assets/genway/genway-creative-1.png";
import genwayCreative2 from "@/assets/genway/genway-creative-2.png";
import genwayCreative3 from "@/assets/genway/genway-creative-3.png";
import genwayCreative4 from "@/assets/genway/genway-creative-4.png";
import lobbyIdeation from "@/assets/genway/lobby-screen-ideation.png";
import lobbyVariations from "@/assets/genway/lobby-screen-variations.png";
import lobbyPrototypeSplit from "@/assets/genway/lobby-prototype-split.mp4";
import lobbyNew from "@/assets/genway/genway-lobby-new.png";
import lobbyNewFlowWeb from "@/assets/genway/lobby-new-flow-web.mp4";
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

const AutoPlayVideo = ({ src, className }: { src: string; className?: string }) => {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);
  return <video ref={ref} src={src} muted loop playsInline className={className} />;
};

const LightboxImage = ({ src, alt, caption }: { src: string; alt: string; caption?: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <motion.figure {...fade} className="cursor-zoom-in" onClick={() => setOpen(true)}>
        <div className="relative overflow-hidden rounded-2xl group">
          <img src={src} alt={alt} className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]" loading="lazy" />
          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-foreground/5" />
          <div className="absolute inset-0 rounded-2xl bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300" />
        </div>
        {caption && (
          <figcaption className="mt-3 text-xs text-muted-foreground font-body tracking-wide text-center">{caption}</figcaption>
        )}
      </motion.figure>
      <AnimatePresence>
        {open && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm cursor-zoom-out p-4 md:p-12"
            onClick={() => setOpen(false)}
          >
            <motion.img
              src={src}
              alt={alt}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl cursor-default"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setOpen(false)}
              className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors"
              aria-label="Close preview"
            >
              <X size={22} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

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
            <AutoPlayVideo src={genwayTeaser} className="w-full block" />
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
              { title: "Participating", desc: "Build trust with participants — redesigned interview lobby before the AI conversation starts" },
              { title: "Creating", desc: "Reduce time to value — GPT prompt in the hero that generates a ready-to-publish project instantly" },
              { title: "Discovering", desc: "Explain the category at first glance — visual identity and booth presence at conferences" },
              { title: "Receiving", desc: "Communicate value to stakeholders — clearer insight summaries for first-time viewers" },
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
          <SectionTag>Solution — 01 Participating</SectionTag>
          <SectionTitle>Building trust before the conversation starts.</SectionTitle>
          <Paragraph>
            Participants are the largest group that encounters Genway — often without any prior context. <Bold>For many, the interview lobby was their first interaction with the system, and the previous experience lacked any clarity about what would happen next.</Bold> I redesigned the lobby to explain the AI process upfront, set expectations for the conversation, and reduce hesitation before the interview began.
          </Paragraph>
        </article>

        <section className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto">
          {/* Ideation + variations — side by side, lightbox on click */}
          <div className="my-12 md:my-16 grid grid-cols-1 md:grid-cols-2 gap-4">
            <LightboxImage
              src={lobbyIdeation}
              alt="Lobby screen ideation — early explorations of the interview entry experience"
              caption="Early ideation — mapping the structure of the lobby"
            />
            <LightboxImage
              src={lobbyVariations}
              alt="Lobby screen design variations for participant trust-building"
              caption="Design variations tested with participants"
            />
          </div>

          {/* Two prototype variations video */}
          <motion.div {...fade} className="mt-4 relative overflow-hidden rounded-2xl md:rounded-3xl bg-black">
            <AutoPlayVideo src={lobbyPrototypeSplit} className="w-full block" />
            <div className="absolute inset-0 rounded-2xl md:rounded-3xl ring-1 ring-inset ring-foreground/5 pointer-events-none" />
          </motion.div>
          <p className="mt-3 text-xs text-muted-foreground font-body tracking-wide text-center">Two Gemini-generated interactive prototypes — single-page vs. step-by-step, tested with stakeholders to decide the progressive disclosure approach before moving into design refinements</p>

          {/* Final lobby design */}
          <div className="mt-8">
            <LightboxImage
              src={lobbyNew}
              alt="Final redesigned Genway interview lobby"
              caption="The redesigned lobby — clear, welcoming, and trust-building for participants"
            />
          </div>
          {/* Redesigned lobby flow */}
          <motion.div {...fade} className="mt-4 relative overflow-hidden rounded-2xl md:rounded-3xl bg-black">
            <AutoPlayVideo src={lobbyNewFlowWeb} className="w-full block" />
            <div className="absolute inset-0 rounded-2xl md:rounded-3xl ring-1 ring-inset ring-foreground/5 pointer-events-none" />
          </motion.div>
          <p className="mt-3 text-xs text-muted-foreground font-body tracking-wide text-center">Flow of the redesigned lobby experience</p>
        </section>

        <article className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto">
          <Divider />

          <SectionTag>Solution — 02 Creating</SectionTag>
          <SectionTitle>One prompt. A fully-configured project, ready to publish.</SectionTitle>
          <Paragraph>
            The core friction for new users wasn't the product itself — it was the blank slate. Users landed on the platform, understood roughly what it did, but had no clear starting point. <Bold>The gap between curiosity and a first published study was too wide.</Bold>
          </Paragraph>
          <Paragraph>
            I designed a GPT-powered component placed directly in the hero section of the product. A user types a single research question — "Why are users churning after onboarding?" — and the system instantly generates a fully-structured project: interview questions, participant criteria, and research scope. <Bold>The project is ready to review and publish in seconds, not hours.</Bold> This collapsed the time-to-value and gave users something concrete to react to rather than something abstract to configure.
          </Paragraph>
        </article>

        <section className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto my-12 md:my-16">
          <motion.div {...fade} className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-black">
            <AutoPlayVideo src={genwayGPTLoop} className="w-full block" />
            <div className="absolute inset-0 rounded-2xl md:rounded-3xl ring-1 ring-inset ring-foreground/5 pointer-events-none" />
          </motion.div>
          <p className="mt-4 text-xs text-muted-foreground font-body tracking-wide text-center">The Genway GPT component — a single prompt generates a complete, publishable research project</p>
        </section>

        <article className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto">
          <Divider />

          <SectionTag>Solution — 03 Discovering</SectionTag>
          <SectionTitle>Making AI research approachable at first glance.</SectionTitle>
          <Paragraph>
            At industry conferences, Genway needed to communicate a completely new category in seconds — before anyone had a chance to ask a question. <Bold>I designed a visual language centered on conversational intelligence, human-AI collaboration, and insights emerging from real conversations.</Bold> The goal was instant recognition: people should feel the category before they understood it.
          </Paragraph>
        </article>

        <section className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto">
          <div className="my-12 md:my-16 grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { src: genwayCreative1, alt: "Genway visual identity — creative direction 1" },
              { src: genwayCreative2, alt: "Genway visual identity — creative direction 2" },
              { src: genwayCreative3, alt: "Genway visual identity — creative direction 3" },
              { src: genwayCreative4, alt: "Genway visual identity — creative direction 4" },
            ].map((item) => (
              <LightboxImage key={item.alt} src={item.src} alt={item.alt} />
            ))}
          </div>
        </section>

        <article className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto">
          <Divider />

          {/* ─── 7. IMPACT & REFLECTION ─── */}
          <SectionTag>Impact & Reflection</SectionTag>
          <SectionTitle>Moving the needle on adoption — and what I'd do differently.</SectionTitle>
          <Paragraph>
            The work had a meaningful effect across the funnel. <Bold>More users were reaching the point of publishing their first project</Bold>, and the drop-off between project creation and publish shrank noticeably. The GPT component in particular helped close the gap between curiosity and commitment — users who interacted with it were more likely to continue into the product and complete a study.
          </Paragraph>
          <Paragraph>
            Engagement with the new category also improved. Conversations at conferences became easier — people reacted to the visual identity with recognition rather than confusion, and the lobby redesign reduced hesitation among participants entering an AI interview for the first time. <Bold>The platform started feeling like something people understood, not something they had to figure out.</Bold>
          </Paragraph>
          <Paragraph>
            <Bold>Start with participant research earlier.</Bold> We focused heavily on the researcher persona in the first phase. Understanding the participant experience sooner would have accelerated the lobby redesign and surfaced trust issues before they affected completion rates.
          </Paragraph>
          <Paragraph>
            <Bold>Prototype the interactive preview in week one.</Bold> The GPT component turned out to be one of the highest-impact changes — we should have tested this concept far earlier rather than arriving at it mid-project.
          </Paragraph>

          <div className="h-24" />
        </article>
      </CaseStudyLayout>
    </>
  );
};

export default CaseStudyGenway;
