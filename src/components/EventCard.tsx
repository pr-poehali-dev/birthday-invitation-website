import { 
  Clock, 
  MapPin, 
  Film, 
  Pizza, 
  Popcorn
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

type EventCardProps = {
  date: string;
  time: string;
  location: string;
  activities: string[];
};

const EventCard = ({
  date,
  time,
  location,
  activities
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
          <h3 className="text-lg font-medium text-elegant-dark mb-3">Программа</h3>
          <ul className="space-y-2">
            {activities.map((activity, index) => (
              <li key={index} className="flex items-center gap-2 text-elegant-dark">
                {index === 0 && <Film size={18} className="text-elegant-accent" />}
                {index === 1 && <Pizza size={18} className="text-elegant-accent" />}
                {index === 2 && <Popcorn size={18} className="text-elegant-accent" />}
                <span>{activity}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default EventCard;
