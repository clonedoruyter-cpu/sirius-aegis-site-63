import { Clock, MapPin, Award, Users } from 'lucide-react';

interface Stat {
  icon: React.ReactNode;
  number: string;
  label: string;
  description: string;
}

const stats: Stat[] = [
  {
    icon: <Clock className="h-8 w-8 text-white" />,
    number: "24h",
    label: "Tempo de Resposta",
    description: "Atendimento de emergência 24 horas por dia, 7 dias por semana"
  },
  {
    icon: <MapPin className="h-8 w-8 text-white" />,
    number: "100%",
    label: "Cobertura Nordeste",
    description: "Atendimento em toda região Nordeste e águas costeiras"
  },
  {
    icon: <Award className="h-8 w-8 text-white" />,
    number: "15+",
    label: "Anos de Experiência",
    description: "Mais de uma década de excelência em soluções ambientais"
  },
  {
    icon: <Users className="h-8 w-8 text-white" />,
    number: "500+",
    label: "Projetos Executados",
    description: "Centenas de projetos bem-sucedidos em diversos setores"
  }
];

const StatsSection = () => {
  return (
    <section className="py-20 gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-white mb-4">
            Números que Falam por Si
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Nossa experiência e dedicação se refletem em resultados concretos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center animate-scale-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-white/20 backdrop-blur-sm rounded-full">
                  {stat.icon}
                </div>
              </div>
              
              <div className="text-5xl font-bold text-white mb-2">
                {stat.number}
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3">
                {stat.label}
              </h3>
              
              <p className="text-white/80 leading-relaxed text-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;