import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroEnvironmental from '@/assets/hero-environmental.jpg';
import heroMarine from '@/assets/hero-marine.jpg';
import heroIndustrial from '@/assets/hero-industrial.jpg';

interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  description: string;
  cta: {
    text: string;
    href: string;
  };
}

const slides: Slide[] = [
  {
    id: 1,
    image: heroEnvironmental,
    title: "Soluções Ambientais Completas",
    subtitle: "Prevenção e Resposta a Emergências",
    description: "Especialistas em contenção, monitoramento e consultoria ambiental para indústrias e operações marítimas.",
    cta: {
      text: "Conheça Nossos Serviços",
      href: "/servicos"
    }
  },
  {
    id: 2,
    image: heroMarine,
    title: "Emergências Marítimas",
    subtitle: "Resposta Rápida e Eficiente",
    description: "Equipe especializada em contenção de vazamentos, salvamento e operações de emergência no ambiente marítimo.",
    cta: {
      text: "Ver Cases de Sucesso",
      href: "/cases"
    }
  },
  {
    id: 3,
    image: heroIndustrial,
    title: "Consultoria Especializada",
    subtitle: "PEI, PAE e Monitoramento",
    description: "Desenvolvimento de planos de emergência, avaliações ambientais e monitoramento contínuo para sua empresa.",
    cta: {
      text: "Solicitar Consultoria",
      href: "/contato"
    }
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  // Auto-advance slides
  useEffect(() => {
    if (!isAutoplay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoplay]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section 
      className="relative h-screen flex items-center overflow-hidden"
      onMouseEnter={() => setIsAutoplay(false)}
      onMouseLeave={() => setIsAutoplay(true)}
    >
      {/* Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-2xl text-white animate-fade-in">
          <p className="text-secondary-foreground text-lg mb-4 font-medium">
            {slides[currentSlide].subtitle}
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            {slides[currentSlide].description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-3"
              asChild
            >
              <a href={slides[currentSlide].cta.href}>
                {slides[currentSlide].cta.text}
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-3"
            >
              <Play className="mr-2 h-5 w-5" />
              Vídeo Institucional
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="sm"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white hover:bg-white/20 p-3"
        onClick={prevSlide}
        aria-label="Slide anterior"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      
      <Button
        variant="ghost"
        size="sm"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white hover:bg-white/20 p-3"
        onClick={nextSlide}
        aria-label="Próximo slide"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white shadow-medium' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;