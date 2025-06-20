import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import type { SocialLink } from '../types';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const name = "Anirudha Simha"; // Defined here for simplicity, could come from constants
  const linkedInProfile = SOCIAL_LINKS.find(link => link.name.toLowerCase() === 'linkedin');

  return (
      <footer id="contact" className="bg-slate-900 text-slate-300 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-semibold text-white mb-6">Get In Touch</h3>
          <p className="mb-6 text-slate-400 max-w-md mx-auto">
            Feel free to connect with me on LinkedIn. I'm always open to discussing new projects, opportunities, or just networking!
          </p>
          {linkedInProfile && (
              <a
                  href={linkedInProfile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-400 hover:text-orange-300 text-lg font-medium transition-colors inline-block mb-8 px-6 py-3 border border-orange-400 rounded-md hover:bg-orange-400 hover:text-slate-900"
              >
                View LinkedIn Profile
              </a>
          )}

          <div className="flex justify-center space-x-6 my-8">
            {SOCIAL_LINKS.map((link: SocialLink) => (
                <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    className="text-slate-400 hover:text-orange-400 transition-colors text-2xl transform hover:scale-110"
                >
                  <i className={link.iconClass}></i>
                </a>
            ))}
          </div>

          <p className="text-sm text-slate-400">
            &copy; {currentYear} {name}. All rights reserved.
          </p>
          <p className="text-xs text-slate-500 mt-2">
            Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </footer>
  );
};