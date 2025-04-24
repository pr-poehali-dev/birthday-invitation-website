
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { GiftIcon, Heart, XCircle } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const GiftSection: React.FC = () => {
  return (
    <Card className="invitation-card animate-fade-in">
      <CardContent className="p-4">
        <h3 className="text-lg font-medium text-elegant-dark mb-3 flex items-center gap-2">
          <GiftIcon className="w-5 h-5 text-elegant-accent" />
          Информация о подарках
        </h3>
        
        <div className="space-y-4">
          <div>
            <p className="text-sm text-elegant-dark flex items-center gap-2">
              <Heart className="w-4 h-4 text-elegant-accent" />
              <span className="font-medium">Лучший подарок</span>
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Грамотный инвест портфель и закрытые финансовые планы.
              <a 
                href="https://www.tinkoff.ru/rm/r_aXFahIcQRA.kXVDrhjCbq/AxM6832821" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-elegant-accent hover:underline mt-1"
              >
                Отправить поздравление через Tinkoff
              </a>
            </p>
          </div>
          
          <Separator />
          
          <div>
            <p className="text-sm text-elegant-dark font-medium">Альтернатива</p>
            <p className="text-sm text-muted-foreground mt-1">
              Не знаете, что подарить? Загляните в мой вишлист:
              <a 
                href="https://followish.io/mywishlist/cvcvvjmgttfirm" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-elegant-accent hover:underline mt-1"
              >
                Посмотреть вишлист
              </a>
            </p>
          </div>
          
          <Separator />
          
          <div>
            <p className="text-sm text-elegant-dark flex items-center gap-2">
              <XCircle className="w-4 h-4 text-elegant-accent" />
              <span className="font-medium">Антивишлист</span>
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Пожалуйста, без декоративных предметов (статуэтки, модели, текстиль), 
              посуды, еды (особенно сладкой) и косметики.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GiftSection;
