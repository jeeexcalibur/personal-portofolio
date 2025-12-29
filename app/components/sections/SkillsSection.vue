<script setup lang="ts">
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
  }
]
</script>

<template>
  <section id="skills" class="section">
    <div class="section-container">
      <SectionTitle 
        title="Skills" 
        subtitle="Technologies and tools I work with"
      />

      <div class="grid md:grid-cols-3 gap-8">
        <GlassCard v-for="category in skillCategories" :key="category.title" hoverable>
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
