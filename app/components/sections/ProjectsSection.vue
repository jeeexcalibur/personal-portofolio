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
    title: 'Serenity Booth',
    description: 'The premier free, browser-based photo booth application that lets you create beautiful photo strips just like classic photo booths. Take photos using your webcam, customize with colors, backgrounds, and stickers, then download your creation instantly — no account required!',
    image: '/project-serenity-booth.png',
    tags: ['Vue.js', 'TailwindCSS'],
    demoUrl: 'https://serenitybooth.anandajein.my.id/',
    repoUrl: 'https://github.com/jeeexcalibur/Serenity-Booth',
    gradient: 'from-pink-400 to-purple-500'
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
    demoUrl: 'https://www.sweetellebakery.com/',
    repoUrl: 'https://github.com/jeeexcalibur/Sweetelle',
    gradient: 'from-green-500 to-lime-500'
  },
  {
    title: 'EIS Mobile UI/UX Design',
    description: 'Mobile interface design for the Employee Information System at PT Komatsu Remanufacturing Asia. Designed user flows, wireframes, and high-fidelity prototypes for Attendance (Face Recognition), Reimbursement, and Time Management features serving 700+ employees.',
    image: '/project-eis-mobile.png',
    tags: ['Figma', 'UI/UX', 'Mobile Design'],
    demoUrl: 'https://www.figma.com/proto/AZjby73mEu6pIhxTxE2RkD/Mobile-Prototype?page-id=0%3A1&node-id=342-250&p=f&viewport=-115%2C405%2C0.02&t=c7HOW6ht121nFORy-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=10%3A36&show-proto-sidebar=1',
    repoUrl: '#',
    gradient: 'from-blue-500 to-cyan-500'
  }
]

const selectedProject = ref<Project | null>(null)
const isModalOpen = ref(false)

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

// Close modal on Escape key
onMounted(() => {
  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === 'Escape') closeModal()
  }
  window.addEventListener('keydown', handleEscape)
  onUnmounted(() => window.removeEventListener('keydown', handleEscape))
})
</script>

<template>
  <section id="projects" class="section transition-all duration-500" style="background-color: var(--bg-primary);">
    <div class="section-container">
      <SectionTitle 
        title="Projects" 
        subtitle="Some of my recent work"
      />

      <div class="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
        <div 
          v-for="(project, index) in projects" 
          :key="project.title" 
          class="card group overflow-hidden cursor-pointer animate-slide-up"
          :style="{ animationDelay: `${index * 100}ms` }"
          @click="openModal(project)"
        >
          <!-- Project Image -->
          <div class="aspect-video relative overflow-hidden" :class="!project.image ? `bg-gradient-to-br ${project.gradient}` : ''">
            <!-- Show actual image if available -->
            <img 
              v-if="project.image" 
              :src="project.image" 
              :alt="project.title"
              class="w-full h-full object-cover"
            />
            <!-- Show placeholder if no image -->
            <div v-else class="absolute inset-0 flex items-center justify-center bg-black/20">
              <svg class="w-16 h-16 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            
            <!-- Hover Overlay -->
            <div class="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <span class="text-white font-medium flex items-center gap-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                View Details
              </span>
            </div>
          </div>

          <!-- Project Info -->
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2 transition-colors" style="color: var(--text-primary);">{{ project.title }}</h3>
            <p class="text-sm mb-4 line-clamp-2 transition-colors" style="color: var(--text-secondary);">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="tag in project.tags" 
                :key="tag"
                class="text-xs px-3 py-1 rounded-full font-medium transition-colors"
                style="background-color: var(--accent-glow); color: var(--accent);"
              >
                {{ tag }}
              </span>
            </div>
          </div>
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
          class="fixed inset-0 z-50 flex items-center justify-center p-4"
          @click.self="closeModal"
        >
          <!-- Backdrop -->
          <div class="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
          
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
              class="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl"
              style="background-color: var(--bg-card); border: 1px solid var(--border);"
            >
              <!-- Close Button -->
              <button 
                @click="closeModal"
                class="absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style="background-color: var(--bg-tertiary); color: var(--text-secondary);"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <!-- Project Image -->
              <div class="aspect-video relative overflow-hidden rounded-t-2xl" :class="!selectedProject.image ? `bg-gradient-to-br ${selectedProject.gradient}` : ''">
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
              <div class="p-6">
                <!-- Title -->
                <h2 class="text-2xl font-bold mb-4" style="color: var(--text-primary);">
                  {{ selectedProject.title }}
                </h2>

                <!-- Technologies -->
                <div class="mb-6">
                  <p class="text-xs uppercase tracking-wider mb-2 font-medium" style="color: var(--text-muted);">
                    Technologies
                  </p>
                  <div class="flex flex-wrap gap-2">
                    <span 
                      v-for="tag in selectedProject.tags" 
                      :key="tag"
                      class="text-sm px-3 py-1 rounded-lg font-medium"
                      style="background-color: var(--accent); color: white;"
                    >
                      {{ tag }}
                    </span>
                  </div>
                </div>

                <!-- Description -->
                <div class="mb-6">
                  <div class="flex items-center gap-2 mb-2">
                    <svg class="w-4 h-4" style="color: var(--text-muted);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p class="text-xs uppercase tracking-wider font-medium" style="color: var(--text-muted);">
                      About This Project
                    </p>
                  </div>
                  <p class="leading-relaxed" style="color: var(--text-secondary);">
                    {{ selectedProject.description }}
                  </p>
                </div>

                <!-- Action Buttons -->
                <div class="flex gap-3">
                  <a 
                    :href="selectedProject.demoUrl" 
                    target="_blank"
                    class="btn btn-primary"
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
                    class="btn btn-outline"
                  >
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
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
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
