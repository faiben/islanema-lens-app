
import React from 'react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface InfoCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, description, icon, className }) => {
  return (
    <Card className={cn("p-6 border-none shadow-md h-full transition-transform hover:translate-y-[-5px]", className)}>
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 text-islanema-gold">
          {icon}
        </div>
        <h3 className="text-xl font-serif font-medium mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </Card>
  );
};

export default InfoCard;
