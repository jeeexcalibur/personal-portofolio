<script setup lang="ts">
const education = [
  {
    institution: 'Kalimantan Institute of Technology',
    degree: 'Bachelor of Computer Science in Information System',
    period: '2022 - 2026',
    gpa: '3.59 / 4.00',
    thesis: 'UI/UX Design of Employee Information System Application at PT Komatsu Remanufacturing Asia Using the Design Sprint Method',
    icon: '🎓'
  },
  {
    institution: 'SMKN 6 Balikpapan',
    degree: 'Computer and Network Engineering',
    period: '2019 - 2022',
    achievement: 'MikroTik Networking (MTCNA & MTCRE level skills): Routing, VPN, Firewall configuration, and Crossover cable assembly',
    icon: '🎓'
  }
]

const beatRef = ref<HTMLElement | null>(null)
const isRevealed = ref(false)

onMounted(() => {
  if (!beatRef.value) return
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) isRevealed.value = true
      })
    },
    { rootMargin: '-10% 0px -20% 0px', threshold: 0.1 }
  )
  observer.observe(beatRef.value)
})
</script>

<template>
  <section id="education" ref="beatRef" class="story-beat transition-all duration-500 relative overflow-hidden" style="background-color: var(--bg-primary);">
    <!-- Ambient background scrim for depth -->
    <div 
      class="absolute inset-0 pointer-events-none"
      style="background: radial-gradient(ellipse at 70% 40%, rgba(99, 102, 241, 0.05) 0%, transparent 50%), radial-gradient(ellipse at 30% 80%, rgba(34, 211, 238, 0.04) 0%, transparent 40%);"
    ></div>
    
    <div class="scroll-grid relative z-10">
      <div class="max-w-5xl mx-auto">
        <!-- Story Beat Header — right-aligned on desktop -->
        <div class="lg:text-right">
          <div 
            class="scroll-reveal scroll-stagger-1 lg:flex lg:flex-col lg:items-end" 
            :class="{ 'scroll-revealed': isRevealed }"
          >
            <div class="chapter-badge">
              <span>02</span>
              <span style="opacity: 0.4;">—</span>
              <span>Education</span>
            </div>
            <h2 class="beat-title">My Academic Path</h2>
            <p class="beat-body lg:ml-auto">
              The foundation of knowledge and skills that shaped my journey in technology.
            </p>
          </div>
        </div>

        <!-- Timeline -->
        <div class="mt-8 relative">
          <!-- Timeline Line — visible on all screens -->
          <div 
            class="absolute left-3 sm:left-6 top-0 bottom-0 w-0.5"
            style="background: linear-gradient(180deg, var(--accent) 0%, var(--accent-cyan) 50%, transparent 100%);"
          ></div>

          <div class="space-y-6">
            <div 
              v-for="(edu, index) in education" 
              :key="edu.institution"
              class="relative pl-10 sm:pl-16 scroll-reveal"
              :class="[`scroll-stagger-${index + 2}`, { 'scroll-revealed': isRevealed }]"
            >
              <!-- Timeline Dot — visible on all screens -->
              <div 
                class="absolute left-1 sm:left-4 top-6 w-4 h-4 rounded-full border-2 z-10 transition-all duration-300 timeline-dot-animated"
                style="background-color: var(--bg-primary); border-color: var(--accent); box-shadow: 0 0 12px var(--accent-glow);"
              ></div>

              <!-- Card -->
              <div class="card card-enhanced overflow-hidden group sm:hover:translate-x-1 transition-all duration-300">
                <!-- Accent top bar -->
                <div class="h-1" style="background: linear-gradient(90deg, var(--accent), var(--accent-cyan));"></div>
                
                <div class="p-4 sm:p-6">
                  <!-- Header -->
                  <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                    <div class="flex items-start gap-3 sm:gap-4">
                      <div class="text-2xl shrink-0 w-10 h-10 flex items-center justify-center rounded-xl sm:hidden"
                        style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(34, 211, 238, 0.1)); border: 1px solid var(--border);"
                      >{{ edu.icon }}</div>
                      <div>
                        <h3 class="text-base sm:text-xl font-bold transition-colors" style="color: var(--text-primary);">
                          {{ edu.institution }}
                        </h3>
                        <div class="flex items-center gap-2 mt-1" style="color: var(--accent);">
                          <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                          <span class="font-medium text-sm">{{ edu.degree }}</span>
                        </div>
                      </div>
                    </div>
                    <span 
                      class="chapter-badge shrink-0 self-start !mb-0"
                    >
                      {{ edu.period }}
                    </span>
                  </div>

                  <!-- GPA Badge (if exists) -->
                  <div v-if="edu.gpa" class="mb-3">
                    <span 
                      class="inline-block px-3 py-1 text-sm rounded-full font-semibold"
                      style="background: linear-gradient(135deg, var(--accent) 0%, var(--accent-cyan) 100%); color: white;"
                    >
                      GPA: {{ edu.gpa }}
                    </span>
                  </div>

                  <!-- Thesis (if exists) -->
                  <p 
                    v-if="edu.thesis" 
                    class="text-sm italic transition-colors leading-relaxed"
                    style="color: var(--text-muted);"
                  >
                    Thesis: {{ edu.thesis }}
                  </p>

                  <!-- Achievement (if exists) -->
                  <p 
                    v-if="edu.achievement" 
                    class="text-sm italic transition-colors leading-relaxed"
                    style="color: var(--text-muted);"
                  >
                    {{ edu.achievement }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
