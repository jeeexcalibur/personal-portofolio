<script setup lang="ts">
const name = "Jein Ananda"
const roles = ["Fullstack Developer", "UI/UX Designer", "Fresh Graduate"]
const displayText = ref("")

// CV Modal state
const isCVModalOpen = ref(false)

// Typing animation
let roleIndex = 0
let charIndex = 0
let isDeleting = false

const typeEffect = () => {
  const currentWord = roles[roleIndex]
  if (!currentWord) return
  
  if (isDeleting) {
    displayText.value = currentWord.substring(0, charIndex - 1)
    charIndex--
  } else {
    displayText.value = currentWord.substring(0, charIndex + 1)
    charIndex++
  }

  if (!isDeleting && charIndex === currentWord.length) {
    isDeleting = true
    setTimeout(typeEffect, 2000)
    return
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false
    roleIndex = (roleIndex + 1) % roles.length
  }

  const speed = isDeleting ? 50 : 100
  setTimeout(typeEffect, speed)
}

onMounted(() => {
  typeEffect()
})

const scrollToProjects = () => {
  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
}

const openCVModal = () => {
  isCVModalOpen.value = true
}
</script>

<template>
  <section id="home" class="min-h-screen flex items-center relative overflow-hidden transition-all duration-500" style="background-color: var(--bg-primary);">
    <!-- Animated Background -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <!-- Grid pattern -->
      <div class="absolute inset-0 opacity-30" style="background-image: radial-gradient(var(--accent) 1px, transparent 1px); background-size: 50px 50px;"></div>
      
      <!-- Animated blobs -->
      <div class="blob" style="width: 400px; height: 400px; background: var(--accent); top: 10%; right: 10%;"></div>
      <div class="blob" style="width: 300px; height: 300px; background: linear-gradient(135deg, var(--accent), #8b5cf6); bottom: 10%; left: 5%; animation-delay: 2s;"></div>
    </div>

    <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 relative z-10">
      <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <!-- Left: Text Content -->
        <div class="text-center lg:text-left order-2 lg:order-1">
          <!-- Hello Badge -->
          <div 
            class="inline-flex items-center gap-2 px-4 py-2 rounded-2xl mb-6 animate-slide-down transition-all duration-300"
            style="background-color: var(--accent-glow); border: 1px solid var(--accent);"
          >
            <span class="text-lg">👋</span>
            <span class="text-sm font-medium" style="color: var(--accent);">Hello !</span>
          </div>

          <!-- Name & Title -->
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2 animate-slide-up leading-tight" style="color: var(--text-primary);">
            I'm <span class="text-shimmer">{{ name }}</span>,
          </h1>
          
          <!-- Typing Role -->
          <div class="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 min-h-[2.5rem] sm:min-h-[3rem] animate-slide-up animate-delay-100" style="color: var(--text-primary);">
            <span>{{ displayText }}</span>
            <span class="animate-pulse" style="color: var(--accent);">|</span>
          </div>

          <!-- Description -->
          <p class="text-base sm:text-lg max-w-lg mx-auto lg:mx-0 mb-6 leading-relaxed animate-slide-up animate-delay-200" style="color: var(--text-secondary);">
            A fresh graduate in Information Systems with a strong passion for Web Development and UI/UX Design. Experienced through internships, teaching roles, and leadership positions that shaped both my technical expertise and interpersonal skills.
          </p>

          <!-- Social Links -->
          <div class="flex items-center justify-center lg:justify-start gap-4 mb-8 animate-slide-up animate-delay-200">
            <a 
              href="https://github.com/jeeexcalibur" 
              target="_blank" 
              class="social-link"
              aria-label="GitHub"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a 
              href="https://linkedin.com/in/jeinananda" 
              target="_blank" 
              class="social-link"
              aria-label="LinkedIn"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a 
              href="mailto:jeinanandaperdhana@gmail.com" 
              class="social-link"
              aria-label="Email"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 animate-slide-up animate-delay-300">
            <button @click="scrollToProjects" class="btn btn-primary shadow-accent">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              View Projects
            </button>
            <button @click="openCVModal" class="btn btn-outline">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download CV
            </button>
          </div>
        </div>

        <!-- Right: Profile Image with Blue Shape and Floating Badges -->
        <div class="flex justify-center lg:justify-end order-1 lg:order-2 animate-fade-in">
          <div class="relative w-[280px] h-[320px] sm:w-[340px] sm:h-[400px] lg:w-[380px] lg:h-[450px]">
            
            <!-- LARGE Blue decorative shape -->
            <div 
              class="absolute rounded-[2rem] sm:rounded-[2.5rem] transition-all duration-500 w-[200px] h-[250px] sm:w-[260px] sm:h-[320px] lg:w-[300px] lg:h-[360px]"
              style="right: 0; top: 50%; transform: translateY(-50%) rotate(6deg); background-color: var(--accent); z-index: 1;"
            ></div>
            
            <!-- Small white decorative shape - hidden on mobile -->
            <div 
              class="absolute rounded-2xl shadow-lg transition-all duration-300 hidden sm:block"
              style="width: 70px; height: 70px; left: 10px; bottom: 50px; transform: rotate(12deg); background-color: var(--bg-card); border: 1px solid var(--border); z-index: 5;"
            ></div>
            
            <!-- Profile Image Container - responsive sizes -->
            <div 
              class="absolute rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden shadow-2xl transition-all duration-300 w-[180px] h-[220px] sm:w-[220px] sm:h-[280px] lg:w-[260px] lg:h-[320px]"
              style="right: 20px; top: 50%; transform: translateY(-50%); background-color: var(--bg-card); border: 1px solid var(--border); z-index: 10;"
            >
              <img 
                src="/profile.png" 
                alt="Profile" 
                class="w-full h-full object-cover"
              />
            </div>

            <!-- Floating Badge - Web Designer - hidden on mobile -->
            <div 
              class="floating-badge animate-float hidden sm:flex" 
              style="position: absolute; top: 20px; right: 20px; z-index: 20; background-color: var(--bg-card); border: 1px solid var(--border);"
            >
              <div class="w-8 h-8 rounded-lg flex items-center justify-center" style="background-color: var(--accent);">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span style="color: var(--text-primary);">Web Designer</span>
            </div>

            <!-- Floating Badge - Developer - hidden on mobile -->
            <div 
              class="floating-badge animate-float hidden sm:flex" 
              style="position: absolute; top: 160px; left: -10px; z-index: 20; animation-delay: 0.5s; background-color: var(--bg-card); border: 1px solid var(--border);"
            >
              <div class="w-8 h-8 rounded-lg flex items-center justify-center" style="background-color: #10b981;">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <span style="color: var(--text-primary);">Fullstack Developer</span>
            </div>

            <!-- Floating Badge - UI/UX - hidden on mobile -->
            <div 
              class="floating-badge animate-float hidden lg:flex" 
              style="position: absolute; bottom: 30px; right: 100px; z-index: 20; animation-delay: 1s; background-color: var(--bg-card); border: 1px solid var(--border);"
            >
              <div class="w-8 h-8 rounded-lg flex items-center justify-center" style="background-color: #8b5cf6;">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <span style="color: var(--text-primary);">UI/UX Designer</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Down Indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 animate-fade-in" style="animation-delay: 1s;">
      <span class="text-xs font-medium" style="color: var(--text-muted);">Scroll Down</span>
      <div class="scroll-indicator" style="color: var(--accent);">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  </section>

  <!-- CV Preview Modal -->
  <CVPreviewModal 
    :is-open="isCVModalOpen" 
    @close="isCVModalOpen = false" 
  />
</template>
