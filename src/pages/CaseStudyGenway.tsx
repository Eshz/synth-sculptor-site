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

const SectionImage = ({ src, alt, caption }: { src: string; alt: string; caption?: string }) => (
  <motion.figure {...fade} className="my-16 md:my-24">
    <div className="relative overflow-hidden rounded-2xl md:rounded-3xl">
      <img
        src={src}
        alt={alt}
        className="w-full h-auto object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 rounded-2xl md:rounded-3xl ring-1 ring-inset ring-foreground/5" />
    </div>
    {caption && (
      <figcaption className="mt-4 text-xs text-muted-foreground font-body tracking-wide text-center">
        {caption}
      </figcaption>
    )}
  </motion.figure>
);

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <motion.h2
    {...fade}
    className="text-3xl md:text-5xl font-body font-light leading-tight mb-8"
  >
    {children}
  </motion.h2>
);

const SectionSubheading = ({ children }: { children: React.ReactNode }) => (
  <motion.h3
    {...fade}
    className="text-xl md:text-2xl font-body font-medium mb-4 mt-12"
  >
    {children}
  </motion.h3>
);

const Paragraph = ({ children }: { children: React.ReactNode }) => (
  <motion.p
    {...fade}
    className="text-base md:text-lg text-muted-foreground font-body leading-relaxed mb-6"
  >
    {children}
  </motion.p>
);

const BulletList = ({ items }: { items: string[] }) => (
  <motion.ul {...fade} className="space-y-3 mb-8 ml-1">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-3 text-muted-foreground font-body text-base md:text-lg">
        <span className="w-1.5 h-1.5 rounded-full bg-foreground/30 mt-2.5 shrink-0" />
        {item}
      </li>
    ))}
  </motion.ul>
);

const NumberedItem = ({ number, text }: { number: string; text: string }) => (
  <motion.div {...fade} className="flex items-start gap-4 mb-4">
    <span className="text-sm font-body font-medium text-foreground/40 mt-0.5">{number}</span>
    <span className="text-base md:text-lg text-muted-foreground font-body">{text}</span>
  </motion.div>
);

