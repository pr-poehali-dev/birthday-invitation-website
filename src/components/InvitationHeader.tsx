import { Separator } from "@/components/ui/separator";

type InvitationHeaderProps = {
  title: string;
  subtitle?: string;
};

const InvitationHeader = ({ title, subtitle }: InvitationHeaderProps) => {
  return (
    <div className="text-center mb-10 animate-fade-in">
      <h1 className="font-playfair text-4xl md:text-5xl text-elegant-dark mb-3 font-bold">
        {title}
      </h1>
      {subtitle && (
        <p className="text-muted-foreground text-lg mb-5">{subtitle}</p>
      )}
      <div className="flex justify-center items-center gap-4 px-8">
        <Separator className="w-16 bg-elegant-accent h-0.5" />
        <span className="text-elegant-accent">✦</span>
        <Separator className="w-16 bg-elegant-accent h-0.5" />
      </div>
    </div>
  );
};

export default InvitationHeader;
