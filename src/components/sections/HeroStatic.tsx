import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroStatic from '@/assets/hero-static.jpg';

const HeroStatic = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroStatic}
          alt="Sirius Ambiental - Operações de Contenção Ambiental"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-2xl text-white animate-fade-in">
          <p className="text-secondary-foreground text-lg mb-4 font-medium">
            Soluções Ambientais Especializadas
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Proteção Ambiental
            <span className="block text-secondary-foreground">de Excelência</span>
          </h1>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            Especialistas em contenção, monitoramento e consultoria ambiental para indústrias 
            e operações marítimas. Resposta rápida 24h em emergências ambientais.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="cta-primary"
              size="lg" 
              className="px-8 py-3"
              asChild
            >
              <a href="/servicos">
                <ArrowRight className="mr-2 h-5 w-5" />
                Conheça Nossos Serviços
              </a>
            </Button>
            <Button 
              variant="outline-light" 
              size="lg" 
              className="font-semibold px-8 py-3"
            >
              <Play className="mr-2 h-5 w-5" />
              Vídeo Institucional
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroStatic;