import { AboutCauseSection } from '@/components/AboutCauseSection';
import { FAQSection } from '@/components/FAQSection';
import { FinalCTASection } from '@/components/FinalCTASection';
import { HeroSection } from '@/components/HeroSection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { PerformersSection } from '@/components/PerformersSection';
import { StickyMobileCTA } from '@/components/StickyMobileCTA';
import { TicketTiersSection } from '@/components/TicketTiersSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutCauseSection />
      <PerformersSection />
      <TicketTiersSection />
      <HowItWorksSection />
      <FAQSection />
      <FinalCTASection />
      <StickyMobileCTA />
    </main>
  );
}
