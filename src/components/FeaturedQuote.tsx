
import React from 'react';
import { Card } from '@/components/ui/card';

interface FeaturedQuoteProps {
  quote: string;
  author: string;
  source?: string;
}

const FeaturedQuote: React.FC<FeaturedQuoteProps> = ({ quote, author, source }) => {
  return (
    <Card className="bg-islanema-cream border-none p-8">
      <div className="flex flex-col items-center text-center">
        <div className="text-islanema-gold text-4xl font-serif mb-4">"</div>
        <blockquote className="text-lg md:text-xl font-serif italic text-islanema-blue mb-4">
          {quote}
        </blockquote>
        <div className="font-medium text-gray-700">
          &mdash; {author}
          {source && <span className="block text-sm text-gray-500 mt-1">{source}</span>}
        </div>
      </div>
    </Card>
  );
};

export default FeaturedQuote;
