<script setup lang="ts">
import { awards } from '~/data/portfolio'

const route = useRoute()
const awardIndex = computed(() => {
  const found = awards.findIndex(item => item.slug === route.params.slug)
  return found === -1 ? 0 : found
})
const award = computed(() => awards[awardIndex.value])
const previousAward = computed(() => awards[(awardIndex.value - 1 + awards.length) % awards.length])
const nextAward = computed(() => awards[(awardIndex.value + 1) % awards.length])
const heroImage = computed(() => award.value?.hero ?? award.value?.gallery?.[0])

useHead(() => ({
  title: `${award.value?.title} — ${award.value?.org}`,
  meta: [
    { name: 'description', content: award.value?.summary || '' },
    { property: 'og:title', content: `${award.value?.title} — ${award.value?.org}` },
    { property: 'og:description', content: award.value?.summary || '' },
    { property: 'og:type', content: 'article' },
    { property: 'og:image', content: heroImage.value?.src || '' }
  ]
}))
</script>

<template>
  <main class="award-detail">
    <section class="award-detail-hero page-wrap">
      <div class="award-detail-copy">
        <NuxtLink to="/#awards" class="award-detail-back">← AWARDS &amp; ORGANIZATION</NuxtLink>
        <p class="award-detail-kicker">{{ award.kind }} · {{ award.period }}</p>
        <h1>{{ award.title }}</h1>
        <p class="award-detail-org">{{ award.org }}</p>
        <p class="award-detail-summary">{{ award.summary }}</p>
        <dl class="award-detail-facts">
          <div><dt>ORGANISATION</dt><dd>{{ award.org }}</dd></div>
          <div><dt>PERIOD</dt><dd>{{ award.period }}</dd></div>
          <div><dt>ROLE</dt><dd>{{ award.role }}</dd></div>
        </dl>
      </div>
      <figure v-if="heroImage" class="award-detail-image" :class="{ 'award-detail-image--poster': !!award.hero }">
        <img :src="heroImage.src" :alt="heroImage.alt" />
        <figcaption>
          <span>{{ String(awardIndex + 1).padStart(2, '0') }} / {{ String(awards.length).padStart(2, '0') }}</span>
          <span>{{ award.kind }}</span>
        </figcaption>
      </figure>
    </section>

    <section class="award-detail-story page-wrap">
      <div class="award-detail-contribution">
        <h2>What I Did</h2>
        <ol>
          <li v-for="(contribution, index) in award.contributions" :key="contribution">
            <span>{{ String(index + 1).padStart(2, '0') }}</span>
            <p>{{ contribution }}</p>
          </li>
        </ol>
      </div>
      <aside class="award-detail-context">
        <h2>Context</h2>
        <p>{{ award.context }}</p>
        <div class="award-detail-skills">
          <span v-for="skill in award.skills" :key="skill">{{ skill }}</span>
        </div>
      </aside>
    </section>

    <section class="award-detail-gallery page-wrap">
      <AwardsAwardGallery :key="award.slug" :images="award.gallery" :label="award.galleryLabel" />
    </section>

    <section v-if="award.proof" class="award-detail-proof page-wrap">
      <AwardsAwardGallery :images="award.proof" :label="award.proofLabel || 'PUBLISHED PROOF'" size="large" />
    </section>

    <section v-if="award.credential" class="award-detail-credential page-wrap">
      <div class="award-detail-credential-copy">
        <p class="award-detail-kicker">CREDENTIAL</p>
        <h2>{{ award.credential.label }}</h2>
        <p class="award-detail-credential-meta">{{ award.credential.meta }}</p>
        <a :href="award.credential.pdf" target="_blank" rel="noopener" class="award-detail-credential-link">OPEN CERTIFICATE (PDF) ↗</a>
      </div>
      <a :href="award.credential.pdf" target="_blank" rel="noopener" class="award-detail-credential-image">
        <img :src="award.credential.image" :alt="`${award.title} certificate`" loading="lazy" decoding="async" />
      </a>
    </section>

    <nav class="award-detail-pagination page-wrap">
      <NuxtLink :to="`/awards/${previousAward.slug}`">
        <span>← PREVIOUS</span>
        <strong>{{ previousAward.title }}</strong>
      </NuxtLink>
      <NuxtLink :to="`/awards/${nextAward.slug}`">
        <span>NEXT →</span>
        <strong>{{ nextAward.title }}</strong>
      </NuxtLink>
    </nav>
  </main>
</template>

