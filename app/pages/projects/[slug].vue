<script setup lang="ts">
import { projects } from '~/data/portfolio'

const route = useRoute()
const slugify = (title: string) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
const projectIndex = computed(() => Math.max(projects.findIndex(project => slugify(project.title) === route.params.slug), 0))
const project = computed(() => projects[projectIndex.value])
const previousProject = computed(() => projects[(projectIndex.value - 1 + projects.length) % projects.length])
const nextProject = computed(() => projects[(projectIndex.value + 1) % projects.length])
const projectPath = (title: string) => `/projects/${slugify(title)}`

useHead(() => ({
  title: `${project.value.title}`,
  meta: [
    { name: 'description', content: project.value.description },
    { property: 'og:title', content: `${project.value.title} · Jein Ananda` },
    { property: 'og:description', content: project.value.description },
    { property: 'og:type', content: 'article' },
    ...(project.value.image ? [{ property: 'og:image', content: project.value.image }] : [])
  ]
}))
</script>

<template>
  <main class="project-reference-page">
    <section class="project-reference-hero page-wrap">
      <div class="project-reference-copy">
        <p class="project-reference-kicker">{{ project.category }}</p>
        <h1>{{ project.title }}</h1>
        <p class="project-reference-summary">{{ project.description }}</p>
        <div class="project-reference-actions">
          <a v-if="project.demoUrl && project.demoUrl !== '#'" :href="project.demoUrl" target="_blank" rel="noopener noreferrer" class="project-reference-primary">VIEW PROJECT <span>↗</span></a>
          <a v-if="project.repoUrl && project.repoUrl !== '#'" :href="project.repoUrl" target="_blank" rel="noopener noreferrer" class="project-reference-secondary">SOURCE CODE <span>↗</span></a>
        </div>
        <dl class="project-reference-facts">
          <div><dt>ROLE</dt><dd>{{ project.role || 'Developer' }}</dd></div>
          <div><dt>DISCIPLINE</dt><dd>{{ project.category }}</dd></div>
          <div><dt>RELATED EXPERIENCE</dt><dd>{{ project.relatedExperience || 'Independent Project' }}</dd></div>
        </dl>
      </div>
      <figure class="project-reference-image">
        <img :src="project.image" :alt="project.title" />
        <figcaption><span>{{ String(projectIndex + 1).padStart(2, '0') }} / {{ String(projects.length).padStart(2, '0') }}</span><span>{{ project.category }}</span></figcaption>
      </figure>
    </section>

    <section class="project-reference-story page-wrap">
      <div class="project-reference-contribution">
        <h2>What I Did</h2>
        <ol>
          <li v-for="(contribution, index) in project.contributions" :key="contribution">
            <span>{{ String(index + 1).padStart(2, '0') }}</span>
            <p>{{ contribution }}</p>
          </li>
        </ol>
      </div>
      <aside class="project-reference-impact">
        <h2>The Impact</h2>
        <p class="project-reference-impact-summary">{{ project.impact?.summary || 'Delivered a complete solution that met client requirements and improved operational efficiency.' }}</p>
        <div v-if="project.impact?.stats" class="project-reference-stats">
          <div v-for="stat in project.impact.stats" :key="stat.label"><strong>{{ stat.value }}</strong><span>{{ stat.label }}</span></div>
        </div>
        <ul><li v-for="detail in project.impact?.details" :key="detail">{{ detail }}</li></ul>
      </aside>
    </section>

    <section v-if="project.gallery?.length" class="project-reference-gallery page-wrap">
      <AwardsAwardGallery :images="project.gallery" :label="project.galleryLabel || 'SCREENS'" :size="project.gallerySize || 'default'" />
    </section>

    <section v-if="project.metrics?.length" class="project-reference-metrics page-wrap">
      <div class="project-reference-metrics-head">
        <p class="project-reference-kicker">{{ project.metricsLabel || 'MEASURED RESULT' }}</p>
        <h2>Tested, not assumed.</h2>
      </div>
      <div class="project-reference-metrics-body">
        <ul class="project-reference-metrics-list">
          <li v-for="metric in project.metrics" :key="metric.label"><span>{{ metric.label }}</span><strong>{{ metric.value }}</strong></li>
        </ul>
        <p v-if="project.metricsFootnote" class="project-reference-metrics-note">{{ project.metricsFootnote }}</p>
      </div>
    </section>

    <section class="project-reference-tools page-wrap">
      <div><p class="project-reference-kicker">TECHNOLOGY</p><h2>Built with.</h2></div>
      <div class="project-reference-tags"><span v-for="tag in project.tags" :key="tag">{{ tag }}</span></div>
    </section>

    <nav class="project-reference-pagination page-wrap">
      <NuxtLink :to="projectPath(previousProject.title)"><span>← PREVIOUS PROJECT</span><strong>{{ previousProject.title }}</strong></NuxtLink>
      <NuxtLink :to="projectPath(nextProject.title)"><span>NEXT PROJECT →</span><strong>{{ nextProject.title }}</strong></NuxtLink>
    </nav>
  </main>
