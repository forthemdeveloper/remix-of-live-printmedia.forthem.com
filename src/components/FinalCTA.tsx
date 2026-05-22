import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Check } from "lucide-react";
import caterpillar from "@/assets/caterpillar.png";
import { startCheckout } from "@/lib/checkout";

const FinalCTA = () => {
  return (
    <section className="py-20 bg-[#0a0029] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-grass/5 to-issue-01/10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight">
            Ready to Join the
            <span className="text-brand-grass block">Community?</span>
          </h2>

          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto font-body3">
            Support queer, trans, and lesbian-led journalism while getting exclusive access to our limited edition content.
          </p>

          <div className="bg-white/10 backdrop-blur rounded-none p-8 mb-8 border-2 border-white/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">What You Get Today:</h3>
                <ul className="space-y-3 text-white/90">
                  {[
                    "Annual print subscription activated",
                    "FREE print magazines shipped to your door, all year",
                    "30% discount code for all products",
                    "Access to exclusive queer journalism",
                    "Member only product drops",
                    "Partner company discounts",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-brand-grass flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5 text-brand-grass-foreground" strokeWidth={3} />
                      </div>
                      <span className="font-body3">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center">
                <div className="text-5xl font-black text-brand-grass mb-2">$8.17<span className="text-2xl">/mo</span></div>
                <p className="text-white/90 mb-1 font-mono text-sm uppercase tracking-wider">Annual Subscription</p>
                <p className="text-xs text-white/60 mb-4 font-mono">$98 billed annually</p>
                <p className="text-sm text-brand-grass font-normal text-secondary font-mono">vs $30 for limited edition zine only</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4 px-4 rounded-md">
            <Button
              variant="hero"
              size="lg"
              className="text-sm sm:text-base md:text-xl px-4 sm:px-8 py-4 w-full sm:w-auto uppercase tracking-wide font-semibold rounded-lg font-mono bg-white text-foreground hover:bg-brand-grass hover:text-foreground border-0 whitespace-normal h-auto"
              onClick={() => startCheckout("annual", "final-cta")}
            >
              Start Subscription ($8.17/mo) <ArrowRight className="ml-2 w-5 h-5 flex-shrink-0" strokeWidth={3} />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-sm sm:text-base md:text-lg px-4 sm:px-8 py-4 w-full sm:w-auto bg-white/75 text-foreground border-0 hover:bg-white hover:text-muted-foreground rounded-md uppercase tracking-wide font-normal font-mono whitespace-normal h-auto"
              onClick={() => startCheckout("zineOnly", "final-cta")}
            >
              Magazine only ($30)
            </Button>
          </div>

          <p className="text-sm text-white/70 mb-8 font-mono">
            Or{" "}
            <button
              type="button"
              className="underline hover:text-brand-grass"
              onClick={() => startCheckout("quarterly", "final-cta-quarterly-fallback")}
            >
              pay quarterly ($28 every 3 months)
            </button>
          </p>

          <img src={caterpillar} alt="" loading="lazy" decoding="async" className="mx-auto h-8 opacity-50 mb-8" />

          <div className="flex items-center justify-center gap-2 text-brand-grass mb-8">
            <Clock className="w-5 h-5" strokeWidth={2.5} />
            <span className="text-sm font-mono uppercase tracking-wider">Cancel anytime · No annual commitment</span>
          </div>

          <div className="text-center mt-6">
            <p className="text-white/70 text-sm font-mono">
              Secure checkout · Cancel anytime · 100% satisfaction guarantee
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FinalCTA;