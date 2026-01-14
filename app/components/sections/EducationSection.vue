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
</script>

<template>
  <section id="education" class="section transition-all duration-500" style="background-color: var(--bg-primary);">
    <div class="section-container">
      <SectionTitle 
        title="Education" 
        subtitle="My academic background"
      />

      <!-- Timeline Container -->
      <div class="max-w-4xl mx-auto relative">
        <!-- Timeline Line -->
        <div 
          class="absolute left-4 sm:left-6 top-0 bottom-0 w-0.5 hidden sm:block"
          style="background: linear-gradient(180deg, var(--accent) 0%, var(--accent-glow) 100%);"
        ></div>

        <div class="space-y-8">
          <div 
            v-for="(edu, index) in education" 
            :key="edu.institution"
            class="relative pl-0 sm:pl-16 animate-slide-up"
            :style="{ animationDelay: `${index * 150}ms` }"
          >
            <!-- Timeline Dot -->
            <div 
              class="absolute left-2 sm:left-4 top-1 w-4 h-4 rounded-full border-2 hidden sm:block z-10 transition-all duration-300 hover:scale-125"
              style="background-color: var(--bg-primary); border-color: var(--accent);"
            ></div>

            <!-- Card -->
            <div 
              class="card overflow-hidden group hover:translate-x-1 transition-all duration-300"
            >
              <div class="p-4 sm:p-6">
                <!-- Header -->
                <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                  <div class="flex items-start gap-4">
                    <div class="text-2xl sm:hidden">{{ edu.icon }}</div>
                    <div>
                      <h3 class="text-lg sm:text-xl font-semibold transition-colors" style="color: var(--text-primary);">
                        {{ edu.institution }}
                      </h3>
                      <div class="flex items-center gap-2 mt-1" style="color: var(--accent);">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        <span class="font-medium text-sm sm:text-base">{{ edu.degree }}</span>
                      </div>
                    </div>
                  </div>
                  <span 
                    class="px-3 py-1 text-sm rounded-full font-medium transition-colors shrink-0 self-start"
                    style="background-color: var(--accent-glow); color: var(--accent);"
                  >
                    {{ edu.period }}
                  </span>
                </div>

                <!-- GPA Badge (if exists) -->
                <div v-if="edu.gpa" class="mb-3">
                  <span 
                    class="inline-block px-3 py-1 text-sm rounded-full font-semibold"
                    style="background: linear-gradient(135deg, var(--accent) 0%, #00b894 100%); color: white;"
                  >
                    GPA: {{ edu.gpa }}
                  </span>
                </div>

                <!-- Thesis (if exists) -->
                <p 
                  v-if="edu.thesis" 
                  class="text-sm italic transition-colors"
                  style="color: var(--text-muted);"
                >
                  Thesis: {{ edu.thesis }}
                </p>

                <!-- Achievement (if exists) -->
                <p 
                  v-if="edu.achievement" 
                  class="text-sm italic transition-colors"
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
  </section>
</template>
