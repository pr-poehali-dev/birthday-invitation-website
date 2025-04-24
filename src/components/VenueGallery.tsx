
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const VenueGallery: React.FC = () => {
  // Массив заглушек для галереи
  const galleryImages = [
    {
      src: "/placeholder.svg",
      alt: "Интерьер лофта",
    },
    {
      src: "/placeholder.svg",
      alt: "Кинозал",
    },
    {
      src: "/placeholder.svg",
      alt: "Зона отдыха",
    },
  ];

  return (
    <Card className="invitation-card animate-fade-in">
      <CardContent className="p-4">
        <h3 className="text-lg font-medium text-elegant-dark mb-3">
          Место проведения
        </h3>
        <div className="grid grid-cols-3 gap-2">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="aspect-square rounded-md overflow-hidden hover:opacity-90 transition-opacity"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default VenueGallery;
