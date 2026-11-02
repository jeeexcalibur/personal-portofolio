export interface ExperienceImpact {
  summary: string
  stats?: { value: string; label: string }[]
  details: string[]
}

export interface Experience {
  slug: string
  company: string
  companyContext?: string
  role: string
  period: string
  type: string
  location?: string
  image: string
  description: string
  highlights: string[]
  technologies: string[]
  contributions?: string[]
  galleryLabel?: string
  gallerySize?: 'default' | 'large'
  gallery?: AwardImage[]
  impact?: ExperienceImpact
  skillsGained?: string[]
  relatedProjectSlug?: string
  relatedProjectTitle?: string
  links?: { label: string; url: string }[]
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
  featured?: boolean
  relatedExperience?: string
  contributions?: string[]
  galleryLabel?: string
  gallery?: AwardImage[]
  gallerySize?: 'default' | 'large'
  metricsLabel?: string
  metricsFootnote?: string
  metrics?: { label: string, value: string }[]
  impact?: {
    summary: string
    stats?: { value: string; label: string }[]
    details: string[]
  }
}

// Semua angka di blok ini berasal dari CV (main copy.typ) atau halaman project yang
// sudah tayang. Jangan menambah angka tanpa sumber yang bisa ditunjukkan saat interview.
export const experiences: Experience[] = [
  {
    slug: 'maybank-it-infrastructure-engineer',
    company: 'Maybank',
    companyContext: "One of Southeast Asia's largest banking groups. This role sits in branch IT operations for the Balikpapan area, supporting 3 branch offices and 100+ employees.",
    role: 'Technology Infrastructure Engineer',
    period: 'APR 2026 — PRESENT',
    type: 'FULL-TIME',
    location: 'Balikpapan, Indonesia',
    image: '/infra.jpg',
    description: 'Resolving 125+ IT service requests per month across 3 branch offices, from core banking applications and LAN connectivity to server room and hardware support.',
    highlights: ['IT service desk (ITSM)', 'Core banking application support', 'Server room monitoring', 'LAN recabling projects'],
    technologies: ['ITSM', 'Windows Administration', 'Core Banking', 'LAN & Cabling', 'Vendor Coordination', 'Backup'],
    contributions: [
      'Resolved 125+ IT service requests per month across 3 branch offices for 100+ employees, with a 100% resolution rate based on ITSM ticket reports',
      'Troubleshot core banking applications, network connectivity, and hardware issues independently as ticket volume grew',
      'Monitored server room infrastructure — UPS, fire detection, temperature and humidity — plus physical security systems to support continuous availability',
      'Coordinated vendors and monitored branch renovation, relocation, and LAN recabling projects across multiple sites',
      'Installed and configured core banking application environments, PCs, PIN pads, and multifunction devices for new and relocated workstations',
      // TODO(backup): lengkapi 3 hal ini lalu ubah kalimatnya — apa yang di-backup
      // (sistem/aplikasi/file), jadwalnya (harian/mingguan), dan apakah pernah uji restore.
      // Kalau tiga hal ini tidak bisa dijawab, hapus baris di bawah.
      'Managed backup processes for IT systems'
    ],
    impact: {
      summary: 'Runs branch-level IT support for 3 offices and 100+ employees: requests get resolved on site, server room conditions stay within tolerance, and new or relocated branches come online with working hardware and applications.',
      stats: [
        { value: '125+', label: 'REQUESTS / MONTH' },
        { value: '3', label: 'BRANCH OFFICES' },
        { value: '100+', label: 'EMPLOYEES SERVED' },
        { value: '100%', label: 'RESOLUTION RATE' }
      ],
      details: [
        'Held a 100% resolution rate on 125+ monthly service requests, per ITSM ticket reports',
        'Kept server room conditions monitored so temperature, humidity, and fire detection issues surface before they become outages',
        'Supported branch renovation and relocation, including LAN recabling, so offices reopen with working network and endpoints',
        'Installed and configured core banking applications and peripherals as part of branch readiness'
      ]
    },
    galleryLabel: 'IN THE RACK ROOM',
    gallery: [
      {
        src: '/experience/maybank/01-branch-rack.jpg',
        alt: 'Dense network rack in a Maybank branch office with patch cabling',
        caption: 'Branch rack — patch cabling, switching, and branch devices in one cabinet.',
        shape: 'wide'
      },
      {
        src: '/experience/maybank/02-patch-panel.jpg',
        alt: 'Close-up of connection terminals and cabling inside a network panel',
        caption: 'Patch panel work — every port labelled and traced before a change.',
        shape: 'wide'
      },
      {
        src: '/experience/maybank/03-card-terminal.jpg',
        alt: 'Maybank card payment terminal powered on at a workstation',
        caption: 'Card payment terminal staged and tested before it goes live at a branch.',
        shape: 'wide'
      },
      {
        src: '/experience/maybank/04-rack-room.jpg',
        alt: 'Branch rack room with network cabinets and cabling',
        caption: 'The branch rack room where onsite work happens.',
        shape: 'wide'
      }
    ],
    skillsGained: ['IT Service Desk (ITSM)', 'Core Banking Support', 'Server Room Monitoring', 'Hardware Deployment', 'Vendor Coordination', 'LAN Recabling']
  },
  {
    slug: 'komatsu-web-developer-intern',
    company: 'PT Komatsu Remanufacturing Asia',
    companyContext: 'Manufacturing and remanufacturing subsidiary of Komatsu Ltd. Its Employee Information System (EIS) serves 700+ employees across departments.',
    role: 'Web Developer Intern',
    period: 'JUN 2025 — FEB 2026',
    type: 'INTERNSHIP',
    location: 'North Balikpapan, Indonesia',
    image: '/webdev.jpg',
    description: 'Developed the web version of the Employee Information System so employees without mobile access could use the same core workflows.',
    highlights: ['Responsive EIS interfaces', 'Attendance & reimbursement flows', 'Approval workflows', 'Laravel application development'],
    technologies: ['Laravel', 'Livewire', 'Blade', 'Tailwind CSS', 'PHP', 'MySQL'],
    contributions: [
      'Built the web version of the Employee Information System with Laravel, Livewire, Blade, and Tailwind CSS',
      'Covered Attendance, Reimbursement, and Time Management modules plus the approval workflows behind them',
      'Implemented submission and approval states end to end, including validation and the records shown to HR',
      'Worked in agile cycles with the UI/UX designer and internal IT, translating Figma handoffs into working screens',
      'Adjusted existing modules as business rules changed during the internship'
    ],
    impact: {
      summary: 'Extended the EIS from mobile-only to a browser client built with Laravel and Livewire, so employees on shared office desktops can complete the same HR workflows.',
      stats: [{ value: '700+', label: 'EIS USERS' }],
      details: [
        'Closed the access gap for employees without mobile devices by delivering a browser-based client',
        'Covered four HR flows — attendance, reimbursement, time management, and approvals — in one application',
        'Kept the web client consistent with the design system produced during the UI/UX phase'
      ]
    },
    galleryLabel: 'ON SITE',
    gallery: [
      {
        src: '/experience/komatsu-web-developer/01-plant-site.jpg',
        alt: 'Aerial view of the Komatsu Remanufacturing Asia plant in Balikpapan',
        caption: 'The Balikpapan plant — the operations the internal tools serve.',
        shape: 'wide'
      },
      {
        src: '/experience/komatsu-web-developer/02-on-site.jpg',
        alt: 'Jein Ananda in front of the Komatsu Remanufacturing Asia building',
        caption: 'On site at Komatsu Remanufacturing Asia, North Balikpapan.',
        shape: 'wide'
      }
    ],
    skillsGained: ['Laravel', 'Livewire', 'Blade', 'Tailwind CSS', 'Approval Workflows', 'Agile Collaboration'],
    relatedProjectSlug: 'personnel-availability-dashboard',
    relatedProjectTitle: 'Personnel Availability Dashboard'
  },
  {
    slug: 'komatsu-ui-ux-design-intern',
    company: 'PT Komatsu Remanufacturing Asia',
    companyContext: 'Manufacturing and remanufacturing subsidiary of Komatsu Ltd. The EIS is used by more than 700 employees across departments.',
    role: 'UI/UX Design Intern',
    period: 'JAN 2025 — MAY 2025',
    type: 'INTERNSHIP',
    location: 'North Balikpapan, Indonesia',
    image: '/uiuxmeeting.jpg',
    description: 'Designed mobile and web interfaces for an Employee Information System used by more than 700 employees, validated through usability testing.',
    highlights: ['Design Sprint workshops', 'Face-recognition attendance flow', 'Usability testing', 'High-fidelity Figma prototypes'],
    technologies: ['Figma', 'Design Sprint', 'Lean UX', 'User Research', 'Usability Testing'],
    contributions: [
      'Conducted stakeholder interviews and user research with employees across multiple departments',
      'Facilitated Design Sprint workshops to align business goals with user needs',
      'Created user flows and information architecture for complex HR workflows',
      'Designed mobile and web interfaces in Figma, from user flows and wireframes to high-fidelity prototypes',
      'Designed the face-recognition attendance flow for the mobile app',
      'Ran usability testing with 17 respondents and iterated on the findings before developer handoff'
    ],
    impact: {
      summary: 'Created the mobile interface that streamlined HR processes for over 700 employees, validated with usability testing at 100% task completion.',
      stats: [
        { value: '700+', label: 'USERS' },
        { value: '8', label: 'MODULES' },
        { value: '17', label: 'TESTERS' },
        { value: '100%', label: 'TASK COMPLETION' }
      ],
      details: [
        'Reached 100% task completion in usability testing with 17 respondents',
        'Simplified complex HR workflows into mobile-first interactions across eight modules',
        'Established a consistent design system that the web build reused in the next phase',
        'Handed off to developers with documented components and interaction patterns'
      ]
    },
    galleryLabel: 'IN THE ROOM',
    gallery: [
      {
        src: '/experience/komatsu-ui-ux-design/01-team-review.jpg',
        alt: 'Review session with the Komatsu internal team in a meeting room',
        caption: 'Review session with the internal team before hand-off.',
        shape: 'wide'
      },
      {
        src: '/experience/komatsu-ui-ux-design/02-working-session.jpg',
        alt: 'Working session comparing the interface on laptop and phone',
        caption: 'Working session: the same flow checked on laptop and phone.',
        shape: 'wide'
      }
    ],
    skillsGained: ['User Research', 'Information Architecture', 'Design Sprint', 'Design Systems', 'Usability Testing', 'Developer Handoff'],
    relatedProjectSlug: 'eis-mobile-ui-ux-design',
    relatedProjectTitle: 'EIS Mobile UI/UX Design'
  },
  {
    slug: 'teaching-assistant-itk',
    company: 'Kalimantan Institute of Technology',
    companyContext: 'State institute of technology in Balikpapan (ITK). Assistant lecturers run the practicum sessions that carry the practical weight of each course.',
    role: 'Assistant Lecturer',
    period: 'JAN 2024 — DEC 2025',
    type: 'PART-TIME',
    location: 'Balikpapan, Indonesia',
    image: '/teacher.jpg',
    description: 'Taught networking, operating systems, and cloud computing practicums, and mentored 50–60 students per class across 7 courses.',
    highlights: ['Computer Network Design & Management', 'Operating Systems (Ubuntu/Linux)', 'Cloud Computing & Docker', 'Cisco Packet Tracer'],
    technologies: ['Cisco Packet Tracer', 'Ubuntu', 'Docker', 'CI/CD', 'Python', 'PHP'],
    contributions: [
      'Taught Computer Network Design & Management — IP addressing, subnetting, routing, VLAN, and network security',
      'Taught Operating Systems on Ubuntu/Linux, including designing and simulating topologies in Cisco Packet Tracer',
      'Guided Cloud Computing practicums on Docker containerization and CI/CD pipelines',
      'Mentored 50–60 students per class across 7 courses, including web development and programming',
      'Reviewed student work and gave feedback aimed at fixing root causes rather than symptoms'
    ],
    impact: {
      summary: 'Taught and mentored 50–60 students per class across 7 courses over two years, turning theory-heavy networking, Linux, and cloud material into lab work students could complete themselves.',
      stats: [
        { value: '7', label: 'COURSES' },
        { value: '50-60', label: 'STUDENTS / CLASS' },
        { value: '2', label: 'YEARS' }
      ],
      details: [
        'Gave students direct practice on the tools used in industry: Cisco Packet Tracer, Ubuntu/Linux, Docker, and CI/CD',
        'Covered networking and operating systems from fundamentals through device and service configuration',
        'Supported cohorts across 7 courses over four semesters'
      ]
    },
    skillsGained: ['Teaching', 'Networking (VLAN & Routing)', 'Cisco Packet Tracer', 'Linux Administration', 'Docker', 'CI/CD']
  }
]

