import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalendarPlus, Check } from "lucide-react";

type RsvpFormProps = {
  onSuccess: () => void;
};

const RsvpForm = ({ onSuccess }: RsvpFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    guests: "1",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // В реальном приложении здесь будет отправка на сервер или API
      // например: await fetch('/api/rsvp', { method: 'POST', body: JSON.stringify(formData) });
      
      // Имитация отправки данных
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log("Отправлены данные:", formData);
      onSuccess();
    } catch (error) {
      console.error("Ошибка при отправке:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
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
      
      <div className="space-y-2">
        <Label htmlFor="guests">Количество гостей</Label>
        <Input
          id="guests"
          name="guests"
          type="number"
          min="1"
          max="5"
          required
          value={formData.guests}
          onChange={handleChange}
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
