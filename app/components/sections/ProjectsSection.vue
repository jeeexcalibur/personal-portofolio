<script setup lang="ts">
interface Project {
  title: string
  description: string
  image: string | null
  tags: string[]
  demoUrl: string
  repoUrl: string
  gradient: string
}

const projects: Project[] = [
  {
    title: 'Chremate',
    description: 'An AI-powered personal finance tracker inspired by the Greek word for wealth. Designed for first-time earners to manage daily expenses through natural language processing. Features real-time consumption tracking, smart budget allocation, and automated expense categorization using Gemini AI.',
    image: 'project-chremate.png',
    tags: ['Vue.js 3', 'Vite 7', 'Firebase', 'Gemini AI', 'TailwindCSS 4.0'],
    demoUrl: 'https://chremate.anandajein.my.id/', 
    repoUrl: 'https://github.com/jeeexcalibur/chremate',
    gradient: 'from-emerald-500 to-teal-700'
  },
  {
    title: 'Personnel Availability Dashboard',
    description: 'A Personnel Availability Dashboard built with Laravel 12 for monitoring workforce metrics, overtime tracking, and absence management. This dashboard replicates Power BI formulas for accurate KPI calculations. Features include real-time availability metrics, OT ratio tracking, and department-wise analytics.',
    image: '/project-dashboard-mp.png',
    tags: ['Laravel 12', 'TailwindCSS 4.0', 'MySQL', 'Vite 7'],
    demoUrl: 'https://github.com/jeeexcalibur/hc-performance-dashboard',
    repoUrl: 'https://github.com/jeeexcalibur/hc-performance-dashboard',
    gradient: 'from-blue-600 to-cyan-500'
  },
  {
    title: 'Serenity Booth',
    description: 'The premier free, browser-based photo booth application that lets you create beautiful photo strips just like classic photo booths. Take photos using your webcam, customize with colors, backgrounds, and stickers, then download your creation instantly — no account required!',
    image: '/project-serenity-booth.png',
    tags: ['Vue.js', 'TailwindCSS'],
    demoUrl: 'https://serenitybooth.anandajein.my.id/',
    repoUrl: 'https://github.com/jeeexcalibur/Serenity-Booth',
    gradient: 'from-pink-400 to-purple-500'
  },
  {
    title: 'EIS Mobile UI/UX Design',
    description: 'Mobile interface design for the Employee Information System at PT Komatsu Remanufacturing Asia. Designed user flows, wireframes, and high-fidelity prototypes for Attendance (Face Recognition), Reimbursement, and Time Management features serving 700+ employees.',
    image: '/project-eis-mobile.png',
    tags: ['Figma', 'UI/UX', 'Mobile Design'],
    demoUrl: 'https://www.figma.com/proto/AZjby73mEu6pIhxTxE2RkD/Mobile-Prototype?page-id=0%3A1&node-id=342-250&p=f&viewport=-115%2C405%2C0.02&t=c7HOW6ht121nFORy-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=10%3A36&show-proto-sidebar=1',
    repoUrl: '#',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Company Profile Boilerplate',
    description: 'A modern, full-featured company profile website template built with Laravel 12. Perfect for agencies, startups, and businesses who need a professional online presence with a custom admin panel.',
    image: '/project-company-profile.png',
    tags: ['Laravel', 'TailwindCSS', 'MySQL'],
    demoUrl: 'https://github.com/jeeexcalibur/company-profile-template',
    repoUrl: 'https://github.com/jeeexcalibur/company-profile-template',
    gradient: 'from-purple-500 to-indigo-600'
  },
  {
    title: 'Sweetelle: Cake Showcase',
    description: 'A modern and elegant website for showcasing cake recipes and facilitating online cake sales. Features recipe management, categorization, a clean browsing interface, cashier system, and asset CRUD functionality. Built with Laravel Filament.',
    image: '/project-sweetelle.png',
    tags: ['Laravel', 'Filament', 'MySQL'],
    demoUrl: 'https://github.com/jeeexcalibur/Sweetelle',
    repoUrl: '#',
    gradient: 'from-green-500 to-lime-500'
  },
]

const selectedProject = ref<Project | null>(null)
const isModalOpen = ref(false)
const showAllProjects = ref(false)

