import type { NavLink, SocialLink, Experience, Project, SkillCategory, Education, Certification, Writing } from './types';

export const NAV_LINKS_LIST: NavLink[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  // { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'writing', label: 'Writing' },
  { id: 'medium', label: 'Medium' }, // Added Medium link
];

// For easier access in App.tsx
export const NAV_LINKS = NAV_LINKS_LIST.reduce((acc, current) => {
  acc[current.id] = current;
  return acc;
}, {} as Record<string, NavLink>);


export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'LinkedIn', iconClass: 'fab fa-linkedin', url: 'https://linkedin.com/in/anirudha-simha' },
  { name: 'GitHub', iconClass: 'fab fa-github', url: 'https://github.com/yourusername' }, // Placeholder, update if available
  // { name: 'Twitter', iconClass: 'fab fa-twitter', url: 'https://twitter.com/yourusername' }, // Placeholder
];

export const MEDIUM_PROFILE_URL = 'https://medium.com/@anirudha.simha';

export const EXPERIENCES_DATA: Experience[] = [
  {
    id: 'hubspot_1',
    role: 'Senior Software Engineer Ⅱ',
    company: 'Hubspot',
    period: 'Dec 2024 - Present',
    descriptionPoints: [
    ],
    technologies: ['Java', 'Kubernetes', 'S3', 'MySQL', 'Microservices', 'RPC', 'Generative AI'],
  },
    {
    id: 'capital_one_3',
    role: 'Senior Software Engineer',
    company: 'Capital One | McLean, VA',
    period: 'Jan 2022 - Dec 2024',
    descriptionPoints: [
      'Designed and led a microservice overhaul from Java Spring Boot to Python, transitioning from Docker and ECS to AWS Lambda with zero downtime, reducing costs by 30% and development hours by 50%.',
      'Implemented a new Python-based serverless architecture for a real-time ML-powered chatbot to deliver personalized customer experiences and support, saving $2.8M annually in customer support calls.',
      "Led the creation of internal shared Python libraries for use by data-science teams, accelerating real-time model development and reducing ML models' time to production by 30%.",
      'Built a scalable solution for a $100M marketing product using Python, S3, AWS Lambda, and DynamoDB, boosting usage by 50% to 4.7B emails and reducing development time from months to days.',
      'Created tool to migrate 30M+ links from third party URL shortener to internal equivalent using Python, Node.js, and DynamoDB, resulting in decreased cost of ownership and improved risk/compliance control.',
      'Mentored 7 junior engineers on API development, AWS infrastructure, and coding best practices, enhancing their technical skills, code quality, and contributions to key microservices.'
    ],
    technologies: ['Python', 'Java Spring Boot', 'AWS Lambda', 'Docker', 'ECS', 'S3', 'DynamoDB', 'Node.js', 'Microservices'],
  },
  {
    id: 'capital_one_2',
    role: 'Software Engineer',
    company: 'Capital One | McLean, VA',
    period: 'Jan 2020 - Jan 2022',
    descriptionPoints: [
      'Developed a new websocket-based standard for hosting Slack apps using AWS Fargate, thereby reducing latency, enhancing development experience, and driving adoption by all Slack apps company wide.',
      'Designed and implemented notifications API using Open API/Swagger, SQS, Snowflake, and AWS Lambda, enabling real-time Slack alerts from enterprise-wide applications and CI/CD pipelines.',
      'Created service to scrape 1 years worth of messages across enterprise Slack using Javascript and Slack API, enriching chatbot training data and increasing relevance and accuracy of question-answering capabilities.',
      'Established innersourcing process for chatbot codebase, driving company-wide chatbot adoption and increasing developer contributions to feature development.'
    ],
    technologies: ['Websockets', 'AWS Fargate', 'OpenAPI/Swagger', 'SQS', 'Snowflake', 'AWS Lambda', 'Javascript', 'Slack API'],
  },
  {
    id: 'capital_one_1',
    role: 'Associate Software Engineer',
    company: 'Capital One | McLean, VA',
    period: 'Sept 2017 - Jan 2020',
    descriptionPoints: [
      'Architected and implemented the move of Node.js-based Slackbot from Docker to AWS Lambda, increasing availability and deployment efficiency, and reducing costs by 50%.',
      'Trained, fine-tuned, and deployed NLP models (SVM, BERT) as containerized Python services, enhancing real-time chatbot accuracy and supporting 3,000+ employees company-wide.'
    ],
    technologies: ['Node.js', 'AWS Lambda', 'Docker', 'Python', 'NLP', 'SVM', 'BERT'],
  },
];

