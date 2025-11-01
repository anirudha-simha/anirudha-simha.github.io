
import React from 'react';
import { SectionWrapper } from './common/SectionWrapper';
import { EXPERIENCES_DATA } from '../constants'; 
import type { Experience } from '../types';

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 mb-8 border border-slate-200">
    <h3 className="text-xl font-semibold text-orange-600 mb-0.5">{experience.role}</h3>
    <p className="text-lg text-slate-800 font-medium mb-0.5">{experience.company}</p>
    <p className="text-sm text-slate-500 mb-4">
      {experience.location && <>{experience.location} • </>}
      {experience.period}
    </p>
    <ul className="list-disc list-inside space-y-2 mb-4 text-slate-700 marker:text-orange-500">
      {experience.descriptionPoints.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
    {experience.technologies && experience.technologies.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
            <h4 className="text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1 w-full">Key Technologies:</h4>
            {experience.technologies.map((tech, index) => (
            <span key={index} className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-semibold">
                {tech}
            </span>
            ))}
        </div>
    )}
  </div>
);

interface ExperienceSectionProps {
  id: string;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ id }) => {
  return (
    <SectionWrapper id={id} title="Work Experience" className="bg-slate-50">
      <div className="space-y-12">
        {EXPERIENCES_DATA.map((exp) => (
          <ExperienceCard key={exp.id} experience={exp} />
        ))}
      </div>
    </SectionWrapper>
  );
};
