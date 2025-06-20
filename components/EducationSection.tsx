
import React from 'react';
import { SectionWrapper } from './common/SectionWrapper';
import { EDUCATION_DATA } from '../constants'; 
import type { Education } from '../types';

interface EducationItemProps {
  education: Education;
}

const EducationItem: React.FC<EducationItemProps> = ({ education }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 mb-6 border border-slate-200">
    <h3 className="text-xl font-semibold text-orange-600 mb-1">{education.degree}</h3>
    <p className="text-lg text-slate-800 font-medium mb-1">{education.institution}</p>
    {education.period && <p className="text-sm text-slate-500 mb-3">{education.period}</p>}
    {education.description && (
      <p className="text-slate-700 text-sm leading-relaxed">{education.description}</p>
    )}
  </div>
);

interface EducationSectionProps {
  id: string;
}

export const EducationSection: React.FC<EducationSectionProps> = ({ id }) => {
  return (
    <SectionWrapper id={id} title="Education" className="bg-white">
      <div className="space-y-8 max-w-3xl mx-auto">
        {EDUCATION_DATA.map((edu) => (
          <EducationItem key={edu.id} education={edu} />
        ))}
      </div>
    </SectionWrapper>
  );
};
