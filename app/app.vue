<script setup lang="ts">
import { Analytics } from '@vercel/analytics/vue'
</script>

<template>
  <div class="site-shell">
    <Navbar />
    <NuxtPage :key="$route.fullPath" />
    <Analytics />
  </div>
</template>