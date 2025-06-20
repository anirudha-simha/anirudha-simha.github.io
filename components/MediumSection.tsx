
import React from 'react';
import { SectionWrapper } from './common/SectionWrapper';
import { MEDIUM_PROFILE_URL } from '../constants';

interface MediumSectionProps {
    id: string;
}

export const MediumSection: React.FC<MediumSectionProps> = ({ id }) => {
    return (
        <SectionWrapper id={id} title="Explore My Thoughts on Medium" className="bg-slate-50">
    <div className="text-center max-w-2xl mx-auto">
    <p className="text-lg text-slate-700 mb-8 leading-relaxed">
        I occasionally share insights, tutorials, and reflections on software engineering, machine learning, and technology trends on my Medium blog.
        If you're interested in reading more of my thoughts, feel free to check out my profile!
    </p>
    <a
    href={MEDIUM_PROFILE_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center bg-orange-500 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-orange-600 transition-all duration-150 ease-in-out text-lg transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75"
    >
    <i className="fab fa-medium mr-3"></i> {/* Font Awesome Medium icon */}
    Visit My Medium Profile
    </a>
    </div>
    </SectionWrapper>
);
};
