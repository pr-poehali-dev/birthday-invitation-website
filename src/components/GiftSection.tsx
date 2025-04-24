
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GiftIcon } from "lucide-react";

const GiftSection: React.FC = () => {
  return (
    <Card className="invitation-card animate-fade-in">
      <CardHeader className="flex flex-row items-center gap-2">
        <GiftIcon className="w-5 h-5 text-elegant-accent" />
        <CardTitle className="text-xl font-medium text-elegant-dark">
          О подарках
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-center mb-4">
          Самый ценный подарок — ваше присутствие и хорошее настроение!
        </p>
      </CardContent>
    </Card>
  );
};

export default GiftSection;
