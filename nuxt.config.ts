import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  srcDir: 'app',
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  runtimeConfig: {
    public: {
      emailjs: {
        serviceId: process.env.NUXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        templateId: process.env.NUXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_g7pjjmg',
        publicKey: process.env.NUXT_PUBLIC_EMAILJS_PUBLIC_KEY || '',
      },
    },
  },

  app: {
    head: {
      title: 'Jein Ananda | Portfolio',
      meta: [
        { name: 'description', content: 'Fresh graduate in Information Systems - Full Stack Developer & UI/UX Designer portfolio' },
        { name: 'theme-color', content: '#0a0f1c' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap' },
      ],
    },
  },

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
});
