
import React from "react";

interface InvitationHeaderProps {
  title: string;
  subtitle: string;
}

const InvitationHeader: React.FC<InvitationHeaderProps> = ({ title, subtitle }) => {
  return (
    <header className="text-center mb-10 animate-fade-in">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-elegant-dark mb-4">
        {title}
      </h1>
      <p className="text-xl md:text-2xl text-muted-foreground italic">{subtitle}</p>
    </header>
  );
};

export default InvitationHeader;
