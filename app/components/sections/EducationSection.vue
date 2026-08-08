<script setup lang="ts">
const education = [
  { institution: 'Kalimantan Institute of Technology', degree: 'Bachelor of Computer Science in Information System', period: '2022 — 2026', detail: 'GPA 3.59 / 4.00 · Thesis: UI/UX Design of Employee Information System Application' },
  { institution: 'SMKN 6 Balikpapan', degree: 'Computer and Network Engineering', period: '2019 — 2022', detail: 'MikroTik networking, routing, VPN, firewall configuration, and network assembly' }
]

onMounted(() => useReveal())
</script>

<template>
  <section id="education" class="section education-section reveal">
    <div class="education-background-word" aria-hidden="true">EDUCATION</div>
    <div class="education-head section-head reveal">
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