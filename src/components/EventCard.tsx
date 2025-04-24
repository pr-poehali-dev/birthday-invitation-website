import { 
  Clock, 
  MapPin, 
  Users,
  Film, 
  Pizza, 
  Popcorn
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

type EventCardProps = {
  date: string;
  time: string;
  location: string;
  schedule: Array<{time: string, activity: string}>;
};

const EventCard = ({
  date,
  time,
  location,
  schedule
}: EventCardProps) => {
  return (
    <Card className="invitation-card animate-fade-in w-full max-w-md bg-white border-elegant">
      <CardContent className="pt-6 px-6">
        <div className="mb-6">
          <h3 className="text-lg font-medium text-elegant-dark flex items-center gap-2">
            <Clock size={18} className="text-elegant-accent" /> Когда
          </h3>
          <div className="pl-7 mt-2">
            <p className="text-elegant-dark">{date}</p>
            <p className="text-muted-foreground">{time}</p>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-medium text-elegant-dark flex items-center gap-2">
            <MapPin size={18} className="text-elegant-accent" /> Где
          </h3>
          <p className="pl-7 mt-2 text-elegant-dark">{location}</p>
        </div>
        
        <div>
          <h3 className="text-lg font-medium text-elegant-dark mb-3">Расписание</h3>
          <ul className="space-y-3">
            {schedule.map((item, index) => (
              <li key={index} className="flex gap-2 text-elegant-dark">
                <div className="flex-shrink-0 mt-0.5">
                  {index === 0 && <Users size={18} className="text-elegant-accent" />}
                  {index === 1 && <Film size={18} className="text-elegant-accent" />}
                  {index === 2 && <Popcorn size={18} className="text-elegant-accent" />}
                </div>
                <div>
                  <p className="font-medium">{item.time}</p>
                  <p className="text-sm text-muted-foreground">{item.activity}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default EventCard;
