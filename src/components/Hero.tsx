const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24" style={{ backgroundColor: '#f5f1e6' }}>
      {/* Brand mark, top-left */}
      <picture>
        <source srcSet="/lovable-uploads/autostraddle-logo.avif" type="image/avif" />
        <img
          src="/lovable-uploads/autostraddle-logo.png"
          alt="Autostraddle"
          className="absolute top-6 left-6 md:top-8 md:left-8 w-[120px] md:w-[150px] h-auto z-20"
          fetchPriority="high"
          decoding="async"
        />
      </picture>
      <div className="container mx-auto px-5 md:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm md:text-base text-[#ff5b8a] font-mono uppercase tracking-widest mb-5">
            ★ 16 years of Autostraddle · now in print
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl text-brand-black mb-6 leading-[0.95] uppercase">
            The queer magazine the internet <span className="text-[#ff5b8a]">can't give you.</span>
          </h1>
          <p className="text-lg md:text-xl text-brand-black/70 font-body3 mb-9 max-w-xl mx-auto leading-relaxed">
            Four times a year, a fully queer crew makes 200+ pages of reporting, photography,
            essays and sexy stuff — printed, and sent to your door.
          </p>
          <a
            href="#issues"
            className="inline-flex items-center gap-2 text-base md:text-lg text-brand-black font-mono uppercase tracking-wide border-b-2 border-[#ff5b8a] pb-1 hover:text-[#ff5b8a] transition-colors"
          >
            See what's inside ↓
          </a>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-12 text-xs md:text-sm text-brand-black/55 font-mono uppercase tracking-wider">
            <span>★ 5,000+ readers</span>
            <span>·</span>
            <span>Free shipping</span>
            <span>·</span>
            <span>Cancel anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
