<script setup lang="ts">
import type { AwardImage } from '~/data/portfolio'

const props = defineProps<{
  images: AwardImage[]
  label: string
  size?: 'default' | 'large'
}>()

const strip = ref<HTMLElement | null>(null)
const index = ref(0)
const atStart = ref(true)
const atEnd = ref(false)
const lightboxIndex = ref(-1)

const activeImage = computed(() => (lightboxIndex.value >= 0 ? props.images[lightboxIndex.value] : null))
const total = computed(() => props.images.length)

function measure() {
  const el = strip.value
  if (!el) return
  const max = el.scrollWidth - el.clientWidth
  const progress = max > 0 ? el.scrollLeft / max : 1
  index.value = total.value > 1 ? Math.round(progress * (total.value - 1)) : 0
  atStart.value = el.scrollLeft <= 2
  atEnd.value = max <= 2 || el.scrollLeft >= max - 2
}

function step(direction: number) {
  const el = strip.value
  if (!el) return
  const card = el.querySelector<HTMLElement>('[data-card]')
  const delta = card ? (card.offsetWidth + 16) * direction : el.clientWidth * 0.7 * direction
  el.scrollBy({ left: delta, behavior: 'smooth' })
}

function openLightbox(i: number) {
  lightboxIndex.value = i
}

function closeLightbox() {
  lightboxIndex.value = -1
}

function stepLightbox(delta: number) {
  if (lightboxIndex.value < 0) return
  lightboxIndex.value = (lightboxIndex.value + delta + total.value) % total.value
}

function onKeydown(event: KeyboardEvent) {
  if (lightboxIndex.value < 0) return
  if (event.key === 'Escape') closeLightbox()
  if (event.key === 'ArrowRight') stepLightbox(1)
  if (event.key === 'ArrowLeft') stepLightbox(-1)
}

watch(lightboxIndex, (value) => {
  if (typeof document === 'undefined') return
  document.body.style.overflow = value >= 0 ? 'hidden' : ''
})

let observer: ResizeObserver | null = null

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
  measure()
  if (typeof ResizeObserver !== 'undefined' && strip.value) {
    observer = new ResizeObserver(() => measure())
    observer.observe(strip.value)
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
  observer?.disconnect()
  if (typeof document !== 'undefined') document.body.style.overflow = ''
})
</script>