</template>

<style scoped>
.project-reference-page {
  background: var(--paper, #e9e9e6);
  color: var(--ink, #151515);
  min-height: 100vh;
  padding: 88px 0 0;
}
.project-reference-hero {
  align-items: center;
  display: grid;
  gap: clamp(42px, 7vw, 92px);
  grid-template-columns: minmax(0, 1fr) minmax(360px, .9fr);
  padding-bottom: 96px;
}
.project-reference-copy { min-width: 0; }
.project-reference-kicker {
  color: var(--muted, #7f7f7d);
  font-size: 10px;
  font-weight: 600;
  letter-spacing: .24em;
  line-height: 1.4;
  margin: 0;
  text-transform: uppercase;
}
.project-reference-copy h1 {
  font-size: clamp(54px, 6vw, 92px);
  font-weight: 600;
  letter-spacing: -.075em;
  line-height: .92;
  margin: 22px 0 25px;
  max-width: 700px;
}
.project-reference-summary {
  color: var(--muted, #7f7f7d);
  font-size: 15px;
  line-height: 1.65;
  max-width: 590px;
}
.project-reference-actions { align-items: center; display: flex; flex-wrap: wrap; gap: 12px; margin-top: 28px; }
.project-reference-primary,
.project-reference-secondary {
  border-radius: 999px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .16em;
  padding: 13px 18px;
  text-decoration: none;
  text-transform: uppercase;
}
.project-reference-primary { background: var(--ink, #151515); color: var(--paper, #e9e9e6); }
.project-reference-secondary { border: 1px solid var(--line, #15151529); color: var(--ink, #151515); }
.project-reference-primary span,
.project-reference-secondary span { font-size: 13px; margin-left: 5px; }
.project-reference-facts {
  border-top: 1px solid var(--line, #15151529);
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 48px;
  max-width: 650px;
  padding-top: 22px;
}
.project-reference-facts dt { color: var(--muted, #7f7f7d); font-size: 8px; font-weight: 700; letter-spacing: .2em; text-transform: uppercase; }
.project-reference-facts dd { font-size: 12px; line-height: 1.45; margin-top: 8px; }
.project-reference-image { margin: 0; }
.project-reference-image img {
  aspect-ratio: 1.15;
  background: #d8d8d3;
  border-radius: 16px;
  display: block;
  object-fit: cover;
  width: 100%;
}
.project-reference-image figcaption { color: var(--muted, #7f7f7d); display: flex; font-size: 9px; justify-content: space-between; letter-spacing: .18em; margin-top: 12px; text-transform: uppercase; }
.project-reference-story {
  border-top: 1px solid var(--line, #15151529);
  display: grid;
  gap: clamp(44px, 7vw, 90px);
  grid-template-columns: 1.1fr .9fr;
  padding-bottom: 88px;
  padding-top: 72px;
}
.project-reference-story h2,
.project-reference-tools h2 { font-size: clamp(32px, 4vw, 52px); font-weight: 600; letter-spacing: -.07em; line-height: .95; margin: 0 0 28px; }
.project-reference-contribution ol { margin: 0; padding: 0; }
.project-reference-contribution li { border-top: 1px solid var(--line, #15151529); display: grid; gap: 22px; grid-template-columns: 30px 1fr; padding: 17px 0; }
.project-reference-contribution li:last-child { border-bottom: 1px solid var(--line, #15151529); }
.project-reference-contribution li span { color: var(--muted, #7f7f7d); font-size: 10px; letter-spacing: .12em; }
.project-reference-contribution li p { font-size: 14px; line-height: 1.55; margin: 0; }
.project-reference-impact { background: #deded8; border-radius: 16px; padding: 30px; }
.project-reference-impact h2 { margin-bottom: 20px; }
.project-reference-impact-summary { font-size: 15px; line-height: 1.6; margin: 0; }
.project-reference-stats { border-bottom: 1px solid var(--line, #15151529); border-top: 1px solid var(--line, #15151529); display: flex; gap: 44px; margin: 28px 0; padding: 18px 0; }
.project-reference-stats strong { display: block; font-size: 32px; font-weight: 600; letter-spacing: -.06em; line-height: 1; }
.project-reference-stats span { color: var(--muted, #7f7f7d); display: block; font-size: 9px; letter-spacing: .16em; margin-top: 7px; text-transform: uppercase; }
.project-reference-impact ul { display: grid; gap: 12px; margin: 0; padding: 0; }
.project-reference-impact li { color: var(--muted, #7f7f7d); font-size: 12px; line-height: 1.5; padding-left: 15px; position: relative; }
.project-reference-impact li::before { color: var(--ink, #151515); content: '•'; left: 0; position: absolute; }
.project-reference-gallery { padding-bottom: 72px; }
.project-reference-metrics {
  border-top: 1px solid var(--line, #15151529);
  display: grid;
  gap: clamp(28px, 5vw, 72px);
  grid-template-columns: minmax(220px, .8fr) minmax(0, 1.4fr);
  padding-bottom: 76px;
  padding-top: 42px;
}
.project-reference-metrics h2 { font-size: clamp(24px, 2.4vw, 34px); font-weight: 500; letter-spacing: -.04em; margin: 10px 0 0; }
.project-reference-metrics-list {
  border-top: 1px solid var(--line, #15151529);
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  list-style: none;
  margin: 0;
  padding: 0;
}
.project-reference-metrics-list li {
  align-items: baseline;
  border-bottom: 1px solid var(--line, #15151529);
  display: flex;
  gap: 12px;
  justify-content: space-between;
  padding: 14px 0;
}
.project-reference-metrics-list li:nth-child(odd) { padding-right: 24px; }
.project-reference-metrics-list li:nth-child(even) { border-left: 1px solid var(--line, #15151529); padding-left: 24px; }
.project-reference-metrics-list span { color: var(--muted, #7f7f7d); font-size: 11px; letter-spacing: .1em; text-transform: uppercase; }
.project-reference-metrics-list strong { font-size: 17px; font-weight: 500; }
.project-reference-metrics-note { color: var(--muted, #6f6f6d); font-size: 12px; line-height: 1.6; margin: 18px 0 0; max-width: 60ch; }
@media (max-width: 900px) {
  .project-reference-metrics { grid-template-columns: 1fr; }
  .project-reference-metrics-list { grid-template-columns: 1fr; }
  .project-reference-metrics-list li:nth-child(even) { border-left: 0; padding-left: 0; }
  .project-reference-metrics-list li:nth-child(odd) { padding-right: 0; }
}
.project-reference-tools { align-items: center; border-top: 1px solid var(--line, #15151529); display: flex; justify-content: space-between; padding-bottom: 74px; padding-top: 28px; }
.project-reference-tools h2 { font-size: 34px; margin: 10px 0 0; }
.project-reference-tags { display: flex; flex-wrap: wrap; gap: 8px; justify-content: flex-end; max-width: 540px; }
.project-reference-tags span { border: 1px solid var(--line, #15151529); border-radius: 999px; font-size: 10px; padding: 8px 13px; }
.project-reference-pagination { border-top: 1px solid var(--line, #15151529); display: grid; grid-template-columns: 1fr 1fr; padding: 0; width: min(100% - 88px, 1220px); }
.project-reference-pagination a { padding: 28px 0; text-decoration: none; }
.project-reference-pagination a + a { border-left: 1px solid var(--line, #15151529); padding-left: 34px; text-align: right; }
.project-reference-pagination span { color: var(--muted, #7f7f7d); display: block; font-size: 9px; font-weight: 700; letter-spacing: .18em; text-transform: uppercase; }
.project-reference-pagination strong { display: block; font-size: 20px; font-weight: 600; letter-spacing: -.04em; margin-top: 24px; }

@media (max-width: 800px) {
  .project-reference-page { padding-top: 52px; }
  .project-reference-hero,
  .project-reference-story { grid-template-columns: 1fr; }
  .project-reference-hero { gap: 42px; padding-bottom: 64px; }
  .project-reference-copy h1 { font-size: clamp(48px, 14vw, 78px); }
  .project-reference-facts { grid-template-columns: 1fr; gap: 16px; }
  .project-reference-story { padding-bottom: 64px; padding-top: 54px; }
  .project-reference-gallery { padding-bottom: 72px; }
.project-reference-metrics {
  border-top: 1px solid var(--line, #15151529);
  display: grid;
  gap: clamp(28px, 5vw, 72px);
  grid-template-columns: minmax(220px, .8fr) minmax(0, 1.4fr);
  padding-bottom: 76px;
  padding-top: 42px;
}
.project-reference-metrics h2 { font-size: clamp(24px, 2.4vw, 34px); font-weight: 500; letter-spacing: -.04em; margin: 10px 0 0; }
.project-reference-metrics-list {
  border-top: 1px solid var(--line, #15151529);
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  list-style: none;
  margin: 0;
  padding: 0;
}
.project-reference-metrics-list li {
  align-items: baseline;
  border-bottom: 1px solid var(--line, #15151529);
  display: flex;
  gap: 12px;
  justify-content: space-between;
  padding: 14px 0;
}
.project-reference-metrics-list li:nth-child(odd) { padding-right: 24px; }
.project-reference-metrics-list li:nth-child(even) { border-left: 1px solid var(--line, #15151529); padding-left: 24px; }
.project-reference-metrics-list span { color: var(--muted, #7f7f7d); font-size: 11px; letter-spacing: .1em; text-transform: uppercase; }
.project-reference-metrics-list strong { font-size: 17px; font-weight: 500; }
.project-reference-metrics-note { color: var(--muted, #6f6f6d); font-size: 12px; line-height: 1.6; margin: 18px 0 0; max-width: 60ch; }
@media (max-width: 900px) {
  .project-reference-metrics { grid-template-columns: 1fr; }
  .project-reference-metrics-list { grid-template-columns: 1fr; }
  .project-reference-metrics-list li:nth-child(even) { border-left: 0; padding-left: 0; }
  .project-reference-metrics-list li:nth-child(odd) { padding-right: 0; }
}
.project-reference-tools { align-items: flex-start; display: block; padding-bottom: 54px; }
  .project-reference-tags { justify-content: flex-start; margin-top: 24px; }
  .project-reference-pagination { grid-template-columns: 1fr; width: min(100% - 32px, 620px); }
  .project-reference-pagination a + a { border-left: 0; border-top: 1px solid var(--line, #15151529); padding-left: 0; text-align: left; }
}
</style>
