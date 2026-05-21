import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import { startCheckout } from "@/lib/checkout";

const PricingComparison = () => {
  return (
    <section className="py-8 md:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 uppercase tracking-tight">
            Choose Your Experience
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4 font-sans text-center">
            Get our limited edition zine <br />
            plus exclusive member benefits <br />
            from just $8.17/mo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {/* Annual Membership */}
          <div className="bg-gradient-card rounded-none p-6 md:p-8 shadow-elegant relative order-1 md:order-2 border-2 border-primary-foreground">
            <div className="absolute -top-3 -right-3 text-white px-4 py-2 rounded-none text-sm font-black uppercase tracking-wider transform rotate-3 z-10 bg-accent">
              BEST VALUE
            </div>

            <div className="text-center mb-6">
              <h3 className="text-2xl font-black mb-2 tracking-tight text-secondary-foreground">Annual Print Subscription</h3>
              <div className="mb-2 text-xl font-mono font-normal text-muted-foreground">$8.17<span className="text-base">/mo</span></div>
              <p className="text-muted-foreground font-mono text-sm uppercase tracking-wider">$98 billed annually</p>
            </div>

            <ul className="space-y-3 mb-8">
              {[
                { text: "FREE print magazines all year", bold: true },
                { text: "Delivered free, every quarter" },
                { text: "30% off all products" },
                { text: "Our partner discounts" },
                { text: "Member newsletters & exclusive queer journalism" },
                { text: "Product development access" },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-foreground" strokeWidth={3} />
                  </div>
                  <span className={item.bold ? "font-black font-body3" : "font-body3"}>{item.text}</span>
                </li>
              ))}
            </ul>

            <Button
              variant="hero"
              size="lg"
              className="w-full text-base md:text-lg font-black uppercase tracking-wide rounded-md bg-primary text-primary-foreground"
              onClick={() => startCheckout("annual", "pricing-annual")}
            >
              Start Subscription
            </Button>

            <p className="text-xs text-center text-muted-foreground mt-3 font-mono">
              Cancel anytime ·{" "}
              <button
                type="button"
                className="underline hover:text-foreground"
                onClick={() => startCheckout("quarterly", "pricing-quarterly-fallback")}
              >
                Prefer quarterly? $28/quarter →
              </button>
            </p>
          </div>

          {/* Magazine Only */}
          <div className="bg-card rounded-none p-6 md:p-8 shadow-card border-2 border-border relative order-2 md:order-1">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-black mb-2 tracking-tight text-center">
                Limited Edition <br /> Zine Only
              </h3>
              <div className="mb-2 text-xl font-mono font-normal text-muted-foreground">$30</div>
              <p className="text-muted-foreground font-mono text-sm uppercase tracking-wider">One-time purchase</p>
            </div>

            <ul className="space-y-3 mb-8">
              {[
                { text: "Latest limited edition print issue", included: true },
                { text: "Physical zine shipped to you", included: true },
                { text: "Support queer media", included: true },
                { text: "30% off all products", included: false },
                { text: "Exclusive content access", included: false },
                { text: "Partner discounts", included: false },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  {item.included ? (
                    <div className="w-5 h-5 bg-brand-secondary flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 text-brand-secondary-foreground" strokeWidth={3} />
                    </div>
                  ) : (
                    <div className="w-5 h-5 bg-muted flex items-center justify-center flex-shrink-0">
                      <X className="w-3.5 h-3.5 text-muted-foreground" strokeWidth={3} />
                    </div>
                  )}
                  <span className={`font-body3 ${!item.included ? 'text-muted-foreground line-through' : ''}`}>
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>

            <Button
              variant="outline"
              size="lg"
              className="w-full rounded-none font-black uppercase tracking-wide hover:bg-muted hover:text-muted-foreground"
              onClick={() => startCheckout("zineOnly", "pricing-zine-only")}
            >
              Buy Zine Only
            </Button>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="bg-brand-grass/10 border-2 border-brand-grass rounded-none p-6 max-w-2xl mx-auto">
            <p className="text-lg font-black mb-2 uppercase tracking-tight">
              🧮 🤑 Quick Math: <br />
              Choose Membership & Save
            </p>
            <p className="font-body3 text-sm text-[#0a0029]">
              4 limited edition magazines bought separately = $120 · <br />
              Annual membership = $98 for 4 zines + all benefits
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PricingComparison;
