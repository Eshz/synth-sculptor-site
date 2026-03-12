const AboutSection = () => {
  return (
    <section className="px-6 md:px-12 lg:px-20 pb-20 md:pb-32 max-w-[1400px] mx-auto">
      <h2 className="font-display text-3xl md:text-4xl text-foreground mb-10 md:mb-14">
        About
      </h2>
      <div className="max-w-2xl space-y-6 text-muted-foreground font-body text-lg leading-relaxed font-light">
        <p>
          I'm a Lead Product Designer with over 8 years of experience designing
          AI-powered products and emerging technology experiences.
        </p>
        <p>
          My background includes leading design initiatives across Microsoft Teams
          and early-stage AI platforms, translating complex technical capabilities
          into intuitive user experiences.
        </p>
        <p>
          I specialize in working at the intersection of product, design, and
          machine learning — helping teams shape new AI capabilities into real
          products that users adopt and trust.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
