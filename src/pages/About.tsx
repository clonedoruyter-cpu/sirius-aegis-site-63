import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/sections/WhatsAppButton';
import { Shield, Users, Award, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
const About = () => {
  const values = [{
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: "Segurança",
    description: "Priorizamos a segurança em todas as operações, com protocolos rigorosos e equipamentos de última geração."
  }, {
    icon: <Users className="h-8 w-8 text-secondary" />,
    title: "Expertise",
    description: "Equipe multidisciplinar com profissionais especializados e certificados em suas áreas de atuação."
  }, {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: "Qualidade",
    description: "Comprometimento com a excelência técnica e conformidade com as normas ambientais vigentes."
  }, {
    icon: <Clock className="h-8 w-8 text-secondary" />,
    title: "Agilidade",
    description: "Resposta rápida em situações de emergência com mobilização 24/7 em todo território nacional."
  }];
  return <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 gradient-hero text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6 animate-fade-in">
              Sobre a Sirius Ambiental
            </h1>
            <p className="text-xl max-w-3xl mx-auto animate-slide-up">
              Mais de 15 anos de excelência em soluções ambientais, prevenção e resposta a emergências 
              para indústrias e operações marítimas em todo o Brasil.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold text-primary mb-6">Nossa Missão</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Fornecer soluções ambientais completas e inovadoras que protegem o meio ambiente, 
                  garantem a conformidade regulatória e asseguram a continuidade operacional de nossos clientes.
                </p>
                
                <h2 className="text-3xl font-bold text-primary mb-6">Nossa Visão</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Ser a empresa de referência em soluções ambientais no Brasil, reconhecida pela 
                  excelência técnica, inovação e compromisso com a sustentabilidade.
                </p>
              </div>

              <div className="animate-slide-up">
                <div className="bg-gradient-accent p-8 rounded-lg shadow-soft">
                  <h3 className="text-2xl font-semibold text-primary mb-6">Nossos Diferenciais</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Atendimento 24/7 para emergências ambientais</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Cobertura nacional com bases estratégicas</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Equipamentos modernos e certificados</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Equipe multidisciplinar experiente</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">Certificações ISO 14001 e outras normas</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-gradient-accent">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl font-bold text-primary mb-4">Nossos Valores</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Os princípios que norteiam todas as nossas ações e decisões
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => <Card key={value.title} className="shadow-soft hover:shadow-medium transition-all duration-300 animate-slide-up border-0 text-center" style={{
              animationDelay: `${index * 100}ms`
            }}>
                  <CardHeader className="pb-4">
                    <div className="mx-auto mb-4 p-3 bg-accent rounded-full w-fit">
                      {value.icon}
                    </div>
                    <CardTitle className="text-xl font-semibold text-foreground">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </section>

        {/* Team Preview */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-primary mb-6 animate-fade-in">
              Nossa Equipe
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 animate-slide-up">Profissionais altamente qualificados e experientes, comprometidos com a excelência e a segurança em todas as operações ambientais e mares.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center animate-scale-in">
                <div className="w-24 h-24 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Engenheiros Ambientais</h3>
                <p className="text-muted-foreground">Especialistas em avaliação e mitigação de impactos</p>
              </div>

              <div className="text-center animate-scale-in" style={{
              animationDelay: '150ms'
            }}>
                <div className="w-24 h-24 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Técnicos Especializados</h3>
                <p className="text-muted-foreground">Operadores treinados em resposta a emergências</p>
              </div>

              <div className="text-center animate-scale-in" style={{
              animationDelay: '300ms'
            }}>
                <div className="w-24 h-24 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Consultores Seniores</h3>
                <p className="text-muted-foreground">Expertise em regulamentações e compliance</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>;
};
export default About;