import { useState, useEffect } from "react";
import { 
  Card, 
  CardContent
} from "@/components/ui/card";
import { Check } from "lucide-react";
import InvitationHeader from "@/components/InvitationHeader";
import EventCard from "@/components/EventCard";
import RsvpForm from "@/components/RsvpForm";
import VenueGallery from "@/components/VenueGallery";

const Index = () => {
  const [rsvpConfirmed, setRsvpConfirmed] = useState(false);

  const handleRsvpSuccess = () => {
    setRsvpConfirmed(true);
    // Сохраняем статус в localStorage, чтобы он сохранялся при перезагрузке страницы
    localStorage.setItem('rsvpConfirmed', 'true');
  };

  // Проверяем статус при загрузке страницы
  useEffect(() => {
    const savedStatus = localStorage.getItem('rsvpConfirmed');
    if (savedStatus === 'true') {
      setRsvpConfirmed(true);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-elegant-light py-10">
      <div className="container max-w-3xl px-4">
        <InvitationHeader 
          title="Happy fckng B-day party" 
          subtitle="будет весело (но это не точно)" 
        />
        
        <div className="flex flex-col md:flex-row gap-6 mb-10 w-full justify-center">
          <div className="flex flex-col gap-6">
            <EventCard 
              date="18 мая 2025, воскресенье"
              time="с 18:20 до 22:00"
              location="Кинотеатр «Секрет», зал «Сад»"
              locationDetails="ул. Щербаковская, 53к17 (м. Измайлово, м. Партизанская, м. Семёновская)"
              mapLink="https://clck.ru/3CegJG"
              schedule={[
                {
                  time: "18:20 - 18:40",
                  activity: "Сбор гостей"
                },
                {
                  time: "18:40 - 20:40",
                  activity: "Просмотр фильма \"Конклав\""
                },
                {
                  time: "20:40 - 22:00",
                  activity: "Обнимаемся, разъезжаемся, готовимся не умереть утром понедельника"
                }
              ]}
            />
            
            <VenueGallery />
          </div>
          
          <Card className="invitation-card animate-fade-in max-w-md bg-white border-elegant">
            <CardContent className="p-6 flex flex-col items-center justify-center h-full">
              <img 
                src="/placeholder.svg" 
                alt="Праздничное изображение" 
                className="w-32 h-32 mb-6 rounded-full object-cover"
              />
              
              <p className="text-center text-elegant-dark mb-6">
                Будем рады видеть вас на нашем празднике! Пожалуйста, подтвердите своё присутствие.
              </p>
              
              {rsvpConfirmed ? (
                <div className="flex flex-col items-center gap-2 text-green-600 animate-fade-in">
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5" />
                    <span>Ваш ответ принят!</span>
                  </div>
                  <p className="text-sm text-elegant-dark mt-2">
                    Спасибо за подтверждение. Ждём вас на празднике!
                  </p>
                </div>
              ) : (
                <RsvpForm onSuccess={handleRsvpSuccess} />
              )}
            </CardContent>
          </Card>
        </div>
        
        <footer className="text-center text-sm text-muted-foreground mt-12">
          <p>С нетерпением ждём встречи с вами!</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
