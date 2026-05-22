const AboutAutostraddle = () => {
  const stats = [
    { num: "2009", label: "Founded" },
    { num: "16 yrs", label: "Independently queer-run" },
    { num: "GLAAD", label: "Award winner" },
    { num: "QTPOC", label: "Owned, by For Them" },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#0a0029] text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs md:text-sm text-brand-grass font-mono uppercase tracking-widest mb-4">
            Wait — what's Autostraddle?
          </p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6 leading-tight">
            The internet's oldest independent home for queer culture.
          </h2>
          <p className="text-base md:text-lg text-white/85 font-body3 leading-relaxed mb-5">
            Founded in 2009 by Riese Bernard and Alexandra Vega, Autostraddle is the
            longest-running independently-owned publication for lesbian, queer, trans and
            nonbinary culture. Sixteen years, a GLAAD Award, and millions of readers later,
            it's still made by a team of queer and trans people building a place where we get
            to be our entire selves.
          </p>
          <p className="text-base md:text-lg text-white/85 font-body3 leading-relaxed">
            In 2023 we joined QTPOC-owned For Them. We center the freedom and joy of queer and
            trans people of color — because white gay culture isn't the default, it's just one
            square of the fabric. The print magazine is the newest chapter.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-3xl mx-auto mt-12 md:mt-16">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl md:text-4xl font-black text-brand-grass mb-1 font-mono">{s.num}</div>
              <p className="text-xs md:text-sm text-white/70 font-body3">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutAutostraddle;
