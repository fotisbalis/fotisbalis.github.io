export const socialLinks = {
  github: 'https://github.com/fotisbalis',
  linkedin: 'https://www.linkedin.com/in/fotis-balis/',
  instagram: 'https://www.instagram.com/fotisbalis/',
  email: 'fotisbalis@gmail.com',
};

export const hero = {
  name: 'Fotis Balis',
  title: 'Computer Science Student',
  intro:
    'Final-year CS student at the University of Crete',
};

export const education = [
  {
    type: 'B.Sc.',
    title: 'Computer Science',
    organization: 'University of Crete',
    period: '2021 — Present',
    description: '',
    details: '',  
  },
];

export const career = [
  {
    type: 'Internship',
    title: 'Scidrones',
    organization: 'Full Stack Web Development',
    period: 'JUL 2026 - Present',
    description: 'Developed the web application https://laskai.scidrones.com/ for Scidrones\'s LaskAI (AI model for marine litter detection).',
    details: '',
  },
];

export const skillGroups = [
  {
    name: 'Languages',
    skills: ['Java', 'C', 'Python', 'C++', 'SQL', 'JavaScript', 'HTML'],
  },
  {
    name: 'Frameworks',
    skills: ['FastAPI', 'PostgreSQL', 'MySQL', 'SQLite', 'React.js'],
  },
  {
    name: 'Tools',
    skills: ['Git', 'Docker'],
  },
  {
    name: 'Main Focus Areas',
    skills: ['Software Engineering', 'Full Stack Development', 'Object-Oriented Programming', 'Database Systems', 'Parallel/Concurrent Programming'],
  },
];

export const projects = [
  {
    name: 'Chess Game with Custom Engine',
    description: 'A Java developed chess desktop game with a custom engine featuring local multiplayer games and AI opponent with difficulty levels.',
    technologies: ['Java', 'Custom AI'],
    releases: 'https://github.com/fotisbalis/Chess/releases',
    github: 'https://github.com/fotisbalis/Chess',
    featured: true,
    topRightLabel: 'Personal Project',
    number: '01',
  },
  {
    name: 'AI Macro Tracking Desktop app',
    description: 'Desktop app using AI to calculate and track macros, connected via API integration to chatGPT. (OpenAI API key required to enable the AI)',
    technologies: ['FastAPI', 'SQLite'],
    releases: 'https://github.com/fotisbalis/Macro_Tracker_Web_App/releases',
    github: 'https://github.com/fotisbalis/Macro_Tracker_Web_App',
    featured: true,
    topRightLabel: 'Personal Project',
    number: '02',
  },
  {
    name: 'Compiler and Virtual Machine',
    description: 'A compiler and virtual machine for the Alpha programming language (similar to javascript).',
    technologies: ['c', 'Lex', 'Yacc'],
    github: 'https://github.com/fotisbalis/Alpha_Compiler_and_Virtual_Machine_HY340_Project',
    featured: true,
    topRightLabel: 'HY340 Project',
    number: '03',
  },
  {
    name: 'University Payout System',
    description: 'A system developed for managing and automating the payouts of universities.',
    technologies: ['MySQL', 'Java'],
    github: 'https://github.com/aggeloz19/Uni_payouts_system',
    featured: true,
    topRightLabel: 'HY360 Group Project',
    number: '04',
  },
  {
    name: 'Pipeflow Calculator',
    description: 'A tool for civil engineers to calculate the energy consumption of pipelines based on various parameters. Both desktop app in python and website available.',
    technologies: ['Python', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/fotisbalis/Pipeline_Energy_Calculator',
    website: 'https://fotisbalis.github.io/Pipeline_Energy_Calculator/',
    websiteLabel: 'Website',
    featured: true,
    topRightLabel: 'Personal Project',
    number: '05',
  }
];
