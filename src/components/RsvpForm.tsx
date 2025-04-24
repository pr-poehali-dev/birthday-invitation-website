import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

interface RsvpFormProps {
  onSuccess: () => void;
}

const RsvpForm = ({ onSuccess }: RsvpFormProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [guests, setGuests] = useState("1");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email) {
      setError("Пожалуйста, заполните все обязательные поля");
      return;
    }
    
    setLoading(true);
    setError("");
    
    try {
      // Используем сервис formsubmit.co для отправки данных формы на email
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("guests", guests);
      formData.append("_subject", "Новое подтверждение на день рождения");
      
      // URL формата https://formsubmit.co/YOUR_EMAIL_HERE
      const response = await fetch("https://formsubmit.co/xEsseax@yandex.ru", {
        method: "POST",
        body: formData,
        headers: {
          "Accept": "application/json"
        }
      });
      
      if (response.ok) {
        onSuccess();
      } else {
        throw new Error("Что-то пошло не так при отправке формы");
      }
    } catch (err) {
      setError("Произошла ошибка при отправке. Пожалуйста, попробуйте еще раз.");
      console.error("Form submission error:", err);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="w-full space-y-4">
      <div>
        <Label htmlFor="name" className="form-label">
          Ваше имя *
        </Label>
        <Input
          id="name"
          type="text"
          className="form-input"
          placeholder="Иван Иванов"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      
      <div>
        <Label htmlFor="email" className="form-label">
          Email для связи *
        </Label>
        <Input
          id="email"
          type="email"
          className="form-input"
          placeholder="ivan@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      
      <div>
        <Label htmlFor="guests" className="form-label">
          Количество гостей
        </Label>
        <Select value={guests} onValueChange={setGuests}>
          <SelectTrigger className="form-input">
            <SelectValue placeholder="Выберите количество гостей" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">1 (только я)</SelectItem>
            <SelectItem value="2">2 (я + сопровождающий)</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      {error && (
        <p className="text-destructive text-sm">{error}</p>
      )}
      
      <Button 
        type="submit" 
        className="w-full bg-elegant-accent hover:bg-elegant-accent/90"
        disabled={loading}
      >
        {loading ? "Отправка..." : "Подтвердить присутствие"}
      </Button>
    </form>
  );
};

export default RsvpForm;