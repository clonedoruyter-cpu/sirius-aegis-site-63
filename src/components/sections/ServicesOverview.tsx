import { Shield, Waves, FileText, Activity, Users, Anchor } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

const services: Service[] = [
  {
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: "Barreiras de Contenção",
    description: "Sistemas de contenção preventiva para vazamentos de óleo e produtos químicos em ambientes marítimos e terrestres.",
    href: "/servicos/barreiras-contencao"
  },
  {
    icon: <Waves className="h-8 w-8 text-secondary" />,
    title: "Emergências Marítimas",
    description: "Resposta rápida a incidentes ambientais no mar, incluindo vazamentos, encalhes e poluição aquática.",
    href: "/servicos/emergencias-maritimas"
  },
  {
    icon: <FileText className="h-8 w-8 text-primary" />,
    title: "PEI e PAE",
    description: "Desenvolvimento de Planos de Emergência Individual e Planos de Auxílio de Emergência conforme regulamentações.",
    href: "/servicos/pei-pae"
  },
  {
    icon: <Activity className="h-8 w-8 text-secondary" />,
    title: "Monitoramento Ambiental",
    description: "Monitoramento contínuo de qualidade da água, ar e solo com tecnologia avançada e relatórios detalhados.",
    href: "/servicos/monitoramento"
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Consultoria Ambiental",
    description: "Consultoria especializada em licenciamento, avaliações de impacto e conformidade regulatória.",
    href: "/servicos/consultoria"
  },
  {
    icon: <Anchor className="h-8 w-8 text-secondary" />,
    title: "Salvatagem e Resgate",
    description: "Operações de salvamento marítimo, resgate de tripulações e recuperação de embarcações.",
    href: "/servicos/salvatagem"
  }
];

const ServicesOverview = () => {
  return (
    <section className="py-20 bg-gradient-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluções completas em prevenção, resposta e consultoria ambiental para 
            indústrias, portos e operações marítimas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="shadow-soft hover:shadow-medium transition-all duration-300 animate-slide-up border-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-accent rounded-full w-fit">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </CardDescription>
                <Button 
                  variant="outline" 
                  asChild
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <a href={service.href}>
                    Saiba Mais
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-in">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-3"
            asChild
          >
            <a href="/servicos">
              Ver Todos os Serviços
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;