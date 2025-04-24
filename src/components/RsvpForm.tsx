import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, { message: "Имя должно содержать минимум 2 символа" }),
  telegram: z.string().min(1, { message: "Пожалуйста, укажите ваш ник в Telegram" }),
});

type RsvpFormProps = {
  onSuccess: () => void;
};

const RsvpForm = ({ onSuccess }: RsvpFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      telegram: "",
    },
  });

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    try {
      // Формируем данные для отправки
      const formData = new FormData();
      formData.append('name', values.name);
      formData.append('telegram', values.telegram);
      formData.append('_subject', 'Новое подтверждение на День Рождения');
      
      // Отправляем данные через FormSubmit
      await fetch('https://formsubmit.co/xEsseax@yandex.ru', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      });
      
      // Вызываем функцию успешного подтверждения
      onSuccess();
      
    } catch (error) {
      console.error('Ошибка при отправке формы:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form 
        onSubmit={form.handleSubmit(handleSubmit)} 
        className="space-y-4 w-full"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ваше имя</FormLabel>
              <FormControl>
                <Input placeholder="Иван Иванов" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="telegram"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ник в Telegram для связи</FormLabel>
              <FormControl>
                <Input placeholder="@username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button 
          type="submit" 
          className="w-full bg-elegant-accent hover:bg-elegant-accent/90"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Отправка..." : "Подтвердить присутствие"}
        </Button>
      </form>
    </Form>
  );
};

export default RsvpForm;
