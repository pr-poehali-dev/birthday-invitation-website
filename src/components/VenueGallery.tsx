
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
              src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="Кинотеатр интерьер"
              className="object-cover h-full w-full transition-transform hover:scale-105 duration-300"
            />
          </AspectRatio>
          <AspectRatio ratio={1 / 1} className="bg-muted rounded-md overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
              alt="Кинозал"
              className="object-cover h-full w-full transition-transform hover:scale-105 duration-300"
            />
          </AspectRatio>
        </div>
        <p className="text-sm text-muted-foreground text-center">
          Уютный кинотеатр "Секрет" с комфортным залом "Сад"
        </p>
      </CardContent>
    </Card>
  );
};

export default VenueGallery;
