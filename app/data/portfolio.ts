export interface Experience {
  company: string
  role: string
  period: string
  type: string
  image: string
  description: string
  highlights: string[]
  technologies: string[]
}

export interface Project {
  title: string
  category: string
  description: string
  image: string
  tags: string[]
  demoUrl: string
  repoUrl: string
  role?: string
  relatedExperience?: string
  contributions?: string[]
  impact?: {
    summary: string
    stats?: { value: string; label: string }[]
    details: string[]
  }
}

export const experiences: Experience[] = [
  { company: 'Maybank', role: 'IT Infrastructure Engineer', period: 'APR 2026 — PRESENT', type: 'FULL-TIME', image: '/infra.png', description: 'Supporting reliable IT operations across branch offices through infrastructure maintenance, troubleshooting, and hands-on systems work.', highlights: ['Branch IT operations', 'Hardware & software deployment', 'Server maintenance', 'Infrastructure projects'], technologies: ['IT Operations', 'System Admin', 'Networking', 'Troubleshooting'] },
  { company: 'PT Komatsu Remanufacturing Asia', role: 'Web Developer Intern', period: 'JUL 2025 — DEC 2025', type: 'INTERNSHIP', image: '/webdev.png', description: 'Developed the web version of the Employee Information System so employees without mobile access could use the same core workflows.', highlights: ['Responsive EIS interfaces', 'Attendance & reimbursement flows', 'Agile collaboration', 'Laravel application development'], technologies: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'Agile'] },
  { company: 'PT Komatsu Remanufacturing Asia', role: 'UI/UX Design Intern', period: 'JAN 2025 — JUN 2025', type: 'INTERNSHIP', image: '/uiuxmeeting.png', description: 'Designed mobile and web interfaces for an Employee Information System used by more than 700 employees across departments.', highlights: ['Design Sprint workshops', 'Lean UX web design', 'Stakeholder interviews', 'High-fidelity Figma prototypes'], technologies: ['Figma', 'Design Sprint', 'Lean UX', 'User Research'] },
  { company: 'Kalimantan Institute of Technology', role: 'Teaching Assistant', period: 'JAN 2024 — DEC 2025', type: 'PART-TIME', image: '/teacher.png', description: 'Guided students through programming, web development, cloud computing, networking, and Linux system administration courses.', highlights: ['Python & PHP fundamentals', 'Laravel web development', 'Cisco networking labs', 'Ubuntu system management'], technologies: ['Python', 'PHP', 'Laravel', 'Docker', 'Cisco', 'Ubuntu'] }
]

