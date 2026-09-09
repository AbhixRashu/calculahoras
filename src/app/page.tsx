import { HeroSection } from '@/components/hero/HeroSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { ToolsGridSection } from '@/components/sections/ToolsGridSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { FinalCTASection } from '@/components/sections/FinalCTASection';
import { EducationalSection } from '@/components/sections/EducationalSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <HowItWorksSection />
      <ToolsGridSection />
      <EducationalSection />
      <FAQSection />
      <FinalCTASection />
    </>
  );
}
