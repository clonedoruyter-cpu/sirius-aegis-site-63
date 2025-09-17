import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useToast } from '@/hooks/use-toast';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    toast
  } = useToast();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Entraremos em contato em até 2 horas úteis."
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };
  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  return <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center text-white animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Entre em Contato
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              Estamos prontos para atender suas necessidades em soluções ambientais. 
              Fale conosco e descubra como podemos ajudar seu projeto.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-accent">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-soft border-0">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    Solicitar Orçamento
                  </CardTitle>
                  <CardDescription>
                    Preencha o formulário abaixo e receba uma proposta personalizada
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Nome Completo *</Label>
                        <Input id="name" value={formData.name} onChange={e => handleChange('name', e.target.value)} required className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="email">E-mail *</Label>
                        <Input id="email" type="email" value={formData.email} onChange={e => handleChange('email', e.target.value)} required className="mt-1" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Telefone *</Label>
                        <Input id="phone" value={formData.phone} onChange={e => handleChange('phone', e.target.value)} required className="mt-1" placeholder="(11) 99999-9999" />
                      </div>
                      <div>
                        <Label htmlFor="company">Empresa</Label>
                        <Input id="company" value={formData.company} onChange={e => handleChange('company', e.target.value)} className="mt-1" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="service">Serviço de Interesse</Label>
                      <Select value={formData.service} onValueChange={value => handleChange('service', value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Selecione um serviço" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="barreiras">Barreiras de Contenção</SelectItem>
                          <SelectItem value="emergencias">Emergências Marítimas</SelectItem>
                          <SelectItem value="pei-pae">PEI e PAE</SelectItem>
                          <SelectItem value="monitoramento">Monitoramento Ambiental</SelectItem>
                          <SelectItem value="consultoria">Consultoria Ambiental</SelectItem>
                          <SelectItem value="salvatagem">Salvatagem e Resgate</SelectItem>
                          <SelectItem value="outros">Outros</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message">Mensagem *</Label>
                      <Textarea id="message" value={formData.message} onChange={e => handleChange('message', e.target.value)} required className="mt-1 min-h-32" placeholder="Descreva seu projeto ou necessidade..." />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary-hover" disabled={isSubmitting}>
                      {isSubmitting ? "Enviando..." : <>
                          <Send className="mr-2 h-4 w-4" />
                          Enviar Mensagem
                        </>}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              
              {/* Emergency Contact */}
              <Card className="shadow-soft border-0 bg-red-50 border-red-200">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-red-500 rounded-full mr-4">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-red-800">Emergência 24h</h3>
                      <p className="text-red-600 text-sm">Atendimento imediato</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full border-red-300 text-red-700 hover:bg-red-100" asChild>
                    <a href="tel:+5511999999999">(81) 99822-1113</a>
                  </Button>
                </CardContent>
              </Card>

              {/* General Contact */}
              <Card className="shadow-soft border-0">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-primary mr-3" />
                    <div>
                      <p className="font-medium">E-mail</p>
                      <a href="mailto:contato@siriusambiental.com.br" className="text-primary hover:underline">contato@siriusport.com.br</a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-primary mr-3" />
                    <div>
                      <p className="font-medium">Telefone Comercial</p>
                      <a href="tel:+551133334444" className="text-primary hover:underline">
                        (11) 3333-4444
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-primary mr-3" />
                    <div>
                      <p className="font-medium">Endereço</p>
                      <p className="text-muted-foreground text-sm">
                        Av. Paulista, 1000<br />
                        São Paulo - SP, 01310-100
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-primary mr-3" />
                    <div>
                      <p className="font-medium">Horário Comercial</p>
                      <p className="text-muted-foreground text-sm">
                        Segunda à Sexta: 8h às 18h<br />
                        Emergências: 24h/7 dias
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Features */}
              <Card className="shadow-soft border-0 bg-secondary/5">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 text-secondary">Por que nos escolher?</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                      Resposta em até 2 horas úteis
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                      Atendimento nacional
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                      Certificações ISO 14001
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                      Equipe altamente qualificada
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Contact;