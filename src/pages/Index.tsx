import { useState, useEffect } from "react";
import { 
  Card, 
  CardContent
} from "@/components/ui/card";
import { Check, MapPin } from "lucide-react";
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
          title="Приглашение на день рождения" 
          subtitle="Приходите разделить с нами этот особенный день" 
        />
        
        <div className="flex flex-col md:flex-row gap-6 mb-10 w-full justify-center">
          <div className="flex flex-col gap-6">
            <EventCard 
              date="18 мая 2023, воскресенье"
              time="с 18:00 до 22:00"
              location="Лофт «Атмосфера»"
              locationDetails="ул. Пушкина, 10 (5 мин. от м. Центральная)"
              mapLink="https://maps.google.com"
              schedule={[
                {
                  time: "18:00 - 19:00",
                  activity: "Встреча гостей, приветственные напитки"
                },
                {
                  time: "19:00 - 21:00",
                  activity: "Просмотр фильма «Кардинал»"
                },
                {
                  time: "21:00 - 22:00",
                  activity: "Пицца, попкорн и дружеское общение"
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
