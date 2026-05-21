const WhatsInside = () => {
  const features = [
    { icon: "✍️", text: "Personal essays from queer writers" },
    { icon: "🔍", text: "Stories spotlighting local communities" },
    { icon: "📸", text: "Photojournalism capturing queer life" },
    { icon: "🧩", text: "Queer-themed crosswords and puzzles" },
    { icon: "🤝", text: "A behind-the-scenes look at the all-queer team" },
  ];

  return (
    <section className="py-16 md:py-20 bg-stone-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <p className="text-xs md:text-sm text-brand-grass font-mono uppercase tracking-wider mb-3">
              What's in every issue
            </p>
            <h2 className="text-3xl md:text-5xl font-black text-brand-black tracking-tight">
              200+ pages of <span className="text-issue-01">queer print media</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-white p-5 md:p-6 border-2 border-brand-black shadow-card"
              >
                <span className="text-2xl flex-shrink-0">{f.icon}</span>
                <p className="text-base md:text-lg text-brand-black font-body3 leading-snug">
                  {f.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsInside;
