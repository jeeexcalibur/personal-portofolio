<script setup lang="ts">
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (import.meta.client) {
  gsap.registerPlugin(ScrollTrigger)
}

const skills = ['Laravel', 'Vue.js', 'Nuxt', 'React', 'Python', 'MySQL', 'PostgreSQL', 'Firebase', 'Figma', 'Docker', 'Git', 'Networking', '']

const sectionRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!sectionRef.value) return

  // Editorial reveal: the copy slides up from the bottom as the section enters
  // the viewport, and gently drifts back down when scrolling back up.
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.value,
      start: 'top bottom',
      end: 'top 25%',
      scrub: 0.6
    }
  })

  tl.fromTo('.about-copy .section-kicker', { y: 60, opacity: 0 }, { y: 0, opacity: 1, ease: 'none' }, 0)
    .fromTo('.about-statement', { y: 90, opacity: 0 }, { y: 0, opacity: 1, ease: 'none' }, 0.15)
})

onUnmounted(() => {
  ScrollTrigger.getAll().forEach((trigger) => {
    if (trigger.vars.trigger === sectionRef.value) {
      trigger.kill()
    }
  })
})
</script>

<template>
  <section id="about" ref="sectionRef" class="about">
    <div class="about-copy">
      <p class="section-kicker">01 / ABOUT</p>
      <p class="about-statement">
        <span class="dim">I work across</span> <span class="bright">infrastructure, development, and design</span> <span class="dim">to turn complex technical needs into</span> <span class="bright">useful digital products.</span>
      </p>
    </div>
    <div class="skill-marquee" aria-label="Skills">
      <div class="skill-track">
        <div v-for="loop in 2" :key="loop" class="skill-loop">
          <template v-for="(skill, index) in skills" :key="`${loop}-${skill}`">
            <span>{{ skill }}</span><i v-if="index < skills.length - 1">✦</i>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>
