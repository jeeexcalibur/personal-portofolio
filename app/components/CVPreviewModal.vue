<script setup lang="ts">
const props = defineProps<{
  isOpen: boolean
}>()

const emit = defineEmits<{
  close: []
}>()

// Get the base URL for the site
const config = useRuntimeConfig()
const baseUrl = computed(() => {
  // In production, use the actual domain; in dev, use localhost
  if (typeof window !== 'undefined') {
    return window.location.origin
  }
  return 'http://localhost:3000'
})

// CV versions
const cvVersions = [
  { id: 'en', label: 'English', file: '/main.pdf' },
  { id: 'id', label: 'Indonesia', file: '/main-id.pdf' }
]

const activeVersion = ref('en')
const isLoading = ref(true)

const currentCV = computed(() => {
  return cvVersions.find(v => v.id === activeVersion.value) ?? cvVersions[0]!
})

// Use Google Docs Viewer to prevent download managers from intercepting
const previewUrl = computed(() => {
  const pdfUrl = `${baseUrl.value}${currentCV.value.file}`
  return `https://docs.google.com/viewer?url=${encodeURIComponent(pdfUrl)}&embedded=true`
})

const handleIframeLoad = () => {
  isLoading.value = false
}

// Reset loading when version changes
watch(activeVersion, () => {
  isLoading.value = true
})

const downloadCV = () => {
  const link = document.createElement('a')
  link.href = currentCV.value.file
  link.download = `CV_Jein_Ananda_${currentCV.value.label}.pdf`
  link.click()
}

const openInNewTab = () => {
  window.open(currentCV.value.file, '_blank')
}

// Close on escape key
const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    emit('close')
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})

// Prevent body scroll when modal is open
watch(() => props.isOpen, (isOpen) => {
  if (isOpen) {
    document.body.style.overflow = 'hidden'
    isLoading.value = true
  } else {
    document.body.style.overflow = ''
  }
})
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div 
        v-if="isOpen" 
        class="fixed inset-0 z-50 flex items-center justify-center p-4"
        @click.self="emit('close')"
      >
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        
        <!-- Modal Content -->
        <div 
          class="relative w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          style="background-color: var(--bg-card); border: 1px solid var(--border);"
        >
          <!-- Header -->
          <div 
            class="flex items-center justify-between px-6 py-4 border-b"
            style="border-color: var(--border);"
          >
            <div class="flex items-center gap-4">
              <h2 class="text-xl font-bold" style="color: var(--text-primary);">
                📄 My Resume / CV
              </h2>
              
              <!-- Version Toggle -->
              <div 
                class="flex rounded-lg p-1"
                style="background-color: var(--bg-secondary);"
              >
                <button
                  v-for="version in cvVersions"
                  :key="version.id"
                  @click="activeVersion = version.id"
                  class="px-4 py-1.5 rounded-md text-sm font-medium transition-all duration-200"
                  :style="{
                    backgroundColor: activeVersion === version.id ? 'var(--accent)' : 'transparent',
                    color: activeVersion === version.id ? 'white' : 'var(--text-secondary)'
                  }"
                >
                  {{ version.label }}
                </button>
              </div>
            </div>
            
            <!-- Close Button -->
            <button 
              @click="emit('close')"
              class="p-2 rounded-lg transition-colors hover:bg-gray-500/20"
              style="color: var(--text-secondary);"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <!-- PDF Preview -->
          <div class="flex-1 overflow-hidden bg-gray-900 relative">
            <!-- Loading Spinner -->
            <div 
              v-if="isLoading"
              class="absolute inset-0 flex items-center justify-center bg-gray-900"
            >
              <div class="flex flex-col items-center gap-4">
                <div class="w-10 h-10 border-4 border-gray-600 border-t-blue-500 rounded-full animate-spin"></div>
                <p class="text-gray-400 text-sm">Loading PDF preview...</p>
              </div>
            </div>
            
            <iframe
              :src="previewUrl"
              class="w-full h-full min-h-[60vh]"
              title="CV Preview"
              @load="handleIframeLoad"
            ></iframe>
          </div>
          
          <!-- Footer Actions -->
          <div 
            class="flex items-center justify-between px-6 py-4 border-t"
            style="border-color: var(--border);"
          >
            <p class="text-sm" style="color: var(--text-muted);">
              Viewing: <span class="font-medium" style="color: var(--text-secondary);">{{ currentCV.label }} Version</span>
            </p>
            
            <div class="flex items-center gap-3">
              <!-- Open in New Tab -->
              <button 
                @click="openInNewTab"
                class="flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105"
                style="background-color: var(--bg-secondary); color: var(--text-primary); border: 1px solid var(--border);"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Open Full
              </button>
              
              <!-- Download Button -->
              <button 
                @click="downloadCV"
                class="flex items-center gap-2 px-5 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105 shadow-lg"
                style="background-color: var(--accent); color: white;"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from > div:last-child,
.modal-leave-to > div:last-child {
  transform: scale(0.95) translateY(10px);
}
</style>
