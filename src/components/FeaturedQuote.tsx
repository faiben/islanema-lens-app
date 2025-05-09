
import React from 'react';
import { Card } from '@/components/ui/card';
import { sources } from '@/lib/citations';

interface FeaturedQuoteProps {
  quote: string;
  author: string;
  source?: string;
  sourceId?: string; // Added field for citation
}

const FeaturedQuote: React.FC<FeaturedQuoteProps> = ({ quote, author, source, sourceId }) => {
  // Get publication year if sourceId is provided
  const publicationYear = sourceId && sources[sourceId] ? sources[sourceId].year : null;
  
  return (
    <Card className="bg-islanema-cream border-none p-8">
      <div className="flex flex-col items-center text-center">
        <div className="text-islanema-gold text-4xl font-serif mb-4">"</div>
        <blockquote className="text-lg md:text-xl font-serif italic text-islanema-blue mb-4">
          {quote}
        </blockquote>
        <div className="font-medium text-gray-700">
          &mdash; {author}
          {(source || publicationYear) && (
            <span className="block text-sm text-gray-500 mt-1">
              {source}
              {publicationYear && `, ${publicationYear}`}
              {sourceId && sources[sourceId]?.url && (
                <a 
                  href={sources[sourceId].url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="ml-2 text-islanema-blue hover:underline"
                >
                  [Source]
                </a>
              )}
            </span>
          )}
        </div>
      </div>
    </Card>
  );
};

export default FeaturedQuote;
