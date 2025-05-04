
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CallToActionBannerProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  className?: string;
  imageBackground?: boolean;
}

const CallToActionBanner: React.FC<CallToActionBannerProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
  className,
  imageBackground = false,
}) => {
  return (
    <div className={cn(
      "relative py-16 md:py-20 overflow-hidden",
      imageBackground ? "text-white" : "bg-islanema-green text-white",
      className
    )}>
      {imageBackground && (
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1473177104440-ffee2f376098"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">{title}</h2>
          <p className="text-lg mb-8 opacity-90">{description}</p>
          <Button 
            asChild
            className="bg-islanema-gold hover:bg-white text-islanema-blue hover:text-islanema-blue text-lg px-8 py-6 h-auto"
          >
            <Link to={buttonLink}>{buttonText}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CallToActionBanner;
