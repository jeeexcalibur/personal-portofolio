<script setup lang="ts">
import { projects } from '~/data/portfolio'

const reveal = useReveal()

const showAll = ref(false)
watch(showAll, () => reveal?.refresh(), { flush: 'post' })
const displayedProjects = computed(() => showAll.value ? projects : projects.slice(0, 3))
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
            <NuxtLink :to="projectPath(project.title)"><img :src="project.image" :alt="project.title" /></NuxtLink>
            <figcaption><span>{{ String(index + 1).padStart(2, '0') }} / {{ String(projects.length).padStart(2, '0') }}</span><span class="project-progress" aria-hidden="true"><i v-for="progress in 3" :key="progress" :class="{ active: progress === (index % 3) + 1 }"></i></span></figcaption>

          </figure>
          <div class="project-showcase-details">
            <p class="section-kicker">{{ project.category }}</p>
            <h3>{{ project.title }} <span aria-hidden="true">↗</span></h3>
            <p class="project-description">{{ project.description }}</p>
            <p class="section-kicker project-highlights-label">HIGHLIGHTS</p>
            <ul class="detail-list"><li v-for="(tag, tagIndex) in project.tags" :key="tag"><span>{{ String(tagIndex + 1).padStart(2, '0') }}</span>{{ tag }} implementation and integration</li></ul>
            <div class="tag-list"><span v-for="tag in project.tags" :key="tag">{{ tag }}</span></div>
            <NuxtLink :to="projectPath(project.title)" class="section-link">VIEW PROJECT -></NuxtLink>
          </div>
        </article>
        <div v-if="index < displayedProjects.length - 1" class="project-next" aria-label="Next project"><span></span><strong>NEXT PROJECT / {{ String(Math.min(index + 2, projects.length)).padStart(2, '0') }} / {{ String(projects.length).padStart(2, '0') }}</strong><span></span></div>
      </template>
    </div>
    <div class="projects-showmore reveal">
      <button @click="showAll = !showAll" class="projects-showmore-btn">
        {{ showAll ? 'SHOW LESS' : 'SEE MORE PROJECTS' }} ->
      </button>
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
  letter-spacing: 0.22em;
  padding-bottom: 8px;
  text-transform: uppercase;
}
.projects-showmore-btn:hover {
  color: var(--muted, #7f7f7d);
  border-bottom-color: var(--muted, #7f7f7d);
}
</style>
