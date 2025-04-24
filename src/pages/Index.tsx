
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
import GiftSection from "@/components/GiftSection";
import FilmDetails from "@/components/FilmDetails";

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
          title="Happy fckng B-Day party" 
          subtitle="Будет весело, но это не точно" 
        />
        
        <div className="flex flex-col md:flex-row gap-6 mb-10 w-full justify-center">
          <div className="flex flex-col gap-6">
            <EventCard 
              date="19 мая, воскресенье"
              time="с 18:20 до 22:00"
              location="Кинотеатр «Секрет», зал «Сад»"
              locationDetails="Сельскохозяйственная 15с3 (м. Ботанический сад, 6-10 мин. пешком)"
              mapLink="https://yandex.ru/maps/-/CHfFr0zq"
              parkingInfo="Своей парковки у кинотеатра нет, но можно воспользоваться городскими."
              schedule={[
                {
                  time: "18:20 - 18:40",
                  activity: "Сбор гостей, welcome drink"
                },
                {
                  time: "18:40 и до конца",
                  activity: "Пицца, попкорн и дружеское общение"
                },
                {
                  time: "19:00 - 21:00",
                  activity: "Просмотр фильма «Конклав»"
                },
                {
                  time: "21:40 - 22:00",
                  activity: "Обнимаемся, расходимся и пытаемся выжить следующим утром"
                }
              ]}
            />
            
            <FilmDetails 
              title="Конклав"
              rating="7.2"
              description="Фильм о конклаве по избранию нового Папы Римского. Политические интриги, напряжение и неожиданные повороты в атмосфере Ватикана."
              watchLink="https://wink.ru/movies/konklav-year-2024"
              posterUrl="https://cdn.poehali.dev/files/156c31ee-7614-4515-9542-bf9f455e392f.jpg"
            />
          </div>
          
          <div className="flex flex-col gap-6">
            <Card className="invitation-card animate-fade-in max-w-md bg-white">
              <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                <img 
                  src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
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
            
            <GiftSection />
            
            <VenueGallery />
          </div>
        </div>
        
        <footer className="text-center text-sm text-muted-foreground mt-12">
          <p>С нетерпением ждём встречи с вами!</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
