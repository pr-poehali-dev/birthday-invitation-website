
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { PlusIcon, MinusIcon, CheckIcon } from "lucide-react";

interface RsvpFormProps {
  onSuccess: () => void;
}

const RsvpForm: React.FC<RsvpFormProps> = ({ onSuccess }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [guests, setGuests] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Имитация отправки формы
    setTimeout(() => {
      setIsSubmitting(false);
      onSuccess();
    }, 1000);
  };

  const incrementGuests = () => {
    setGuests(prev => Math.min(prev + 1, 5));
  };

  const decrementGuests = () => {
    setGuests(prev => Math.max(prev - 1, 1));
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="mb-4">
        <Label htmlFor="name" className="text-elegant-dark mb-1 block">
          Имя
        </Label>
        <Input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ваше имя"
          required
          className="form-field"
        />
      </div>

      <div className="mb-4">
        <Label htmlFor="email" className="text-elegant-dark mb-1 block">
          Email
        </Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Ваш email"
          required
          className="form-field"
        />
      </div>

      <div className="mb-6">
        <Label htmlFor="guests" className="text-elegant-dark mb-1 block">
          Количество гостей
        </Label>
        <div className="flex items-center">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={decrementGuests}
            disabled={guests <= 1}
            className="rounded-full w-8 h-8 p-0"
          >
            <MinusIcon className="w-4 h-4" />
          </Button>
          <span className="mx-4 text-elegant-dark font-medium">{guests}</span>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={incrementGuests}
            disabled={guests >= 5}
            className="rounded-full w-8 h-8 p-0"
          >
            <PlusIcon className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <Button
        type="submit"
        className="w-full bg-elegant-accent hover:bg-elegant-accent/90"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Отправка...
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <CheckIcon className="w-4 h-4" />
            Подтвердить
          </span>
        )}
      </Button>
    </form>
  );
};

export default RsvpForm;