<style scoped>
.award-detail {
  background: var(--paper, #e9e9e6);
  color: var(--ink, #151515);
  min-height: 100vh;
  padding: 88px 0 0;
}
.award-detail-hero {
  align-items: center;
  display: grid;
  gap: clamp(42px, 7vw, 92px);
  grid-template-columns: minmax(0, 1fr) minmax(340px, .85fr);
  padding-bottom: 88px;
}
.award-detail-copy { min-width: 0; }
.award-detail-back {
  color: var(--muted, #7f7f7d);
  display: inline-block;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: .18em;
  text-decoration: none;
  text-transform: uppercase;
}
.award-detail-back:hover { color: var(--ink, #151515); }
.award-detail-kicker {
  color: var(--muted, #7f7f7d);
  font-size: 10px;
  font-weight: 600;
  letter-spacing: .22em;
  margin: 22px 0 0;
  text-transform: uppercase;
}
.award-detail-copy h1 {
  font-size: clamp(40px, 4.8vw, 74px);
  font-weight: 600;
  letter-spacing: -.07em;
  line-height: .94;
  margin: 16px 0 14px;
  max-width: 720px;
}
.award-detail-org {
  font-size: 14px;
  font-weight: 500;
  margin: 0 0 20px;
}
.award-detail-summary {
  color: var(--muted, #7f7f7d);
  font-size: 15px;
  line-height: 1.65;
  max-width: 590px;
}
.award-detail-facts {
  border-top: 1px solid var(--line, #15151529);
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 40px;
  max-width: 660px;
  padding-top: 22px;
}
.award-detail-facts dt { color: var(--muted, #7f7f7d); font-size: 8px; font-weight: 700; letter-spacing: .2em; text-transform: uppercase; }
.award-detail-facts dd { font-size: 12px; line-height: 1.45; margin-top: 8px; }
.award-detail-image { margin: 0; }
.award-detail-image img {
  aspect-ratio: 1.1;
  background: #d8d8d3;
  border-radius: 16px;
  display: block;
  object-fit: cover;
  width: 100%;
}
.award-detail-image--poster img { aspect-ratio: 4 / 5; object-fit: contain; }
.award-detail-image--poster { justify-self: end; max-width: 420px; width: 100%; }
.award-detail-image figcaption {
  color: var(--muted, #7f7f7d);
  display: flex;
  font-size: 9px;
  justify-content: space-between;
  letter-spacing: .18em;
  margin-top: 12px;
  text-transform: uppercase;
}
.award-detail-story {
  border-top: 1px solid var(--line, #15151529);
  display: grid;
  gap: clamp(44px, 7vw, 90px);
  grid-template-columns: 1.1fr .9fr;
  padding-bottom: 80px;
  padding-top: 68px;
}
.award-detail-story h2,
.award-detail-context h2 {
  font-size: clamp(30px, 3.6vw, 48px);
  font-weight: 600;
  letter-spacing: -.07em;
  line-height: .96;
  margin: 0 0 26px;
}
.award-detail-contribution ol { margin: 0; padding: 0; }
.award-detail-contribution li {
  border-top: 1px solid var(--line, #15151529);
  display: grid;
  gap: 22px;
  grid-template-columns: 30px 1fr;
  padding: 17px 0;
}
.award-detail-contribution li:last-child { border-bottom: 1px solid var(--line, #15151529); }
.award-detail-contribution li span { color: var(--muted, #7f7f7d); font-size: 10px; letter-spacing: .12em; }
.award-detail-contribution li p { font-size: 14px; line-height: 1.55; margin: 0; }
.award-detail-context { background: #deded8; border-radius: 16px; padding: 30px; }
.award-detail-context h2 { font-size: 30px; margin-bottom: 18px; }
.award-detail-context p { font-size: 13px; line-height: 1.65; margin: 0; }
.award-detail-skills { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 26px; }
.award-detail-skills span { border: 1px solid var(--line, #15151529); border-radius: 999px; font-size: 10px; padding: 7px 12px; }
.award-detail-gallery { padding-bottom: 80px; }
.award-detail-proof { padding-bottom: 72px; }
.award-detail-credential {
  align-items: start;
  border-top: 1px solid var(--line, #15151529);
  display: grid;
  gap: clamp(32px, 5vw, 64px);
  grid-template-columns: minmax(0, .85fr) minmax(0, 1.15fr);
  padding-bottom: 78px;
  padding-top: 30px;
}
.award-detail-credential h2 { font-size: clamp(24px, 2.6vw, 36px); font-weight: 600; letter-spacing: -.06em; line-height: .98; margin: 12px 0 0; max-width: 420px; }
.award-detail-credential-meta { color: var(--muted, #7f7f7d); font-size: 12px; line-height: 1.6; margin: 18px 0 0; max-width: 400px; }
.award-detail-credential-link { border-bottom: 1px solid var(--ink, #151515); display: inline-block; font-size: 9px; font-weight: 700; letter-spacing: .18em; margin-top: 26px; padding-bottom: 4px; text-decoration: none; }
.award-detail-credential-link:hover { opacity: .6; }
.award-detail-credential-image { display: block; }
.award-detail-credential-image img { border: 1px solid var(--line, #15151529); border-radius: 14px; display: block; width: 100%; }
.award-detail-pagination {
  border-top: 1px solid var(--line, #15151529);
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0;
  width: min(100% - 88px, 1220px);
}
.award-detail-pagination a { padding: 28px 0; text-decoration: none; }
.award-detail-pagination a + a { border-left: 1px solid var(--line, #15151529); padding-left: 34px; text-align: right; }
.award-detail-pagination span { color: var(--muted, #7f7f7d); display: block; font-size: 9px; font-weight: 700; letter-spacing: .18em; text-transform: uppercase; }
.award-detail-pagination strong { display: block; font-size: 20px; font-weight: 600; letter-spacing: -.04em; margin-top: 22px; max-width: 420px; }
.award-detail-pagination a + a strong { margin-left: auto; }

@media (max-width: 800px) {
  .award-detail { padding-top: 52px; }
  .award-detail-hero,
  .award-detail-story { grid-template-columns: 1fr; }
  .award-detail-hero { gap: 40px; padding-bottom: 60px; }
  .award-detail-copy h1 { font-size: clamp(38px, 12vw, 60px); }
  .award-detail-facts { gap: 16px; grid-template-columns: 1fr; }
  .award-detail-story { padding-bottom: 60px; padding-top: 52px; }
  .award-detail-credential { grid-template-columns: 1fr; }
  .award-detail-pagination { grid-template-columns: 1fr; width: min(100% - 32px, 620px); }
  .award-detail-pagination a + a { border-left: 0; border-top: 1px solid var(--line, #15151529); padding-left: 0; text-align: left; }
  .award-detail-pagination a + a strong { margin-left: 0; }
}
</style>
