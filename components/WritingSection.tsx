
import React from 'react';
import { SectionWrapper } from './common/SectionWrapper';
import { WRITINGS_DATA } from '../constants'; 
import type { Writing } from '../types';

interface WritingItemProps {
  writing: Writing;
}

const WritingItem: React.FC<WritingItemProps> = ({ writing }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-200">
    <h3 className="text-xl font-semibold text-orange-600 mb-1">{writing.title}</h3>
    <p className="text-md text-slate-700 italic mb-1">Published in: {writing.publication}</p>
    {writing.date && <p className="text-sm text-slate-500 mb-3">Date: {writing.date}</p>}
    {writing.summary && (
      <p className="text-slate-700 mb-4 text-sm leading-relaxed">{writing.summary}</p>
    )}
    <a 
      href={writing.url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-sm text-orange-500 hover:text-orange-700 hover:underline font-medium transition-colors group"
    >
      Read More <i className="fas fa-arrow-right ml-1 text-xs opacity-80 group-hover:opacity-100"></i>
    </a>
  </div>
);

interface WritingSectionProps {
  id: string;
}

export const WritingSection: React.FC<WritingSectionProps> = ({ id }) => {
  return (
    <SectionWrapper id={id} title="Publications & Articles" className="bg-white">
      {WRITINGS_DATA.length > 0 ? (
        <div className="space-y-8 max-w-3xl mx-auto">
          {WRITINGS_DATA.map((item) => (
            <WritingItem key={item.id} writing={item} />
          ))}
        </div>
      ) : (
        <p className="text-center text-slate-600">No publications or articles listed yet.</p>
      )}
    </SectionWrapper>
  );
};
