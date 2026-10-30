<script setup lang="ts">
import { awards } from '~/data/portfolio'

onMounted(() => useReveal())
</script>

<template>
  <section id="awards" class="section awards-section reveal">
    <div class="awards-head section-head reveal">
      <span class="awards-background-word" aria-hidden="true">RECOGNITION</span>
      <div><p class="section-kicker">BEYOND THE DAY JOB</p><h2>AWARDS &amp; ORGANIZATION</h2></div>
      <p>Scholarships and student-organisation work that ran alongside study and work.</p>
    </div>
    <div class="awards-list">
      <NuxtLink
        v-for="(award, index) in awards"
        :key="award.slug"
        :to="`/awards/${award.slug}`"
        class="awards-row reveal"
        :style="{ transitionDelay: `${index * 140}ms` }"
      >
        <div class="awards-index">{{ String(index + 1).padStart(2, '0') }} / {{ String(awards.length).padStart(2, '0') }}</div>
        <div class="awards-body">
          <h3>{{ award.title }}</h3>
          <p class="awards-org">{{ award.org }}</p>
          <span class="awards-more">VIEW THE WORK ↗</span>
        </div>
        <div class="awards-period">{{ award.period }}</div>
      </NuxtLink>
    </div>
  </section>
</template>

<style scoped>
.awards-section {
  background: var(--paper);
  overflow: hidden;
  position: relative;
}
.awards-background-word {
  color: rgba(30, 30, 30, 0.045);
  font-size: clamp(44px, 13vw, 190px);
  font-weight: 800;
  left: 50%;
  letter-spacing: -0.1em;
  line-height: 0.9;
  margin: 0;
  pointer-events: none;
  position: absolute;
  text-align: center;
  top: 50%;
  transform: translate(-50%, -50%);
  white-space: nowrap;
  width: max-content;
  z-index: 0;
}
.awards-head {
  align-items: end;
  display: flex;
  gap: 40px;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1295px;
  position: relative;
  width: calc(100% - 96px);
  z-index: 1;
}
.awards-head > div,
.awards-head > p { position: relative; z-index: 1; }
.awards-head h2 {
  font-size: clamp(26px, 2.8vw, 42px);
  font-weight: 500;
  letter-spacing: -0.08em;
  line-height: 0.9;
  margin: 12px 0 0;
}
.awards-head > p {
  color: var(--muted);
  font-size: 14px;
  line-height: 1.5;
  margin: 0;
  max-width: 360px;
}
.awards-list {
  margin: 72px auto 0;
  max-width: 1295px;
  position: relative;
  width: calc(100% - 96px);
  z-index: 1;
}
.awards-row {
  align-items: start;
  border-top: 1px solid var(--line);
  color: inherit;
  display: grid;
  gap: 48px;
  grid-template-columns: 120px minmax(0, 1fr) 160px;
  padding: 34px 0 36px;
  text-decoration: none;
  transition: background 0.3s ease, padding 0.3s ease;
}
.awards-row:last-child { border-bottom: 1px solid var(--line); }
.awards-row:hover { background: rgba(21, 21, 21, 0.035); padding-left: 12px; padding-right: 12px; }
.awards-more {
  display: inline-block;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.18em;
  margin-top: 14px;
  opacity: 0;
  transform: translateY(4px);
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.awards-row:hover .awards-more,
.awards-row:focus-visible .awards-more { opacity: 1; transform: translateY(0); }
.awards-row:focus-visible { background: rgba(21, 21, 21, 0.035); outline: 2px solid var(--ink, #151515); outline-offset: 4px; }
.awards-index {
  color: var(--muted);
  font-size: 10px;
  letter-spacing: 0.14em;
  padding-top: 6px;
}
.awards-body h3 {
  font-size: clamp(20px, 2vw, 27px);
  font-weight: 500;
  letter-spacing: -0.04em;
  line-height: 1.1;
  margin: 0;
}
.awards-org {
  color: var(--muted);
  font-size: 13px;
  line-height: 1.5;
  margin: 10px 0 0;
}
.awards-period {
  color: var(--muted);
  font-size: 10px;
  letter-spacing: 0.14em;
  padding-top: 6px;
  text-align: right;
  text-transform: uppercase;
}

@media (max-width: 800px) {
  .awards-head { align-items: start; display: block; width: calc(100% - 40px); }
  .awards-head > p { margin-top: 16px; max-width: 100%; }
  .awards-list { margin-top: 42px; width: calc(100% - 40px); }
  .awards-row { gap: 14px; grid-template-columns: 1fr; padding: 26px 0 28px; }
  .awards-row:hover { padding-left: 0; padding-right: 0; }
  .awards-period { padding-top: 0; text-align: left; }
}
</style>
