import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext 
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const VenueGallery = () => {
  const images = [
    {
      url: "https://cdn.poehali.dev/files/61528098-cfbb-4592-9aae-647de3afd1c4.png",
      description: "Проекционный экран в зале 'Сад'"
    },
    {
      url: "https://cdn.poehali.dev/files/c23f6a4c-4951-4784-ba70-c379664e7314.png",
      description: "Декоративные элементы в интерьере"
    },
    {
      url: "https://cdn.poehali.dev/files/8fb97502-c3ee-4edb-8b21-3dbdb41cfa4e.png",
      description: "Уютный интерьер с винтажными фигурками"
    }
  ];

  return (
    <div className="w-full max-w-md mx-auto mt-6 animate-fade-in">
      <h3 className="text-lg font-medium text-elegant-dark mb-3 text-center">Зал "Сад"</h3>
      
      <Carousel className="w-full">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <Card className="border-elegant overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-video relative">
                    <img 
                      src={image.url} 
                      alt={image.description}
                      className="w-full h-full object-cover" 
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-2">
                      <p className="text-white text-sm text-center">{image.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-6" />
        <CarouselNext className="-right-6" />
      </Carousel>
    </div>
  );
};

export default VenueGallery;
