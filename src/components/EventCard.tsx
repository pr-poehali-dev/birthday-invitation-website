
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarIcon, ClockIcon, MapPinIcon, ParkingIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

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
  parkingInfo: string;
  schedule: ScheduleItem[];
}

const EventCard: React.FC<EventCardProps> = ({
  date,
  time,
  location,
  locationDetails,
  mapLink,
  parkingInfo,
  schedule,
}) => {
  return (
    <Card className="invitation-card animate-fade-in">
      <CardHeader>
        <CardTitle className="text-xl font-medium text-elegant-dark">
          Детали мероприятия
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        <div className="flex items-start gap-3">
          <CalendarIcon className="w-5 h-5 text-elegant-accent shrink-0 mt-0.5" />
          <div>
            <h3 className="font-medium text-elegant-dark">Дата</h3>
            <p className="text-muted-foreground">{date}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <ClockIcon className="w-5 h-5 text-elegant-accent shrink-0 mt-0.5" />
          <div>
            <h3 className="font-medium text-elegant-dark">Время</h3>
            <p className="text-muted-foreground">{time}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <MapPinIcon className="w-5 h-5 text-elegant-accent shrink-0 mt-0.5" />
          <div>
            <h3 className="font-medium text-elegant-dark">Место</h3>
            <p className="text-muted-foreground">{location}</p>
            <p className="text-sm text-muted-foreground">{locationDetails}</p>
            <a href={mapLink} target="_blank" rel="noopener noreferrer">
              <Button variant="link" className="px-0 h-auto text-elegant-accent">
                Открыть карту
              </Button>
            </a>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <ParkingIcon className="w-5 h-5 text-elegant-accent shrink-0 mt-0.5" />
          <div>
            <h3 className="font-medium text-elegant-dark">Парковка</h3>
            <p className="text-sm text-muted-foreground">{parkingInfo}</p>
          </div>
        </div>

        <Separator className="my-1 bg-violet-100" />

        <div>
          <h3 className="font-medium text-elegant-dark mb-3">Программа</h3>
          <ul className="space-y-3">
            {schedule.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-sm font-medium text-elegant-accent whitespace-nowrap">
                  {item.time}
                </span>
                <span className="text-muted-foreground">—</span>
                <span className="text-muted-foreground">{item.activity}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default EventCard;
