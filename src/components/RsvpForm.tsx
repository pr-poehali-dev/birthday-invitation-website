import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalendarPlus } from "lucide-react";

type RsvpFormProps = {
  onSuccess: () => void;
};

const RsvpForm = ({ onSuccess }: RsvpFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Простая отправка через стандартный mailto: протокол 
    // Это откроет почтовый клиент пользователя
    const mailtoLink = `mailto:xEsseax@yandex.ru?subject=Подтверждение на день рождения&body=Имя: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AЯ подтверждаю своё присутствие на дне рождения 18 мая.`;
    
    window.location.href = mailtoLink;
    
    // Показываем успешное подтверждение даже если пользователь
    // закрыл почтовый клиент без отправки
    setTimeout(() => {
      onSuccess();
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="w-full max-w-md space-y-4"
    >
      <div className="space-y-2">
        <Label htmlFor="name">Ваше имя</Label>
        <Input
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="Иван Иванов"
          className="border-elegant-muted"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email">Email для связи</Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com"
          className="border-elegant-muted"
        />
      </div>
      
      <Button 
        type="submit"
        className="bg-elegant-accent hover:bg-elegant-accent/90 text-white font-medium flex items-center gap-2 animate-fade-in w-full"
        size="lg"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <span>Отправка...</span>
        ) : (
          <>
            <CalendarPlus size={18} />
            <span>Подтвердить присутствие</span>
          </>
        )}
      </Button>
      
      <p className="text-xs text-center text-muted-foreground mt-2">
        Нажимая кнопку, вы соглашаетесь на открытие почтового клиента
      </p>
    </form>
  );
};

export default RsvpForm;
