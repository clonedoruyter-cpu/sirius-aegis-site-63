import { useState } from 'react';
import { Eye, X, Play } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import teamAction1 from '@/assets/team-action-1.jpg';
import teamAction2 from '@/assets/team-action-2.jpg';
import teamAction3 from '@/assets/team-action-3.jpg';
import teamAction4 from '@/assets/team-action-4.jpg';
import teamAction5 from '@/assets/team-action-5.jpg';
import teamAction6 from '@/assets/team-action-6.jpg';
import teamAction7 from '@/assets/team-action-7.jpg';
import teamAction8 from '@/assets/team-action-8.jpg';
import teamAction9 from '@/assets/team-action-9.jpg';
import teamAction10 from '@/assets/team-action-10.png';
import teamAction11 from '@/assets/team-action-11.jpeg';
import teamAction12 from '@/assets/team-action-12.jpeg';
import teamAction13 from '@/assets/team-action-13.jpeg';
import teamVideo1 from '@/assets/team-action-video-1.mp4';
import teamVideo2 from '@/assets/team-action-video-2.mp4';
import teamVideo3 from '@/assets/team-action-video-3.mp4';

const TeamInAction = () => {
  const { t } = useLanguage();
  const [selectedMedia, setSelectedMedia] = useState<{ src: string; alt: string; type: 'image' | 'video' } | null>(null);

  const teamMedia = [
    { src: teamAction1, alt: t('teamAction.alt1'), type: 'image' as const },
    { src: teamAction2, alt: t('teamAction.alt2'), type: 'image' as const },
    { src: teamAction3, alt: t('teamAction.alt3'), type: 'image' as const },
    { src: teamAction4, alt: t('teamAction.alt4'), type: 'image' as const },
    { src: teamAction5, alt: t('teamAction.alt5'), type: 'image' as const },
    { src: teamAction6, alt: t('teamAction.alt6'), type: 'image' as const },
    { src: teamAction7, alt: t('teamAction.alt7'), type: 'image' as const },
    { src: teamAction8, alt: t('teamAction.alt8'), type: 'image' as const },
    { src: teamAction9, alt: t('teamAction.alt9'), type: 'image' as const },
    { src: teamAction10, alt: 'Embarcação Antunes da equipe Sirius', type: 'image' as const },
    { src: teamAction11, alt: 'Embarcação Solis em manutenção', type: 'image' as const },
    { src: teamAction12, alt: 'Embarcação preventivo 09', type: 'image' as const },
    { src: teamAction13, alt: 'Embarcação da equipe em operação', type: 'image' as const },
    { src: teamVideo1, alt: 'Vídeo da equipe em ação', type: 'video' as const },
    { src: teamVideo2, alt: 'Vídeo da equipe em operação', type: 'video' as const },
    { src: teamVideo3, alt: 'Vídeo de operação da equipe', type: 'video' as const }
  ];


  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-primary mb-4">
            {t('teamAction.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('teamAction.description')}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {teamMedia.map((media, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div 
                    className="group relative overflow-hidden rounded-lg shadow-soft hover:shadow-medium transition-all duration-300 cursor-pointer"
                    onClick={() => setSelectedMedia(media)}
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      {media.type === 'image' ? (
                        <img
                          src={media.src}
                          alt={media.alt}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      ) : (
                        <video
                          src={media.src}
                          className="w-full h-full object-cover"
                          muted
                        />
                      )}
                    </div>
                    
                    {/* Ícone de vídeo sempre visível */}
                    {media.type === 'video' && (
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-lg">
                          <Play className="h-8 w-8 text-primary" fill="currentColor" />
                        </div>
                      </div>
                    )}
                    
                    {/* Overlay gradiente no hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute top-4 right-4">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                          <Eye className="h-5 w-5 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>

        <div className="text-center mt-8">
          <p className="text-muted-foreground">
            {t('teamAction.slideHint')}
          </p>
        </div>

        {/* Lightbox Modal */}
        <Dialog open={!!selectedMedia} onOpenChange={() => setSelectedMedia(null)}>
          <DialogContent className="max-w-6xl p-0 bg-transparent border-0">
            {selectedMedia && (
              <div className="relative">
                {selectedMedia.type === 'image' ? (
                  <img
                    src={selectedMedia.src}
                    alt={selectedMedia.alt}
                    className="w-full h-auto rounded-lg max-h-[90vh] object-contain"
                  />
                ) : (
                  <video
                    src={selectedMedia.src}
                    className="w-full h-auto rounded-lg max-h-[90vh]"
                    controls
                    autoPlay
                  />
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full p-2"
                  onClick={() => setSelectedMedia(null)}
                >
                  <X className="h-6 w-6" />
                </Button>
                
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                  <p className="text-white text-lg">
                    {selectedMedia.alt}
                  </p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default TeamInAction;