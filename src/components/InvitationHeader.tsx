import { Heart } from "lucide-react";

interface InvitationHeaderProps {
  title: string;
  subtitle?: string;
}

const InvitationHeader = ({ title, subtitle }: InvitationHeaderProps) => {
  return (
    <header className="text-center mb-10 flex flex-col items-center animate-fade-in">
      <div className="flex items-center justify-center mb-4">
        <div className="w-12 h-1 bg-elegant-accent rounded-full mr-3"></div>
        <Heart size={24} className="text-elegant-accent" />
        <div className="w-12 h-1 bg-elegant-accent rounded-full ml-3"></div>
      </div>
      
      <h1 className="text-3xl md:text-4xl font-semibold text-elegant-dark mb-2">
        {title}
      </h1>
      
      {subtitle && (
        <p className="text-muted-foreground text-sm md:text-base max-w-md">
          {subtitle}
        </p>
      )}
    </header>
  );
};

export default InvitationHeader;