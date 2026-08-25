<script setup lang="ts">
const props = defineProps<{ isOpen: boolean }>()
const emit = defineEmits<{ close: [] }>()

const cvVersions = [
  { id: 'en', label: 'English', file: '/main.pdf' },
  { id: 'id', label: 'Indonesia', file: '/main-id.pdf' }
]

const activeVersion = ref('en')
const isLoading = ref(true)
const isIframeReady = ref(false)
const currentCV = computed(() => cvVersions.find((version) => version.id === activeVersion.value) ?? cvVersions[0])

let loadFallbackTimer: ReturnType<typeof setTimeout> | null = null

const clearLoadFallback = () => {
  if (loadFallbackTimer) {
    clearTimeout(loadFallbackTimer)
    loadFallbackTimer = null
  }
}

const loadCurrentCV = () => {
  isLoading.value = true
  isIframeReady.value = false
  // Mount the iframe first, then load the PDF on the next tick. Chrome's PDF
  // viewer is unreliable when the iframe is created and navigated at once.
  nextTick(() => { isIframeReady.value = true })

  // The iframe `load` event doesn't always fire for PDFs, so hide the loading
  // overlay after a fallback delay instead of waiting on it indefinitely.
  clearLoadFallback()
  loadFallbackTimer = setTimeout(() => {
    isLoading.value = false
    loadFallbackTimer = null
  }, 3000)
}

const handleIframeLoad = () => {
  isLoading.value = false
  clearLoadFallback()
}

watch(activeVersion, loadCurrentCV)

const downloadCV = () => {
  const link = document.createElement('a')
  link.href = currentCV.value.file
  link.download = `CV_Jein_Ananda_${currentCV.value.label}.pdf`
  document.body.appendChild(link)
  link.click()
  link.remove()
}

const openInNewTab = () => window.open(currentCV.value.file, '_blank', 'noopener,noreferrer')

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') emit('close')
}

onMounted(() => document.addEventListener('keydown', handleKeydown))
onUnmounted(() => {
  clearLoadFallback()
  document.removeEventListener('keydown', handleKeydown)
})

watch(() => props.isOpen, (isOpen) => {
  document.body.style.overflow = isOpen ? 'hidden' : ''
  if (isOpen) loadCurrentCV()
  else clearLoadFallback()
})
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4" @click.self="emit('close')">
        <div class="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
        <div class="relative z-10 flex w-full max-w-4xl max-h-[90vh] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
          <div class="flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 px-5 py-4">
            <div class="flex items-center gap-4">
              <h2 class="text-lg font-semibold text-gray-900">My Resume / CV</h2>
              <div class="flex rounded-lg bg-gray-100 p-1">
                <button v-for="version in cvVersions" :key="version.id" @click="activeVersion = version.id" class="rounded-md px-3 py-1.5 text-sm font-medium transition-colors" :class="activeVersion === version.id ? 'bg-gray-900 text-white' : 'text-gray-600 hover:text-gray-900'">{{ version.label }}</button>
              </div>
            </div>
            <button @click="emit('close')" class="rounded-lg p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900" aria-label="Close resume preview">✕</button>
          </div>

          <div class="relative min-h-0 flex-1 overflow-hidden bg-gray-800">
            <div v-if="isLoading" class="absolute inset-0 z-10 flex items-center justify-center bg-gray-800 text-sm text-gray-300">Loading PDF preview…</div>
            <iframe v-if="isIframeReady" :key="currentCV.id" :src="currentCV.file" class="h-[65vh] min-h-[420px] w-full" title="CV Preview" @load="handleIframeLoad"></iframe>
          </div>

          <div class="flex flex-wrap items-center justify-between gap-3 border-t border-gray-200 px-5 py-4">
            <p class="text-sm text-gray-500">Viewing: <span class="font-medium text-gray-800">{{ currentCV.label }} version</span></p>
            <div class="flex gap-2">
              <button @click="openInNewTab" class="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100">Open Full</button>
              <button @click="downloadCV" class="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700">Download PDF</button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-enter-active,
.modal-leave-active { transition: opacity .2s ease; }
.modal-enter-from,
.modal-leave-to { opacity: 0; }
</style>
