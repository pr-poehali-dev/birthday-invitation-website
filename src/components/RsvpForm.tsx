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
    
    try {
      // Отправка данных через FormSubmit сервис
      const formElement = e.target as HTMLFormElement;
      const formData = new FormData(formElement);
      
      await fetch("https://formsubmit.co/xEsseax@yandex.ru", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      });
      
      // Показываем успешное подтверждение
      onSuccess();
    } catch (error) {
      console.error("Ошибка при отправке формы:", error);
      alert("Произошла ошибка при отправке. Пожалуйста, попробуйте позже.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="w-full max-w-md space-y-4"
    >
      {/* Скрытые поля для настройки FormSubmit */}
      <input type="hidden" name="_subject" value="Подтверждение на день рождения" />
      <input type="hidden" name="_captcha" value="false" />
      
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
    </form>
  );
};

export default RsvpForm;
