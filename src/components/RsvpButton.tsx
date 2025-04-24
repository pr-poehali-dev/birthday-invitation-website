import { Button } from "@/components/ui/button";
import { CalendarPlus } from "lucide-react";

type RsvpButtonProps = {
  onClick: () => void;
};

const RsvpButton = ({ onClick }: RsvpButtonProps) => {
  return (
    <Button 
      className="bg-elegant-accent hover:bg-elegant-accent/90 text-white font-medium flex items-center gap-2 animate-fade-in"
      size="lg"
      onClick={onClick}
    >
      <CalendarPlus size={18} />
      <span>Подтвердить присутствие</span>
    </Button>
  );
};

export default RsvpButton;
