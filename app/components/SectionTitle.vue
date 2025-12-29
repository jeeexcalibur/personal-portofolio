<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
}>()
</script>

<template>
  <div class="text-center mb-12">
    <h2 class="text-3xl md:text-4xl font-bold mb-4 transition-colors" style="color: var(--text-primary);">
      {{ title }}
    </h2>
    <p v-if="subtitle" class="max-w-2xl mx-auto transition-colors" style="color: var(--text-secondary);">
      {{ subtitle }}
    </p>
    <div class="mt-4 w-20 h-1 mx-auto rounded-full transition-colors" style="background-color: var(--accent);"></div>
  </div>
</template>
