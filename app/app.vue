<script setup lang="ts">
import { Analytics } from '@vercel/analytics/vue'

const { initTheme } = useTheme()

onMounted(() => {
  initTheme()
})
</script>

<template>
  <div class="min-h-screen transition-all duration-300" style="background-color: var(--bg-primary);">
    <Navbar />
    
    <main>
      <SectionsHeroSection />
      <SectionsAboutSection />
      <SectionsProjectsSection />
      <SectionsExperienceSection />
      <SectionsContactSection />
    </main>
    
    <Footer />
    <Analytics />
  </div>
</template>