export const projects: Project[] = [
    { 
    title: 'EIS Mobile UI/UX Design', 
    category: 'UI/UX DESIGN', 
    description: 'A mobile Employee Information System experience covering attendance, reimbursement, and time management for 700+ employees.', 
    image: '/project-eis-mobile.png', 
    tags: ['Figma', 'UI/UX', 'Mobile Design'], 
    demoUrl: 'https://www.figma.com/proto/AZjby73mEu6pIhxTxE2RkD/Mobile-Prototype', 
    repoUrl: '#',
    role: 'UI/UX Designer',
    relatedExperience: 'PT. Komatsu Remanufacturing Asia',
    contributions: [
      'Conducted stakeholder interviews and user research with employees across multiple departments',
      'Facilitated Design Sprint workshops to align business goals with user needs',
      'Created user flows and information architecture for complex HR workflows',
      'Designed high-fidelity prototypes in Figma covering attendance, leave, and reimbursement modules',
      'Established a consistent design system with reusable components and patterns',
      'Collaborated with developers to ensure design feasibility and smooth handoff'
    ],
    impact: {
      summary: 'Created an intuitive mobile interface that streamlined HR processes for over 700 employees across the organization.',
      stats: [
        { value: '700+', label: 'USERS' },
        { value: '8', label: 'MODULES' }
      ],
      details: [
        'Simplified complex HR workflows into intuitive mobile-first interactions',
        'Reduced training time by creating familiar and consistent interaction patterns',
        'Improved employee access to HR services through mobile convenience',
        'Established a scalable design foundation for future feature additions'
      ]
    }
  },
  { 
    title: 'Chremate', 
    category: 'FULLSTACK DEVELOPMENT', 
    description: 'An AI-powered personal finance tracker for first-time earners, built around natural language input and practical budget awareness.', 
    image: '/project-chremate.png', 
    tags: ['Vue.js', 'Firebase', 'Gemini AI', 'Tailwind CSS'], 
    demoUrl: 'https://chremate.anandajein.my.id/', 
    repoUrl: 'https://github.com/jeeexcalibur/chremate',
    role: 'Fullstack Developer',
    relatedExperience: 'Personal Project',
    contributions: [
      'Designed and implemented a natural language interface using Gemini AI to parse spending entries from conversational input',
      'Built a real-time expense tracking system with Firebase for seamless data synchronization across devices',
      'Created an intuitive dashboard with visual budget insights and spending pattern analysis',
      'Developed category-based expense organization with customizable budget limits and alerts',
      'Implemented secure authentication and user data management using Firebase Auth',
      'Optimized the UI for mobile-first experience targeting first-time earners and young professionals'
    ],
    impact: {
      summary: 'Created an accessible financial management tool that removes barriers to expense tracking through conversational AI and smart categorization.',
      details: [
        'Simplified expense entry by allowing users to input transactions in natural language',
        'Reduced friction in budget management for users unfamiliar with traditional finance apps',
        'Provided real-time spending insights to help users build better financial habits',
        'Made personal finance tracking more approachable for first-time earners'
      ]
    }
  },
    { 
    title: 'Serenity Booth', 
    category: 'WEB DEVELOPMENT', 
    description: 'A browser-based photo booth that turns webcam captures into customizable photo strips without requiring an account.', 
    image: '/project-serenity-booth.png', 
    tags: ['Vue.js', 'Tailwind CSS', 'WebRTC'], 
    demoUrl: 'https://serenitybooth.anandajein.my.id/', 
    repoUrl: 'https://github.com/jeeexcalibur/Serenity-Booth',
    role: 'Frontend Developer',
    relatedExperience: 'Personal Project',
    contributions: [
      'Implemented WebRTC camera access and real-time video preview with cross-browser compatibility',
      'Built a photo strip generation system with customizable layouts and templates',
      'Created an intuitive photo capture interface with countdown timer and visual feedback',
      'Developed client-side image processing and composition using HTML5 Canvas API',
      'Designed a filter system for real-time photo effects and enhancements',
      'Implemented download functionality for generated photo strips in high resolution'
    ],
    impact: {
      summary: 'Delivered a fun, privacy-focused photo booth experience that works entirely in the browser without requiring user accounts or server storage.',
      details: [
        'Enabled instant photo strip creation without any software installation or registration',
        'Protected user privacy by processing all photos locally in the browser',
        'Made photo booth functionality accessible to anyone with a webcam and modern browser',
        'Provided a lightweight alternative to traditional photo booth applications'
      ]
    }
  },
  { 
    title: 'Personnel Availability Dashboard', 
    category: 'FULLSTACK DEVELOPMENT', 
    description: 'A workforce dashboard for availability metrics, overtime tracking, absence management, and department-level reporting.', 
    image: '/project-dashboard-mp.png', 
    tags: ['Laravel', 'MySQL', 'Tailwind CSS', 'Vite'], 
    demoUrl: 'https://github.com/jeeexcalibur/hc-performance-dashboard', 
    repoUrl: 'https://github.com/jeeexcalibur/hc-performance-dashboard',
    role: 'Fullstack Developer',
    relatedExperience: 'PT. Komatsu Remanufacturing Asia',
    contributions: [
      'Led requirement discovery with the client and translated operational needs into clear system workflows and features',
      'Drove weekly progress reviews, gathered stakeholder feedback, and proactively recommended improvements to the proposed solution',
      'Developed the web application across the full implementation lifecycle and independently performed functional testing before UAT',
      'Managed a two-stage UAT process, starting with the Section Head and continuing through managerial review',
      'Resolved findings and implemented revisions as business requirements evolved throughout the project',
      'Partnered closely with the internal IT team to align data structures, business rules, and system implementation'
    ],
    impact: {
      summary: 'Transformed fragmented, spreadsheet-based processes into a centralized platform serving employees across the organization.',
      stats: [
        { value: '300', label: 'EMPLOYEES' },
        { value: '15', label: 'DEPARTMENTS' }
      ],
      details: [
        'Consolidated training data previously distributed across multiple spreadsheets into a centralized source of information',
        'Turned an internal innovation plan into an operational platform with reusable and standardized workflows',
        'Automated follow-up processes, reducing manual coordination after key activities',
        'Improved traceability across the full lifecycle, from planning and approval to completion'
      ]
    }
  },

  { 
    title: 'Company Profile Boilerplate', 
    category: 'FULLSTACK DEVELOPMENT', 
    description: 'A deployable Laravel company profile template with responsive pages and a custom admin panel for content management.', 
    image: '/project-company-profile.png', 
    tags: ['Laravel', 'Tailwind CSS', 'MySQL'], 
    demoUrl: 'https://github.com/jeeexcalibur/company-profile-template', 
    repoUrl: 'https://github.com/jeeexcalibur/company-profile-template',
    role: 'Fullstack Developer',
    relatedExperience: 'Personal Project',
    contributions: [
      'Architected a modular Laravel template with reusable components for common business pages',
      'Built a custom admin panel for non-technical users to manage content without code changes',
      'Implemented CRUD operations for services, portfolio items, team members, and blog posts',
      'Created responsive page templates for About, Services, Portfolio, Blog, and Contact sections',
      'Developed a contact form with email notification system and inquiry management',
      'Integrated SEO-friendly URL structures and meta tag management'
    ],
    impact: {
      summary: 'Provided a production-ready company website template that accelerates deployment for small to medium businesses.',
      details: [
        'Reduced website development time from weeks to days for standard company profiles',
        'Enabled non-technical staff to maintain website content independently',
        'Offered a cost-effective alternative to custom website development',
        'Created a foundation that can be easily customized for different industries'
      ]
    }
  },
  { 
    title: 'Sweetelle: Cake Showcase', 
    category: 'WEB DEVELOPMENT', 
    description: 'A cake showcase and sales platform with recipe management, product categorization, cashier flows, and asset CRUD.', 
    image: '/project-sweetelle.png', 
    tags: ['Laravel', 'Filament', 'MySQL'], 
    demoUrl: 'https://github.com/jeeexcalibur/Sweetelle', 
    repoUrl: '#',
    role: 'Fullstack Developer',
    relatedExperience: 'Academic Project',
    contributions: [
      'Designed and implemented a product catalog system with categories and detailed recipe information',
      'Built an admin panel using Laravel Filament for easy inventory and order management',
      'Developed a point-of-sale interface for processing customer orders and payments',
      'Created CRUD operations for products, recipes, ingredients, and customer orders',
      'Implemented image upload and management for product showcase galleries',
      'Integrated order tracking and basic reporting for sales analytics'
    ],
    impact: {
      summary: 'Delivered a complete e-commerce solution for a cake business with integrated inventory and sales management.',
      details: [
        'Streamlined product management and order processing for small bakery operations',
        'Provided an attractive showcase platform to display cake offerings and recipes',
        'Simplified cashier workflows with an intuitive point-of-sale interface',
        'Enabled better inventory tracking and sales reporting for business decisions'
      ]
    }
  }
]
