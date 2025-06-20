

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ExperienceSection } from './components/ExperienceSection';
// import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { EducationSection } from './components/EducationSection';
import { CertificationsSection } from './components/CertificationsSection';
import { WritingSection } from './components/WritingSection';
import { MediumSection } from './components/MediumSection'; // Import MediumSection
import { Footer } from './components/Footer';
import { NAV_LINKS } from './constants';

const App: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
                <Hero id={NAV_LINKS.home.id} />
                <About id={NAV_LINKS.about.id} />
                <ExperienceSection id={NAV_LINKS.experience.id} />
                {/* <ProjectsSection id={NAV_LINKS.projects.id} /> */}
                <SkillsSection id={NAV_LINKS.skills.id} />
                <EducationSection id={NAV_LINKS.education.id} />
                <CertificationsSection id={NAV_LINKS.certifications.id} />
                <WritingSection id={NAV_LINKS.writing.id} />
                <MediumSection id={NAV_LINKS.medium.id} /> {/* Add MediumSection here */}
            </main>
            <Footer />
        </div>
    );
};

export default App;