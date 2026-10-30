<script setup lang="ts">
import { projects } from '~/data/portfolio'

const slugify = (title: string) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
const projectPath = (title: string) => `/projects/${slugify(title)}`

const groups = computed(() => {
  const map = new Map<string, typeof projects>()
  for (const project of projects) {
    const list = map.get(project.category) ?? []
    list.push(project)
    map.set(project.category, list)
  }
  return [...map.entries()].map(([category, items]) => ({ category, items }))
})

useHead({
  title: 'Projects',
  meta: [
    { name: 'description', content: 'Every project by Jein Ananda — infrastructure tooling, fullstack web applications, and UI/UX work with measured results.' }
  ]
})
</script>

<template>
  <main class="projects-index">
    <header class="projects-index-head page-wrap">
      <NuxtLink to="/" class="projects-index-back">← BACK TO HOME</NuxtLink>
      <p class="projects-index-kicker">PROJECT ARCHIVE</p>
      <h1>PROJECTS</h1>
      <p class="projects-index-lead">
        {{ projects.length }} projects across {{ groups.length }} disciplines. Each entry opens the screens,
        the decisions behind them, and what changed as a result.
      </p>
    </header>

    <section v-for="group in groups" :key="group.category" class="projects-index-group page-wrap">
      <div class="projects-index-group-head">
        <h2>{{ group.category }}</h2>
        <span>{{ String(group.items.length).padStart(2, '0') }}</span>
      </div>

      <NuxtLink
        v-for="project in group.items"
        :key="project.title"
        :to="projectPath(project.title)"
        class="projects-index-item"
      >
        <div class="projects-index-body">
          <div class="projects-index-item-head">
            <h3>{{ project.title }}</h3>
            <span class="projects-index-arrow" aria-hidden="true">↗</span>
          </div>
          <p class="projects-index-description">{{ project.description }}</p>
          <div v-if="project.impact?.stats" class="projects-index-stats">
            <span v-for="stat in project.impact.stats" :key="stat.label"><strong>{{ stat.value }}</strong>{{ stat.label }}</span>
          </div>
          <div class="projects-index-tags">
            <span v-for="tag in project.tags" :key="tag">{{ tag }}</span>
          </div>
          <p v-if="project.gallery?.length" class="projects-index-screens">{{ project.gallery.length }} SCREENS</p>
        </div>
        <div class="projects-index-thumb">
          <img :src="project.image" :alt="project.title" loading="lazy" decoding="async" />
        </div>
      </NuxtLink>
    </section>
  </main>
</template>

<style scoped>
.projects-index {
  background: var(--paper, #e9e9e6);
  color: var(--ink, #151515);
  min-height: 100vh;
  padding: 88px 0 96px;
}
.projects-index-head { padding-bottom: 54px; }
.projects-index-back {
  color: var(--muted, #7f7f7d);
  display: inline-block;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: .18em;
  text-decoration: none;
  text-transform: uppercase;
}
.projects-index-back:hover { color: var(--ink, #151515); }
.projects-index-kicker {
  color: var(--muted, #7f7f7d);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: .22em;
  margin: 40px 0 12px;
  text-transform: uppercase;
}
.projects-index-head h1 {
  font-size: clamp(46px, 8vw, 104px);
  font-weight: 500;
  letter-spacing: -.06em;
  line-height: .92;
  margin: 0;
}
.projects-index-lead {
  color: var(--muted, #6f6f6d);
  font-size: 13px;
  line-height: 1.7;
  margin: 22px 0 0;
  max-width: 52ch;
}
.projects-index-group { padding-bottom: 46px; }
.projects-index-group-head {
  align-items: baseline;
  border-bottom: 1px solid var(--line, #15151529);
  display: flex;
  justify-content: space-between;
  padding-bottom: 12px;
}
.projects-index-group-head h2 {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: .22em;
  margin: 0;
  text-transform: uppercase;
}
.projects-index-group-head span { color: var(--muted, #7f7f7d); font-size: 10px; letter-spacing: .18em; }
.projects-index-item {
  align-items: start;
  border-bottom: 1px solid var(--line, #15151514);
  color: inherit;
  display: grid;
  gap: clamp(20px, 4vw, 56px);
  grid-template-columns: minmax(0, 1fr) minmax(220px, 340px);
  padding: 30px 0 34px;
  text-decoration: none;
  transition: opacity .25s ease;
}
.projects-index-item:hover { opacity: .72; }
.projects-index-body { min-width: 0; }
.projects-index-item-head { align-items: start; display: flex; gap: 14px; justify-content: space-between; }
.projects-index-item-head h3 {
  font-size: clamp(22px, 2.2vw, 30px);
  font-weight: 500;
  letter-spacing: -.04em;
  line-height: 1.15;
  margin: 0;
}
.projects-index-arrow { color: var(--muted, #7f7f7d); font-size: 15px; }
.projects-index-description {
  color: var(--muted, #6f6f6d);
  font-size: 12.5px;
  line-height: 1.65;
  margin: 10px 0 0;
  max-width: 60ch;
}
.projects-index-stats { display: flex; flex-wrap: wrap; gap: 26px; margin-top: 16px; }
.projects-index-stats span {
  color: var(--muted, #7f7f7d);
  display: flex;
  flex-direction: column;
  font-size: 8.5px;
  letter-spacing: .16em;
  text-transform: uppercase;
}
.projects-index-stats strong { color: var(--ink, #151515); font-size: 19px; font-weight: 500; letter-spacing: -.02em; }
.projects-index-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 16px; }
.projects-index-tags span {
  border: 1px solid var(--line, #1515151f);
  border-radius: 999px;
  color: var(--muted, #6f6f6d);
  font-size: 9px;
  letter-spacing: .1em;
  padding: 4px 10px;
  text-transform: uppercase;
}
.projects-index-screens {
  color: var(--muted, #7f7f7d);
  font-size: 9px;
  letter-spacing: .18em;
  margin: 14px 0 0;
  text-transform: uppercase;
}
.projects-index-thumb img {
  aspect-ratio: 1.42;
  border-radius: 12px;
  display: block;
  object-fit: cover;
  width: 100%;
}
@media (max-width: 860px) {
  .projects-index-item { grid-template-columns: 1fr; }
  .projects-index-thumb { order: -1; }
  .projects-index-thumb img { aspect-ratio: 1.6; }
}
</style>
