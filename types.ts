
export interface NavLink {
  id: string;
  label: string;
}

export interface SocialLink {
  name: string;
  iconClass: string;
  url: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  descriptionPoints: string[];
  technologies?: string[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  liveUrl?: string;
  repoUrl?: string;
}

export interface Skill {
  name: string;
  // level?: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert'; // Optional: if you want to specify skill level
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period?: string;
  description?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuingOrganization: string;
  dateIssued?: string;
  credentialId?: string;
  credentialUrl?: string;
}

export interface Writing {
  id: string;
  title: string;
  publication: string;
  date?: string;
  url: string;
  summary?: string;
}