const Divider = () => <hr className="border-border my-16 md:my-24" />;

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
            <p className="text-lg md:text-xl text-muted-foreground font-body max-w-2xl leading-relaxed">
              Improving onboarding and adoption for Genway AI — an AI-powered research platform that conducts and analyzes user interviews automatically.
            </p>
          </motion.div>
        </section>

        {/* Metadata bar */}
        <section className="px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto mt-16">
          <motion.div
            {...fade}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-border"
          >
            {[
              { label: "Role", value: "Head of Product Design" },
              { label: "Company", value: "Genway" },
              { label: "Focus", value: "Onboarding & Adoption" },
              { label: "Scope", value: "End-to-end Experience" },
            ].map((item) => (
              <div key={item.label}>
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-body block mb-1">
                  {item.label}
                </span>
                <span className="text-sm font-body font-medium text-foreground">{item.value}</span>
              </div>
            ))}
          </motion.div>
        </section>

        {/* Content */}
        <article className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto mt-16 md:mt-24">
          {/* Overview */}
          <SectionHeading>Overview</SectionHeading>
          <Paragraph>
            When I joined Genway as Head of Product Design, we faced a fundamental adoption challenge. AI-moderated research was a new concept for most potential users. Many product teams visiting our website or conference booth had never encountered a system that could conduct interviews autonomously and generate insights.
          </Paragraph>
          <Paragraph>
            The onboarding challenge extended beyond the product interface. Users were meeting Genway for the first time in many different contexts:
          </Paragraph>
          <BulletList
            items={[
              "At conferences and industry events",
              "On the landing page",
              "When creating their first research project",
              "As interview participants interacting with the AI",
              "When receiving the final analysis results via email",
            ]}
          />
          <Paragraph>
            Each of these moments represented a first impression. My goal was to redesign this entire journey — helping users move from curiosity → understanding → trust → first successful research project.
          </Paragraph>

          <Divider />

          {/* The Challenge */}
          <SectionHeading>The Challenge</SectionHeading>
          <Paragraph>
            The product had strong AI capabilities but struggled with early adoption. Through analytics, user interviews, and feedback from sales teams, we identified several barriers.
          </Paragraph>

          <SectionSubheading>1. The concept was unfamiliar</SectionSubheading>
          <Paragraph>
            Most teams did not immediately understand what "AI-moderated research" meant. Before trying the product, they needed a clear mental model for how the AI interviewer works, what insights the system generates, and how it fits into existing research workflows.
          </Paragraph>

          <SectionSubheading>2. The product asked for commitment too early</SectionSubheading>
          <Paragraph>
            Users were required to sign up and configure a full research project before seeing any value. This created friction between curiosity and experimentation.
          </Paragraph>

          <SectionSubheading>3. Multiple personas encountered the system differently</SectionSubheading>
          <Paragraph>
            There were at least three key first-time experiences:
          </Paragraph>
          <BulletList
            items={[
              "Product teams creating research projects",
              "Participants being interviewed by the AI",
              "Stakeholders receiving insights and analysis",
            ]}
          />
          <Paragraph>
            Each of these entry points needed to communicate the system clearly and build trust.
          </Paragraph>

          <Divider />

          {/* My Role */}
          <SectionHeading>My Role</SectionHeading>
          <Paragraph>
            I led the design strategy and execution across the full onboarding journey. My work included:
          </Paragraph>
          <BulletList
            items={[
              "Defining the adoption and onboarding strategy",
              "Designing the product narrative and landing experience",
              "Creating conference and marketing visual identity",
              "Redesigning product onboarding flows",
              "Improving the interview lobby experience for participants",
              "Designing parts of the insights and analysis experience",
              "Improving system emails sent to customers",
            ]}
          />
          <Paragraph>
            While leading the initiative, I remained deeply hands-on — designing core flows, prototyping interactions, and collaborating closely with engineering. I also mentored and directed a junior designer, guiding UI execution based on the design direction I defined.
          </Paragraph>

          <Divider />

          {/* A System of First Impressions */}
          <SectionHeading>
            A System of{" "}
            <span className="font-display italic">First Impressions</span>
          </SectionHeading>
          <Paragraph>
            Instead of treating onboarding as a single product flow, I reframed it as a network of first encounters. Users could meet Genway in several places:
          </Paragraph>
        </article>

        {/* Full-width numbered touchpoints */}
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
              <div
                key={item.num}
                className="bg-card rounded-2xl p-8 border border-border"
              >
                <span className="text-5xl font-display italic text-foreground/10 block mb-4">
                  {item.num}
                </span>
                <h4 className="text-lg font-body font-medium mb-2 text-foreground">{item.title}</h4>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </section>

        <article className="px-6 md:px-12 lg:px-20 max-w-[900px] mx-auto">
          <Paragraph>
            Improving onboarding meant redesigning each of these entry points.
          </Paragraph>

          <Divider />

          {/* Making the Concept Understandable */}
          <SectionHeading>Making the Concept Understandable</SectionHeading>

          <SectionSubheading>Visual Identity for Events and Conferences</SectionSubheading>
          <Paragraph>
            At industry conferences, Genway needed to quickly communicate a completely new category. I designed a visual language focused on conversational intelligence, human-AI collaboration, and insights emerging from conversations.
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
          <Paragraph>
            This visual system was used across conference booths, product presentations, and marketing materials. The goal was to make the concept of AI conducting interviews feel both intriguing and approachable.
          </Paragraph>

          <SectionSubheading>Turning the Landing Page Into a Product Experience</SectionSubheading>
          <Paragraph>
            The landing page originally described the product but did little to help users understand how it actually worked. I redesigned the page as a narrative experience guiding users through the concept of AI-moderated research.
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
            The page explains the limitations of traditional research, how AI interviews work, what insights the platform generates, and how teams use the results. The layout intentionally encourages users to scroll through the entire story, gradually building understanding.
          </Paragraph>

          <Divider />

          {/* Letting Users Try the AI */}
          <SectionHeading>
            Letting Users Try the AI{" "}
            <span className="font-display italic">Immediately</span>
          </SectionHeading>

          <SectionSubheading>The Genway GPT Input</SectionSubheading>
          <Paragraph>
            One key opportunity was allowing users to experiment with the product before signing up. I designed a new interaction directly on the landing page — users can type a research question into a GPT input field.
          </Paragraph>

          <motion.div
            {...fade}
            className="my-12 bg-card rounded-2xl border border-border p-8 md:p-12"
          >
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-body block mb-4">
              Example interaction
            </span>
            <p className="text-lg md:text-xl font-body text-foreground/80 italic leading-relaxed">
              "Why are users abandoning our onboarding flow?"
            </p>
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground font-body leading-relaxed">
                The system then generates a research project automatically — including suggested interview questions, research structure, and participant criteria. This turns the landing page from a static explanation into an interactive product preview.
              </p>
            </div>
          </motion.div>

          <Divider />

          {/* Improving Research Creation */}
          <SectionHeading>Improving the Research Creation Flow</SectionHeading>
          <Paragraph>
            Once users entered the product, the onboarding experience was redesigned to prioritize fast first success. Instead of configuring complex research settings upfront, users now follow a simplified flow:
          </Paragraph>

          <motion.div {...fade} className="my-8 space-y-4">
            <NumberedItem number="01" text="Define what they want to learn" />
            <NumberedItem number="02" text="Review AI-generated interview questions" />
            <NumberedItem number="03" text="Launch their first AI-moderated interview" />
          </motion.div>

          <Paragraph>
            This dramatically reduces friction while helping users understand how the system works.
          </Paragraph>

          <Divider />

          {/* Interview Experience */}
          <SectionHeading>Designing the Interview Experience</SectionHeading>

          <SectionSubheading>Improving the Participant Lobby</SectionSubheading>
          <Paragraph>
            Another important first impression came from a different persona: interview participants. For many participants, the interview lobby screen was their first interaction with the system. The previous experience lacked clarity about what would happen next.
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
          <Paragraph>
            I led an initiative to redesign this experience to clearly explain the AI interview process, set expectations about the conversation, and reduce hesitation before starting the interview. Because the startup environment required fast iteration, I used AI prototyping tools to rapidly explore interaction directions and test ideas.
          </Paragraph>

          <Divider />

          {/* Insights Delivery */}
          <SectionHeading>Improving How Insights Are Delivered</SectionHeading>
          <Paragraph>
            For many stakeholders, the analysis results are the first interaction they have with Genway. They may not have created the research project themselves — they simply receive the insights.
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
          <Paragraph>
            I worked on improving parts of the analysis experience, the structure and clarity of insight summaries, and the emails sent to customers with research results. The goal was to ensure that even users who only see the final output can understand the system's value.
          </Paragraph>

          <Divider />

          {/* Product Language */}
          <SectionHeading>Improving Product Language with AI</SectionHeading>
          <Paragraph>
            As the product evolved, maintaining consistent tone and clear explanations became increasingly important. I created a custom GPT-based UX writing assistant trained on well-known content design guidelines and UX writing principles.
          </Paragraph>
          <Paragraph>
            This internal tool helped the team maintain a consistent tone across the product, simplify explanations of AI capabilities, and produce clearer onboarding and system messaging — allowing a small team to scale high-quality product language efficiently.
          </Paragraph>

          <Divider />

          {/* Impact */}
          <SectionHeading>Impact</SectionHeading>
          <Paragraph>
            The redesigned onboarding journey improved how users approach the platform. Key outcomes included:
          </Paragraph>
          <BulletList
            items={[
              "Stronger engagement with the landing page experience",
              "Faster understanding of AI-moderated research",
              "Improved time to first research project",
              "Clearer participant experience during interviews",
              "Better clarity of insights delivered to stakeholders",
            ]}
          />

          <motion.div
            {...fade}
            className="my-16 bg-brand-ink text-brand-bg rounded-2xl p-8 md:p-12"
          >
            <p className="text-lg md:text-xl font-body font-light leading-relaxed text-center">
              Most importantly, the system now helps users move from
              <br />
              <span className="font-display italic text-2xl md:text-3xl block mt-4">
                "I don't understand this yet" → "I want to try this."
              </span>
            </p>
          </motion.div>

          <Divider />

          {/* Collaboration */}
          <SectionHeading>Collaboration & Execution</SectionHeading>
          <Paragraph>
            This initiative required close collaboration across product leadership, engineering, marketing, and design collaborators. Despite being a small startup environment with limited resources, we moved quickly through rapid prototyping and tight cross-functional collaboration.
          </Paragraph>

          <div className="h-24" />
        </article>
      </CaseStudyLayout>
    </>
  );
};

export default CaseStudyGenway;
