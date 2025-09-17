import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

interface Testimonial {
  name: string;
  position: string;
  company: string;
  rating: number;
  text: string;
  avatar?: string;
}

const TestimonialsSection = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      nameKey: "testimonials.client1.name",
      positionKey: "testimonials.client1.position",
      companyKey: "testimonials.client1.company",
      textKey: "testimonials.client1.text",
      rating: 5,
    },
    {
      nameKey: "testimonials.client2.name",
      positionKey: "testimonials.client2.position", 
      companyKey: "testimonials.client2.company",
      textKey: "testimonials.client2.text",
      rating: 5,
    },
    {
      nameKey: "testimonials.client3.name",
      positionKey: "testimonials.client3.position",
      companyKey: "testimonials.client3.company",
      textKey: "testimonials.client3.text",
      rating: 5,
    }
  ];
  return (
    <section className="py-20 bg-gradient-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-primary mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.nameKey}
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
                  "{t(testimonial.textKey)}"
                </p>

                {/* Author Info */}
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-foreground">
                    {t(testimonial.nameKey)}
                  </h4>
                  <p className="text-sm text-primary font-medium">
                    {t(testimonial.positionKey)}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {t(testimonial.companyKey)}
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