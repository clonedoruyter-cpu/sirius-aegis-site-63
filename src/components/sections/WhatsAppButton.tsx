import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const WhatsAppButton = () => {
  const { t } = useLanguage();
  const whatsappNumber = "5581998221113";
  const message = t('whatsapp.message');
  
  const handleWhatsAppClick = () => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    if (isMobile) {
      // On mobile, try to open the WhatsApp app directly
      window.location.href = `whatsapp://send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;
      
      // Fallback to wa.me if app doesn't open
      setTimeout(() => {
        window.open(waUrl, '_blank');
      }, 1000);
    } else {
      // On desktop, open wa.me in new tab
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <Button
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-strong animate-scale-in cursor-pointer"
      onClick={handleWhatsAppClick}
      aria-label={t('whatsapp.label')}
    >
      <div className="flex items-center space-x-2">
        <MessageCircle className="h-6 w-6" />
        <span className="hidden sm:inline font-medium">{t('whatsapp.text')}</span>
      </div>
    </Button>
  );
};

export default WhatsAppButton;