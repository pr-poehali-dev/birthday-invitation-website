
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLinkIcon, StarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FilmDetailsProps {
  title: string;
  rating: string;
  description: string;
  watchLink: string;
  posterUrl: string;
}

const FilmDetails: React.FC<FilmDetailsProps> = ({
  title,
  rating,
  description,
  watchLink,
  posterUrl,
}) => {
  return (
    <Card className="invitation-card overflow-hidden animate-fade-in relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 z-10"></div>
      <div
        className="absolute inset-0 bg-cover bg-center z-0 opacity-50"
        style={{ backgroundImage: `url(${posterUrl})` }}
      ></div>
      
      <CardHeader className="relative z-20">
        <CardTitle className="text-xl font-medium text-white">
          Фильм вечера
        </CardTitle>
      </CardHeader>
      
      <CardContent className="relative z-20 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold text-white">{title}</h3>
          <div className="flex items-center gap-1 bg-yellow-500 px-2 py-1 rounded text-sm">
            <StarIcon className="w-4 h-4" />
            <span className="font-medium">{rating}</span>
          </div>
        </div>
        
        <p className="text-white/90">{description}</p>
        
        <a href={watchLink} target="_blank" rel="noopener noreferrer">
          <Button variant="outline" className="gap-2 bg-white/10 border-white/20 text-white hover:bg-white/20">
            Смотреть на Wink
            <ExternalLinkIcon className="w-4 h-4" />
          </Button>
        </a>
      </CardContent>
    </Card>
  );
};

export default FilmDetails;
