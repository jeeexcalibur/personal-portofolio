<script setup lang="ts">
import { experiences } from '~/data/portfolio'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (import.meta.client) {
  gsap.registerPlugin(ScrollTrigger)
}

const sectionRef = ref<HTMLElement | null>(null)
const railRef = ref<HTMLElement | null>(null)
const isDragging = ref(false)
const dragStartX = ref(0)
const dragStartOffset = ref(0)
const scrollProgress = ref(0)
const isMobile = ref(false)

const getTravel = () => {
  if (!railRef.value) return 0
  return Math.max(railRef.value.scrollWidth - window.innerWidth * 0.72, 0)
}

const currentCardIndex = computed(() => {
  const travel = getTravel()
  if (travel <= 0) return 1
  const progress = Math.min(Math.max(scrollProgress.value, 0), 1)
  return Math.min(Math.floor(progress * experiences.length) + 1, experiences.length)
})

const beginDrag = (event: PointerEvent) => {
  if (isMobile.value) return
  isDragging.value = true
  dragStartX.value = event.clientX
  const currentX = gsap.getProperty(railRef.value, 'x') as number
  dragStartOffset.value = currentX
  railRef.value?.setPointerCapture(event.pointerId)
}

const dragRail = (event: PointerEvent) => {
  if (isMobile.value) return
  if (!isDragging.value || !railRef.value) return
  const travel = getTravel()
  const delta = event.clientX - dragStartX.value
  const newX = Math.min(Math.max(dragStartOffset.value + delta, -travel), 0)
  gsap.set(railRef.value, { x: newX })
}

const endDrag = () => {
  isDragging.value = false
}

onMounted(() => {
  if (!sectionRef.value || !railRef.value) return

  const rail = railRef.value
  const section = sectionRef.value
  isMobile.value = window.matchMedia('(max-width: 800px)').matches

  if (isMobile.value) {
    gsap.set(rail, { clearProps: 'transform' })
    gsap.set(rail, { opacity: 1, filter: 'none' })
    const updateMobileProgress = () => {
      const maxScroll = rail.scrollWidth - rail.clientWidth
      scrollProgress.value = maxScroll > 0 ? Math.min(Math.max(rail.scrollLeft / maxScroll, 0), 1) : 1
    }
    updateMobileProgress()
    rail.addEventListener('scroll', updateMobileProgress, { passive: true })
    return
  }

  // Background word reveal
  gsap.fromTo('.experience-background-word',
    { y: 30, opacity: 0.08, filter: 'blur(10px)' },
    {
      y: 0,
      opacity: 0.045,
      filter: 'blur(0px)',
      scrollTrigger: { trigger: section, start: 'top bottom', end: 'top top+=20%', scrub: 0.5 }
    }
  )

  // Rail reveal
  gsap.fromTo(rail,
    { y: 110, opacity: 0, filter: 'blur(7px)' },
    {
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      scrollTrigger: { trigger: section, start: 'top bottom', end: 'top top+=20%', scrub: 0.5 }
    }
  )

  // Pinned horizontal scroll
  ScrollTrigger.create({
    trigger: section,
    start: 'top top',
    end: () => `+=${getTravel() + window.innerHeight}`,
    pin: true,
    pinSpacing: true,
    scrub: 1,
    invalidateOnRefresh: true,
    onUpdate: (self) => {
      scrollProgress.value = self.progress
      if (!isDragging.value) {
        gsap.set(rail, { x: -getTravel() * self.progress })
      }
    }
  })
})

onUnmounted(() => {
  ScrollTrigger.getAll().forEach(trigger => {
    if (trigger.vars.trigger === sectionRef.value) {
      trigger.kill()
    }
  })
})
</script>

<template>
  <section id="experience" ref="sectionRef" class="experience-section">
    <div class="experience-sticky">
      <div class="experience-background-word">EXPERIENCES</div>
      <div class="section-head experience-heading">
        <div><p class="section-kicker">CAREER ARCHIVE</p><h2>EXPERIENCES</h2></div>
        <p>A chronological look at my growth in the tech industry.</p>
      </div>
      <div
        ref="railRef"
        class="experience-rail"
        :class="{ 'is-dragging': isDragging }"
        @pointerdown="beginDrag"
        @pointermove="dragRail"
        @pointerup="endDrag"
        @pointercancel="endDrag"
        @pointerleave="endDrag"
      >
        <article v-for="(experience, index) in experiences" :key="experience.role" class="experience-card">
          <div class="experience-info">
            <div class="eyebrow">PROFESSIONAL EXPERIENCE <span class="tag-list"><span>{{ experience.type }}</span></span></div>
            <h3>{{ experience.role }}</h3>
            <p class="experience-company">{{ experience.company }}</p><p class="experience-period experience-period-visible">{{ experience.period }}</p>
            <p class="experience-description">{{ experience.description }}</p>
            <div class="experience-highlights"><div v-for="(highlight, highlightIndex) in experience.highlights" :key="highlight"><span>{{ String(highlightIndex + 1).padStart(2, '0') }}</span>{{ highlight }}</div></div>
          </div>
          <div class="experience-image"><img :src="experience.image" :alt="experience.company" draggable="false" /><span class="experience-index">{{ String(index + 1).padStart(2, '0') }}</span></div>
        </article>
      </div>
      <div class="experience-progress"><span class="experience-scroll-hint" :class="{ 'is-finished': scrollProgress >= 0.999 }"><i aria-hidden="true">&rarr;</i> DRAG TO EXPLORE</span><span class="experience-swipe-hint" :class="{ 'is-finished': scrollProgress >= 0.999 }"><i aria-hidden="true">&larr;</i> SWIPE <i aria-hidden="true">&rarr;</i></span><span>{{ String(currentCardIndex).padStart(2, '0') }} / {{ String(experiences.length).padStart(2, '0') }}</span></div>
    </div>
  </section>
</template>






