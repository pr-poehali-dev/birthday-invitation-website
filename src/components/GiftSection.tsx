import { Wallet, Gift, XCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const GiftSection = () => {
  return (
    <Card className="invitation-card animate-fade-in w-full max-w-md bg-white border-elegant">
      <CardHeader>
        <CardTitle className="text-lg font-medium text-center text-elegant-dark">
          О подарках
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-start gap-3">
          <Wallet size={20} className="text-elegant-accent mt-1 flex-shrink-0" />
          <div>
            <p className="text-elegant-dark text-sm">
              Лучший подарок — грамотный инвест портфель и закрытые фин. планы, поэтому можно поздравить здесь:
            </p>
            <Button 
              variant="link" 
              className="p-0 h-auto text-elegant-accent hover:text-elegant-accent/80 text-sm"
              onClick={() => window.open("https://www.tinkoff.ru/rm/r_aXFahIcQRA.kXVDrhjCbq/AxM6832821", "_blank")}
            >
              Tinkoff
            </Button>
          </div>
        </div>
        
        <Separator className="my-3" />
        
        <div className="flex items-start gap-3">
          <Gift size={20} className="text-elegant-accent mt-1 flex-shrink-0" />
          <div>
            <p className="text-elegant-dark text-sm">
              Как альтернатива — вишлист:
            </p>
            <Button 
              variant="link" 
              className="p-0 h-auto text-elegant-accent hover:text-elegant-accent/80 text-sm"
              onClick={() => window.open("https://followish.io/mywishlist/cvcvvjmgttfirm", "_blank")}
            >
              Followish.io/mywishlist
            </Button>
          </div>
        </div>
        
        <Separator className="my-3" />
        
        <div className="flex items-start gap-3">
          <XCircle size={20} className="text-rose-500 mt-1 flex-shrink-0" />
          <div>
            <p className="text-elegant-dark text-sm font-medium">
              Пожалуйста, воздержитесь от:
            </p>
            <ul className="text-muted-foreground text-sm list-disc pl-5 mt-1 space-y-1">
              <li>Декоративных предметов (статуэтки, модели, текстиль)</li>
              <li>Посуды</li>
              <li>Еды (особенно сладкой)</li>
              <li>Косметики</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GiftSection;
