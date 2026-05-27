<script setup lang="ts">
import { Analytics } from '@vercel/analytics/vue'

const { initTheme } = useTheme()
const { initScrollReveal, cleanup } = useScrollNarrative()

onMounted(() => {
  initTheme()
  initScrollReveal()
})

onUnmounted(() => {
  cleanup()
})
</script>

<template>
  <div class="scroll-shell transition-all duration-300" style="background-color: var(--bg-primary);">
    <Navbar />

    <main>
      <SectionsHeroSection />
      <BeatDivider />
      <SectionsAboutSection />
      <BeatDivider />
      <SectionsEducationSection />
      <BeatDivider />
      <SectionsExperienceSection />
      <BeatDivider />
      <SectionsProjectsSection />
      <BeatDivider />
      <SectionsContactSection />
    </main>
    
    <Footer />
    <Analytics />
  </div>
</template>