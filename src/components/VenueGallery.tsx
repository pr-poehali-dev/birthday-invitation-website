
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const VenueGallery: React.FC = () => {
  return (
    <Card className="invitation-card animate-fade-in">
      <CardHeader>
        <CardTitle className="text-xl font-medium text-elegant-dark">
          Место проведения
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-2">
          <AspectRatio ratio={1 / 1} className="bg-muted rounded-md overflow-hidden">
            <img
              src="/placeholder.svg"
              alt="Лофт интерьер"
              className="object-cover h-full w-full transition-transform hover:scale-105 duration-300"
            />
          </AspectRatio>
          <AspectRatio ratio={1 / 1} className="bg-muted rounded-md overflow-hidden">
            <img
              src="/placeholder.svg" 
              alt="Кинозал"
              className="object-cover h-full w-full transition-transform hover:scale-105 duration-300"
            />
          </AspectRatio>
        </div>
        <p className="text-sm text-muted-foreground text-center">
          Уютный лофт с проектором и комфортной зоной для просмотра
        </p>
      </CardContent>
    </Card>
  );
};

export default VenueGallery;
