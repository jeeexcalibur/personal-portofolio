<script setup lang="ts">
const achievements = [
  'Fresh Graduate in Information Systems from Kalimantan Institute of Technology',
  '1 Year Internship Experience at PT Komatsu Remanufacturing Asia',
  'Teaching Assistant for Programming, Networking, and Operating Systems courses',
  'Experience in both UI/UX Design and Full Stack Web Development'
]

const organizationalExperiences = [
  {
    title: 'Environment Division',
    organization: 'GenBi Balikpapan',
    period: 'May 2024 - May 2025',
    description: 'As a Bank Indonesia Scholarship recipient, I contribute to raising awareness about Bank Indonesia\'s work within the community. My main program is Greenbi, an initiative involving tree planting with all GenBI members and the community, aimed at supporting environmental sustainability and promoting awareness of reforestation.'
  },
  {
    title: 'Staff of Student Welfare Department',
    organization: 'Himpunan Mahasiswa Sistem Informasi ITK',
    period: 'Aug 2023 - Aug 2024',
    description: 'Collaborated with colleagues to recognize achievements of Information Systems students, including final project workers and award winners. Managed communication and provided scholarship information through the organization\'s Instagram account.'
  }
]

const skills = [
  { name: 'Laravel', category: 'backend' },
  { name: 'Vue.js', category: 'frontend' },
  { name: 'Nuxt', category: 'frontend' },
  { name: 'React', category: 'frontend' },
  { name: 'Python', category: 'backend' },
  { name: 'MySQL', category: 'database' },
  { name: 'PostgreSQL', category: 'database' },
  { name: 'Firebase', category: 'database' },
  { name: 'Figma', category: 'design' },
  { name: 'Docker', category: 'tools' },
  { name: 'Git', category: 'tools' },
]

// Scroll reveal for child elements
const beatRef = ref<HTMLElement | null>(null)
const isRevealed = ref(false)

onMounted(() => {
  if (!beatRef.value) return
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isRevealed.value = true
        }
      })
    },
    { rootMargin: '-10% 0px -20% 0px', threshold: 0.1 }
  )
  observer.observe(beatRef.value)
})
</script>