export interface AwardImage {
  src: string
  alt: string
  caption: string
  width?: number
  height?: number
}

export interface AwardCredential {
  image: string
  pdf: string
  label: string
  meta: string
}

export interface Award {
  title: string
  org: string
  period: string
  slug: string
  kind: string
  role: string
  summary: string
  context: string
  contributions: string[]
  skills: string[]
  hero?: AwardImage
  galleryLabel: string
  gallery: AwardImage[]
  proofLabel?: string
  proof?: AwardImage[]
  credential?: AwardCredential
}

// Dari CV: beasiswa dan organisasi. Detail diambil dari foto kerja di D:\\Project\\Raw.
export const awards: Award[] = [
  {
    title: 'Bank Indonesia Scholarship Awardee',
    org: 'GenBI Balikpapan — Environment Division',
    period: 'MAY 2024 — MAY 2025',
    slug: 'genbi-balikpapan-environment',
    kind: 'SCHOLARSHIP',
    role: 'Member · Environment Division (Divisi Lingkungan Hidup), Komisariat ITK',
    summary: 'Awarded a Bank Indonesia scholarship and placed in the Environment Division of GenBI Balikpapan, the regional chapter of the national awardee community.',
    context: 'GenBI (Generasi Baru Indonesia) is the community of Bank Indonesia scholarship awardees. Members run programmes through their division alongside their studies — for the Environment Division, that meant environmental and community activity across the Balikpapan region.',
    contributions: [
      'Selected as a Bank Indonesia scholarship awardee through the GenBI Balikpapan regional chapter.',
      'Placed in the Environment Division, the part of the chapter responsible for its environmental and community programmes.',
      'Took part in Eco Action, the division programme documented here: a planting session run with the committee and local participants.',
      'Joined the chapter capacity building and leadership programme held with Kodim 0905/BPP in September 2024.',
      'Membership certified by Bank Indonesia Balikpapan for the 2024 period of Komisariat ITK.'
    ],
    skills: ['Programme participation', 'Environmental initiative', 'Teamwork'],
    galleryLabel: 'FIELD DOCUMENTATION',
    gallery: [
      { src: '/awards/genbi-eco-action-group.jpg', alt: 'GenBI Balikpapan cohort gathered under the Eco Action banner', caption: 'Eco Action — the chapter gathered after the planting session.', width: 2000, height: 1125 },
      { src: '/awards/genbi-capacity-building.jpg', alt: 'GenBI Balikpapan cohort at the capacity building closing session', caption: 'Capacity building and leadership closing session with Kodim 0905/BPP, Balikpapan, September 2024.', width: 1444, height: 963 },
      { src: '/awards/genbi-eco-action-planting.jpg', alt: 'Participants planting palm seedlings during Eco Action', caption: 'Eco Action — planting seedlings with the committee and local participants.', width: 2000, height: 1125 }
    ],
    credential: {
      image: '/awards/credentials/genbi-certificate.jpg',
      pdf: '/awards/credentials/genbi-certificate.pdf',
      label: 'CERTIFICATE OF CONTRIBUTION',
      meta: 'Bank Indonesia Balikpapan · issued 14 February 2025 · signed by Robi Ariadi, Deputi Direktur'
    }
  },
  {
    title: 'Staff of Student Welfare Department',
    org: 'HMSI ITK — Kabinet Synergia 2023/2024',
    period: 'AUG 2023 — AUG 2024',
    slug: 'hmsi-itk-student-welfare',
    kind: 'ORGANISATION',
    role: 'Staff · Student Welfare Department',
    summary: 'One year in the student welfare department of the Information Systems student association, producing publication work for scholarship information and student appreciation programmes.',
    context: 'HMSI ITK is the Information Systems student association at Kalimantan Institute of Technology. Its Student Welfare Department (Kesejahteraan Mahasiswa) runs scholarship information, academic appreciation, and student support programmes, published through the association channels.',
    contributions: [
      'Produced feed publications for the department series, including scholarship information (KEFO) and academic appreciation posts (STAMP).',
      'Laid out the Workshop Keprofesian announcement for the Android Developer session, from speaker profiles to schedule and venue detail.',
      'Kept the department visual identity consistent across series while handling dense information inside a single post.',
      'Served in Kabinet Synergia 2023/2024, recognised with 300 SK2PM points for the year of service.'
    ],
    skills: ['Graphic design', 'Layout & typography', 'Information design', 'Publication series'],
    hero: { src: '/awards/hmsi-org-poster.jpg', alt: 'HMSI ITK organisation poster', caption: 'HMSI ITK organisation poster', width: 718, height: 908 },
    galleryLabel: 'PUBLICATION WORK — DEPARTMENT SERIES',
    gallery: [
      { src: '/awards/hmsi-kefo-pertamina-foundation.jpg', alt: 'KEFO feed cover for the Pertamina Foundation scholarship', caption: 'KEFO — Pertamina Foundation scholarship cover.', width: 1200, height: 1500 },
      { src: '/awards/hmsi-kefo-brilian-scholarship.jpg', alt: 'KEFO slide announcing the BRILiaN Scholarship Program', caption: 'KEFO — BRILiaN Scholarship information.', width: 1200, height: 1500 },
      { src: '/awards/hmsi-stamp-appreciation.jpg', alt: 'STAMP cover for thesis proposal seminar appreciation', caption: 'STAMP — seminar proposal appreciation cover.', width: 1200, height: 1500 },
      { src: '/awards/hmsi-stamp-seminar.jpg', alt: 'STAMP detail layout with thesis title and schedule', caption: 'STAMP — thesis title, speaker, and schedule layout.', width: 1200, height: 1500 },
      { src: '/awards/hmsi-photo-recap.jpg', alt: 'Photo recap layout with two event photos', caption: 'Photo recap — session documentation layout.', width: 1200, height: 1500 },
      { src: '/awards/hmsi-workshop-android.jpg', alt: 'Workshop Keprofesian poster for the Android Developer session', caption: 'Workshop Keprofesian — Android Developer session poster.', width: 1200, height: 1500 }
    ],
    proofLabel: 'PUBLISHED PROOF — @HMSI_ITK',
    proof: [
      { src: '/awards/hmsi-meet-our-team.jpg', alt: 'HMSI Instagram post introducing the Student Welfare Department team, listing Jein Ananda as staff', caption: 'Meet Our Team — department introduction post naming me as staff, 11 October 2023.', width: 1200, height: 888 },
      { src: '/awards/hmsi-proof-msib.jpg', alt: 'Instagram post announcing MSIB Kampus Merdeka registration', caption: 'MSIB Kampus Merdeka — scholarship information published through the department account.', width: 1200, height: 883 },
      { src: '/awards/hmsi-proof-digital-academy.jpg', alt: 'Instagram post announcing My Digital Academy Mandiri', caption: 'My Digital Academy Mandiri — programme announcement published through the department account.', width: 1200, height: 886 },
      { src: '/awards/hmsi-proof-thesis.jpg', alt: 'Instagram post congratulating a student on their thesis defence', caption: 'Sidang Tugas Akhir — thesis defence appreciation post.', width: 1200, height: 895 }
    ],
    credential: {
      image: '/awards/credentials/hmsi-certificate.jpg',
      pdf: '/awards/credentials/hmsi-certificate.pdf',
      label: 'CERTIFICATE OF SERVICE',
      meta: 'HMSI ITK · no. 499/SFT/BPH/SYNERGIA/HMSI/VII/2024 · 300 SK2PM · signed by Sri Rahayu Natasia, Koordinator Program Studi Sistem Informasi'
    }
  }
]

