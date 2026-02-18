import HeroSection from "@/components/hero-section";
import IntegratedToolsSection from "@/components/integrated-tools-section";
import FeaturesSection from "@/components/features-section";
import MissionVisionSection from "@/components/mission-vision-section";
import CTASection from "@/components/cta-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <IntegratedToolsSection />
      <FeaturesSection />
      <MissionVisionSection />
      <CTASection />
    </div>
  );
}
