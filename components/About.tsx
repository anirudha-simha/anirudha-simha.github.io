
import React from 'react';
import { SectionWrapper } from './common/SectionWrapper';

interface AboutProps {
  id: string;
}

export const About: React.FC<AboutProps> = ({ id }) => {
  return (
    <SectionWrapper id={id} title="About Me" className="bg-white">
      <div className="space-y-6 text-lg text-slate-700 leading-relaxed max-w-3xl mx-auto">
        <p>
          Hello! I'm Anirudha Simha, a seasoned software engineer with a strong background in backend systems and a passion for machine learning. 
          With over 7 years of experience, I've had the privilege of working on diverse projects, from architecting scalable cloud solutions to developing machine learning models that drive business value.
        </p>
        <p>
          My expertise lies in <strong className="text-orange-600 font-semibold">Python, Java, AWS, distributed systems, and MLOps</strong>.
          I thrive in collaborative environments and enjoy tackling challenging technical problems. I'm always eager to learn new technologies and apply them to create innovative and impactful software.
        </p>
        <p>
          I am adept at collaborating with cross-functional teams to build reliable, scalable, and maintainable solutions in cloud environments.
          Beyond coding, I enjoy mentoring engineers and exploring the latest advancements in AI. I'm always open to new opportunities where I can leverage my skills to contribute to exciting projects and continue growing as a developer.
        </p>
      </div>
    </SectionWrapper>
  );
};
