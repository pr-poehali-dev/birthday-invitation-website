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
      // Настройка отправки данных через EmailJS или другой сервис
      const serviceId = "default_service"; // Замените на ваш serviceId в EmailJS
      const templateId = "template_birthday_rsvp"; // Замените на ваш templateId
      const userId = "user_yourUserId"; // Замените на ваш userId

      const templateParams = {
        to_email: "xEsseax@yandex.ru",
        from_name: formData.name,
        from_email: formData.email,
        message: `${formData.name} подтвердил(а) присутствие на дне рождения.`,
      };

      // В реальном приложении используйте EmailJS или аналогичный сервис:
      // await emailjs.send(serviceId, templateId, templateParams, userId);
      
      // Имитация отправки данных (в реальном проекте замените на реальный запрос)
      console.log("Отправка данных на почту xEsseax@yandex.ru:", templateParams);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      onSuccess();
    } catch (error) {
      console.error("Ошибка при отправке:", error);
      alert("Произошла ошибка при отправке. Пожалуйста, попробуйте еще раз.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="w-full max-w-md space-y-4"
      action="https://formsubmit.co/xEsseax@yandex.ru" 
      method="POST"
    >
      <input type="hidden" name="_subject" value="Новое подтверждение на день рождения!" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value={window.location.href} />
      
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
