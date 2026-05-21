import { ArrowRight } from "lucide-react";
import charactersIcon from "@/assets/characters-icon.png";
import carabinerIcon from "@/assets/carabiner-icon.png";
import magazineIcon from "@/assets/magazine-icon.png";
import starsDivider from "@/assets/stars-divider.png";

const ValueProposition = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Members Pay Less
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-mono text-center">
            First access, always.<br />30% off everything.<br />Free gifts.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto mb-16">
          <div className="text-center">
            <div className="w-16 h-16 rounded-lg bg-issue-02-accent flex items-center justify-center mx-auto mb-6">
              <img src={magazineIcon} alt="Magazine" loading="lazy" decoding="async" className="w-16 h-16 object-contain" />
            </div>
            <h3 className="text-2xl font-black mb-4 uppercase tracking-tight text-brand-black">Free Print Magazine</h3>
            <p className="text-muted-foreground leading-relaxed font-body3">
              Get exclusive access to our limited edition print zine at no extra cost. That's $120 in value per year, included in your membership.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 rounded-lg bg-brand-grass flex items-center justify-center mx-auto mb-6">
              <img src={carabinerIcon} alt="Carabiner" loading="lazy" decoding="async" className="w-16 h-16 object-contain" />
            </div>
            <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">30% Off Everything</h3>
            <p className="text-muted-foreground leading-relaxed font-body3">
              Member pricing always. Plus ad-free Autostraddle, exclusive content, and member-only newsletters.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 rounded-lg bg-stone-200 flex items-center justify-center mx-auto mb-6">
              <img src={charactersIcon} alt="Partner Marketplace" loading="lazy" decoding="async" className="w-16 h-16 object-contain" />
            </div>
            <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">Partner Marketplace</h3>
            <p className="text-muted-foreground leading-relaxed font-body3">
              Plus discounts from our vetted partners: Kirrin Finch, Miss Grass, Dame, Ash + Chess, Folx Health and more!
            </p>
          </div>
        </div>

        <div className="rounded-none p-8 md:p-12 shadow-elegant border border-brand-black max-w-4xl mx-auto bg-stone-200">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-black mb-4 tracking-tight text-issue-01">
                Support Our Mission
              </h3>
              <p className="text-lg text-muted-foreground mb-6 font-body3">
                For Them & Autostraddle exist to fill the gap in a world that overlooks queer and trans needs,
                offering products and media that honor expansive identities.
              </p>
              <div className="flex items-center gap-2 font-black uppercase tracking-wide text-[#0a0029]">
                <span>Join our community</span>
                <ArrowRight className="w-5 h-5" strokeWidth={3} />
              </div>
            </div>
            <div className="bg-white rounded-none p-6 shadow-card border border-brand-black border-secondary">
              <div className="text-center">
                <div className="font-black text-issue-01 mb-2 font-mono text-2xl">$220+</div>
                <p className="text-sm text-muted-foreground mb-4 font-mono uppercase tracking-wider">Annual Value</p>
                <div className="text-2xl font-black mb-2 font-mono text-primary">$98</div>
                <p className="text-sm font-mono uppercase tracking-wider text-primary">Annual Subscription</p>
                <div className="mt-4 pt-4 border-t border-stone-400">
                  <div className="font-black text-issue-01 font-mono text-lg text-primary">$120+ SAVINGS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ValueProposition;