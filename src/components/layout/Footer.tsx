import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoSiriusBranca from '@/assets/logo-sirius-branca.png';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src={logoSiriusBranca} 
                alt="Sirius Ambiental" 
                className="h-[75px] w-auto"
              />
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Especialistas em soluções ambientais para indústrias, portos e operações marítimas. 
              Prevenção, consultoria e resposta a emergências ambientais.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="sm" className="p-2 h-auto hover:bg-white/10">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 h-auto hover:bg-white/10">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 h-auto hover:bg-white/10">
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Serviços</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <a href="/servicos/barreiras-contencao" className="hover:opacity-100 transition-opacity">
                  Barreiras de Contenção
                </a>
              </li>
              <li>
                <a href="/servicos/pei-pae" className="hover:opacity-100 transition-opacity">
                  PEI e PAE
                </a>
              </li>
              <li>
                <a href="/servicos/emergencias-maritimas" className="hover:opacity-100 transition-opacity">
                  Emergências Marítimas
                </a>
              </li>
              <li>
                <a href="/servicos/monitoramento" className="hover:opacity-100 transition-opacity">
                  Monitoramento Ambiental
                </a>
              </li>
              <li>
                <a href="/servicos/consultoria" className="hover:opacity-100 transition-opacity">
                  Consultoria Ambiental
                </a>
              </li>
              <li>
                <a href="/servicos/salvatagem" className="hover:opacity-100 transition-opacity">
                  Salvatagem e Resgate
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Links Rápidos</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <a href="/sobre" className="hover:opacity-100 transition-opacity">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="/cases" className="hover:opacity-100 transition-opacity">
                  Cases de Sucesso
                </a>
              </li>
              <li>
                <a href="/galeria" className="hover:opacity-100 transition-opacity">
                  Galeria
                </a>
              </li>
              <li>
                <a href="/trabalhe-conosco" className="hover:opacity-100 transition-opacity">
                  Trabalhe Conosco
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:opacity-100 transition-opacity">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/area-restrita" className="hover:opacity-100 transition-opacity">
                  Área Restrita
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contato</h3>
            <div className="space-y-3 text-sm opacity-90">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+55 (11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>contato@siriusambiental.com.br</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span>
                  Av. Paulista, 1000 - Sala 1001<br />
                  São Paulo, SP - 01310-100
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm opacity-90">
          <p>© 2024 Sirius Ambiental. Todos os direitos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/politica-privacidade" className="hover:opacity-100 transition-opacity">
              Política de Privacidade
            </a>
            <a href="/termos-uso" className="hover:opacity-100 transition-opacity">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;