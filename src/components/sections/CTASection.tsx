import { ArrowRight, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const CTASection = () => {
  return (
    <section className="py-20 gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M20 0L0 20L20 40L40 20L20 0Z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Pronto para Proteger seu Negócio?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Entre em contato conosco e descubra como nossas soluções ambientais 
            podem prevenir riscos e garantir a conformidade do seu projeto.
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
              <h3 className="text-xl font-semibold mb-2">Emergência 24h</h3>
              <p className="text-white/80 mb-4 text-sm">
                Atendimento imediato para situações críticas
              </p>
              <Button 
                variant="cta-emergency" 
                className="w-full"
                asChild
              >
                <a href="tel:+5511999999999">
                  (11) 99999-9999
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* General Contact */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white animate-scale-in" style={{ animationDelay: '150ms' }}>
            <CardContent className="p-6 text-center">
              <div className="mb-4 flex justify-center">
                <div className="p-3 bg-secondary rounded-full">
                  <Mail className="h-6 w-6 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fale Conosco</h3>
              <p className="text-white/80 mb-4 text-sm">
                Consultoria e orçamentos personalizados
              </p>
              <Button 
                variant="outline-light" 
                className="w-full"
                asChild
              >
                <a href="mailto:contato@siriusambiental.com.br">
                  Enviar E-mail
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Quote Request */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white animate-scale-in" style={{ animationDelay: '300ms' }}>
            <CardContent className="p-6 text-center">
              <div className="mb-4 flex justify-center">
                <div className="p-3 bg-primary rounded-full">
                  <ArrowRight className="h-6 w-6 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Solicitar Orçamento</h3>
              <p className="text-white/80 mb-4 text-sm">
                Proposta técnica sem compromisso
              </p>
              <Button 
                variant="cta-primary"
                className="w-full"
                asChild
              >
                <a href="/contato">
                  Solicitar Agora
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '450ms' }}>
          <p className="text-white/80 text-sm">
            Resposta em até 2 horas úteis • Atendimento nacional • Certificações ISO 14001
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;