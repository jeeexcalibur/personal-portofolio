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
</script>

<template>
  <section id="about" class="section transition-all duration-500" style="background-color: var(--bg-secondary);">
    <div class="section-container">
      <SectionTitle 
        title="About & Skills" 
        subtitle="Get to know me better"
      />

      <div class="space-y-8 max-w-4xl mx-auto">
        <!-- Achievements Card -->
        <div class="card p-6 animate-slide-up">
          <div class="flex items-center gap-3 mb-6">
            <span class="text-2xl">🏆</span>
            <h3 class="text-xl font-semibold" style="color: #fbbf24;">Achievements</h3>
          </div>
          <ul class="space-y-3">
            <li 
              v-for="(achievement, index) in achievements" 
              :key="index"
              class="flex items-start gap-3"
            >
              <span class="w-2 h-2 rounded-full mt-2 shrink-0" style="background-color: var(--accent);"></span>
              <span style="color: var(--text-secondary);">{{ achievement }}</span>
            </li>
          </ul>
        </div>

        <!-- Organizational Experience Card -->
        <div class="card p-6 animate-slide-up animate-delay-100">
          <div class="flex items-center gap-3 mb-6">
            <span class="text-2xl">🎖️</span>
            <h3 class="text-xl font-semibold" style="color: #a3e635;">Organizational Experience</h3>
          </div>
          <div class="space-y-6">
            <div v-for="(exp, index) in organizationalExperiences" :key="index">
              <h4 class="font-semibold text-lg" style="color: var(--text-primary);">
                {{ exp.title }} - {{ exp.organization }}
              </h4>
              <p class="text-sm mt-1 mb-3" style="color: var(--text-muted);">
                {{ exp.period }}
              </p>
              <p class="leading-relaxed" style="color: var(--text-secondary);">
                {{ exp.description }}
              </p>
            </div>
          </div>
        </div>

        <!-- Skills & Competencies Card -->
        <div class="card p-6 animate-slide-up animate-delay-200">
          <div class="flex items-center gap-3 mb-6">
            <span class="text-2xl">💡</span>
            <h3 class="text-xl font-semibold" style="color: var(--accent);">Skills & Competencies</h3>
          </div>
          <div class="flex flex-wrap gap-3">
            <span 
              v-for="skill in skills" 
              :key="skill.name"
              class="px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105 cursor-default"
              style="background-color: var(--bg-tertiary); color: var(--text-secondary); border: 1px solid var(--border);"
            >
              {{ skill.name }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
