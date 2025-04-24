import { Card, CardContent } from "@/components/ui/card";

const VenueGallery = () => {
  // Массив с изображениями места проведения
  // В реальном проекте здесь будут настоящие изображения лофта
  const images = [
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
  ];

  return (
    <Card className="invitation-card animate-fade-in w-full max-w-md bg-white border-elegant">
      <CardContent className="p-4">
        <h3 className="text-elegant-dark font-medium mb-3 text-center">
          Место проведения
        </h3>
        <div className="grid grid-cols-3 gap-2">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="aspect-square rounded-md overflow-hidden"
            >
              <img
                src={image}
                alt={`Место проведения ${index + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default VenueGallery;