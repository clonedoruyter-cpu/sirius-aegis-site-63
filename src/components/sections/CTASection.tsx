import { ArrowRight, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const CTASection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M20 0L0 20L20 40L40 20L20 0Z'/%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            {t('cta.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Emergency Contact */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white animate-scale-in">
            <CardContent className="p-6 text-center">
              <div className="mb-4 flex justify-center">
                <div className="p-3 bg-red-500 rounded-full">
                  <Phone className="h-6 w-6 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('cta.emergency.title')}</h3>
              <p className="text-white/80 mb-4 text-sm">{t('cta.emergency.desc')}</p>
              <Button variant="cta-emergency" className="w-full" asChild>
                <a href="tel:+5581998221113">
                  (81) 99822-1113
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* General Contact */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white animate-scale-in" style={{
            animationDelay: '150ms'
          }}>
            <CardContent className="p-6 text-center">
              <div className="mb-4 flex justify-center">
                <div className="p-3 bg-secondary rounded-full">
                  <Mail className="h-6 w-6 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('cta.contact.title')}</h3>
              <p className="text-white/80 mb-4 text-sm">
                {t('cta.contact.desc')}
              </p>
              <Button variant="outline-light" className="w-full" asChild>
                <a href="/contato">
                  {t('cta.contact.title')}
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Quote Request */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white animate-scale-in" style={{
            animationDelay: '300ms'
          }}>
            <CardContent className="p-6 text-center">
              <div className="mb-4 flex justify-center">
                <div className="p-3 bg-primary rounded-full">
                  <ArrowRight className="h-6 w-6 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('cta.quote.title')}</h3>
              <p className="text-white/80 mb-4 text-sm">
                {t('cta.quote.desc')}
              </p>
              <Button variant="cta-primary" className="w-full" asChild>
                <a href="/contato">
                  {t('cta.quote.button')}
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12 animate-fade-in" style={{
          animationDelay: '450ms'
        }}>
          <p className="text-white/80 text-sm">
            {t('cta.footer')}
          </p>
        </div>
      </div>
      
      {/* Wave Effect */}
      <div className="absolute bottom-0 left-0 w-full h-32 overflow-hidden">
        <svg 
          className="absolute bottom-0 w-full h-full" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
          style={{ transform: 'translateY(1px)' }}
        >
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="hsl(var(--primary))"
            opacity="0.9"
          />
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            fill="hsl(var(--primary))"
          />
        </svg>
      </div>
    </section>
  );
};

export default CTASection;