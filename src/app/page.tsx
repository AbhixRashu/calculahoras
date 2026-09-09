import { HeroSection } from '@/components/hero/HeroSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { InteractiveTimelineSection } from '@/components/sections/InteractiveTimelineSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { ToolsGridSection } from '@/components/sections/ToolsGridSection';
import { ComprehensiveContentSection } from '@/components/sections/ComprehensiveContentSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { EducationalSection } from '@/components/sections/EducationalSection';
import { FinalCTASection } from '@/components/sections/FinalCTASection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <InteractiveTimelineSection />
      <HowItWorksSection />
      <ToolsGridSection />
      <ComprehensiveContentSection />
      <FAQSection />
      <EducationalSection />
      <FinalCTASection />
    </>
  );
}