// SAMPLE_PROJECTS remains for demonstration as resume does not detail specific portfolio projects.
export const SAMPLE_PROJECTS: Project[] = [
  {
    id: 'proj1',
    name: 'Real-time Data Dashboard (Sample)',
    description: 'A web application for visualizing real-time data streams using WebSockets and interactive charts. Focused on performance and scalability for handling high-volume data.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'D3.js'],
    imageUrl: 'https://picsum.photos/seed/dashboard/400/250',
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: 'proj2',
    name: 'AI-Powered Recommendation Engine (Sample)',
    description: 'Developed a collaborative filtering based recommendation system for e-commerce. Implemented using Python and deployed as a microservice.',
    technologies: ['Python', 'Flask', 'Scikit-learn', 'Pandas', 'Docker', 'REST APIs'],
    imageUrl: 'https://picsum.photos/seed/recommendation/400/250',
    repoUrl: '#',
  },
];

export const SKILL_CATEGORIES_DATA: SkillCategory[] = [
  {
    name: 'Languages & Frameworks',
    skills: [
      { name: 'Python' }, { name: 'Javascript' }, { name: 'Node.js' }, { name: 'Java' },
      { name: 'NumPy' }, { name: 'Keras' }, { name: 'Pandas' }, { name: 'Tensorflow' }
    ],
  },
  {
    name: 'Cloud, Infrastructure, & Tools',
    skills: [
      { name: 'AWS' }, { name: 'SQL' }, { name: 'NoSQL' }, { name: 'Docker' },
      { name: 'Jenkins CI/CD' }, { name: 'Git' }, { name: 'OpenAPI/Swagger' },
      { name: 'New Relic' }, { name: 'Splunk' }, { name: 'Snowflake' },
      { name: 'Jupyter Notebooks' }, { name: 'REST APIs' }
    ],
  },
];

export const EDUCATION_DATA: Education[] = [
  {
    id: 'edu1',
    institution: 'Georgia Institute of Technology',
    degree: 'M.S. in Computer Science',
    period: 'Atlanta, GA',
    description: 'Specilization in Machine Learning',
  },
  {
    id: 'edu2',
    institution: 'Virginia Polytechnic & State University',
    degree: 'B.S. in Computer Engineering',
    period: 'Blacksburg, VA',
    description: 'Minors in: Computer Science, Math, and Cyber Security',
  },
];

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    id: 'cert1',
    name: 'AWS Certified Solutions Architect - Associate',
    issuingOrganization: 'Amazon Web Services',
    dateIssued: '', // Date not specified in resume
    // credentialId: '', // Not specified
    // credentialUrl: 'https://aws.amazon.com/certification/certified-solutions-architect-associate/', // Removed
  },
];

export const WRITINGS_DATA: Writing[] = [
  {
    id: 'write1',
    title: 'Getting Started with Creating Slack Bots & Slack Apps',
    publication: 'Medium & Capital One Tech Blog',
    date: '', // Date not specified
    url: 'https://medium.com/capital-one-tech/getting-started-with-creating-slack-bots-slack-apps-37e49bea7523',
    // summary: '', // No summary in resume
  },
  {
    id: 'write2',
    title: 'Understanding TF-IDF for Machine Learning',
    publication: 'Medium & Capital One Tech Blog',
    date: '', // Date not specified
    url: 'https://medium.com/capital-one-tech/understanding-tf-idf-for-machine-learning-capital-one-dea9ab4a586d',
    // summary: '', // No summary in resume
  },
];