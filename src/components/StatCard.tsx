
import React from 'react';
import { Card } from '@/components/ui/card';
import Citation from '@/components/Citation';

interface StatCardProps {
  number: string;
  description: string;
  color?: string;
  sourceId?: string; // Add reference to the source
  page?: string; // Optional page number
}

const StatCard: React.FC<StatCardProps> = ({ 
  number, 
  description, 
  color = "bg-islanema-green",
  sourceId,
  page
}) => {
  return (
    <Card className="relative overflow-hidden bg-white p-6 h-full">
      <div className={`absolute top-0 left-0 w-2 h-full ${color}`} />
      <div className="ml-2">
        <h3 className="text-3xl md:text-4xl font-serif font-bold text-islanema-blue">
          {number}
        </h3>
        <p className="text-gray-600 mt-2">
          {description}
          {sourceId && (
            <Citation sourceId={sourceId} page={page} className="ml-1" />
          )}
        </p>
      </div>
    </Card>
  );
};

export default StatCard;