<template>
  <div class="award-gallery" :class="`award-gallery--${size || 'default'}`">
    <div class="award-gallery-bar">
      <p>{{ label }}</p>
      <div class="award-gallery-controls">
        <span class="award-gallery-count">{{ String(Math.min(index + 1, total)).padStart(2, '0') }} / {{ String(total).padStart(2, '0') }}</span>
        <button type="button" aria-label="Previous" :disabled="atStart" @click="step(-1)">←</button>
        <button type="button" aria-label="Next" :disabled="atEnd" @click="step(1)">→</button>
      </div>
    </div>

    <div ref="strip" class="award-strip" @scroll.passive="measure">
      <button
        v-for="(image, i) in images"
        :key="image.src"
        data-card
        type="button"
        class="award-strip-card"
        @click="openLightbox(i)"
      >
        <img
          :src="image.src"
          :alt="image.alt"
          :width="image.width"
          :height="image.height"
          loading="lazy"
          decoding="async"
        />
        <span class="award-strip-caption">{{ image.caption }}</span>
      </button>
    </div>

    <Teleport to="body">
      <div v-if="activeImage" class="award-lightbox" role="dialog" aria-modal="true" @click.self="closeLightbox">
        <button type="button" class="award-lightbox-close" aria-label="Close" @click="closeLightbox">✕</button>
        <button type="button" class="award-lightbox-nav award-lightbox-nav--prev" aria-label="Previous image" @click="stepLightbox(-1)">←</button>
        <figure>
          <img :src="activeImage.src" :alt="activeImage.alt" />
          <figcaption>
            <span>{{ activeImage.caption }}</span>
            <span>{{ String(lightboxIndex + 1).padStart(2, '0') }} / {{ String(total).padStart(2, '0') }}</span>
          </figcaption>
        </figure>
        <button type="button" class="award-lightbox-nav award-lightbox-nav--next" aria-label="Next image" @click="stepLightbox(1)">→</button>
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.award-gallery-bar {
  align-items: center;
  border-top: 1px solid var(--line, #15151529);
  display: flex;
  justify-content: space-between;
  padding-top: 14px;
}
.award-gallery-bar > p {
  color: var(--muted, #7f7f7d);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: .2em;
  margin: 0;
  text-transform: uppercase;
}
.award-gallery-controls { align-items: center; display: flex; gap: 10px; }
.award-gallery-count {
  color: var(--ink, #151515);
  font-size: 10px;
  font-variant-numeric: tabular-nums;
  letter-spacing: .14em;
  margin-right: 4px;
}
.award-gallery-controls button {
  background: transparent;
  border: 1px solid rgba(21, 21, 21, .38);
  border-radius: 999px;
  color: var(--ink, #151515);
  cursor: pointer;
  font-size: 14px;
  height: 38px;
  line-height: 1;
  transition: background .25s ease, color .25s ease, opacity .25s ease;
  width: 38px;
}
.award-gallery-controls button:hover:not(:disabled) { background: var(--ink, #151515); color: var(--paper, #e9e9e6); }
.award-gallery-controls button:disabled { cursor: default; opacity: .3; }

.award-strip {
  align-items: flex-start;
  display: flex;
  gap: 16px;
  margin-top: 20px;
  overflow-x: auto;
  padding-bottom: 4px;
  scroll-snap-type: x proximity;
  scrollbar-width: none;
}
.award-strip::-webkit-scrollbar { display: none; }
.award-strip-card {
  background: transparent;
  border: 0;
  cursor: zoom-in;
  display: grid;
  flex: 0 0 auto;
  gap: 10px;
  padding: 0;
  scroll-snap-align: start;
  text-align: left;
  width: max-content;
}
.award-strip-card img {
  background: #dcdcd6;
  border-radius: 12px;
  display: block;
  height: clamp(240px, 31vw, 420px);
  object-fit: cover;
  transition: opacity .3s ease, transform .35s ease;
  width: auto;
}
.award-strip-card:hover img { opacity: .9; transform: translateY(-2px); }
.award-gallery--large .award-strip-card img { height: clamp(300px, 40vw, 560px); }
.award-strip-caption {
  color: #6d6d6b;
  display: block;
  font-size: 11.5px;
  line-height: 1.55;
  max-width: 330px;
}

.award-lightbox {
  align-items: center;
  backdrop-filter: blur(6px);
  background: rgba(16, 16, 16, .93);
  display: flex;
  inset: 0;
  justify-content: center;
  padding: 48px;
  position: fixed;
  z-index: 200;
}
.award-lightbox figure { margin: 0; max-height: 100%; max-width: min(1100px, 100%); }
.award-lightbox img { border-radius: 6px; display: block; margin: 0 auto; max-height: 78vh; max-width: 100%; object-fit: contain; }
.award-lightbox figcaption {
  color: rgba(255, 255, 255, .62);
  display: flex;
  font-size: 10px;
  gap: 20px;
  justify-content: space-between;
  letter-spacing: .12em;
  margin-top: 14px;
  text-transform: uppercase;
}
.award-lightbox-close,
.award-lightbox-nav {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, .28);
  border-radius: 999px;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  height: 40px;
  line-height: 1;
  position: absolute;
  transition: background .25s ease;
  width: 40px;
}
.award-lightbox-close { right: 24px; top: 24px; }
.award-lightbox-nav { top: 50%; transform: translateY(-50%); }
.award-lightbox-nav--prev { left: 22px; }
.award-lightbox-nav--next { right: 22px; }
.award-lightbox-close:hover,
.award-lightbox-nav:hover { background: rgba(255, 255, 255, .14); }

@media (max-width: 800px) {
  .award-strip { gap: 12px; }
  .award-strip-card img { height: clamp(230px, 60vw, 340px); }
  .award-gallery--large .award-strip-card img { height: clamp(300px, 78vw, 430px); }
  .award-strip-caption { font-size: 10px; max-width: 240px; }
  .award-lightbox { padding: 20px; }
  .award-lightbox-nav--prev { left: 8px; }
  .award-lightbox-nav--next { right: 8px; }
  .award-lightbox-close { right: 10px; top: 10px; }
}
</style>
