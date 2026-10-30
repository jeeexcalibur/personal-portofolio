<script setup lang="ts">
const education = [
  { institution: 'Kalimantan Institute of Technology', degree: 'Bachelor of Computer Science in Information System', period: '2022 — 2026', detail: 'GPA 3.59 / 4.00 · Thesis: UI/UX Design of Employee Information System Application' },
  { institution: 'SMKN 6 Balikpapan', degree: 'Computer and Network Engineering', period: '2019 — 2022', detail: 'MikroTik networking, routing, VPN, firewall configuration, and network assembly' }
]

onMounted(() => useReveal())
</script>

<template>
  <section id="education" class="section education-section reveal">
    <div class="education-head section-head reveal">
      <span class="education-background-word" aria-hidden="true">EDUCATION</span>
      <div><p class="section-kicker">ACADEMIC PATH</p><h2>EDUCATION</h2></div>
      <p>The foundation of knowledge and skills that shaped my journey in technology.</p>
    </div>
    <div class="education-list">
      <article v-for="(item, index) in education" :key="item.institution" class="education-row reveal" :style="{ transitionDelay: `${index * 140}ms` }">
        <div class="education-index">{{ String(index + 1).padStart(2, '0') }} / {{ String(education.length).padStart(2, '0') }}</div>
        <div class="education-body">
          <h3>{{ item.institution }}</h3>
          <p class="education-degree">{{ item.degree }}</p>
          <p class="education-detail">{{ item.detail }}</p>
        </div>
        <div class="education-period">{{ item.period }}</div>
      </article>
    </div>
  </section>
</template>

<style scoped>
/* Disamakan dengan section AWARDS & ORGANIZATION: head rata bawah, baris lebih
   rapat, background word lebih kecil supaya transisi antar section halus. */
.education-section { background: var(--paper); overflow: hidden; position: relative; }
.education-background-word {
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
.education-head {
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
.education-head > div,
.education-head > p { position: relative; z-index: 1; }
.education-head h2 {
  font-size: clamp(26px, 2.8vw, 42px);
  font-weight: 500;
  letter-spacing: -0.08em;
  line-height: 0.9;
  margin: 12px 0 0;
}
.education-head > p {
  color: var(--muted);
  font-size: 14px;
  line-height: 1.5;
  margin: 0;
  max-width: 360px;
}
.education-list {
  margin: 72px auto 0;
  max-width: 1295px;
  position: relative;
  width: calc(100% - 96px);
  z-index: 1;
}
.education-row {
  align-items: start;
  border-top: 1px solid var(--line);
  display: grid;
  gap: 48px;
  grid-template-columns: 120px minmax(0, 1fr) 160px;
  padding: 34px 0 36px;
  transition: background 0.3s ease, padding 0.3s ease;
}
.education-row:last-child { border-bottom: 1px solid var(--line); }
.education-row:hover { background: rgba(21, 21, 21, 0.035); padding-left: 12px; padding-right: 12px; }
.education-index {
  color: var(--muted);
  font-size: 10px;
  letter-spacing: 0.14em;
  padding-top: 6px;
}
.education-body h3 {
  font-size: clamp(20px, 2vw, 27px);
  font-weight: 500;
  letter-spacing: -0.04em;
  line-height: 1.1;
  margin: 0;
}
.education-degree {
  color: var(--ink);
  font-size: 12px;
  letter-spacing: 0.04em;
  line-height: 1.5;
  margin: 10px 0 0;
  text-transform: uppercase;
}
.education-detail {
  color: var(--muted);
  font-size: 13px;
  line-height: 1.5;
  margin: 8px 0 0;
  max-width: 640px;
}
.education-period {
  color: var(--muted);
  font-size: 10px;
  letter-spacing: 0.14em;
  padding-top: 6px;
  text-align: right;
  text-transform: uppercase;
}

@media (max-width: 800px) {
  .education-head { align-items: start; display: block; width: calc(100% - 40px); }
  .education-head > p { margin-top: 16px; max-width: 100%; }
  .education-list { margin-top: 42px; width: calc(100% - 40px); }
  .education-row { gap: 14px; grid-template-columns: 1fr; padding: 26px 0 28px; }
  .education-row:hover { padding-left: 0; padding-right: 0; }
  .education-period { padding-top: 0; text-align: left; }
}
</style>
