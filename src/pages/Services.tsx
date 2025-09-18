import { Shield, Waves, FileText, Activity, Users, Anchor, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CTASection from '@/components/sections/CTASection';
import serviceContainmentBarriers from '@/assets/service-containment-barriers.jpg';
import serviceMaritimeEmergency from '@/assets/service-maritime-emergency.jpg';
import servicePeiPae from '@/assets/service-pei-pae.jpg';
import serviceMonitoring from '@/assets/service-monitoring.jpg';
import serviceEnvironmentalConsulting from '@/assets/service-environmental-consulting.jpg';
import serviceSalvageRescue from '@/assets/service-salvage-rescue.jpg';
import { useLanguage } from '@/contexts/LanguageContext';
interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  image: string;
  href: string;
}
const services: Service[] = [{
  icon: <Shield className="h-12 w-12 text-primary" />,
  title: "Barreiras de Contenção",
  description: "Sistemas avançados de contenção preventiva para vazamentos de óleo e produtos químicos",
  features: ["Barreiras flutuantes para ambientes marítimos", "Sistemas terrestres para indústrias", "Resposta rápida 24/7", "Equipamentos certificados internacionalmente"],
  image: serviceContainmentBarriers,
  href: "/servicos/barreiras-contencao"
}, {
  icon: <Waves className="h-12 w-12 text-secondary" />,
  title: "Emergências Marítimas",
  description: "Resposta especializada a incidentes ambientais no ambiente marítimo",
  features: ["Atendimento 24 horas por dia", "Equipes especializadas", "Equipamentos de última geração", "Cobertura no Nordeste"],
  image: serviceMaritimeEmergency,
  href: "/servicos/emergencias-maritimas"
}, {
  icon: <FileText className="h-12 w-12 text-primary" />,
  title: "PEI e PAE",
  description: "Desenvolvimento de Planos de Emergência conforme regulamentações vigentes",
  features: ["Planos de Emergência Individual (PEI)", "Planos de Auxílio de Emergência (PAE)", "Conformidade regulatória total", "Treinamentos inclusos"],
  image: servicePeiPae,
  href: "/servicos/pei-pae"
}, {
  icon: <Activity className="h-12 w-12 text-secondary" />,
  title: "Monitoramento Ambiental",
  description: "Monitoramento contínuo com tecnologia avançada e relatórios detalhados",
  features: ["Qualidade da água e ar", "Monitoramento de solo", "Relatórios técnicos detalhados", "Análises laboratoriais certificadas"],
  image: serviceMonitoring,
  href: "/servicos/monitoramento"
}, {
  icon: <Users className="h-12 w-12 text-primary" />,
  title: "Consultoria Ambiental",
  description: "Consultoria especializada em licenciamento e conformidade regulatória",
  features: ["Licenciamento ambiental", "Avaliações de impacto", "Estudos ambientais", "Conformidade regulatória"],
  image: serviceEnvironmentalConsulting,
  href: "/servicos/consultoria"
}, {
  icon: <Anchor className="h-12 w-12 text-secondary" />,
  title: "Salvatagem e Resgate",
  description: "Operações de salvamento marítimo e recuperação de embarcações",
  features: ["Resgate de tripulações", "Salvamento de embarcações", "Operações de reboque", "Equipe altamente treinada"],
  image: serviceSalvageRescue,
  href: "/servicos/salvatagem"
}];
const Services = () => {
  const { t } = useLanguage();
  return <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center text-white animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Nossos Serviços</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              Soluções completas em prevenção, resposta e consultoria ambiental 
              para indústrias, portos e operações marítimas
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-accent">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => <Card key={service.title} className="shadow-soft hover:shadow-medium transition-all duration-300 animate-slide-up border-0 overflow-hidden" style={{
            animationDelay: `${index * 150}ms`
          }}>
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img src={service.image} alt={service.title} className="w-full h-64 md:h-full object-cover" />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <CardHeader className="p-0 mb-4">
                      <div className="flex items-center mb-3">
                        <div className="p-2 bg-accent rounded-lg mr-3">
                          {service.icon}
                        </div>
                        <CardTitle className="text-2xl font-bold text-foreground">
                          {service.title}
                        </CardTitle>
                      </div>
                      <CardDescription className="text-muted-foreground text-base">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="p-0">
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                            <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                            {feature}
                          </li>)}
                      </ul>
                      
                      <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
                        <a href={service.href} className="flex items-center justify-center">
                          {t('services.learnMore')}
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </a>
                      </Button>
                    </CardContent>
                  </div>
                </div>
              </Card>)}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>;
};
export default Services;