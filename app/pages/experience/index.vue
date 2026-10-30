<script setup lang="ts">
import { experiences } from '~/data/portfolio'

useHead({
  title: 'Experience',
  meta: [
    { name: 'description', content: 'Full work history of Jein Ananda — IT Infrastructure Engineer at Maybank, web developer and UI/UX designer at PT Komatsu Remanufacturing Asia, teaching assistant at Kalimantan Institute of Technology.' }
  ]
})
</script>

<template>
  <main class="experience-index">
    <header class="experience-index-head page-wrap">
      <NuxtLink to="/" class="experience-index-back">← BACK TO HOME</NuxtLink>
      <p class="experience-index-kicker">CAREER ARCHIVE</p>
      <h1>EXPERIENCE</h1>
      <p class="experience-index-lead">Four roles, one thread: keeping systems working and making them easier to use. Each entry opens the full breakdown — what I did, what changed, and what it taught me.</p>
    </header>

    <div class="experience-index-list page-wrap">
      <NuxtLink v-for="(experience, index) in experiences" :key="experience.slug" :to="`/experience/${experience.slug}`" class="experience-index-item">
        <span class="experience-index-number">{{ String(index + 1).padStart(2, '0') }}</span>
        <div class="experience-index-body">
          <p class="experience-index-meta">{{ experience.type }} · {{ experience.period }}</p>
          <h2>{{ experience.role }}</h2>
          <p class="experience-index-company">{{ experience.company }}</p>
          <p class="experience-index-description">{{ experience.description }}</p>
          <div v-if="experience.impact?.stats" class="experience-index-stats">
            <span v-for="stat in experience.impact.stats" :key="stat.label"><strong>{{ stat.value }}</strong>{{ stat.label }}</span>
          </div>
        </div>
        <div class="experience-index-thumb">
          <img :src="experience.image" :alt="experience.company" loading="lazy" />
          <span>VIEW ROLE ↗</span>
        </div>
      </NuxtLink>
    </div>
  </main>
</template>

<style scoped>
.experience-index {
  background: var(--paper, #e9e9e6);
  color: var(--ink, #151515);
  min-height: 100vh;
  padding: 88px 0 96px;
}
.experience-index-head { padding-bottom: 54px; }
.experience-index-back {
  color: var(--muted, #7f7f7d);
  display: inline-block;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: .18em;
  text-decoration: none;
  text-transform: uppercase;
}
.experience-index-back:hover { color: var(--ink, #151515); }
.experience-index-kicker {
  color: var(--muted, #7f7f7d);
  font-size: 10px;
  font-weight: 600;
  letter-spacing: .24em;
  margin: 26px 0 0;
  text-transform: uppercase;
}
.experience-index-head h1 {
  font-size: clamp(52px, 8vw, 116px);
  font-weight: 600;
  letter-spacing: -.075em;
  line-height: .9;
  margin: 14px 0 18px;
}
.experience-index-lead {
  color: var(--muted, #7f7f7d);
  font-size: 15px;
  line-height: 1.65;
  max-width: 560px;
}
.experience-index-list { border-top: 1px solid var(--line, #15151529); }
.experience-index-item {
  align-items: start;
  border-bottom: 1px solid var(--line, #15151529);
  color: inherit;
  display: grid;
  gap: clamp(18px, 3vw, 40px);
  grid-template-columns: 40px minmax(0, 1fr) 200px;
  padding: 30px 0;
  text-decoration: none;
  transition: opacity .25s ease;
}
.experience-index-item:hover { opacity: .72; }
.experience-index-number { color: var(--muted, #7f7f7d); font-size: 11px; letter-spacing: .12em; padding-top: 4px; }
.experience-index-meta { color: var(--muted, #7f7f7d); font-size: 9px; font-weight: 700; letter-spacing: .18em; margin: 0 0 10px; text-transform: uppercase; }
.experience-index-body h2 { font-size: clamp(24px, 2.6vw, 34px); font-weight: 600; letter-spacing: -.05em; line-height: 1; margin: 0 0 6px; }
.experience-index-company { font-size: 12px; margin: 0 0 12px; }
.experience-index-description { color: var(--muted, #7f7f7d); font-size: 13px; line-height: 1.6; margin: 0; max-width: 560px; }
.experience-index-stats { display: flex; flex-wrap: wrap; gap: 24px; margin-top: 16px; }
.experience-index-stats span { color: var(--muted, #7f7f7d); font-size: 9px; letter-spacing: .16em; text-transform: uppercase; }
.experience-index-stats strong { color: var(--ink, #151515); display: block; font-size: 22px; font-weight: 600; letter-spacing: -.04em; margin-bottom: 4px; }
.experience-index-thumb { display: grid; gap: 10px; justify-items: end; }
.experience-index-thumb img { aspect-ratio: 4 / 3; border-radius: 12px; display: block; height: auto; object-fit: cover; width: 100%; }
.experience-index-thumb span { color: var(--muted, #7f7f7d); font-size: 9px; font-weight: 700; letter-spacing: .16em; }

@media (max-width: 800px) {
  .experience-index { padding-top: 52px; }
  .experience-index-item { grid-template-columns: 1fr; gap: 16px; }
  .experience-index-number { padding-top: 0; }
  .experience-index-thumb { justify-items: start; max-width: 320px; }
}
</style>
