
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
  fullWidth?: boolean;
  pattern?: boolean;
}

const Section: React.FC<SectionProps> = ({ 
  title, 
  subtitle, 
  children, 
  className,
  id,
  fullWidth = false,
  pattern = false
}) => {
  return (
    <section 
      id={id} 
      className={cn(
        "py-16", 
        pattern && "pattern-bg", 
        className
      )}
    >
      <div className={cn(!fullWidth && "container mx-auto px-6")}>
        {(title || subtitle) && (
          <div className="mb-12 text-center max-w-3xl mx-auto">
            {title && <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">{title}</h2>}
            {subtitle && <p className="text-lg text-gray-600">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
