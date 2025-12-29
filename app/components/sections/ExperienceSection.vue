<script setup lang="ts">
const experiences = [
  {
    company: 'PT Komatsu Remanufacturing Asia',
    role: 'Web Developer Intern',
    period: 'Jul 2025 - Dec 2025',
    type: 'Internship',
    description: [
      'Developed the web version of Employee Information System (EIS) using PHP Laravel to reach users without mobile access',
      'Built responsive web interfaces mirroring mobile app functionality for Attendance, Reimbursement, and Time Management features',
      'Collaborated with Agile teams, participating in Scrum ceremonies like daily stand-ups and sprint reviews',
      'Supported the company\'s digitalization initiative by extending the EIS platform to web users'
    ],
    technologies: ['PHP', 'Laravel', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Agile'],
    icon: '💻'
  },
  {
    company: 'PT Komatsu Remanufacturing Asia',
    role: 'UI/UX Design Intern',
    period: 'Jan 2025 - Jun 2025',
    type: 'Internship',
    description: [
      'Designed mobile and web interfaces for Employee Information System (EIS) supporting 700+ employees across departments',
      'Applied Design Sprint for Mobile and Lean UX methodologies for Website to iterate quickly on designs',
      'Conducted stakeholder interviews and usability testing sessions to gather feedback and validate designs',
      'Created user flows, wireframes, and high-fidelity prototypes using Figma for Attendance (Face Recognition), Reimbursement, and Time Management features'
    ],
    technologies: ['Figma', 'Design Sprint', 'Lean UX', 'Prototyping', 'User Research'],
    icon: '🎨'
  },
  {
    company: 'Kalimantan Institute of Technology',
    role: 'Teaching Assistant',
    period: 'Jan 2024 - Dec 2024',
    type: 'Part-time',
    description: [
      'Taught programming fundamentals across multiple courses: Basic Algorithm (Python), Basic Programming (JavaScript), OOP (PHP), Web Development (Laravel), and Cloud Computing (Laravel + Docker)',
      'Instructed networking concepts including IP addressing, subnetting, routing, and VLAN configuration using Cisco Packet Tracer',
      'Guided students in Ubuntu Operating System, covering Linux commands and system management',
      'Provided hands-on sessions, feedback on assignments, and conducted evaluations to monitor student progress'
    ],
    technologies: ['Python', 'JavaScript', 'PHP', 'Laravel', 'Docker', 'Cisco', 'Ubuntu'],
    icon: '👨‍🏫'
  }
]
</script>

<template>
  <section id="experience" class="section transition-all duration-500" style="background-color: var(--bg-secondary);">
    <div class="section-container">
      <SectionTitle 
        title="Experience" 
        subtitle="My professional journey"
      />

      <div class="space-y-6 max-w-4xl mx-auto">
        <div 
          v-for="(exp, index) in experiences" 
          :key="exp.role + exp.period"
          class="card overflow-hidden group animate-slide-up"
          :style="{ animationDelay: `${index * 150}ms` }"
        >
          <div class="p-4 sm:p-6">
            <!-- Header -->
            <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
              <div class="flex items-start gap-4">
                <div class="text-3xl">{{ exp.icon }}</div>
                <div>
                  <h3 class="text-xl font-semibold transition-colors" style="color: var(--text-primary);">{{ exp.role }}</h3>
                  <div class="flex items-center gap-2 mt-1" style="color: var(--accent);">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span class="font-medium">{{ exp.company }}</span>
                  </div>
                </div>
              </div>
              <div class="flex items-center gap-3 flex-wrap">
                <span 
                  class="px-3 py-1 text-sm rounded-full font-medium transition-colors"
                  style="background-color: var(--bg-tertiary); color: var(--text-secondary);"
                >
                  {{ exp.type }}
                </span>
                <span 
                  class="px-3 py-1 text-sm rounded-full font-medium transition-colors"
                  style="background-color: var(--accent-glow); color: var(--accent);"
                >
                  {{ exp.period }}
                </span>
              </div>
            </div>

            <!-- Description -->
            <ul class="space-y-2 mb-4 ml-0 sm:ml-12">
              <li 
                v-for="(item, idx) in exp.description" 
                :key="idx"
                class="flex items-start gap-3 text-sm transition-colors"
                style="color: var(--text-secondary);"
              >
                <span class="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style="background-color: var(--accent);"></span>
                {{ item }}
              </li>
            </ul>

            <!-- Technologies -->
            <div class="flex flex-wrap gap-2 pt-4 ml-0 sm:ml-12" style="border-top: 1px solid var(--border);">
              <span 
                v-for="tech in exp.technologies" 
                :key="tech"
                class="px-2 py-1 text-xs rounded font-medium transition-all hover:scale-105"
                style="background-color: var(--bg-tertiary); color: var(--text-muted);"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