export const projects: Project[] = [
  {
    title: 'AWS Idle Resource Checker',
    category: 'CLOUD INFRASTRUCTURE',
    description: 'A Python tool that scans EC2 instances, reads CPU utilisation from CloudWatch, flags idle servers, and estimates what keeping them running costs per month. Built and tested in a locked-down AWS Free Plan lab.',
    image: '/projects/aws-idle-resource-checker/cover.jpg',
    tags: ['Python', 'boto3', 'EC2', 'CloudWatch', 'IAM', 'AWS CLI'],
    demoUrl: '#',
    repoUrl: '#',
    role: 'Solo Project',
    featured: true,
    contributions: [
      'Set up an AWS Free Plan account with MFA on the root user, a separate IAM user for daily work, and an AWS Budgets alert as a cost safety net',
      'Launched three EC2 test instances in Singapore — two left idle and one running continuous CPU load — all with no public IP, no SSH, and no key pairs',
      'Connected from the laptop through the AWS CLI, keeping access keys in the local AWS config so no credentials appear in code or in the repository',
      'Wrote a Python script with boto3 that lists running instances and reads each one\'s 2-hour average CPU from CloudWatch',
      'Flagged instances under 5% CPU as idle and estimated monthly savings from the hourly instance price over a 730-hour month',
      'Exported results to CSV, then terminated every test resource after capturing evidence'
    ],
    galleryLabel: 'EVIDENCE — AWS CONSOLE',
    gallery: [
      { src: '/projects/aws-idle-resource-checker/01-ec2-dashboard.jpg', alt: 'EC2 dashboard in ap-southeast-1 showing three running instances and no key pairs', caption: 'Lab account: three running instances in ap-southeast-1, zero key pairs, zero public IPs.', width: 1600, height: 782 },
      { src: '/projects/aws-idle-resource-checker/02-instances.jpg', alt: 'EC2 instance list with idle-1, idle-2 and busy-1', caption: 'Test fleet: idle-1 and idle-2 left alone, busy-1 running a continuous CPU load.', width: 1600, height: 784 },
      { src: '/projects/aws-idle-resource-checker/03-cloudwatch-metrics.jpg', alt: 'CloudWatch monitoring graphs for CPU utilisation and CPU credit balance', caption: 'CloudWatch: CPU utilisation plus credit balance per instance — the metric the script reads.', width: 1600, height: 782 },
      { src: '/projects/aws-idle-resource-checker/04-checker-output.jpg', alt: 'Terminal output of checker.py listing idle instances and the monthly saving', caption: 'checker.py output: both idle instances at 0.2% CPU, $19.27 per month of potential saving.', width: 1600, height: 897 }
    ],
    impact: {
      summary: 'Turned a blank AWS account into a small, safely locked-down lab, and built a tool that makes idle cloud spend visible. Results come from a simulated workload, not production data.',
      stats: [
        { value: '3', label: 'INSTANCES ANALYSED' },
        { value: '2', label: 'IDLE DETECTED' },
        { value: '$19', label: 'EST. SAVING / MONTH' }
      ],
      details: [
        'Idle servers sat at about 0.2% CPU while the loaded one held near 50%, which gave a clear threshold to separate them',
        'Estimated saving on the test setup was about $19 per month, using an on-demand hourly price checked against AWS pricing',
        'Test servers were closed by default: no public IP, no inbound traffic, no stored keys',
        'CPU credit graphs showed why CPU alone can mislead on burstable instances — the loaded server used up its credits while the idle ones kept accumulating them'
      ]
    },
    metricsLabel: 'MEASURED RESULT — LAB RUN',
    metrics: [
      { label: 'Idle CPU', value: '0.2%' },
      { label: 'Loaded CPU', value: '~50%' },
      { label: 'Idle threshold', value: 'under 5%' },
      { label: 'Hours per month', value: '730' },
      { label: 'On-demand price', value: '$0.0104/hr' },
      { label: 'Estimated saving', value: '$19.27/mo' }
    ],
    metricsFootnote: 'One test run against three t3.micro instances in ap-southeast-1; every resource was terminated afterwards. Savings cover instance hours only — EBS and data transfer are excluded.'
  },
    { 
    title: 'EIS Mobile UI/UX Design', 
    category: 'UI/UX DESIGN', 
    description: 'A mobile Employee Information System experience covering attendance, reimbursement, and time management for 700+ employees.', 
    image: '/project-eis-mobile.png', 
    tags: ['Figma', 'UI/UX', 'Mobile Design'], 
    demoUrl: 'https://www.figma.com/proto/AZjby73mEu6pIhxTxE2RkD/Mobile-Prototype', 
    repoUrl: '#',
    role: 'UI/UX Designer',
    featured: true,
    relatedExperience: 'PT. Komatsu Remanufacturing Asia',
    contributions: [
      'Conducted stakeholder interviews and user research with employees across multiple departments',
      'Facilitated Design Sprint workshops to align business goals with user needs',
      'Created user flows and information architecture for complex HR workflows',
      'Designed high-fidelity prototypes in Figma covering attendance, leave, and reimbursement modules',
      'Established a consistent design system with reusable components and patterns',
      'Collaborated with developers to ensure design feasibility and smooth handoff'
    ],
    galleryLabel: 'SCREENS — MOBILE APP',
    gallerySize: 'large',
    gallery: [
      { src: '/projects/eis-mobile-ui-ux-design/01-home.jpg', alt: 'EIS mobile home screen with reimbursement, time management, and Surat Tugas', caption: 'Home — reimbursement, time management, and Surat Tugas entry points, with a task badge for pending actions.', width: 414, height: 809 },
      { src: '/projects/eis-mobile-ui-ux-design/02-add-reimbursement.jpg', alt: 'Add reimbursement screen with quota overview', caption: 'Add Reimbursement — quota overview, remaining balance, and recent claims with status.', width: 414, height: 809 },
      { src: '/projects/eis-mobile-ui-ux-design/03-validation-details.jpg', alt: 'Reimbursement validation details screen', caption: 'Validation details — patient, provider, invoice date, receipt, and cost breakdown before submission.', width: 414, height: 809 },
      { src: '/projects/eis-mobile-ui-ux-design/04-approval.jpg', alt: 'Approval screen with donut chart and request list', caption: 'Approval — 75% approved summary, status counts, category tabs, and the request list.', width: 414, height: 809 }
    ],
    metricsLabel: 'MEASURED RESULT — UEQ EVALUATION',
    metrics: [
      { label: 'Attractiveness', value: '2.82' },
      { label: 'Perspicuity', value: '2.82' },
      { label: 'Efficiency', value: '2.93' },
      { label: 'Dependability', value: '2.78' },
      { label: 'Stimulation', value: '2.82' },
      { label: 'Novelty', value: '2.71' },
      { label: 'Task completion', value: '100%' },
      { label: 'Time-based efficiency', value: '0.03686 goal/sec' }
    ],
    metricsFootnote: 'UEQ and usability measurement from the thesis evaluation with 17 respondents. All six UEQ scales sit above the Excellent benchmark, and the measurement table interprets both effectiveness and efficiency as very high.',
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
    title: 'MiniZoo Balikpapan — Wildlife Park Website',
    category: 'UI/UX DESIGN',
    description: 'A six-page website concept for a mini zoo in Balikpapan, designed during KKN: ticketing, animal profiles, flora & fauna catalogue, news, and documentary.',
    image: '/projects/kkn-minizoo-cover.jpg',
    tags: ['Figma', 'UI/UX', 'Web Design', 'Information Architecture'],
    demoUrl: '#',
    repoUrl: '#',
    role: 'UI/UX Designer · KKN Team',
    featured: true,
    relatedExperience: 'KKN — Community Service Programme',
    contributions: [
      'Mapped a six-page structure: home, ticket catalogue, flora & fauna, animal profiles, news, and documentary.',
      'Designed the home journey from the hero carousel down to the ticket list, opening-hours panel, statistics band, and activity posts.',
      'Built one card system for tickets, animals, activities, and documentaries so new content drops into an existing layout.',
      'Designed detail templates for animal profiles and news articles, covering gallery, location, and readable body hierarchy.',
      'Designed the documentary listing with search, category tabs between Flora & Fauna and Documentary, and read-more cards.',
      'Set the visual direction: deep green palette, condensed display type, and forest silhouettes carried across sections.'
    ],
    galleryLabel: 'SCREENS — SELECTED PAGES',
    gallery: [
      { src: '/projects/kkn-minizoo-cover.jpg', alt: 'MiniZoo home page hero with the headline Where Wildlife Comes Alive', caption: 'Home — hero carousel, opening-hours panel, and ticket entry point.', width: 1440, height: 720 },
      { src: '/projects/kkn-animals.jpg', alt: 'Animals listing page with animal cards', caption: 'Flora & Fauna — animal listing with the shared card system.', width: 1440, height: 1054 },
      { src: '/projects/kkn-animal-detail.jpg', alt: 'Animal detail page with profile and gallery', caption: 'Animal detail — profile layout with gallery and descriptive copy.', width: 1800, height: 1318 },
      { src: '/projects/kkn-news-detail.jpg', alt: 'News detail page with article layout', caption: 'News detail — article template with body hierarchy and related content.', width: 1800, height: 1268 },
      { src: '/projects/kkn-documentary.jpg', alt: 'Documentary listing page with cards', caption: 'Documentary — listing with category tabs and read-more cards.', width: 1800, height: 1268 }
    ],
    impact: {
      summary: 'Turned scattered zoo information — tickets, animal profiles, activities, and documentaries — into one navigable site structure, designed end to end during the KKN programme.',
      stats: [
        { value: '6', label: 'PAGES DESIGNED' },
        { value: '8', label: 'HOME SECTIONS' }
      ],
      details: [
        'One layout language across six page types, so listing pages feed detail pages without a redesign.',
        'Ticket prices and opening hours moved to the first screen instead of sitting in a contact page.',
        'A single card pattern lets the zoo publish animals, activities, or documentaries without new layouts.',
        'Editorial pages share the same template, keeping news and documentary consistent as content grows.'
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
    galleryLabel: 'SCREENS — THE APP',
    gallery: [
      { src: '/projects/chremate/01-dashboard.jpg', alt: 'Chremate dashboard with balance, budget, and spending breakdown', caption: 'Dashboard — balance, monthly budget, 7-day trend, and spending breakdown on one screen.', width: 1600, height: 807 },
      { src: '/projects/chremate/02-transactions.jpg', alt: 'Chremate transactions list with search and filters', caption: 'Transactions — searchable, filterable log of every income and expense entry.', width: 1600, height: 809 },
      { src: '/projects/chremate/03-insights.jpg', alt: 'Chremate insights page with averages and monthly report', caption: 'Insights — daily average, biggest expense, category split, and the monthly report.', width: 1600, height: 809 },
      { src: '/projects/chremate/04-settings.jpg', alt: 'Chremate settings with budget and category limits', caption: 'Settings — monthly budget and per-category spending limits.', width: 1600, height: 809 }
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
    galleryLabel: 'SCREENS — THE SITE',
    gallery: [
      { src: '/projects/serenity-booth/01-home.jpg', alt: 'Serenity Booth home page', caption: 'Home — free online photo booth, with Start Photo Session as the single entry point.', width: 1600, height: 809 },
      { src: '/projects/serenity-booth/02-about.jpg', alt: 'Serenity Booth about page', caption: 'About — what the booth does, explained in four steps.', width: 1600, height: 805 },
      { src: '/projects/serenity-booth/03-privacy.jpg', alt: 'Serenity Booth privacy policy page', caption: 'Privacy — camera permission and local-only processing, stated before the camera opens.', width: 1600, height: 808 },
      { src: '/projects/serenity-booth/04-select-layout.jpg', alt: 'Serenity Booth layout selection page', caption: 'Select Layout — Classic Four, Vertical Duo, Dynamic Six, and Square Quartet.', width: 1600, height: 803 },
      { src: '/projects/serenity-booth/05-photo-session.jpg', alt: 'Serenity Booth photo session page with stickers and download', caption: 'Capture your set — capture, upload, colour, stickers, download, and retake.', width: 1600, height: 806 }
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
    galleryLabel: 'SCREENS — TEMPLATE + ADMIN',
    gallery: [
      { src: '/projects/company-profile-boilerplate/01-homepage.jpg', alt: 'Company profile homepage', caption: 'Homepage — hero, services, team, and portfolio sections built as editable blocks.', width: 1600, height: 826 },
      { src: '/projects/company-profile-boilerplate/02-admin-dashboard.jpg', alt: 'Admin panel dashboard with content sections', caption: 'Admin panel — section-by-section editing, content counts, and quick actions.', width: 1600, height: 826 }
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
    relatedExperience: 'Freelance Project · Jan–Feb 2025',
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
