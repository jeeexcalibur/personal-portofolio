<script setup lang="ts">
import { experiences, projects } from '~/data/portfolio'

const route = useRoute()
const experienceIndex = computed(() => {
  const found = experiences.findIndex(item => item.slug === route.params.slug)
  return found === -1 ? 0 : found
})
const experience = computed(() => experiences[experienceIndex.value])
const previousExperience = computed(() => experiences[(experienceIndex.value - 1 + experiences.length) % experiences.length])
const nextExperience = computed(() => experiences[(experienceIndex.value + 1) % experiences.length])
const relatedProject = computed(() => projects.find(project => slugifyProject(project.title) === experience.value?.relatedProjectSlug))

function slugifyProject(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

useHead(() => ({
  title: `${experience.value?.role} at ${experience.value?.company}`,
  meta: [
    { name: 'description', content: experience.value?.description || '' },
    { property: 'og:title', content: `${experience.value?.role} at ${experience.value?.company}` },
    { property: 'og:description', content: experience.value?.description || '' },
    { property: 'og:type', content: 'article' }
  ]
}))
</script>

<template>
  <main class="experience-detail">
    <section class="experience-detail-hero page-wrap">
      <div class="experience-detail-copy">
        <NuxtLink to="/experience" class="experience-detail-back">← ALL EXPERIENCE</NuxtLink>
        <p class="experience-detail-kicker">{{ experience.type }} · {{ experience.period }}</p>
        <h1>{{ experience.role }}</h1>
        <p class="experience-detail-company">{{ experience.company }}</p>
        <p class="experience-detail-summary">{{ experience.description }}</p>
        <p v-if="experience.companyContext" class="experience-detail-context">{{ experience.companyContext }}</p>
        <dl class="experience-detail-facts">
          <div><dt>COMPANY</dt><dd>{{ experience.company }}</dd></div>
          <div><dt>PERIOD</dt><dd>{{ experience.period }}</dd></div>
          <div><dt>LOCATION</dt><dd>{{ experience.location || 'Balikpapan, Indonesia' }}</dd></div>
        </dl>
      </div>
      <figure class="experience-detail-image">
        <img :src="experience.image" :alt="experience.company" />
        <figcaption><span>{{ String(experienceIndex + 1).padStart(2, '0') }} / {{ String(experiences.length).padStart(2, '0') }}</span><span>{{ experience.type }}</span></figcaption>
      </figure>
    </section>

    <section class="experience-detail-story page-wrap">
      <div class="experience-detail-contribution">
        <h2>What I Did</h2>
        <ol>
          <li v-for="(contribution, index) in experience.contributions" :key="contribution">
            <span>{{ String(index + 1).padStart(2, '0') }}</span>
            <p>{{ contribution }}</p>
          </li>
        </ol>
      </div>
      <aside class="experience-detail-impact">
        <h2>The Impact</h2>
        <p class="experience-detail-impact-summary">{{ experience.impact?.summary }}</p>
        <div v-if="experience.impact?.stats" class="experience-detail-stats">
          <div v-for="stat in experience.impact.stats" :key="stat.label"><strong>{{ stat.value }}</strong><span>{{ stat.label }}</span></div>
        </div>
        <ul><li v-for="detail in experience.impact?.details" :key="detail">{{ detail }}</li></ul>
      </aside>
    </section>

    <section v-if="experience.gallery?.length" class="experience-detail-gallery page-wrap">
      <AwardsAwardGallery
        :images="experience.gallery"
        :label="experience.galleryLabel || 'EVIDENCE'"
        :size="experience.gallerySize || 'default'"
      />
    </section>

    <section class="experience-detail-tools page-wrap">
      <div>
        <p class="experience-detail-kicker">SKILLS GAINED</p>
        <h2>What it taught me.</h2>
      </div>
      <div class="experience-detail-tags"><span v-for="skill in experience.skillsGained" :key="skill">{{ skill }}</span></div>
    </section>

    <section v-if="relatedProject" class="experience-detail-related page-wrap">
      <p class="experience-detail-kicker">RELATED PROJECT</p>
      <NuxtLink :to="`/projects/${experience.relatedProjectSlug}`" class="experience-detail-related-link">
        <strong>{{ relatedProject.title }}</strong>
        <span>{{ relatedProject.description }}</span>
        <em>VIEW PROJECT ↗</em>
      </NuxtLink>
    </section>

    <nav class="experience-detail-pagination page-wrap">
      <NuxtLink :to="`/experience/${previousExperience.slug}`"><span>← PREVIOUS ROLE</span><strong>{{ previousExperience.role }}</strong></NuxtLink>
      <NuxtLink :to="`/experience/${nextExperience.slug}`"><span>NEXT ROLE →</span><strong>{{ nextExperience.role }}</strong></NuxtLink>
    </nav>
  </main>
</template>

<style scoped>
.experience-detail {
  background: var(--paper, #e9e9e6);
  color: var(--ink, #151515);
  min-height: 100vh;
  padding: 88px 0 0;
}
.experience-detail-hero {
  align-items: center;
  display: grid;
  gap: clamp(42px, 7vw, 92px);
  grid-template-columns: minmax(0, 1fr) minmax(360px, .9fr);
  padding-bottom: 96px;
}
.experience-detail-copy { min-width: 0; }
.experience-detail-back {
  color: var(--muted, #7f7f7d);
  display: inline-block;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: .18em;
  text-decoration: none;
  text-transform: uppercase;
}
.experience-detail-back:hover { color: var(--ink, #151515); }
.experience-detail-kicker {
  color: var(--muted, #7f7f7d);
  font-size: 10px;
  font-weight: 600;
  letter-spacing: .24em;
  line-height: 1.4;
  margin: 22px 0 0;
  text-transform: uppercase;
}
.experience-detail-copy h1 {
  font-size: clamp(46px, 5.4vw, 84px);
  font-weight: 600;
  letter-spacing: -.075em;
  line-height: .92;
  margin: 18px 0 12px;
  max-width: 700px;
}
.experience-detail-company {
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -.01em;
  margin: 0 0 20px;
}
.experience-detail-summary {
  color: var(--muted, #7f7f7d);
  font-size: 15px;
  line-height: 1.65;
  max-width: 590px;
}
.experience-detail-context {
  border-left: 1px solid var(--line, #15151529);
  color: var(--muted, #7f7f7d);
  font-size: 13px;
  line-height: 1.6;
  margin-top: 18px;
  max-width: 590px;
  padding-left: 16px;
}
.experience-detail-facts {
  border-top: 1px solid var(--line, #15151529);
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 40px;
  max-width: 650px;
  padding-top: 22px;
}
.experience-detail-facts dt { color: var(--muted, #7f7f7d); font-size: 8px; font-weight: 700; letter-spacing: .2em; text-transform: uppercase; }
.experience-detail-facts dd { font-size: 12px; line-height: 1.45; margin-top: 8px; }
.experience-detail-image { margin: 0; }
.experience-detail-image img {
  aspect-ratio: 1.15;
  background: #d8d8d3;
  border-radius: 16px;
  display: block;
  object-fit: cover;
  width: 100%;
}
.experience-detail-image figcaption { color: var(--muted, #7f7f7d); display: flex; font-size: 9px; justify-content: space-between; letter-spacing: .18em; margin-top: 12px; text-transform: uppercase; }
.experience-detail-story {
  border-top: 1px solid var(--line, #15151529);
  display: grid;
  gap: clamp(44px, 7vw, 90px);
  grid-template-columns: 1.1fr .9fr;
  padding-bottom: 88px;
  padding-top: 72px;
}
.experience-detail-story h2,
.experience-detail-tools h2 { font-size: clamp(32px, 4vw, 52px); font-weight: 600; letter-spacing: -.07em; line-height: .95; margin: 0 0 28px; }
.experience-detail-contribution ol { margin: 0; padding: 0; }
.experience-detail-contribution li { border-top: 1px solid var(--line, #15151529); display: grid; gap: 22px; grid-template-columns: 30px 1fr; padding: 17px 0; }
.experience-detail-contribution li:last-child { border-bottom: 1px solid var(--line, #15151529); }
.experience-detail-contribution li span { color: var(--muted, #7f7f7d); font-size: 10px; letter-spacing: .12em; }
.experience-detail-contribution li p { font-size: 14px; line-height: 1.55; margin: 0; }
.experience-detail-impact { background: #deded8; border-radius: 16px; padding: 30px; }
.experience-detail-impact h2 { margin-bottom: 20px; }
.experience-detail-impact-summary { font-size: 15px; line-height: 1.6; margin: 0; }
.experience-detail-stats { border-bottom: 1px solid var(--line, #15151529); border-top: 1px solid var(--line, #15151529); display: flex; flex-wrap: wrap; gap: 16px 36px; margin: 28px 0; padding: 18px 0; }
.experience-detail-stats strong { display: block; font-size: 32px; font-weight: 600; letter-spacing: -.06em; line-height: 1; }
.experience-detail-stats span { color: var(--muted, #7f7f7d); display: block; font-size: 9px; letter-spacing: .16em; margin-top: 7px; text-transform: uppercase; }
.experience-detail-impact ul { display: grid; gap: 12px; margin: 0; padding: 0; }
.experience-detail-impact li { color: var(--muted, #7f7f7d); font-size: 12px; line-height: 1.5; padding-left: 15px; position: relative; }
.experience-detail-impact li::before { color: var(--ink, #151515); content: '•'; left: 0; position: absolute; }
.experience-detail-gallery { padding-bottom: 72px; }
.experience-detail-tools { align-items: center; border-top: 1px solid var(--line, #15151529); display: flex; justify-content: space-between; padding-bottom: 74px; padding-top: 28px; }
.experience-detail-tools h2 { font-size: 34px; margin: 10px 0 0; }
.experience-detail-tags { display: flex; flex-wrap: wrap; gap: 8px; justify-content: flex-end; max-width: 540px; }
.experience-detail-tags span { border: 1px solid var(--line, #15151529); border-radius: 999px; font-size: 10px; padding: 8px 13px; }
.experience-detail-related { border-top: 1px solid var(--line, #15151529); padding-bottom: 60px; padding-top: 28px; }
.experience-detail-related-link { display: grid; gap: 6px; padding-top: 14px; text-decoration: none; }
.experience-detail-related-link strong { font-size: 24px; font-weight: 600; letter-spacing: -.04em; }
.experience-detail-related-link span { color: var(--muted, #7f7f7d); font-size: 13px; line-height: 1.5; max-width: 640px; }
.experience-detail-related-link em { font-size: 9px; font-style: normal; font-weight: 700; letter-spacing: .18em; margin-top: 12px; }
.experience-detail-pagination { border-top: 1px solid var(--line, #15151529); display: grid; grid-template-columns: 1fr 1fr; padding: 0; width: min(100% - 88px, 1220px); }
.experience-detail-pagination a { padding: 28px 0; text-decoration: none; }
.experience-detail-pagination a + a { border-left: 1px solid var(--line, #15151529); padding-left: 34px; text-align: right; }
.experience-detail-pagination span { color: var(--muted, #7f7f7d); display: block; font-size: 9px; font-weight: 700; letter-spacing: .18em; text-transform: uppercase; }
.experience-detail-pagination strong { display: block; font-size: 20px; font-weight: 600; letter-spacing: -.04em; margin-top: 24px; }

@media (max-width: 800px) {
  .experience-detail { padding-top: 52px; }
  .experience-detail-hero,
  .experience-detail-story { grid-template-columns: 1fr; }
  .experience-detail-hero { gap: 42px; padding-bottom: 64px; }
  .experience-detail-copy h1 { font-size: clamp(44px, 13vw, 72px); }
  .experience-detail-facts { grid-template-columns: 1fr; gap: 16px; }
  .experience-detail-story { padding-bottom: 64px; padding-top: 54px; }
  .experience-detail-gallery { padding-bottom: 72px; }
.experience-detail-tools { align-items: flex-start; display: block; padding-bottom: 54px; }
  .experience-detail-tags { justify-content: flex-start; margin-top: 24px; }
  .experience-detail-pagination { grid-template-columns: 1fr; width: min(100% - 32px, 620px); }
  .experience-detail-pagination a + a { border-left: 0; border-top: 1px solid var(--line, #15151529); padding-left: 0; text-align: left; }
}
</style>