const beatRef = ref<HTMLElement | null>(null)
const isRevealed = ref(false)

const visibleProjects = computed(() => {
  return showAllProjects.value ? projects : projects.slice(0, 4)
})

const toggleShowAll = () => {
  showAllProjects.value = !showAllProjects.value
}

const openModal = (project: Project) => {
  selectedProject.value = project
  isModalOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  isModalOpen.value = false
  selectedProject.value = null
  document.body.style.overflow = 'auto'
}

onMounted(() => {
  // Scroll reveal observer
  if (beatRef.value) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) isRevealed.value = true
        })
      },
      { rootMargin: '-10% 0px -20% 0px', threshold: 0.1 }
    )
    observer.observe(beatRef.value)
  }

  // Close modal on Escape key
  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === 'Escape') closeModal()
  }
  window.addEventListener('keydown', handleEscape)
  onUnmounted(() => window.removeEventListener('keydown', handleEscape))
})
</script>

<template>
  <section id="projects" ref="beatRef" class="story-beat transition-all duration-500 relative overflow-hidden" style="background-color: var(--bg-primary);">
    <!-- Ambient background scrim for depth -->
    <div 
      class="absolute inset-0 pointer-events-none"
      style="background: radial-gradient(ellipse at 60% 30%, rgba(99, 102, 241, 0.05) 0%, transparent 50%), radial-gradient(ellipse at 40% 80%, rgba(244, 114, 182, 0.03) 0%, transparent 40%);"
    ></div>
    
    <div class="scroll-grid relative z-10">
      <div class="max-w-5xl mx-auto">
        <!-- Story Beat Header — right-aligned on desktop (alternating) -->
        <div class="lg:text-right">
          <div 
            class="scroll-reveal scroll-stagger-1 lg:flex lg:flex-col lg:items-end" 
            :class="{ 'scroll-revealed': isRevealed }"
          >
            <div class="chapter-badge">
              <span>04</span>
              <span style="opacity: 0.4;">—</span>
              <span>Projects</span>
            </div>
            <h2 class="beat-title">Some of My Recent Work</h2>
            <p class="beat-body lg:ml-auto">
              A showcase of applications, designs, and tools I've built and shipped.
            </p>
          </div>
        </div>

        <!-- Project Grid -->
        <div class="grid md:grid-cols-2 gap-5 sm:gap-6 mt-8">
          <div 
            v-for="(project, index) in visibleProjects" 
            :key="project.title" 
            class="media-block card-enhanced gradient-border group cursor-pointer scroll-reveal"
            :class="[`scroll-stagger-${Math.min(index + 2, 6)}`, { 'scroll-revealed': isRevealed }]"
            @click="openModal(project)"
          >
            <!-- Project Image -->
            <div class="aspect-video relative overflow-hidden rounded-xl" :class="!project.image ? `bg-gradient-to-br ${project.gradient}` : ''">
              <!-- Show actual image if available -->
              <img 
                v-if="project.image" 
                :src="project.image" 
                :alt="project.title"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <!-- Show placeholder if no image -->
              <div v-else class="absolute inset-0 flex items-center justify-center bg-black/20">
                <svg class="w-16 h-16 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              
              <!-- Gradient scrim overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-4">
                <span class="text-white font-medium flex items-center gap-2 text-sm">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  View Details
                </span>
              </div>
            </div>

            <!-- Project Info -->
            <div class="pt-4">
              <h3 class="text-lg font-bold mb-1.5 transition-colors" style="color: var(--text-primary);">{{ project.title }}</h3>
              <p class="text-sm mb-3 line-clamp-2 transition-colors leading-relaxed" style="color: var(--text-secondary);">{{ project.description }}</p>
              <div class="flex flex-wrap gap-1.5">
                <span 
                  v-for="tag in project.tags" 
                  :key="tag"
                  class="text-xs px-2.5 py-1 rounded-full font-medium transition-colors"
                  style="background-color: var(--accent-glow); color: var(--accent);"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- View More Button -->
        <div v-if="projects.length > 4" class="flex justify-center mt-10">
          <button 
            @click="toggleShowAll"
            class="cta-ghost flex items-center gap-2"
          >
            <span>{{ showAllProjects ? 'Show Less' : 'View More Projects' }}</span>
            <svg 
              class="w-4 h-4 transition-transform duration-300" 
              :class="showAllProjects ? 'rotate-180' : ''"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Modal Overlay -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div 
          v-if="isModalOpen" 
          class="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4"
        >
          <!-- Backdrop — clickable to close -->
          <div class="absolute inset-0 bg-black/70 backdrop-blur-sm" @click="closeModal"></div>
          
          <!-- Modal Content -->
          <Transition
            enter-active-class="transition duration-300 ease-out"
            enter-from-class="opacity-0 scale-95 translate-y-4"
            enter-to-class="opacity-100 scale-100 translate-y-0"
            leave-active-class="transition duration-200 ease-in"
            leave-from-class="opacity-100 scale-100 translate-y-0"
            leave-to-class="opacity-0 scale-95 translate-y-4"
          >
            <div 
              v-if="isModalOpen && selectedProject"
              class="relative w-full sm:max-w-2xl max-h-[92vh] sm:max-h-[90vh] rounded-t-2xl sm:rounded-2xl shadow-2xl flex flex-col"
              style="background-color: var(--bg-card); border: 1px solid var(--border);"
            >
              <!-- Mobile drag handle -->
              <div class="flex justify-center pt-3 pb-1 sm:hidden">
                <div class="w-10 h-1 rounded-full" style="background-color: var(--border);"></div>
              </div>

              <!-- Sticky close button — always visible -->
              <button 
                @click="closeModal"
                class="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style="background-color: var(--bg-tertiary); color: var(--text-secondary); box-shadow: 0 4px 12px rgba(0,0,0,0.3);"
                aria-label="Close modal"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <!-- Scrollable content area -->
              <div class="overflow-y-auto flex-1 overscroll-contain">
                <!-- Project Image -->
                <div class="aspect-video relative overflow-hidden sm:rounded-t-2xl" :class="!selectedProject.image ? `bg-gradient-to-br ${selectedProject.gradient}` : ''">
                  <img 
                    v-if="selectedProject.image" 
                    :src="selectedProject.image" 
                    :alt="selectedProject.title"
                    class="w-full h-full object-cover"
                  />
                  <div v-else class="absolute inset-0 flex items-center justify-center">
                    <svg class="w-20 h-20 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>

                <!-- Project Details -->
                <div class="p-5 sm:p-6">
                  <!-- Title -->
                  <h2 class="text-xl sm:text-2xl font-bold mb-4" style="color: var(--text-primary);">
                    {{ selectedProject.title }}
                  </h2>

                  <!-- Technologies -->
                  <div class="mb-5 sm:mb-6">
                    <p class="text-xs uppercase tracking-wider mb-2 font-semibold" style="color: var(--text-muted);">
                      Technologies
                    </p>
                    <div class="flex flex-wrap gap-1.5 sm:gap-2">
                      <span 
                        v-for="tag in selectedProject.tags" 
                        :key="tag"
                        class="text-xs sm:text-sm px-2.5 sm:px-3 py-1 rounded-full font-medium"
                        style="background: var(--accent); color: white;"
                      >
                        {{ tag }}
                      </span>
                    </div>
                  </div>

                  <!-- Description -->
                  <div class="mb-5 sm:mb-6">
                    <div class="flex items-center gap-2 mb-2">
                      <svg class="w-4 h-4" style="color: var(--text-muted);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p class="text-xs uppercase tracking-wider font-semibold" style="color: var(--text-muted);">
                        About This Project
                      </p>
                    </div>
                    <p class="text-sm sm:text-base leading-relaxed" style="color: var(--text-secondary);">
                      {{ selectedProject.description }}
                    </p>
                  </div>

                  <!-- Action Buttons -->
                  <div class="flex gap-3">
                    <a 
                      :href="selectedProject.demoUrl" 
                      target="_blank"
                      class="cta-primary !py-2.5 !px-5 !text-sm flex-1 sm:flex-none justify-center"
                    >
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Link
                    </a>
                    <a 
                      v-if="selectedProject.repoUrl && selectedProject.repoUrl !== '#'"
                      :href="selectedProject.repoUrl" 
                      target="_blank"
                      class="cta-secondary !py-2.5 !px-5 !text-sm flex-1 sm:flex-none justify-center"
                    >
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
