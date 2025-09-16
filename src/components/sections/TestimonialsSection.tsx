import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface Testimonial {
  name: string;
  position: string;
  company: string;
  rating: number;
  text: string;
  avatar?: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Carlos Eduardo Silva",
    position: "Gerente de Operações",
    company: "Porto de Santos S.A.",
    rating: 5,
    text: "A Sirius Ambiental demonstrou excelência técnica em nossa última emergência. A resposta foi rápida e eficiente, minimizando impactos ambientais significativos.",
  },
  {
    name: "Ana Paula Rodrigues",
    position: "Diretora de Sustentabilidade", 
    company: "Braskem",
    rating: 5,
    text: "Os planos de emergência desenvolvidos pela equipe são detalhados e práticos. A consultoria superou nossas expectativas em compliance ambiental.",
  },
  {
    name: "Roberto Mendes",
    position: "Comandante",
    company: "Transpetro",
    rating: 5,
    text: "Profissionalismo e conhecimento técnico excepcionais. A Sirius é nossa parceira de confiança para operações críticas no ambiente marítimo.",
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-primary mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A confiança de grandes empresas é nosso maior reconhecimento
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="shadow-soft hover:shadow-medium transition-all duration-300 animate-slide-up border-0 relative overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 text-accent opacity-30">
                  <Quote className="h-8 w-8" />
                </div>

                {/* Rating */}
                <div className="flex mb-4">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className={`h-4 w-4 ${
                        starIndex < testimonial.rating
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-primary font-medium">
                    {testimonial.position}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.company}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;