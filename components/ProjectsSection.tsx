
import React from 'react';
import { SectionWrapper } from './common/SectionWrapper';
import { SAMPLE_PROJECTS } from '../constants';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col border border-slate-200">
    {project.imageUrl && (
      <img src={project.imageUrl} alt={project.name} className="w-full h-52 object-cover"/>
    )}
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-semibold text-orange-600 mb-2">{project.name}</h3>
      <p className="text-slate-700 mb-4 flex-grow text-sm leading-relaxed">{project.description}</p>
      <div className="mb-4">
        <h4 className="text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">Technologies Used:</h4>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span key={index} className="bg-orange-100 text-orange-700 px-2.5 py-1 rounded-full text-xs font-semibold">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-auto flex space-x-4 pt-4 border-t border-slate-100">
        {project.liveUrl && project.liveUrl !== '#' && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-orange-600 hover:text-orange-700 font-medium transition-colors group">
            Live Demo <i className="fas fa-external-link-alt ml-1 opacity-70 group-hover:opacity-100"></i>
          </a>
        )}
        {project.repoUrl && project.repoUrl !== '#' && (
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-slate-600 hover:text-orange-700 font-medium transition-colors group">
            View Code <i className="fab fa-github ml-1 opacity-70 group-hover:opacity-100"></i>
          </a>
        )}
      </div>
    </div>
  </div>
);

interface ProjectsSectionProps {
  id: string;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ id }) => {
  return (
    <SectionWrapper id={id} title="Projects" className="bg-white">
      <div className="grid md:grid-cols-2 gap-8">
        {SAMPLE_PROJECTS.map((proj) => (
          <ProjectCard key={proj.id} project={proj} />
        ))}
      </div>
      <p className="mt-12 text-center text-slate-600">
        (Showcase your key projects. Add more entries to `constants.ts`.)
      </p>
    </SectionWrapper>
  );
};
