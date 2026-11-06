// Edit the portfolio's text, links and projects here.
// Only completed work should be described as completed.
export const profile = {
  name: 'Nasif Parvez',
  role: 'Aspiring Software Quality Assurance Engineer',
  location: 'Dhaka, Bangladesh',
  email: 'nasifparvez732@gmail.com',
  phone: '+8801882461759',
  github: 'https://github.com/nasifparvezst',
  linkedin: 'https://www.linkedin.com/in/nniloy/',
  facebook: 'https://www.facebook.com/nniloy732/',
  instagram: 'https://www.instagram.com/nniloy732/',
  site: 'https://portfolio-eight-navy-86.vercel.app/',
  // A working PDF was not provided, so this stays null. See README.
  
resumeUrl: 'CV.pdf',

  // Keep the original portrait from the existing public GitHub repository.
  // The image remains a vertical rectangle and is not replaced or cropped into a circle.
 
photoUrl: '/images/ForCV.png',

};

export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'journey', label: 'Journey' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export const manualSkills = [
  'SDLC & STLC', 'Test Scenario Design', 'Test Case Design',
  'Functional Testing', 'Smoke & Regression', 'Exploratory Testing',
  'Bug Reporting', 'Retesting & Verification',
];
export const apiSkills = [
  'REST API Concepts', 'HTTP Methods', 'Status Codes',
  'Requests & Responses', 'Postman', 'API Validation',
];
export const technicalSkills = [
  'SQL Queries', 'MySQL Basics', 'Git & GitHub',
  'Python', 'Java', 'C / C++', 'Excel / Sheets',
];

export const qaProjects = [
  {
    id: 'orangehrm',
    index: '01',
    type: 'Practice / Demo',
    title: 'OrangeHRM Manual Testing',
    summary: 'Structured manual QA practice on the OrangeHRM demo application, covering test design, execution, reporting and retesting across HR workflows.',
    tags: ['Manual Testing', 'Functional', 'Test Cases', 'Bug Reporting'],
    steps: [
      'Explore application features, user flows and key HR modules.',
      'Translate expected behavior into test scenarios and individual test cases.',
      'Prepare test data and document expected versus actual outcomes.',
      'Practice functional, smoke and regression checks.',
      'Record reproducible bug reports and retest after fixes when available.',
    ],
    takeaways: [
      'A more structured end-to-end manual QA workflow.',
      'Clearer test coverage, documentation and defect communication.',
      'Better attention to negative scenarios and edge cases.',
    ],
    note: 'This is a self-directed practice/demo project, not professional employment or client testing.',
    documentationUrl: null,
  },
];

export const technicalProjects = [
  {
    index: '01',
    title: 'Contact Book',
    category: 'Python Project',
    summary: 'A small contact manager for adding, editing, searching and deleting contact information.',
    tags: ['Python', 'CRUD', 'Problem Solving'],
    icon: 'code',
    sourceUrl: null,
  },
  {
    index: '02',
    title: 'University Management System (UMS)',
    category: 'Academic Project',
    summary: 'An academic management-system project focused on university-related information and workflows. Further technical details can be shared when the source is available.',
    tags: ['University', 'Management System', 'Coursework'],
    icon: 'graduation',
    sourceUrl: null,
  },
  {
    index: '03',
    title: 'Interactive 3D Smart Museum',
    category: 'Computer Graphics · CSE 444',
    summary: 'An interactive 3D museum and art-gallery project developed with C++ and OpenGL/FreeGLUT for the CSE 444 Computer Graphics course.',
    tags: ['C++', 'OpenGL', 'FreeGLUT', '3D Graphics'],
    icon: 'sparkles',
    sourceUrl: 'https://github.com/nasifparvezst/Interactive-3d-smart-museum',
  },
  {
    index: '04',
    title: 'FindBack — Smart Lost & Found Platform',
    category: 'Completed Full-Stack Project',
    summary: 'A full-stack campus lost-and-found platform where users can report missing or found items, search listings, discover smart matches, and manage ownership claims. Built with Next.js, TypeScript and Supabase, with authentication, notifications and an admin dashboard.',
    tags: ['Next.js', 'React', 'TypeScript', 'Supabase', 'PostgreSQL'],
    icon: 'search',
    // The public repository still contains the earlier frontend implementation.
    // Do not imply that this link contains the completed full-stack version.
    sourceUrl: 'https://github.com/nasifparvezst/FindBack',
    sourceLabel: 'View on GitHub',
    sourceNote: 'This GitHub link shows the earlier frontend version; the completed full-stack code is not yet published there.',
  },
];

export const journey = [
  {
    number: '01',
    label: 'Foundation completed',
    title: 'Manual Testing',
    description: 'Finished studying manual QA fundamentals and practiced scenarios, test cases, execution and bug reporting.',
    state: 'completed',
  },
  {
    number: '02',
    label: 'Foundation completed',
    title: 'API Testing',
    description: 'Completed API testing fundamentals, including REST concepts, HTTP methods, responses and Postman-based checks.',
    state: 'completed',
  },
  {
    number: '03',
    label: 'Working knowledge',
    title: 'SQL Queries',
    description: 'Able to write SQL queries, with a focus on retrieving and checking database information.',
    state: 'completed',
  },
  {
    number: '04',
    label: 'Just started',
    title: 'Automation Testing',
    description: 'Beginning the automation learning journey. No completed automation project is claimed yet.',
    state: 'current',
  },
];

export const education = [
  {
    period: '2023 — Present',
    name: 'B.Sc. in Computer Science & Engineering',
    institution: 'Southeast University, Dhaka',
    detail: 'Ongoing · One semester remaining',
    score: 'Current CGPA 3.66 / 4.00',
    featured: true,
  },
  {
    period: '2020 — 2022',
    name: 'Higher Secondary Certificate (HSC)',
    institution: 'Sonargaon Star Flower S.R School and College',
    score: 'GPA 5.00 / 5.00',
  },
  {
    period: '2018 — 2020',
    name: 'Secondary School Certificate (SSC)',
    institution: 'Baluakandi Dr. Abdul Gaffar School and College',
    score: 'GPA 4.44 / 5.00',
  },
];
