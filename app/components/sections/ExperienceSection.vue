<script setup lang="ts">
const experiences = [
  {
    company: 'Maybank',
    role: 'IT Infrastructure Engineer',
    period: 'Apr 2026 - Present',
    type: 'Full-time',
    current: true,
    description: [
      'Supported IT operations and troubleshooting for branch offices (KPNO), ensuring maximum uptime and reliability',
      'Maintained IT infrastructure and monitored server room conditions, managing UPS, security systems, and routine backups',
      'Performed hardware and software installations, including PCs, pinpads, operational systems, and core banking applications',
      'Assisted in comprehensive IT infrastructure projects such as branch renovations, relocations, and network recabling'
    ],
    technologies: ['IT Infrastructure', 'System Admin', 'Hardware Config', 'Networking', 'Troubleshooting'],
    icon: '🖥️',
  },
  {
    company: 'PT Komatsu Remanufacturing Asia',
    role: 'Web Developer Intern',
    period: 'Jul 2025 - Dec 2025',
    type: 'Internship',
    current: false,
    description: [
      'Developed the web version of Employee Information System (EIS) using PHP Laravel to reach users without mobile access',
      'Built responsive web interfaces mirroring mobile app functionality for Attendance, Reimbursement, and Time Management features',
      'Collaborated with Agile teams, participating in Scrum ceremonies like daily stand-ups and sprint reviews',
      'Supported the company\'s digitalization initiative by extending the EIS platform to web users'
    ],
    technologies: ['PHP', 'Laravel', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Agile'],
    icon: '💻',
  },
  {
    company: 'PT Komatsu Remanufacturing Asia',
    role: 'UI/UX Design Intern',
    period: 'Jan 2025 - Jun 2025',
    type: 'Internship',
    current: false,
    description: [
      'Designed mobile and web interfaces for Employee Information System (EIS) supporting 700+ employees across departments',
      'Applied Design Sprint for Mobile and Lean UX methodologies for Website to iterate quickly on designs',
      'Conducted stakeholder interviews and usability testing sessions to gather feedback and validate designs',
      'Created user flows, wireframes, and high-fidelity prototypes using Figma'
    ],
    technologies: ['Figma', 'Design Sprint', 'Lean UX', 'Prototyping', 'User Research'],
    icon: '🎨',
  },
  {
    company: 'Kalimantan Institute of Technology',
    role: 'Teaching Assistant',
    period: 'Jan 2024 - Dec 2025',
    type: 'Part-time',
    current: false,
    description: [
      'Taught programming fundamentals across multiple courses: Basic Algorithm (Python), OOP (PHP), Web Dev (Laravel), and Cloud Computing (Docker)',
      'Instructed networking concepts including IP addressing, subnetting, routing, and VLAN configuration using Cisco Packet Tracer',
      'Guided students in Ubuntu Operating System, covering Linux commands and system management',
      'Provided hands-on sessions, feedback on assignments, and conducted evaluations to monitor student progress'
    ],
    technologies: ['Python', 'JavaScript', 'PHP', 'Laravel', 'Docker', 'Cisco', 'Ubuntu'],
    icon: '👨‍🏫',
  }
]

const beatRef = ref<HTMLElement | null>(null)
const isRevealed = ref(false)
const revealedBeats = ref<Set<number>>(new Set())

onMounted(() => {
  if (!beatRef.value) return

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) isRevealed.value = true
      })
    },
    { rootMargin: '-10% 0px -20% 0px', threshold: 0.1 }
  )
  sectionObserver.observe(beatRef.value)

  const beatObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const idx = Number((entry.target as HTMLElement).dataset.beatIdx)
          revealedBeats.value = new Set([...revealedBeats.value, idx])
        }
      })
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 }
  )

  beatRef.value.querySelectorAll('[data-beat-idx]').forEach((el) => {
    beatObserver.observe(el)
  })
})
</script>

