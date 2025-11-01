
import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import type { SocialLink } from '../types';

interface HeroProps {
  id: string;
}

export const Hero: React.FC<HeroProps> = ({ id }) => {
  const linkedInProfile = SOCIAL_LINKS.find(link => link.name.toLowerCase() === 'linkedin');

  return (
      <section
          id={id}
          className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 text-white min-h-screen flex items-center justify-center pt-20 pb-10 md:pt-16" // Added pb-10 and adjusted pt
      >
        <div className="text-center p-6 sm:p-8 max-w-3xl mx-auto">
          {/*<img*/}
          {/*    src="https://picsum.photos/seed/devprofile/160/160"*/}
          {/*    alt="Anirudha Simha"*/}
          {/*    className="w-36 h-36 sm:w-40 sm:h-40 rounded-full mx-auto mb-6 sm:mb-8 border-4 border-orange-500 shadow-xl"*/}
          {/*/>*/}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-3 sm:mb-4 tracking-tight">
            Anirudha Simha
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 sm:mb-8 text-orange-400">
            Software Engineer | Backend Systems &amp; ML Solutions
          </p>
          <p className="text-md sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto text-slate-300 leading-relaxed">
            Experienced software engineer with over 8 years of expertise in collaborating with cross-functional teams to build reliable, scalable, and maintainable backend systems and ML solutions in cloud environments.
          </p>
          <div className="flex justify-center space-x-5 sm:space-x-6 mb-10">
            {SOCIAL_LINKS.map((link: SocialLink) => (
                <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    className="text-slate-300 hover:text-orange-400 transition-colors text-2xl sm:text-3xl"
                >
                  <i className={link.iconClass}></i>
                </a>
            ))}
          </div>
          {linkedInProfile && (
              <a
                  href={linkedInProfile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-500 text-white font-semibold px-6 py-3 sm:px-8 sm:py-3 rounded-lg shadow-lg hover:bg-orange-600 transition-all duration-150 ease-in-out text-md sm:text-lg transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75"
              >
                Connect on LinkedIn
              </a>
          )}
        </div>
      </section>
  );
};