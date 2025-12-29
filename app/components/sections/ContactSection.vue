<script setup lang="ts">
const form = reactive({
  name: '',
  email: '',
  message: ''
})

const isSubmitting = ref(false)
const isSubmitted = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  await new Promise(resolve => setTimeout(resolve, 1000))
  isSubmitting.value = false
  isSubmitted.value = true
  
  form.name = ''
  form.email = ''
  form.message = ''
  
  setTimeout(() => {
    isSubmitted.value = false
  }, 5000)
}

const contactInfo = [
  {
    icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    label: 'Email',
    value: 'anandajein12@gmail.com',
    href: 'mailto:anandajein12@gmail.com'
  },
  {
    icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
    label: 'Location',
    value: 'Balikpapan, Indonesia',
    href: null
  }
]

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/jeeexcalibur', icon: 'M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/jein-ananda-36a05b2b0/', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
  { name: 'Instagram', href: 'https://www.instagram.com/helvetica12_/', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' }
]
</script>

<template>
  <section id="contact" class="section transition-all duration-500" style="background-color: var(--bg-primary);">
    <div class="section-container">
      <SectionTitle 
        title="Get In Touch" 
        subtitle="Have a project in mind? Let's work together!"
      />

      <div class="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        <!-- Contact Form -->
        <div class="card p-4 sm:p-6 md:p-8 animate-slide-up">
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium mb-2 transition-colors" style="color: var(--text-primary);">Name</label>
              <input 
                id="name"
                v-model="form.name"
                type="text" 
                required
                placeholder="Your name"
                class="w-full transition-all"
              />
            </div>
            <div>
              <label for="email" class="block text-sm font-medium mb-2 transition-colors" style="color: var(--text-primary);">Email</label>
              <input 
                id="email"
                v-model="form.email"
                type="email" 
                required
                placeholder="your@email.com"
                class="w-full transition-all"
              />
            </div>
            <div>
              <label for="message" class="block text-sm font-medium mb-2 transition-colors" style="color: var(--text-primary);">Message</label>
              <textarea 
                id="message"
                v-model="form.message"
                rows="5" 
                required
                placeholder="Tell me about your project..."
                class="w-full resize-none transition-all"
              ></textarea>
            </div>
            <button 
              type="submit" 
              class="btn btn-primary w-full shadow-accent"
              :disabled="isSubmitting"
            >
              <svg v-if="isSubmitting" class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span v-else>Send Message</span>
            </button>
            
            <!-- Success Message -->
            <Transition
              enter-active-class="transition duration-300"
              enter-from-class="opacity-0 translate-y-2"
              enter-to-class="opacity-100 translate-y-0"
            >
              <div v-if="isSubmitted" class="p-4 rounded-lg text-center font-medium text-green-500" style="background-color: rgba(34, 197, 94, 0.1); border: 1px solid rgba(34, 197, 94, 0.3);">
                ✓ Message sent successfully!
              </div>
            </Transition>
          </form>
        </div>

        <!-- Contact Info -->
        <div class="space-y-6 animate-slide-up animate-delay-200">
          <div>
            <h3 class="text-xl font-semibold mb-4 transition-colors" style="color: var(--text-primary);">Contact Information</h3>
            <p class="mb-6 leading-relaxed transition-colors" style="color: var(--text-secondary);">
              Feel free to reach out! I'm always open to discussing new projects, creative ideas, or opportunities.
            </p>
          </div>

          <div class="space-y-4">
            <div 
              v-for="info in contactInfo" 
              :key="info.label"
              class="flex items-start gap-4 group"
            >
              <div class="p-3 rounded-xl shrink-0 transition-all group-hover:scale-110" style="background-color: var(--accent-glow);">
                <svg class="w-5 h-5" style="color: var(--accent);" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="info.icon" />
                </svg>
              </div>
              <div>
                <p class="text-sm transition-colors" style="color: var(--text-muted);">{{ info.label }}</p>
                <a 
                  v-if="info.href" 
                  :href="info.href"
                  class="font-medium transition-colors hover:underline"
                  style="color: var(--text-primary);"
                >
                  {{ info.value }}
                </a>
                <p v-else class="font-medium transition-colors" style="color: var(--text-primary);">{{ info.value }}</p>
              </div>
            </div>
          </div>

          <!-- Social Links -->
          <div class="pt-6" style="border-top: 1px solid var(--border);">
            <p class="text-sm mb-4 transition-colors" style="color: var(--text-muted);">Follow me on social media</p>
            <div class="flex gap-4">
              <a 
                v-for="link in socialLinks"
                :key="link.name"
                :href="link.href" 
                target="_blank"
                class="p-3 rounded-xl transition-all hover:scale-110"
                style="background-color: var(--bg-tertiary); color: var(--text-secondary);"
                :aria-label="link.name"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path :d="link.icon" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
