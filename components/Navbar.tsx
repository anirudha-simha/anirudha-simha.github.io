
import React, { useState, useEffect } from 'react';
import { NAV_LINKS_LIST } from '../constants';
import type { NavLink } from '../types';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  const handleScroll = () => {
    const sections = NAV_LINKS_LIST.map(link => document.getElementById(link.id));
    // Increase offset slightly if navbar height changes or for better detection
    const scrollPosition = window.scrollY + (document.querySelector('nav')?.offsetHeight || 64) + 50; 

    let currentSection = 'home'; // Default to home
    for (const section of sections) {
      if (section) {
        if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
          currentSection = section.id;
          break;
        }
      }
    }
    // If scrolled to the very top, ensure 'home' is active
    if (window.scrollY < (document.getElementById('home')?.offsetTop || 0)) {
        currentSection = 'home';
    }
    // If scrolled to the very bottom, ensure the last relevant section is active
    const lastLink = NAV_LINKS_LIST[NAV_LINKS_LIST.length -1];
    const lastSectionElement = document.getElementById(lastLink.id);
    if (lastSectionElement && (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) { // 100px buffer from bottom
        currentSection = lastLink.id; // Or a specific contact section if you have one not in NAV_LINKS_LIST
    }

    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); 
  };

  return (
    <nav className="bg-slate-800/90 backdrop-blur-md shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#home" onClick={() => scrollToSection('home')} className="flex-shrink-0 text-2xl font-bold text-orange-500 hover:text-orange-400 transition-colors">
              Anirudha Simha
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {NAV_LINKS_LIST.map((link: NavLink) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.id);
                  }}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-150 ease-in-out
                    ${activeSection === link.id 
                      ? 'bg-orange-500 text-white shadow-md' 
                      : 'text-slate-300 hover:bg-slate-700 hover:text-white'}`}
                  aria-current={activeSection === link.id ? 'page' : undefined}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-orange-500 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-800" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS_LIST.map((link: NavLink) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.id);
                  }}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors
                  ${activeSection === link.id 
                    ? 'bg-orange-500 text-white' 
                    : 'text-slate-300 hover:bg-slate-700 hover:text-white'}`}
                aria-current={activeSection === link.id ? 'page' : undefined}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
