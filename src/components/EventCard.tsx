import { CalendarDays, Clock, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
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
  mapLink?: string;
  schedule?: ScheduleItem[];
}

const EventCard = ({
  date,
  time,
  location,
  locationDetails,
  mapLink,
  schedule
}: EventCardProps) => {
  return (
    <Card className="invitation-card animate-fade-in w-full max-w-md bg-white border-elegant">
      <CardHeader className="pb-2">
        <div className="w-full text-center">
          <div className="inline-block bg-elegant-secondary/20 text-elegant-accent font-medium px-3 py-1 rounded-full text-sm mb-4">
            Приглашение
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="flex items-start gap-3">
          <CalendarDays size={20} className="text-elegant-accent mt-1 flex-shrink-0" />
          <div>
            <p className="text-elegant-dark font-medium">Дата</p>
            <p className="text-muted-foreground text-sm">{date}</p>
          </div>
        </div>
        
        <div className="flex items-start gap-3">
          <Clock size={20} className="text-elegant-accent mt-1 flex-shrink-0" />
          <div>
            <p className="text-elegant-dark font-medium">Время</p>
            <p className="text-muted-foreground text-sm">{time}</p>
          </div>
        </div>
        
        <div className="flex items-start gap-3">
          <MapPin size={20} className="text-elegant-accent mt-1 flex-shrink-0" />
          <div>
            <p className="text-elegant-dark font-medium">Место</p>
            <p className="text-muted-foreground text-sm">{location}</p>
            <p className="text-muted-foreground text-sm">{locationDetails}</p>
            
            {mapLink && (
              <Button 
                variant="link" 
                className="p-0 h-auto text-elegant-accent hover:text-elegant-accent/80 text-sm"
                onClick={() => window.open(mapLink, "_blank")}
              >
                Открыть на карте
              </Button>
            )}
          </div>
        </div>
        
        {schedule && schedule.length > 0 && (
          <div className="border-t border-elegant-border pt-4 mt-4">
            <p className="text-elegant-dark font-medium mb-3">Расписание</p>
            <ul className="space-y-3">
              {schedule.map((item, index) => (
                <li key={index} className="flex gap-3">
                  <div className="w-24 flex-shrink-0 text-sm text-elegant-accent font-medium">
                    {item.time}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {item.activity}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default EventCard;