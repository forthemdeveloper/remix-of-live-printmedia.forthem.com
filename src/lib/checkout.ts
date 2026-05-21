// Shopify variant + selling-plan IDs
const AF_PLUS_PRODUCT = "44792925257894";
const PLAN_ANNUAL = "1574994086";
const PLAN_QUARTERLY = "1580236966";
const ISSUE_02 = "56214999859366";
const STICKER_PACK = "46400215023782";

const utm = (campaign: string) =>
  `%3Futm_source%3Dprintmedia%26utm_medium%3Dlanding_page%26utm_campaign%3D${campaign}`;

export const CART_URLS = {
  annual: `https://forthem.com/cart/clear?return_to=%2Fcart%2Fadd%3Fitems%5B0%5D%5Bid%5D%3D${AF_PLUS_PRODUCT}%26items%5B0%5D%5Bselling_plan%5D%3D${PLAN_ANNUAL}%26items%5B0%5D%5Bquantity%5D%3D1%26items%5B1%5D%5Bid%5D%3D${ISSUE_02}%26items%5B1%5D%5Bquantity%5D%3D1%26items%5B2%5D%5Bid%5D%3D${STICKER_PACK}%26items%5B2%5D%5Bquantity%5D%3D1%26return_to%3D%2Fcheckout${utm("annual_membership")}`,
  quarterly: `https://forthem.com/cart/clear?return_to=%2Fcart%2Fadd%3Fitems%5B0%5D%5Bid%5D%3D${AF_PLUS_PRODUCT}%26items%5B0%5D%5Bselling_plan%5D%3D${PLAN_QUARTERLY}%26items%5B0%5D%5Bquantity%5D%3D1%26items%5B1%5D%5Bid%5D%3D${ISSUE_02}%26items%5B1%5D%5Bquantity%5D%3D1%26return_to%3D%2Fcheckout${utm("quarterly_membership")}`,
  zineOnly: `https://forthem.com/cart/clear?return_to=%2Fcart%2Fadd%3Fitems%5B0%5D%5Bid%5D%3D${ISSUE_02}%26items%5B0%5D%5Bquantity%5D%3D1%26return_to%3D%2Fcheckout${utm("issue02_magazine_only")}`,
} as const;

export type Plan = keyof typeof CART_URLS;

const PLAN_META = {
  annual: { value: 98, label: "Annual", contentIds: [AF_PLUS_PRODUCT, ISSUE_02, STICKER_PACK], itemNames: ["AF+ All-Access Annual", "Autostraddle Print Issue #02", "Very Gay Sticker Pack"], numItems: 3 },
  quarterly: { value: 28, label: "Quarterly", contentIds: [AF_PLUS_PRODUCT, ISSUE_02], itemNames: ["AF+ All-Access Quarterly", "Autostraddle Print Issue #02"], numItems: 2 },
  zineOnly: { value: 30, label: "ZineOnly", contentIds: [ISSUE_02], itemNames: ["Autostraddle Print Issue #02"], numItems: 1 },
} as const;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    _learnq?: unknown[];
    posthog?: { capture: (event: string, props?: Record<string, unknown>) => void };
    dataLayer?: unknown[];
  }
}

export function startCheckout(plan: Plan, buttonLocation: string) {
  const meta = PLAN_META[plan];
  const url = CART_URLS[plan];

  try {
    window.posthog?.capture("printmedia_cta_clicked", {
      position: buttonLocation,
      plan,
      page: "printmedia",
      value: meta.value,
    });

    // GA4: site-specific event name so PrintMedia / ZineMedia separate cleanly in reports
    window.gtag?.("event", "printmedia_signup_intent", {
      currency: "USD",
      value: meta.value,
      plan_type: plan === "zineOnly" ? "zine-only" : "all-access",
      billing_cycle: plan,
      button_location: buttonLocation,
      source_page: "printmedia_landing",
    });

    // Meta Pixel: standard events for ad optimization + custom event for PrintMedia-only audiences
    window.fbq?.("track", "AddToCart", {
      content_ids: meta.contentIds,
      content_type: "product",
      content_category: `printmedia_${plan === "zineOnly" ? "magazine" : "membership"}`,
      value: meta.value,
      currency: "USD",
    });
    window.fbq?.("track", "InitiateCheckout", {
      value: meta.value,
      currency: "USD",
      num_items: meta.numItems,
      content_category: `printmedia_${plan}`,
    });
    window.fbq?.("trackCustom", "PrintMediaSignupIntent", {
      plan,
      value: meta.value,
      currency: "USD",
      button_location: buttonLocation,
    });

    // Klaviyo: keep standard "Started Checkout" so abandonment flow still fires,
    // AND fire a PrintMedia-specific custom event for site-targeted flows/segments.
    window._learnq?.push([
      "track",
      "Started Checkout",
      {
        $event_id: `printmedia_${buttonLocation}_${Date.now()}`,
        $value: meta.value,
        ItemNames: meta.itemNames,
        Categories: [plan === "zineOnly" ? "Magazine" : "Membership"],
        CheckoutURL: url,
        source: "printmedia_landing",
        plan,
        button_location: buttonLocation,
      },
    ]);
    window._learnq?.push([
      "track",
      "PrintMedia Signup Intent",
      {
        plan,
        value: meta.value,
        button_location: buttonLocation,
        source: "printmedia_landing",
      },
    ]);
  } catch (e) {
    // Tracking must never block navigation
    console.warn("Analytics error", e);
  }

  window.open(url, "_blank");
}
