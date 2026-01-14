<script setup lang="ts">
const { isDark, toggleTheme, initTheme } = useTheme()
const isOpen = ref(false)

onMounted(() => {
  initTheme()
})

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
]

const scrollToSection = (href: string) => {
  isOpen.value = false
  const element = document.querySelector(href)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const scrollToContact = () => {
  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300" style="background-color: var(--bg-primary); border-bottom: 1px solid var(--border); backdrop-filter: blur(8px);">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
<a href="#home" class="text-2xl font-bold tracking-tighter" tabindex="0" style="transform: none; color: var(--accent);">JA<span style="color: var(--text-primary);">.</span></a>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <a
            v-for="(link, index) in navLinks"
            :key="link.name"
            :href="link.href"
            @click.prevent="scrollToSection(link.href)"
            class="font-medium transition-all duration-300 hover:scale-105"
            :style="{ color: index === 0 ? 'var(--accent)' : 'var(--text-secondary)' }"
          >
            {{ link.name }}
          </a>
        </div>

        <div class="hidden md:flex items-center gap-3">
          <!-- Theme Toggle -->
          <button 
            @click="toggleTheme"
            class="theme-toggle"
            aria-label="Toggle theme"
          >
            <!-- Sun Icon (for dark mode) -->
            <svg v-if="isDark" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <!-- Moon Icon (for light mode) -->
            <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </button>

          <!-- Contact Button -->
          <button 
            @click="scrollToContact"
            class="btn btn-primary !py-2.5 !px-5 !text-sm"
          >
            Contact me
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden flex items-center gap-2">
          <button 
            @click="toggleTheme"
            class="theme-toggle !w-10 !h-10"
            aria-label="Toggle theme"
          >
            <svg v-if="isDark" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </button>
          <button
            @click="isOpen = !isOpen"
            class="p-2 transition-colors"
            style="color: var(--text-secondary);"
            aria-label="Toggle menu"
          >
            <svg v-if="!isOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="isOpen" class="md:hidden glass" style="border-top: 1px solid var(--border);">
        <div class="px-4 py-4 space-y-3">
          <a
            v-for="link in navLinks"
            :key="link.name"
            :href="link.href"
            @click.prevent="scrollToSection(link.href)"
            class="block py-2 font-medium transition-colors"
            style="color: var(--text-secondary);"
          >
            {{ link.name }}
          </a>
          <button 
            @click="scrollToContact"
            class="w-full btn btn-primary !py-2.5 mt-2"
          >
            Contact me
          </button>
        </div>
      </div>
    </Transition>
  </nav>
</template>
