
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface RsvpFormProps {
  onSuccess: () => void;
}

const RsvpForm: React.FC<RsvpFormProps> = ({ onSuccess }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [guests, setGuests] = useState("1");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Имитация отправки формы (в реальном приложении здесь будет API запрос)
    setTimeout(() => {
      setIsSubmitting(false);
      onSuccess();
    }, 1500);
    
    // Пример реальной отправки через FormSubmit
    // const form = e.target as HTMLFormElement;
    // form.action = "https://formsubmit.co/your-email@example.com";
    // form.method = "POST";
    // form.submit();
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name" className="form-label">
          Ваше имя
        </Label>
        <Input
          id="name"
          type="text"
          placeholder="Иван Иванов"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="form-input"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="form-label">
          Email для связи
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="ivan@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="form-input"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="guests" className="form-label">
          Количество гостей
        </Label>
        <Input
          id="guests"
          type="number"
          min="1"
          max="5"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          required
          className="form-input"
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-elegant-accent hover:bg-elegant-accent/90"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Отправка..." : "Подтвердить участие"}
      </Button>
    </form>
  );
};

export default RsvpForm;
