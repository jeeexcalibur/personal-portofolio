<script setup lang="ts">
defineProps<{
  name: string
  icon?: string
}>()
</script>

<template>
  <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium bg-bg-tertiary/50 text-text-secondary border border-border hover:border-accent hover:text-accent transition-all duration-300">
    <img v-if="icon" :src="icon" :alt="name" class="w-4 h-4" />
    {{ name }}
  </span>
</template>
