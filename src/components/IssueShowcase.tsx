import { Button } from "@/components/ui/button";
import { startCheckout } from "@/lib/checkout";

type Issue = {
  id: string;
  number: string;
  season: string;
  theme: string;
  coverStory: string;
  highlights: string[];
  avif: string;
  png: string;
  png600: string;
  alt: string;
};

const ISSUES: Issue[] = [
  {
    id: "00",
    number: "Issue #00",
    season: "Summer 2025",
    theme: "Queer Fight Clubs",
    coverStory:
      "Heavenly Bodies — step inside Nigeria's underground LGBTQ+ ballroom scene.",
    highlights: [
      "Queer Fight Clubs — the gyms where queers learn to throw down",
      "TBoy Wrestling: trans dudes are kissing in the wrestling ring",
      "Queer Villain Era Astrology + Black Moon Lilith 101",
      "Working Girls — a luxury escort on women clients in sex work",
      "Your Favs' Fav Lesbian Film Lists",
      "Includes gay crosswords",
    ],
    avif: "/lovable-uploads/issue-00-cover-r2.avif",
    png: "/lovable-uploads/issue-00-cover-r2.png",
    png600: "/lovable-uploads/issue-00-cover-r2-600.png",
    alt: "Autostraddle Print Issue #00 — Queer Fight Clubs",
  },
  {
    id: "01",
    number: "Issue #01",
    season: "Winter 2025/26",
    theme: "Back to the Queer Future",
    coverStory:
      "Ceyenne Doroshow gets her flowers — the G.L.I.T.S. founder and \"Godmother\" of Black trans New York, who raised millions and built an intergenerational home where her community finally gets to stay.",
    highlights: [
      "Queer City Guides: Amsterdam, LA & Edinburgh",
      "Franco Stevens & 30 years of Curve Magazine",
      "The 12 Lesbian Love Languages",
      "Put Some Respect on DJ Rekha's Name",
      "A Love Letter to Black Queer Nightlife",
      "On Being a Masc Top in Rural Oklahoma",
      "Best Queer Books, TV & Films of 2025",
    ],
    avif: "/lovable-uploads/issue-01-cover-r2.avif",
    png: "/lovable-uploads/issue-01-cover-r2.png",
    png600: "/lovable-uploads/issue-01-cover-r2-600.png",
    alt: "Autostraddle Print Issue #01 — Back to the Queer Future, Ceyenne Doroshow cover",
  },
  {
    id: "02",
    number: "Issue #02",
    season: "Spring 2026",
    theme: "The Food Issue",
    coverStory:
      "Top Chef winner Melissa King on cooking up a world where everyone gets a seat at the table.",
    highlights: [
      "Getting Hot with the Queer Chefs of NYC",
      "Don't Eat What AI Is Cooking — why family recipes beat the algorithm",
      "We All Have a Hunger — what a breakup actually tastes like",
      "Who Is Testosterone For?",
      "A Short History of the Nonbinary Barista",
      "19 Delicious Queer Novels Featuring Food",
      "Quiz: Which Lesbian Beverage Are You?",
    ],
    avif: "/lovable-uploads/issue-02-flat-r2.avif",
    png: "/lovable-uploads/issue-02-flat-r2.png",
    png600: "/lovable-uploads/issue-02-flat-r2-600.png",
    alt: "Autostraddle Print Issue #02 — The Food Issue, Melissa King cover",
  },
];

const IssueShowcase = () => {
  return (
    <section id="issues" className="py-16 md:py-24 scroll-mt-4" style={{ backgroundColor: '#f5f1e6' }}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <p className="text-xs md:text-sm text-issue-01 font-mono uppercase tracking-widest mb-3">
            What's actually inside
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-brand-black tracking-tight mb-4">
            Three issues. Hundreds of stories you won't find anywhere else.
          </h2>
          <p className="text-base md:text-lg text-muted-foreground font-body3">
            Most of this never goes online. It's print-only, made by a fully queer team —
            reporting, photography, essays, recipes, sex, and crosswords you can hold in your hands.
          </p>
        </div>

        <div className="space-y-16 md:space-y-28 max-w-5xl mx-auto">
          {ISSUES.map((issue, i) => (
            <div
              key={issue.id}
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Cover */}
              <div className="flex justify-center">
                <picture>
                  <source srcSet={issue.avif} type="image/avif" />
                  <img
                    src={issue.png}
                    srcSet={`${issue.png600} 600w, ${issue.png} 1000w`}
                    sizes="(max-width: 768px) 280px, 380px"
                    alt={issue.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full max-w-[280px] md:max-w-[380px] h-auto shadow-2xl border border-brand-black/10"
                  />
                </picture>
              </div>

              {/* Details */}
              <div>
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="text-sm font-mono font-bold uppercase tracking-widest text-issue-01">
                    {issue.number}
                  </span>
                  <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                    {issue.season}
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-brand-black tracking-tight mb-3 uppercase">
                  {issue.theme}
                </h3>
                <p className="text-base md:text-lg text-brand-black/80 font-body3 mb-6 leading-relaxed">
                  {issue.coverStory}
                </p>
                <ul className="space-y-2 mb-7">
                  {issue.highlights.map((h, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm md:text-base font-body3 text-brand-black/90">
                      <span className="text-issue-01 font-black flex-shrink-0">›</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* One soft CTA after the showcase */}
        <div className="text-center mt-16 md:mt-24">
          <p className="text-lg md:text-xl font-body3 text-brand-black mb-1">
            Every new issue, delivered to your door. Members get the back catalogue at a discount.
          </p>
          <p className="text-sm font-mono uppercase tracking-wider text-muted-foreground mb-6">
            $8.17/mo · billed annually · cancel anytime
          </p>
          <Button
            variant="hero"
            size="lg"
            className="text-base md:text-lg px-10 py-6 font-bold uppercase tracking-wide rounded-full bg-brand-black text-white hover:bg-issue-01"
            onClick={() => startCheckout("annual", "showcase")}
          >
            Start your subscription
          </Button>
        </div>
      </div>
    </section>
  );
};

export default IssueShowcase;
