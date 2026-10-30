<script setup lang="ts">
import { projects } from '~/data/portfolio'

const reveal = useReveal()

const FEATURED = 3
const displayedProjects = computed(() => projects.slice(0, FEATURED))
const highlightsFor = (project: (typeof projects)[number]) =>
  (project.contributions?.length ? project.contributions.slice(0, 3) : project.tags)
const projectPath = (title: string) => `/projects/${title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`
</script>

<template>
  <section id="projects" class="section projects reveal">
    <div class="projects-background-word" aria-hidden="true">PROJECTS</div>
    <div class="section-head projects-head">
      <div><p class="section-kicker">PORTFOLIO SHOWCASE</p><h2>SELECTED PROJECTS</h2></div>
    </div>
    <div class="projects-list">
      <template v-for="(project, index) in displayedProjects" :key="project.title">
        <article class="project-showcase reveal" :class="{ 'project-showcase-reverse': index % 2 === 1 }" :style="{ transitionDelay: `${(index % 2) * 120}ms` }">
          <figure class="project-showcase-visual">
            <NuxtLink :to="projectPath(project.title)"><img :src="project.image" :alt="project.title" :loading="index === 0 ? 'eager' : 'lazy'" decoding="async" /></NuxtLink>
            <figcaption>
              <span>{{ String(index + 1).padStart(2, '0') }} / {{ String(projects.length).padStart(2, '0') }}</span>
              <span v-if="project.gallery?.length" class="project-screens">{{ project.gallery.length }} SCREENS</span>
            </figcaption>

          </figure>
          <div class="project-showcase-details">
            <p class="section-kicker">{{ project.category }}</p>
            <h3>{{ project.title }} <span aria-hidden="true">↗</span></h3>
            <p class="project-description">{{ project.description }}</p>
            <p class="section-kicker project-highlights-label">HIGHLIGHTS</p>
            <ul class="detail-list"><li v-for="(item, itemIndex) in highlightsFor(project)" :key="item"><span>{{ String(itemIndex + 1).padStart(2, '0') }}</span>{{ item }}</li></ul>
            <div class="tag-list"><span v-for="tag in project.tags" :key="tag">{{ tag }}</span></div>
            <NuxtLink :to="projectPath(project.title)" class="section-link">VIEW PROJECT -></NuxtLink>
          </div>
        </article>
        <div v-if="index < displayedProjects.length - 1" class="project-next" aria-label="Next project"><span></span><strong>NEXT PROJECT / {{ String(Math.min(index + 2, projects.length)).padStart(2, '0') }} / {{ String(projects.length).padStart(2, '0') }}</strong><span></span></div>
      </template>
    </div>
    <div class="projects-showmore reveal">
      <NuxtLink to="/projects" class="projects-showmore-btn">
        ALL {{ projects.length }} PROJECTS ->
      </NuxtLink>
    </div>
  </section>
</template>

<style scoped>
.projects-showmore {
  display: flex;
  justify-content: center;
  margin-top: 60px;
}
.projects-showmore-btn {
  background: none;
  border: none;
  border-bottom: 1px solid var(--ink, #151515);
  color: var(--ink, #151515);
  cursor: pointer;
  font-family: inherit;
  font-size: 11px;
  font-weight: 600;
  display: inline-block;
  letter-spacing: 0.22em;
  padding-bottom: 8px;
  text-decoration: none;
  text-transform: uppercase;
}
.projects-showmore-btn:hover {
  color: var(--muted, #7f7f7d);
  border-bottom-color: var(--muted, #7f7f7d);
}
</style>
