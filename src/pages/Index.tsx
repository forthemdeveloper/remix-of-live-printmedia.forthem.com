import Hero from "@/components/Hero";
import WhatsInside from "@/components/WhatsInside";
import ValueProposition from "@/components/ValueProposition";
import CreatorVideos from "@/components/CreatorVideos";
import ProductGallery from "@/components/ProductGallery";
import TikTokSection from "@/components/TikTokSection";
import PricingComparison from "@/components/PricingComparison";
import SocialProof from "@/components/SocialProof";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Hero />
      <ValueProposition />
      <SocialProof />
      <WhatsInside />
      <ProductGallery />
      <CreatorVideos />
      <TikTokSection />
      <PricingComparison />
      <FinalCTA />
    </div>
  );
};

export default Index;
