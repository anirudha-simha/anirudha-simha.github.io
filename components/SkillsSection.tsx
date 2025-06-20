
import React from 'react';
import { SectionWrapper } from './common/SectionWrapper';
import { SKILL_CATEGORIES_DATA } from '../constants'; 
import type { SkillCategory, Skill } from '../types';

interface SkillBadgeProps {
  skill: Skill;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ skill }) => (
  <span className="bg-slate-200 text-slate-700 px-3 py-1.5 rounded-md text-sm font-medium shadow-sm hover:bg-slate-300 transition-colors cursor-default">
    {skill.name}
  </span>
);

interface SkillsSectionProps {
  id: string;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ id }) => {
  return (
    <SectionWrapper id={id} title="Technical Skills" className="bg-slate-50">
      <div className="space-y-10">
        {SKILL_CATEGORIES_DATA.map((category: SkillCategory) => (
          <div key={category.name} className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
            <h3 className="text-xl font-semibold text-orange-600 mb-5">{category.name}</h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill: Skill) => (
                <SkillBadge key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
