
import React from 'react';
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { getCitation, getFullCitation, sources } from '@/lib/citations';

interface CitationProps {
  sourceId: string;
  page?: string;
  className?: string;
}

const Citation: React.FC<CitationProps> = ({ sourceId, page, className }) => {
  if (!sources[sourceId]) {
    console.error(`Citation source not found: ${sourceId}`);
    return null;
  }

  return (
    <Tooltip>
      <TooltipTrigger className={className}>
        <sup className="text-islanema-blue hover:text-islanema-gold transition-colors cursor-help">
          [{sourceId}]
        </sup>
      </TooltipTrigger>
      <TooltipContent side="top" className="max-w-md bg-white p-3 shadow-lg rounded-md border border-gray-200 text-sm">
        <p className="font-medium">{getCitation(sourceId, page)}</p>
        <p className="mt-1 text-gray-600">{sources[sourceId].title}</p>
        {sources[sourceId].url && (
          <a 
            href={sources[sourceId].url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-1 block text-islanema-blue hover:underline"
          >
            View source
          </a>
        )}
      </TooltipContent>
    </Tooltip>
  );
};

export default Citation;