<template>
  <section id="experience" ref="beatRef" class="story-beat transition-all duration-500" style="background-color: var(--bg-secondary);">
    <div class="scroll-grid">
      <div class="max-w-5xl mx-auto">
        <!-- Section Header -->
        <div 
          class="scroll-reveal scroll-stagger-1" 
          :class="{ 'scroll-revealed': isRevealed }"
        >
          <div class="chapter-badge">
            <span>03</span>
            <span style="opacity: 0.4;">—</span>
            <span>Experience</span>
          </div>
          <h2 class="beat-title">My Professional Journey</h2>
          <p class="beat-body">
            A chronological look at my growth in the tech industry.
          </p>
        </div>

        <!-- Timeline -->
        <div class="relative mt-10">
          <!-- Timeline vertical line -->
          <div 
            class="absolute left-5 sm:left-7 top-0 bottom-0 w-px hidden sm:block"
            style="background: linear-gradient(180deg, var(--accent-cyan), rgba(34, 211, 238, 0.3), transparent);"
          ></div>

          <!-- Experience Cards -->
          <div class="space-y-8">
            <div 
              v-for="(exp, index) in experiences" 
              :key="exp.role + exp.period"
              :data-beat-idx="index"
              class="relative pl-0 sm:pl-16 transition-all duration-700 ease-out"
              :class="revealedBeats.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'"
              :style="{ transitionDelay: `${index * 120}ms` }"
            >
              <!-- Timeline dot -->
              <div 
                class="absolute left-3 sm:left-5 top-8 w-4 h-4 rounded-full hidden sm:block z-10 transition-all duration-500"
                :class="revealedBeats.has(index) ? 'scale-100' : 'scale-0'"
                style="background-color: var(--accent-cyan); box-shadow: 0 0 0 4px var(--bg-secondary), 0 0 20px rgba(34, 211, 238, 0.4);"
              >
                <!-- Pulse ring for current role -->
                <div 
                  v-if="exp.current"
                  class="absolute inset-0 rounded-full animate-ping"
                  style="background-color: var(--accent-cyan); opacity: 0.3;"
                ></div>
              </div>

              <!-- Card -->
              <div 
                class="exp-card rounded-2xl overflow-hidden transition-all duration-400 group"
                style="background: var(--bg-card); border: 1px solid var(--border);"
              >
                <!-- Gradient accent top bar -->
                <div 
                  class="h-1"
                  style="background: linear-gradient(90deg, var(--accent-cyan), transparent 80%);"
                ></div>

                <div class="p-5 sm:p-7">
                  <!-- Header row -->
                  <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div class="flex items-start gap-4">
                      <!-- Icon with glow background -->
                      <div 
                        class="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0 transition-transform duration-300 group-hover:scale-110"
                        style="background: linear-gradient(135deg, rgba(34, 211, 238, 0.2), rgba(34, 211, 238, 0.05)); border: 1px solid rgba(34, 211, 238, 0.2);"
                      >
                        {{ exp.icon }}
                      </div>
                      <div>
                        <h3 class="text-lg sm:text-xl font-bold leading-tight" style="color: var(--text-primary);">
                          {{ exp.role }}
                        </h3>
                        <div class="flex items-center gap-2 mt-1">
                          <svg class="w-3.5 h-3.5 shrink-0" style="color: var(--accent-cyan);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                          <span class="text-sm font-medium" style="color: var(--accent-cyan);">{{ exp.company }}</span>
                        </div>
                      </div>
                    </div>

                    <!-- Period & type badges -->
                    <div class="flex items-center gap-2 flex-wrap sm:flex-nowrap shrink-0">
                      <span 
                        class="px-3 py-1 text-xs rounded-full font-semibold whitespace-nowrap"
                        :style="{ 
                          background: exp.current ? 'rgba(34, 197, 94, 0.15)' : 'rgba(34, 211, 238, 0.12)',
                          color: exp.current ? '#22c55e' : 'var(--accent-cyan)',
                        }"
                      >
                        {{ exp.current ? '● ' : '' }}{{ exp.type }}
                      </span>
                      <span class="chapter-badge !mb-0 !text-[0.6rem] !py-0.5 whitespace-nowrap">
                        {{ exp.period }}
                      </span>
                    </div>
                  </div>

                  <!-- Description bullets -->
                  <ul class="space-y-2.5 mb-5">
                    <li 
                      v-for="(item, idx) in exp.description" 
                      :key="idx"
                      class="flex items-start gap-3 text-sm leading-relaxed"
                      style="color: var(--text-secondary);"
                    >
                      <span 
                        class="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                        style="background-color: var(--accent-cyan);"
                      ></span>
                      <span>{{ item }}</span>
                    </li>
                  </ul>

                  <!-- Tech stack footer -->
                  <div class="pt-4 flex flex-wrap gap-2" style="border-top: 1px solid var(--border);">
                    <span 
                      v-for="tech in exp.technologies" 
                      :key="tech"
                      class="px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 hover:scale-105 cursor-default"
                      style="background: rgba(34, 211, 238, 0.1); color: var(--accent-cyan); border: 1px solid rgba(34, 211, 238, 0.2);"
                    >
                      {{ tech }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
