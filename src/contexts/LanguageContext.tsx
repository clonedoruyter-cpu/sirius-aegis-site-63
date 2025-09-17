import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  pt: {
    // Header
    'nav.home': 'Início',
    'nav.about': 'Sobre',
    'nav.services': 'Serviços',
    'nav.contact': 'Contato',
    'nav.contactUs': 'Fale Conosco',
    
    // Hero Section
    'hero.title': 'Soluções Ambientais Especializadas',
    'hero.subtitle': 'Prevenção, resposta e consultoria ambiental para indústrias, portos e operações marítimas. Protegemos seu negócio e o meio ambiente com excelência técnica.',
    'hero.cta': 'Fale Conosco',
    'hero.emergency': 'Emergência 24h',
    'hero.main.title': 'Proteção Ambiental',
    'hero.main.subtitle': 'de Excelência',
    'hero.video': 'Vídeo Institucional',
    
    // Hero Slider
    'slider.slide1.title': 'Soluções Ambientais Completas',
    'slider.slide1.subtitle': 'Prevenção e Resposta a Emergências',
    'slider.slide1.desc': 'Especialistas em contenção, monitoramento e consultoria ambiental para indústrias e operações marítimas.',
    'slider.slide1.cta': 'Conheça Nossos Serviços',
    'slider.slide2.title': 'Emergências Marítimas',
    'slider.slide2.subtitle': 'Resposta Rápida e Eficiente',
    'slider.slide2.desc': 'Equipe especializada em contenção de vazamentos, salvamento e operações de emergência no ambiente marítimo.',
    'slider.slide2.cta': 'Ver Cases de Sucesso',
    'slider.slide3.title': 'Consultoria Especializada',
    'slider.slide3.subtitle': 'PEI, PAE e Monitoramento',
    'slider.slide3.desc': 'Desenvolvimento de planos de emergência, avaliações ambientais e monitoramento contínuo para sua empresa.',
    'slider.slide3.cta': 'Solicitar Consultoria',
    'slider.prev': 'Slide anterior',
    'slider.next': 'Próximo slide',
    'slider.goto': 'Ir para slide',
    
    // Services Overview
    'services.title': 'Nossos Serviços',
    'services.subtitle': 'Soluções completas em gestão ambiental para sua empresa',
    'services.containment.title': 'Barreiras de Contenção',
    'services.containment.desc': 'Sistemas de contenção para derramamentos de óleo e produtos químicos',
    'services.pei.title': 'PEI e PAE',
    'services.pei.desc': 'Planos de Emergência Individual e de Área personalizados',
    'services.emergency.title': 'Emergências Marítimas',
    'services.emergency.desc': 'Resposta rápida a incidentes ambientais marítimos',
    'services.monitoring.title': 'Monitoramento Ambiental',
    'services.monitoring.desc': 'Acompanhamento contínuo de indicadores ambientais',
    'services.consulting.title': 'Consultoria Ambiental',
    'services.consulting.desc': 'Assessoria especializada em conformidade ambiental',
    'services.salvage.title': 'Salvatagem e Resgate',
    'services.salvage.desc': 'Operações de salvamento marítimo e resgate ambiental',
    
    // Stats Section
    'stats.title': 'Nossa Experiência em Números',
    'stats.subtitle': 'Nossa experiência e dedicação se refletem em resultados concretos',
    'stats.projects': 'Projetos Realizados',
    'stats.clients': 'Clientes Atendidos',
    'stats.response': 'Tempo de Resposta',
    'stats.responseTime': '< 2 horas',
    'stats.experience': 'Anos de Experiência',
    'stats.response.desc': 'Atendimento de emergência 24 horas por dia, 7 dias por semana',
    'stats.coverage.title': 'Cobertura Nordeste',
    'stats.coverage.desc': 'Atendimento em toda região Nordeste e águas costeiras',
    'stats.experience.desc': 'Mais de uma década de excelência em soluções ambientais',
    'stats.projects.desc': 'Centenas de projetos bem-sucedidos em diversos setores',
    
    // Operations Gallery
    'operations.title': 'Nossas Operações',
    'operations.subtitle': 'Conheça alguns dos nossos trabalhos realizados em diferentes segmentos ambientais',
    'operations.filter.all': 'Todas',
    'operations.filter.emergency': 'Emergência',
    'operations.filter.monitoring': 'Monitoramento',
    'operations.filter.consulting': 'Consultoria',
    'operations.filter.salvage': 'Salvamento',
    'operations.containment.title': 'Contenção de Vazamentos',
    'operations.containment.desc': 'Operações de contenção e limpeza de vazamentos de óleo no ambiente marítimo',
    'operations.monitoring.title': 'Monitoramento Ambiental',
    'operations.monitoring.desc': 'Análise e monitoramento contínuo da qualidade da água e sedimentos',
    'operations.consultancy.title': 'Consultoria Técnica',
    'operations.consultancy.desc': 'Desenvolvimento de planos de emergência e avaliações ambientais',
    'operations.salvage.title': 'Salvamento Marítimo',
    'operations.salvage.desc': 'Operações de salvamento e resgate em ambiente marítimo',

    // Industry Section
    'industry.title': 'Setores Atendidos',
    'industry.subtitle': 'Experiência diversificada em múltiplos segmentos industriais, oferecendo soluções personalizadas para cada necessidade',
    'industry.services': 'Principais Serviços:',
    'industry.ports.title': 'Portos e Terminais',
    'industry.ports.desc': 'Soluções especializadas para operações portuárias e terminais marítimos.',
    'industry.ports.service1': 'Contenção de vazamentos',
    'industry.ports.service2': 'Planos de emergência',
    'industry.ports.service3': 'Monitoramento contínuo',
    'industry.chemical.title': 'Indústria Química',
    'industry.chemical.desc': 'Prevenção e resposta a emergências em plantas químicas e petroquímicas.',
    'industry.chemical.service1': 'PEI e PAE',
    'industry.chemical.service2': 'Análise de riscos',
    'industry.chemical.service3': 'Treinamentos especializados',
    'industry.energy.title': 'Usinas e Energia',
    'industry.energy.desc': 'Consultoria ambiental para usinas termelétricas, hidrelétricas e eólicas.',
    'industry.energy.service1': 'Licenciamento ambiental',
    'industry.energy.service2': 'Monitoramento',
    'industry.energy.service3': 'Gestão de resíduos',
    'industry.oil.title': 'Petróleo e Gás',
    'industry.oil.desc': 'Soluções completas para upstream, midstream e downstream.',
    'industry.oil.service1': 'Resposta a vazamentos',
    'industry.oil.service2': 'Consultoria regulatória',
    'industry.oil.service3': 'Planos de contingência',
    'industry.transport.title': 'Transporte de Produtos',
    'industry.transport.desc': 'Segurança no transporte de cargas perigosas e produtos químicos.',
    'industry.transport.service1': 'Planos de rota',
    'industry.transport.service2': 'Treinamento de condutores',
    'industry.transport.service3': 'Equipamentos de segurança',
    'industry.manufacturing.title': 'Grandes Indústrias',
    'industry.manufacturing.desc': 'Consultoria para indústrias siderúrgicas, alimentícias e farmacêuticas.',
    'industry.manufacturing.service1': 'Avaliação de impacto',
    'industry.manufacturing.service2': 'Compliance ambiental',
    'industry.manufacturing.service3': 'Sustentabilidade',
    
    // Testimonials
    'testimonials.title': 'O Que Nossos Clientes Dizem',
    'testimonials.subtitle': 'A confiança de grandes empresas é nosso maior reconhecimento',
    'testimonials.client1.name': 'Carlos Eduardo Silva',
    'testimonials.client1.position': 'Gerente de Operações',
    'testimonials.client1.company': 'Porto de Santos S.A.',
    'testimonials.client1.text': 'A Sirius Ambiental demonstrou excelência técnica em nossa última emergência. A resposta foi rápida e eficiente, minimizando impactos ambientais significativos.',
    'testimonials.client2.name': 'Ana Paula Rodrigues',
    'testimonials.client2.position': 'Diretora de Sustentabilidade',
    'testimonials.client2.company': 'Braskem',
    'testimonials.client2.text': 'Os planos de emergência desenvolvidos pela equipe são detalhados e práticos. A consultoria superou nossas expectativas em compliance ambiental.',
    'testimonials.client3.name': 'Roberto Mendes',
    'testimonials.client3.position': 'Comandante',
    'testimonials.client3.company': 'Transpetro',
    'testimonials.client3.text': 'Profissionalismo e conhecimento técnico excepcionais. A Sirius é nossa parceira de confiança para operações críticas no ambiente marítimo.',
    
    // CTA Section
    'cta.title': 'Pronto para Proteger seu Negócio?',
    'cta.subtitle': 'Entre em contato conosco e descubra como nossas soluções ambientais podem prevenir riscos e garantir a conformidade do seu projeto.',
    'cta.emergency.title': 'Emergência 24h',
    'cta.emergency.desc': 'Atendimento imediato',
    'cta.contact.title': 'Fale Conosco',
    'cta.contact.desc': 'Consultoria e orçamentos personalizados',
    'cta.contact.email': 'Enviar E-mail',
    'cta.quote.title': 'Solicitar Orçamento',
    'cta.quote.desc': 'Proposta técnica sem compromisso',
    'cta.quote.button': 'Solicitar Agora',
    'cta.footer': 'Resposta em até 2 horas úteis • Atendimento no Nordeste • Certificações ISO 14001',
    
    // Footer
    'footer.description': 'Especialistas em soluções ambientais para indústrias, portos e operações marítimas. Prevenção, consultoria e resposta a emergências ambientais.',
    'footer.services': 'Serviços',
    'footer.quickLinks': 'Links Rápidos',
    'footer.contact': 'Contato',
    'footer.aboutUs': 'Sobre Nós',
    'footer.workWithUs': 'Trabalhe Conosco',
    'footer.faq': 'FAQ',
    'footer.copyright': '© 2025 SIRIUS PORT LTDA - CNPJ: 53.279.793/0001-96',
    'footer.rights': 'Todos os direitos reservados.',
    'footer.privacy': 'Política de Privacidade',
    'footer.terms': 'Termos de Uso',
    
    // WhatsApp
    'whatsapp.message': 'Olá! Gostaria de saber mais sobre os serviços da Sirius Ambiental.',
    'whatsapp.label': 'Falar no WhatsApp',
    'whatsapp.text': 'WhatsApp',
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'nav.contactUs': 'Contact Us',
    
    // Hero Section
    'hero.title': 'Specialized Environmental Solutions',
    'hero.subtitle': 'Prevention, response and environmental consulting for industries, ports and maritime operations. We protect your business and the environment with technical excellence.',
    'hero.cta': 'Contact Us',
    'hero.emergency': '24h Emergency',
    'hero.main.title': 'Environmental Protection',
    'hero.main.subtitle': 'of Excellence',
    'hero.video': 'Corporate Video',
    
    // Hero Slider
    'slider.slide1.title': 'Complete Environmental Solutions',
    'slider.slide1.subtitle': 'Prevention and Emergency Response',
    'slider.slide1.desc': 'Specialists in containment, monitoring and environmental consulting for industries and maritime operations.',
    'slider.slide1.cta': 'Learn About Our Services',
    'slider.slide2.title': 'Maritime Emergencies',
    'slider.slide2.subtitle': 'Fast and Efficient Response',
    'slider.slide2.desc': 'Specialized team in spill containment, salvage and emergency operations in maritime environment.',
    'slider.slide2.cta': 'View Success Cases',
    'slider.slide3.title': 'Specialized Consulting',
    'slider.slide3.subtitle': 'Emergency Plans & Monitoring',
    'slider.slide3.desc': 'Development of emergency plans, environmental assessments and continuous monitoring for your company.',
    'slider.slide3.cta': 'Request Consulting',
    'slider.prev': 'Previous slide',
    'slider.next': 'Next slide',
    'slider.goto': 'Go to slide',
    
    // Services Overview
    'services.title': 'Our Services',
    'services.subtitle': 'Complete environmental management solutions for your company',
    'services.containment.title': 'Containment Barriers',
    'services.containment.desc': 'Containment systems for oil and chemical spills',
    'services.pei.title': 'Individual Emergency Plans',
    'services.pei.desc': 'Customized Individual and Area Emergency Plans',
    'services.emergency.title': 'Maritime Emergencies',
    'services.emergency.desc': 'Rapid response to maritime environmental incidents',
    'services.monitoring.title': 'Environmental Monitoring',
    'services.monitoring.desc': 'Continuous monitoring of environmental indicators',
    'services.consulting.title': 'Environmental Consulting',
    'services.consulting.desc': 'Specialized advisory in environmental compliance',
    'services.salvage.title': 'Salvage and Rescue',
    'services.salvage.desc': 'Maritime salvage and environmental rescue operations',
    
    // Stats Section
    'stats.title': 'Our Experience in Numbers',
    'stats.subtitle': 'Our experience and dedication are reflected in concrete results',
    'stats.projects': 'Completed Projects',
    'stats.clients': 'Clients Served',
    'stats.response': 'Response Time',
    'stats.responseTime': '< 2 hours',
    'stats.experience': 'Years of Experience',
    'stats.response.desc': '24/7 emergency response service',
    'stats.coverage.title': 'Northeast Coverage',
    'stats.coverage.desc': 'Service throughout the Northeast region and coastal waters',
    'stats.experience.desc': 'More than a decade of excellence in environmental solutions',
    'stats.projects.desc': 'Hundreds of successful projects across various sectors',
    
    // Operations Gallery
    'operations.title': 'Our Operations',
    'operations.subtitle': 'Learn about some of our work carried out in different environmental segments',
    'operations.filter.all': 'All',
    'operations.filter.emergency': 'Emergency',
    'operations.filter.monitoring': 'Monitoring',
    'operations.filter.consulting': 'Consulting',
    'operations.filter.salvage': 'Salvage',
    'operations.containment.title': 'Spill Containment',
    'operations.containment.desc': 'Oil spill containment and cleanup operations in maritime environment',
    'operations.monitoring.title': 'Environmental Monitoring',
    'operations.monitoring.desc': 'Continuous analysis and monitoring of water and sediment quality',
    'operations.consultancy.title': 'Technical Consulting',
    'operations.consultancy.desc': 'Development of emergency plans and environmental assessments',
    'operations.salvage.title': 'Maritime Salvage',
    'operations.salvage.desc': 'Salvage and rescue operations in maritime environment',

    // Industry Section
    'industry.title': 'Industries Served',
    'industry.subtitle': 'Diversified experience across multiple industrial segments, offering customized solutions for each need',
    'industry.services': 'Main Services:',
    'industry.ports.title': 'Ports and Terminals',
    'industry.ports.desc': 'Specialized solutions for port operations and maritime terminals.',
    'industry.ports.service1': 'Spill containment',
    'industry.ports.service2': 'Emergency plans',
    'industry.ports.service3': 'Continuous monitoring',
    'industry.chemical.title': 'Chemical Industry',
    'industry.chemical.desc': 'Prevention and response to emergencies in chemical and petrochemical plants.',
    'industry.chemical.service1': 'Individual Emergency Plans',
    'industry.chemical.service2': 'Risk analysis',
    'industry.chemical.service3': 'Specialized training',
    'industry.energy.title': 'Power Plants and Energy',
    'industry.energy.desc': 'Environmental consulting for thermal, hydroelectric and wind power plants.',
    'industry.energy.service1': 'Environmental licensing',
    'industry.energy.service2': 'Monitoring',
    'industry.energy.service3': 'Waste management',
    'industry.oil.title': 'Oil and Gas',
    'industry.oil.desc': 'Complete solutions for upstream, midstream and downstream.',
    'industry.oil.service1': 'Spill response',
    'industry.oil.service2': 'Regulatory consulting',
    'industry.oil.service3': 'Contingency plans',
    'industry.transport.title': 'Product Transportation',
    'industry.transport.desc': 'Safety in transportation of dangerous cargo and chemical products.',
    'industry.transport.service1': 'Route planning',
    'industry.transport.service2': 'Driver training',
    'industry.transport.service3': 'Safety equipment',
    'industry.manufacturing.title': 'Large Industries',
    'industry.manufacturing.desc': 'Consulting for steel, food and pharmaceutical industries.',
    'industry.manufacturing.service1': 'Impact assessment',
    'industry.manufacturing.service2': 'Environmental compliance',
    'industry.manufacturing.service3': 'Sustainability',
    
    // Testimonials
    'testimonials.title': 'What Our Clients Say',
    'testimonials.subtitle': 'The trust of large companies is our greatest recognition',
    'testimonials.client1.name': 'Carlos Eduardo Silva',
    'testimonials.client1.position': 'Operations Manager',
    'testimonials.client1.company': 'Port of Santos S.A.',
    'testimonials.client1.text': 'Sirius Environmental demonstrated technical excellence in our last emergency. The response was fast and efficient, minimizing significant environmental impacts.',
    'testimonials.client2.name': 'Ana Paula Rodrigues',
    'testimonials.client2.position': 'Sustainability Director',
    'testimonials.client2.company': 'Braskem',
    'testimonials.client2.text': 'The emergency plans developed by the team are detailed and practical. The consulting exceeded our expectations in environmental compliance.',
    'testimonials.client3.name': 'Roberto Mendes',
    'testimonials.client3.position': 'Commander',
    'testimonials.client3.company': 'Transpetro',
    'testimonials.client3.text': 'Exceptional professionalism and technical knowledge. Sirius is our trusted partner for critical operations in the maritime environment.',
    
    // CTA Section
    'cta.title': 'Ready to Protect Your Business?',
    'cta.subtitle': 'Contact us and discover how our environmental solutions can prevent risks and ensure compliance for your project.',
    'cta.emergency.title': '24h Emergency',
    'cta.emergency.desc': 'Immediate service',
    'cta.contact.title': 'Contact Us',
    'cta.contact.desc': 'Consulting and personalized quotes',
    'cta.contact.email': 'Send Email',
    'cta.quote.title': 'Request Quote',
    'cta.quote.desc': 'Technical proposal without commitment',
    'cta.quote.button': 'Request Now',
    'cta.footer': 'Response within 2 business hours • Service in Northeast Brazil • ISO 14001 Certifications',
    
    // Footer
    'footer.description': 'Environmental solutions specialists for industries, ports and maritime operations. Prevention, consulting and response to environmental emergencies.',
    'footer.services': 'Services',
    'footer.quickLinks': 'Quick Links',
    'footer.contact': 'Contact',
    'footer.aboutUs': 'About Us',
    'footer.workWithUs': 'Work With Us',
    'footer.faq': 'FAQ',
    'footer.copyright': '© 2025 SIRIUS PORT LTDA - CNPJ: 53.279.793/0001-96',
    'footer.rights': 'All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Use',
    
    // WhatsApp
    'whatsapp.message': 'Hello! I would like to know more about Sirius Environmental services.',
    'whatsapp.label': 'Chat on WhatsApp',
    'whatsapp.text': 'WhatsApp',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};