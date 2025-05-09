
import React from 'react';
import { Citation, sources, getFullCitation } from '@/lib/citations';

interface SourcesListProps {
  citations: string[];
  className?: string;
}

const SourcesList: React.FC<SourcesListProps> = ({ citations, className }) => {
  // Filter sources to only include those that are cited
  const citedSources = Object.values(sources)
    .filter(source => citations.includes(source.id))
    .sort((a, b) => a.author.localeCompare(b.author));

  if (citedSources.length === 0) {
    return null;
  }

  return (
    <div className={className}>
      <h2 className="text-2xl font-serif font-bold mb-4">Sources & Citations</h2>
      <ul className="space-y-3 list-none">
        {citedSources.map(source => (
          <li key={source.id} id={`source-${source.id}`} className="text-sm">
            <div className="flex">
              <span className="font-medium text-islanema-blue mr-2">[{source.id}]</span>
              <span>{getFullCitation(source.id)}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SourcesList;
