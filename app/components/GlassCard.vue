<script setup lang="ts">
defineProps<{
  hoverable?: boolean
}>()
</script>

<template>
  <div 
    class="bg-white rounded-xl p-6 border border-border transition-all duration-300 shadow-soft"
    :class="hoverable ? 'hover:border-accent hover:-translate-y-1 hover:shadow-lg cursor-pointer' : ''"
  >
    <slot />
  </div>
</template>
