import { Factory, Ship, Zap, Droplets, Truck, Building } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Industry {
  icon: React.ReactNode;
  title: string;
  description: string;
  services: string[];
}

const industries: Industry[] = [
  {
    icon: <Ship className="h-8 w-8 text-primary" />,
    title: "Portos e Terminais",
    description: "Soluções especializadas para operações portuárias e terminais marítimos.",
    services: ["Contenção de vazamentos", "Planos de emergência", "Monitoramento contínuo"]
  },
  {
    icon: <Factory className="h-8 w-8 text-secondary" />,
    title: "Indústria Química",
    description: "Prevenção e resposta a emergências em plantas químicas e petroquímicas.",
    services: ["PEI e PAE", "Análise de riscos", "Treinamentos especializados"]
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "Usinas e Energia",
    description: "Consultoria ambiental para usinas termelétricas, hidrelétricas e eólicas.",
    services: ["Licenciamento ambiental", "Monitoramento", "Gestão de resíduos"]
  },
  {
    icon: <Droplets className="h-8 w-8 text-secondary" />,
    title: "Petróleo e Gás",
    description: "Soluções completas para upstream, midstream e downstream.",
    services: ["Resposta a vazamentos", "Consultoria regulatória", "Planos de contingência"]
  },
  {
    icon: <Truck className="h-8 w-8 text-primary" />,
    title: "Transporte de Produtos",
    description: "Segurança no transporte de cargas perigosas e produtos químicos.",
    services: ["Planos de rota", "Treinamento de condutores", "Equipamentos de segurança"]
  },
  {
    icon: <Building className="h-8 w-8 text-secondary" />,
    title: "Grandes Indústrias",
    description: "Consultoria para indústrias siderúrgicas, alimentícias e farmacêuticas.",
    services: ["Avaliação de impacto", "Compliance ambiental", "Sustentabilidade"]
  }
];

const IndustrySection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Setores Atendidos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experiência diversificada em múltiplos segmentos industriais, 
            oferecendo soluções personalizadas para cada necessidade
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <Card 
              key={industry.title}
              className="shadow-soft hover:shadow-medium transition-all duration-300 animate-slide-up border-0 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-4">
                <div className="mb-4 p-3 bg-accent rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
                  {industry.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {industry.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {industry.description}
                </p>
                <div className="space-y-2">
                  <h4 className="font-medium text-sm text-primary uppercase tracking-wide">
                    Principais Serviços:
                  </h4>
                  <ul className="space-y-1">
                    {industry.services.map((service, serviceIndex) => (
                      <li 
                        key={serviceIndex}
                        className="text-sm text-muted-foreground flex items-center"
                      >
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2 flex-shrink-0" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;