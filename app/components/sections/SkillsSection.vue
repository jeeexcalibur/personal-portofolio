<script setup lang="ts">
onMounted(() => useReveal())
const skillCategories = [
  {
    title: 'Frontend',
    icon: '🎨',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Vue.js', 'React', 'Nuxt', 'Tailwind CSS']
  },
  {
    title: 'Backend',
    icon: '⚙️',
    skills: ['Node.js', 'Python', 'PHP', 'Laravel', 'Express', 'PostgreSQL', 'MongoDB', 'Redis']
  },
  {
    title: 'Tools & Others',
    icon: '🛠️',
    skills: ['Git', 'Docker', 'Linux', 'AWS', 'Figma', 'VS Code', 'CI/CD', 'REST API']
  },
  {
    title: 'IT & Infra',
    icon: '🖥️',
    skills: ['IT Operations', 'Troubleshooting', 'Hardware & OS', 'Networking', 'System Admin', 'Backup Management']
  }
]
</script>

<template>
  <section id="skills" class="section reveal">
    <div class="section-container" style="position:relative;z-index:1;">
      <SectionTitle class="reveal" 
        title="Skills" 
        subtitle="Technologies and tools I work with"
      />

      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <GlassCard v-for="(category, index) in skillCategories" :key="category.title" class="reveal" :style="{ transitionDelay: `${index * 90}ms` }" hoverable>
          <div class="text-center mb-6">
            <span class="text-4xl mb-3 block">{{ category.icon }}</span>
            <h3 class="text-xl font-semibold text-text-primary">{{ category.title }}</h3>
          </div>
          <div class="flex flex-wrap gap-2 justify-center">
            <SkillBadge v-for="skill in category.skills" :key="skill" :name="skill" />
          </div>
        </GlassCard>
      </div>
    </div>
  </section>
</template>
