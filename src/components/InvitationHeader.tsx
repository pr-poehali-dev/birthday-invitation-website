
import React from "react";

interface InvitationHeaderProps {
  title: string;
  subtitle: string;
}

const InvitationHeader: React.FC<InvitationHeaderProps> = ({ title, subtitle }) => {
  return (
    <header className="text-center mb-10 animate-fade-in">
      <h1 className="text-3xl md:text-4xl font-playfair font-semibold text-elegant-dark mb-4">
        {title}
      </h1>
      <p className="text-muted-foreground italic">{subtitle}</p>
    </header>
  );
};

export default InvitationHeader;
