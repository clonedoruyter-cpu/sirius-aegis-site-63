import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroStatic from '@/components/sections/HeroStatic';
import ServicesOverview from '@/components/sections/ServicesOverview';
import StatsSection from '@/components/sections/StatsSection';
import OperationsGallery from '@/components/sections/OperationsGallery';
import TeamInAction from '@/components/sections/TeamInAction';
import IndustrySection from '@/components/sections/IndustrySection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CTASection from '@/components/sections/CTASection';
import WhatsAppButton from '@/components/sections/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <HeroStatic />
        <ServicesOverview />
        <StatsSection />
        <OperationsGallery />
        <TeamInAction />
        <IndustrySection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
