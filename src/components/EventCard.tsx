
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ScheduleItem {
  time: string;
  activity: string;
}

interface EventCardProps {
  date: string;
  time: string;
  location: string;
  locationDetails: string;
  mapLink: string;
  schedule: ScheduleItem[];
}

const EventCard: React.FC<EventCardProps> = ({
  date,
  time,
  location,
  locationDetails,
  mapLink,
  schedule,
}) => {
  return (
    <Card className="invitation-card animate-fade-in">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-playfair text-elegant-dark">
          Детали мероприятия
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-start gap-3">
          <Calendar className="w-5 h-5 text-elegant-accent mt-0.5" />
          <div>
            <h3 className="font-medium text-elegant-dark">Дата</h3>
            <p className="text-muted-foreground">{date}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Clock className="w-5 h-5 text-elegant-accent mt-0.5" />
          <div>
            <h3 className="font-medium text-elegant-dark">Время</h3>
            <p className="text-muted-foreground">{time}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-elegant-accent mt-0.5" />
          <div>
            <h3 className="font-medium text-elegant-dark">Место</h3>
            <p className="text-muted-foreground">{location}</p>
            <p className="text-sm text-muted-foreground">{locationDetails}</p>
            <Button
              variant="link"
              className="p-0 h-auto text-elegant-accent hover:text-elegant-accent/80 mt-1"
              onClick={() => window.open(mapLink, "_blank")}
            >
              Открыть карту
            </Button>
          </div>
        </div>

        <div className="pt-2">
          <h3 className="font-medium text-elegant-dark mb-2">Программа</h3>
          <div className="space-y-2">
            {schedule.map((item, index) => (
              <div
                key={index}
                className="text-sm border-l-2 border-elegant-accent pl-3 py-1"
              >
                <p className="font-medium text-elegant-dark">{item.time}</p>
                <p className="text-muted-foreground">{item.activity}</p>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EventCard;