<template>
  <section id="about" ref="beatRef" class="story-beat transition-all duration-500 relative overflow-hidden" style="background-color: var(--bg-secondary);">
    <!-- Ambient background scrim for depth -->
    <div 
      class="absolute inset-0 pointer-events-none"
      style="background: radial-gradient(ellipse at 20% 50%, rgba(99, 102, 241, 0.06) 0%, transparent 50%), radial-gradient(ellipse at 80% 30%, rgba(34, 211, 238, 0.04) 0%, transparent 40%);"
    ></div>
    
    <div class="scroll-grid relative z-10">
      <!-- Story Beat Header -->
      <div class="max-w-5xl mx-auto">
        <div 
          class="scroll-reveal scroll-stagger-1" 
          :class="{ 'scroll-revealed': isRevealed }"
        >
          <div class="chapter-badge">
            <span>01</span>
            <span style="opacity: 0.4;">—</span>
            <span>About Me</span>
          </div>
          <h2 class="beat-title">Get to know me better</h2>
          <p class="beat-body">
            A passionate developer and designer shaping digital experiences through code and creativity.
          </p>
        </div>

        <!-- Row 1: Achievements (left) + Skills & Stats (right) -->
        <div class="grid lg:grid-cols-5 gap-5 mt-8">
          <!-- Achievements Card — spans 3 cols -->
          <div 
            class="lg:col-span-3 card card-enhanced p-5 sm:p-6 scroll-reveal scroll-stagger-2"
            :class="{ 'scroll-revealed': isRevealed }"
          >
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 rounded-xl flex items-center justify-center text-lg" style="background: linear-gradient(135deg, rgba(251, 191, 36, 0.2), rgba(251, 191, 36, 0.05)); border: 1px solid rgba(251, 191, 36, 0.2);">
                🏆
              </div>
              <h3 class="text-lg font-bold" style="color: #fbbf24;">Achievements</h3>
            </div>
            <ul class="space-y-3">
              <li 
                v-for="(achievement, index) in achievements" 
                :key="index"
                class="flex items-start gap-3"
              >
                <span class="w-1.5 h-1.5 rounded-full mt-2.5 shrink-0" style="background-color: var(--accent);"></span>
                <span class="text-sm leading-relaxed" style="color: var(--text-secondary);">{{ achievement }}</span>
              </li>
            </ul>
          </div>

          <!-- Skills + Stats Card — spans 2 cols -->
          <div 
            class="lg:col-span-2 scroll-reveal scroll-stagger-3"
            :class="{ 'scroll-revealed': isRevealed }"
          >
            <div class="card card-enhanced p-5 sm:p-6 h-full flex flex-col">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 rounded-xl flex items-center justify-center text-lg" style="background: linear-gradient(135deg, var(--accent-glow), transparent); border: 1px solid var(--border);">
                  💡
                </div>
                <h3 class="text-lg font-bold" style="color: var(--accent);">Skills & Competencies</h3>
              </div>

              <!-- Skill Categories — compact -->
              <div class="space-y-3 flex-1">
                <div>
                  <p class="text-xs uppercase tracking-wider font-semibold mb-1.5" style="color: #60a5fa;">Frontend</p>
                  <div class="flex flex-wrap gap-1.5">
                    <span 
                      v-for="skill in skills.filter(s => s.category === 'frontend')" 
                      :key="skill.name"
                      class="px-2.5 py-1 rounded-full text-xs font-medium transition-all hover:scale-105 cursor-default border skill-frontend"
                    >
                      {{ skill.name }}
                    </span>
                  </div>
                </div>

                <div>
                  <p class="text-xs uppercase tracking-wider font-semibold mb-1.5" style="color: #22c55e;">Backend</p>
                  <div class="flex flex-wrap gap-1.5">
                    <span 
                      v-for="skill in skills.filter(s => s.category === 'backend')" 
                      :key="skill.name"
                      class="px-2.5 py-1 rounded-full text-xs font-medium transition-all hover:scale-105 cursor-default border skill-backend"
                    >
                      {{ skill.name }}
                    </span>
                  </div>
                </div>

                <div>
                  <p class="text-xs uppercase tracking-wider font-semibold mb-1.5" style="color: #fb923c;">Database</p>
                  <div class="flex flex-wrap gap-1.5">
                    <span 
                      v-for="skill in skills.filter(s => s.category === 'database')" 
                      :key="skill.name"
                      class="px-2.5 py-1 rounded-full text-xs font-medium transition-all hover:scale-105 cursor-default border skill-database"
                    >
                      {{ skill.name }}
                    </span>
                  </div>
                </div>

                <div class="flex gap-6">
                  <div>
                    <p class="text-xs uppercase tracking-wider font-semibold mb-1.5" style="color: #a855f7;">Design</p>
                    <div class="flex flex-wrap gap-1.5">
                      <span 
                        v-for="skill in skills.filter(s => s.category === 'design')" 
                        :key="skill.name"
                        class="px-2.5 py-1 rounded-full text-xs font-medium transition-all hover:scale-105 cursor-default border skill-design"
                      >
                        {{ skill.name }}
                      </span>
                    </div>
                  </div>
                  <div>
                    <p class="text-xs uppercase tracking-wider font-semibold mb-1.5" style="color: #9ca3af;">Tools</p>
                    <div class="flex flex-wrap gap-1.5">
                      <span 
                        v-for="skill in skills.filter(s => s.category === 'tools')" 
                        :key="skill.name"
                        class="px-2.5 py-1 rounded-full text-xs font-medium transition-all hover:scale-105 cursor-default border skill-tools"
                      >
                        {{ skill.name }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Quick Stats -->
              <div class="grid grid-cols-2 gap-2.5 pt-4 mt-4" style="border-top: 1px solid var(--border);">
                <div class="text-center p-2.5 rounded-xl" style="background: rgba(99, 102, 241, 0.06); border: 1px solid var(--border);">
                  <p class="text-xl font-bold" style="color: var(--accent);">11+</p>
                  <p class="text-xs" style="color: var(--text-muted);">Technologies</p>
                </div>
                <div class="text-center p-2.5 rounded-xl" style="background: rgba(34, 211, 238, 0.06); border: 1px solid var(--border);">
                  <p class="text-xl font-bold" style="color: var(--accent-cyan);">1+</p>
                  <p class="text-xs" style="color: var(--text-muted);">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Row 2: Organizational Experience — full width, 2-col grid -->
        <div 
          class="mt-5 card card-enhanced p-5 sm:p-6 scroll-reveal scroll-stagger-4"
          :class="{ 'scroll-revealed': isRevealed }"
        >
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 rounded-xl flex items-center justify-center text-lg" style="background: linear-gradient(135deg, rgba(163, 230, 53, 0.2), rgba(163, 230, 53, 0.05)); border: 1px solid rgba(163, 230, 53, 0.2);">
              🎖️
            </div>
            <h3 class="text-lg font-bold" style="color: #a3e635;">Organizational Experience</h3>
          </div>
          <div class="grid md:grid-cols-2 gap-5">
            <div 
              v-for="(exp, index) in organizationalExperiences" 
              :key="index"
              class="p-4 rounded-xl transition-colors"
              style="background: var(--bg-secondary); border: 1px solid var(--border);"
            >
              <h4 class="font-semibold" style="color: var(--text-primary);">
                {{ exp.title }}
              </h4>
              <div class="flex items-center gap-2 mt-1 mb-2">
                <span class="text-sm font-medium" style="color: var(--accent);">{{ exp.organization }}</span>
                <span style="color: var(--text-muted);">·</span>
                <span class="text-xs" style="color: var(--text-muted);">{{ exp.period }}</span>
              </div>
              <p class="text-sm leading-relaxed" style="color: var(--text-secondary);">
                {{ exp.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
