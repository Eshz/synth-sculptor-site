import { motion } from "framer-motion";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import CustomCursor from "@/components/CustomCursor";
import genwayHero from "@/assets/genway-hero.jpg";
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

const CaseStudyGenway = () => {
  return (
    <>
      <CustomCursor />
      <CaseStudyLayout>
        {/* Hero */}
        <section className="relative">
          <div className="aspect-[21/9] md:aspect-[21/7] overflow-hidden">
            <motion.img
              initial={{ scale: 1.05, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              src={genwayHero}
              alt="Genway AI Research Platform"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        </section>

        {/* Title block */}
        <section className="px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto -mt-24 md:-mt-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="text-xs uppercase tracking-[0.2em] font-body font-medium text-muted-foreground block mb-4">
              Genway · Head of Product Design
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-body font-light leading-[1.1] mb-6 max-w-4xl">
              Designing the First Experience of{" "}
              <span className="font-display italic">AI-Moderated Research</span>
            </h1>
          </motion.div>
        </section>

        {/* Context metadata */}
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

        {/* Content */}
        <article className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto mt-16 md:mt-24">
          {/* Overview */}
          <SectionTag>Overview</SectionTag>
          <SectionTitle>AI research was a new concept for most users.</SectionTitle>
          <Paragraph>
            When I joined Genway as Head of Product Design, we faced a fundamental adoption challenge. <Bold>AI-moderated research was unfamiliar to most potential users.</Bold> Many product teams visiting our website or conference booth had never encountered a system that could conduct interviews autonomously and generate insights.
          </Paragraph>
          <Paragraph>
            The onboarding challenge extended beyond the product interface. Users were meeting Genway for the first time at conferences, on the landing page, when creating their first project, as interview participants, and when receiving analysis results via email. <Bold>Each of these moments represented a first impression.</Bold>
          </Paragraph>

          <Divider />

          {/* Problem */}
          <SectionTag>Problem</SectionTag>
          <SectionTitle>Strong AI capabilities, but early adoption struggled.</SectionTitle>
          <Paragraph>
            Through analytics, user interviews, and feedback from sales teams, we identified several barriers preventing users from adopting the platform.
          </Paragraph>
          <Paragraph>
            <Bold>The concept was unfamiliar.</Bold> Most teams didn't immediately understand what "AI-moderated research" meant. They needed a clear mental model before trying the product.
          </Paragraph>
          <Paragraph>
            <Bold>The product asked for commitment too early.</Bold> Users were required to sign up and configure a full research project before seeing any value — creating friction between curiosity and experimentation.
          </Paragraph>
          <Paragraph>
            <Bold>Multiple personas encountered the system differently.</Bold> Product teams creating research, participants being interviewed by AI, and stakeholders receiving insights — each entry point needed to build trust independently.
          </Paragraph>

          <Divider />

          {/* My Role */}
          <SectionTag>My Role</SectionTag>
          <SectionTitle>Strategy, design, and hands-on execution.</SectionTitle>
          <Paragraph>
            I led the design strategy and execution across the full onboarding journey — from defining the adoption strategy and visual identity, to redesigning product flows, the interview lobby, insights delivery, and system emails. <Bold>While leading the initiative, I remained deeply hands-on</Bold> — designing core flows, prototyping interactions, and mentoring a junior designer.
          </Paragraph>

          <Divider />

          {/* Approach */}
          <SectionTag>Approach</SectionTag>
          <SectionTitle>A network of first encounters, not a single flow.</SectionTitle>
          <Paragraph>
            Instead of treating onboarding as a single product flow, I reframed it as a system of first impressions. Users could meet Genway in several places:
          </Paragraph>
        </article>

        {/* Touchpoints grid */}
        <section className="px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto my-12">
          <motion.div
            {...fade}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { num: "01", title: "Discovering", desc: "Conferences, marketing materials, and landing page" },
              { num: "02", title: "Creating", desc: "The first interaction inside the product" },
              { num: "03", title: "Participating", desc: "A different persona interacting with the AI interviewer" },
              { num: "04", title: "Receiving", desc: "Insights and analysis — often the first experience for stakeholders" },
            ].map((item) => (
              <div key={item.num} className="bg-card rounded-2xl p-8 border border-border">
                <span className="text-5xl font-display italic text-foreground/10 block mb-4">{item.num}</span>
                <h4 className="text-lg font-body font-medium mb-2 text-foreground">{item.title}</h4>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </section>

        <article className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto">
          <Divider />

          {/* Solution 1 - Visual Identity */}
          <SectionTag>Solution — Visual Identity</SectionTag>
          <SectionTitle>Making AI research approachable at first glance.</SectionTitle>
          <Paragraph>
            At industry conferences, Genway needed to quickly communicate a completely new category. <Bold>I designed a visual language focused on conversational intelligence, human-AI collaboration, and insights emerging from conversations.</Bold>
          </Paragraph>
        </article>

        <section className="px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto">
          <SectionImage
            src={genwayConference}
            alt="Conference booth design showcasing AI research platform"
            caption="Visual identity designed for conferences and events — making AI research approachable"
          />
        </section>

        <article className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto">
          <Divider />

          {/* Solution 2 - Landing Page */}
          <SectionTag>Solution — Landing Page</SectionTag>
          <SectionTitle>Turning the landing page into a product experience.</SectionTitle>
          <Paragraph>
            The landing page originally described the product but did little to help users understand how it worked. <Bold>I redesigned the page as a narrative experience</Bold> guiding users through the concept of AI-moderated research step by step.
          </Paragraph>
        </article>

        <section className="px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto">
          <SectionImage
            src={genwayLanding}
            alt="Redesigned landing page as product experience"
            caption="The landing page redesigned as a narrative experience — explaining AI research step by step"
          />
        </section>

        <article className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto">
          <Paragraph>
            The page explains the limitations of traditional research, how AI interviews work, what insights the platform generates, and how teams use the results. <Bold>The layout encourages users to scroll through the entire story, gradually building understanding.</Bold>
          </Paragraph>

          <Divider />

          {/* Solution 3 - Try AI */}
          <SectionTag>Solution — Interactive Preview</SectionTag>
          <SectionTitle>Let users try the AI before signing up.</SectionTitle>
          <Paragraph>
            One key opportunity was allowing users to experiment with the product before committing. <Bold>I designed a GPT input field directly on the landing page</Bold> — users type a research question and the system generates a project preview automatically.
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
                The system generates a research project automatically — including interview questions, research structure, and participant criteria. This turns the landing page from a static explanation into an interactive product preview.
              </p>
            </div>
          </motion.div>

          <Divider />

          {/* Solution 4 - Onboarding */}
          <SectionTag>Solution — Onboarding</SectionTag>
          <SectionTitle>Fast first success, not complex configuration.</SectionTitle>
          <Paragraph>
            The onboarding experience was redesigned to prioritize speed. <Bold>Instead of configuring complex settings upfront, users follow three simple steps:</Bold>
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

          {/* Solution 5 - Interview */}
          <SectionTag>Solution — Interview Experience</SectionTag>
          <SectionTitle>Building trust before the conversation starts.</SectionTitle>
          <Paragraph>
            For many participants, the interview lobby was their first interaction with the system. <Bold>The previous experience lacked clarity about what would happen next.</Bold> I redesigned it to clearly explain the AI process, set expectations, and reduce hesitation.
          </Paragraph>
        </article>

        <section className="px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto">
          <SectionImage
            src={genwayInterview}
            alt="AI interview interface design"
            caption="The redesigned AI interview experience — clear, welcoming, and trust-building"
          />
        </section>

        <article className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto">
          <Divider />

          {/* Solution 6 - Insights */}
          <SectionTag>Solution — Insights Delivery</SectionTag>
          <SectionTitle>Making value clear even for first-time viewers.</SectionTitle>
          <Paragraph>
            For many stakeholders, the analysis results are the first interaction they have with Genway. <Bold>They may not have created the research project — they simply receive the insights.</Bold> I improved the structure and clarity of insight summaries and the emails sent to customers.
          </Paragraph>
        </article>

        <section className="px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto">
          <SectionImage
            src={genwayInsights}
            alt="AI-generated research insights dashboard"
            caption="Insights delivery — making value clear even for stakeholders seeing Genway for the first time"
          />
        </section>

        <article className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto">
          <Divider />

          {/* Impact */}
          <SectionTag>Impact</SectionTag>
          <SectionTitle>From "I don't understand" to "I want to try this."</SectionTitle>
          <Paragraph>
            The redesigned journey improved how users approach the platform:
          </Paragraph>
          <Paragraph>
            <Bold>Stronger engagement</Bold> with the landing page experience. <Bold>Faster understanding</Bold> of AI-moderated research. <Bold>Improved time</Bold> to first research project. <Bold>Clearer participant experience</Bold> during interviews. <Bold>Better clarity</Bold> of insights delivered to stakeholders.
          </Paragraph>

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

          {/* Lessons */}
          <SectionTag>Collaboration</SectionTag>
          <SectionTitle>Small team, fast iteration.</SectionTitle>
          <Paragraph>
            This initiative required close collaboration across product leadership, engineering, marketing, and design. <Bold>Despite being a small startup with limited resources, we moved quickly through rapid prototyping and tight cross-functional collaboration.</Bold> I also created a custom GPT-based UX writing assistant to help scale consistent product language across the team.
          </Paragraph>

          <div className="h-24" />
        </article>
      </CaseStudyLayout>
    </>
  );
};

export default CaseStudyGenway;
