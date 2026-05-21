import { Button } from "@/components/ui/button";
import { startCheckout } from "@/lib/checkout";
// AVIF is ~10× smaller than PNG; PNG kept as fallback for older browsers
const heroAvif = "/lovable-uploads/issue-02-cover-v4.avif";
const heroPngSmall = "/lovable-uploads/issue-02-cover-v4-600.png";
const heroPng = "/lovable-uploads/issue-02-cover-v4.png";

const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-center justify-center relative overflow-hidden py-10 md:py-16" style={{ backgroundColor: '#0a0029' }}>
      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">

          {/* Social proof line */}
          <p className="text-center text-sm md:text-base text-brand-grass font-mono uppercase tracking-wider mb-4">
            ★ Join 5,000+ queer readers
          </p>

          <h1 className="text-center text-5xl md:text-7xl lg:text-8xl font-black text-white mb-2 tracking-tight">
            QUEER PRINT MEDIA
          </h1>
          <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-bold text-brand-grass mb-4 md:mb-8 tracking-tight font-body3 uppercase">
            Community led — always
          </h2>

          {/* Image + price card side by side on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 items-center max-w-4xl mx-auto mb-6">
            {/* Magazine image — AVIF (~100KB) with PNG fallback (~410KB mobile / 1MB desktop) */}
            <div className="flex justify-center md:justify-end">
              <picture>
                <source srcSet={heroAvif} type="image/avif" />
                <img
                  src={heroPng}
                  srcSet={`${heroPngSmall} 600w, ${heroPng} 1000w`}
                  sizes="(max-width: 768px) 340px, 400px"
                  alt="Autostraddle Print Magazine Issue #02"
                  className="w-full max-w-[340px] md:max-w-[400px] h-auto [filter:drop-shadow(0_20px_30px_rgba(0,0,0,0.5))]"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
              </picture>
            </div>

            {/* Price + CTA card — cream for high contrast */}
            <div className="bg-stone-100 rounded-lg p-6 md:p-7 shadow-2xl">
              <div className="mb-4 text-center">
                <div className="text-5xl md:text-6xl font-black text-brand-black leading-none mb-1 font-mono">
                  $8.17<span className="text-2xl md:text-3xl text-muted-foreground">/mo</span>
                </div>
                <p className="text-xs md:text-sm text-muted-foreground font-mono uppercase tracking-wider">
                  $98 billed annually · cancel anytime
                </p>
              </div>

              <Button
                variant="hero"
                size="lg"
                className="w-full text-base md:text-lg py-5 font-sans font-bold bg-brand-black text-white hover:bg-brand-grass hover:text-brand-black"
                onClick={() => startCheckout("annual", "hero")}
              >
                Start Subscription
              </Button>

              <p className="text-xs text-muted-foreground mt-3 font-mono text-center">
                FREE print magazines all year · 30% off everything
              </p>
            </div>
          </div>

          {/* Secondary options */}
          <div className="flex flex-col items-center gap-2 mb-10 md:mb-12">
            <button
              type="button"
              className="text-sm text-white/70 underline hover:text-brand-grass font-mono"
              onClick={() => startCheckout("quarterly", "hero-quarterly-fallback")}
            >
              Prefer quarterly? $28 every 3 months →
            </button>
            <button
              type="button"
              className="text-sm text-white/50 underline hover:text-white font-mono"
              onClick={() => startCheckout("zineOnly", "hero-zine-only")}
            >
              Just the zine? $30 →
            </button>
          </div>

          {/* Quick value strip */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 text-white max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-black text-brand-grass mb-1">FREE</div>
              <p className="text-xs md:text-sm font-body3 text-white/80">Print magazines all year</p>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-black text-brand-grass mb-1">30%</div>
              <p className="text-xs md:text-sm font-body3 text-white/80">Off everything in shop</p>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-black text-brand-grass mb-1">∞</div>
              <p className="text-xs md:text-sm font-body3 text-white/80">Access to queer journalism</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
