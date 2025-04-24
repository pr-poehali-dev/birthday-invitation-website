
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

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
    
    // Имитация отправки данных на сервер
    try {
      // В реальном проекте здесь был бы API-запрос
      await new Promise(resolve => setTimeout(resolve, 1000));
      onSuccess();
    } catch (error) {
      console.error("Ошибка при отправке формы:", error);
    } finally {
      setIsSubmitting(false);
    }
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
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Иван Иванов"
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="example@mail.com"
          required
          className="form-input"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="guests" className="form-label">
          Количество гостей
        </Label>
        <Select value={guests} onValueChange={setGuests} required>
          <SelectTrigger id="guests" className="form-input">
            <SelectValue placeholder="Выберите количество" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">1</SelectItem>
            <SelectItem value="2">2</SelectItem>
            <SelectItem value="3">3</SelectItem>
            <SelectItem value="4">4</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-elegant-accent hover:bg-elegant-accent/90"
      >
        {isSubmitting ? "Отправка..." : "Подтвердить участие"}
      </Button>
    </form>
  );
};

export default RsvpForm;
