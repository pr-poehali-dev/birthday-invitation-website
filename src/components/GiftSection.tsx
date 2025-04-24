
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GiftIcon, WalletIcon, MountainIcon, ListChecksIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const GiftSection: React.FC = () => {
  return (
    <Card className="invitation-card animate-fade-in">
      <CardHeader className="flex flex-row items-center gap-2">
        <GiftIcon className="w-5 h-5 text-elegant-accent" />
        <CardTitle className="text-xl font-medium text-elegant-dark">
          О подарках
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <div className="flex items-start gap-3">
          <WalletIcon className="w-5 h-5 text-elegant-accent shrink-0 mt-0.5" />
          <div>
            <h3 className="font-medium text-elegant-dark">Лучший подарок</h3>
            <p className="text-muted-foreground mb-2">
              Грамотный инвестиционный портфель и билеты в горы
            </p>
            <a 
              href="https://www.tinkoff.ru/rm/r_aXFahIcQRA.kXVDrhjCbq/AxM6832821" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="text-elegant-accent hover:text-elegant-accent/80 border-elegant-accent/30 hover:bg-elegant-accent/5">
                <MountainIcon className="w-4 h-4 mr-2" />
                Поздравить
              </Button>
            </a>
          </div>
        </div>

        <Separator className="bg-violet-100" />

        <div className="flex items-start gap-3">
          <ListChecksIcon className="w-5 h-5 text-elegant-accent shrink-0 mt-0.5" />
          <div>
            <h3 className="font-medium text-elegant-dark">Вишлист</h3>
            <p className="text-muted-foreground mb-2">
              Список желаний на Followish
            </p>
            <a 
              href="https://followish.io/mywishlist/cvcvvjmgttfirm" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="link" className="px-0 h-auto text-elegant-accent">
                Открыть вишлист
              </Button>
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GiftSection;
