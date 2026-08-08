<script setup lang="ts">
const name = 'Jein Ananda'
const roles = ['Full-Stack Web Developer', 'UI/UX Designer', 'IT Infrastructure Engineer']
const displayText = ref('')
const isCVModalOpen = ref(false)
const isPortraitHovered = ref(false)
const pointerPosition = reactive({ x: 50, y: 50, rotateX: 0, rotateY: 0 })

const updatePortraitPointer = (event: MouseEvent) => {
  const element = event.currentTarget as HTMLElement
  const bounds = element.getBoundingClientRect()
  pointerPosition.x = ((event.clientX - bounds.left) / bounds.width) * 100
  pointerPosition.y = ((event.clientY - bounds.top) / bounds.height) * 100
  pointerPosition.rotateX = (50 - pointerPosition.y) * 0.12
  pointerPosition.rotateY = (pointerPosition.x - 50) * 0.12
}
let roleIndex = 0
let charIndex = 0
let isDeleting = false
let typingTimer: ReturnType<typeof setTimeout> | undefined

const typeRole = () => {
  const currentRole = roles[roleIndex]
  if (!currentRole) return

  if (isDeleting) {
    charIndex -= 1
    displayText.value = currentRole.slice(0, charIndex)
  } else {
    charIndex += 1
    displayText.value = currentRole.slice(0, charIndex)
  }

  let delay = isDeleting ? 45 : 90
  if (!isDeleting && charIndex === currentRole.length) {
    isDeleting = true
    delay = 1800
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false
    roleIndex = (roleIndex + 1) % roles.length
    delay = 350
  }

  typingTimer = setTimeout(typeRole, delay)
}

onMounted(() => typeRole())
onUnmounted(() => { if (typingTimer) clearTimeout(typingTimer) })

defineProps({
  size: { type: [String, Number], default: 24 },
  color: { type: String, default: 'currentColor' }
})
</script>

<template>
  <section id="home" class="hero">
    <div class="hero-inner">
      <div class="hero-copy">
        <div class="hero-socials">
          <a href="https://github.com/jeeexcalibur" target="_blank" aria-label="GitHub"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.25c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.09 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.48.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.18 0 0 1-.32 3.3 1.23A11.5 11.5 0 0 1 12 6.03c1.02 0 2.05.14 3.01.42 2.3-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z"/></svg></a>
          <a href="https://www.linkedin.com/in/jein-ananda-36a05b2b0/" target="_blank" aria-label="LinkedIn">in</a>
          <a href="https://www.instagram.com/anandajein/" target="_blank" aria-label="Instagram"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6Zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"/></svg></a>
          <a href="mailto:anandajein12@gmail.com" aria-label="Email">✉</a>
        </div>
        <p class="hero-location">Balikpapan · Indonesia</p>
        <h1>Hi, I'm <em>{{ name.split(' ')[0] }}.</em></h1>
        <div class="hero-role"><span>{{ displayText }}</span><span class="hero-cursor" aria-hidden="true"></span></div>
        <div class="hero-actions"><button class="pill-button" @click="isCVModalOpen = true">Resume ↗</button></div>
      </div>

      <div class="hero-portrait" :class="{ 'is-hovered': isPortraitHovered }" :style="{ '--pointer-x': `${pointerPosition.x}%`, '--pointer-y': `${pointerPosition.y}%`, '--rotate-x': `${pointerPosition.rotateX}deg`, '--rotate-y': `${pointerPosition.rotateY}deg` }" @mouseenter="isPortraitHovered = true" @mousemove="updatePortraitPointer" @mouseleave="isPortraitHovered = false; pointerPosition.rotateX = 0; pointerPosition.rotateY = 0">
        <img class="hero-image hero-image-gray" src="/profile.png" alt="Jein Ananda" />
        <img class="hero-image color-reveal" src="/profile.png" alt="" aria-hidden="true" />
        <div class="hero-status"><strong>@jeinananda</strong><span>Available for work! <i class="status-dot"></i></span></div>
      </div>
    </div>
    <a href="#about" class="scroll-note">Scroll down</a>
  </section>

  <CVPreviewModal :is-open="isCVModalOpen" @close="isCVModalOpen = false" />
</template>




