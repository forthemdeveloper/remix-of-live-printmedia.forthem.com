import Hero from "@/components/Hero";
import IssueShowcase from "@/components/IssueShowcase";
import SocialProof from "@/components/SocialProof";
import CreatorVideos from "@/components/CreatorVideos";
import TikTokSection from "@/components/TikTokSection";
import AboutAutostraddle from "@/components/AboutAutostraddle";
import ValueProposition from "@/components/ValueProposition";
import PricingComparison from "@/components/PricingComparison";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f5f1e6]">
      <Hero />
      <IssueShowcase />
      <SocialProof />
      <CreatorVideos />
      <TikTokSection />
      <AboutAutostraddle />
      <ValueProposition />
      <PricingComparison />
      <FinalCTA />
    </div>
  );
};

export default Index;
