import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhatsAppButton = () => {
  const whatsappNumber = "5511999999999"; // Replace with actual number
  const message = "Olá! Gostaria de saber mais sobre os serviços da Sirius Ambiental.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Button
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-strong animate-scale-in"
      asChild
      aria-label="Falar no WhatsApp"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="hidden sm:inline font-medium">WhatsApp</span>
      </a>
    </Button>
  );
};

export default WhatsAppButton;