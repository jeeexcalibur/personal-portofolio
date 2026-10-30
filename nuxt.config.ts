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
      title: 'Jein Ananda — Technology Infrastructure Engineer',
      titleTemplate: (titleChunk?: string) => (titleChunk && titleChunk.includes('Jein Ananda') ? titleChunk : `${titleChunk} · Jein Ananda`),
      htmlAttrs: { lang: 'en' },
      meta: [
        { name: 'description', content: 'Technology Infrastructure Engineer at Maybank, Balikpapan. Infrastructure operations across three branch offices, full-stack web development, and UI/UX work with measured results.' },
        { name: 'author', content: 'Jein Ananda' },
        { name: 'theme-color', content: '#e9e9e6' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Jein Ananda' },
        { property: 'og:title', content: 'Jein Ananda — Technology Infrastructure Engineer' },
        { property: 'og:description', content: 'Infrastructure operations at Maybank, full-stack web development, and UI/UX work with measured results.' },
        { property: 'og:image', content: 'https://anandajein.my.id/og-cover.jpg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:url', content: 'https://anandajein.my.id/' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Jein Ananda — Technology Infrastructure Engineer' },
        { name: 'twitter:description', content: 'Infrastructure operations at Maybank, full-stack web development, and UI/UX work with measured results.' },
        { name: 'twitter:image', content: 'https://anandajein.my.id/og-cover.jpg' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'canonical', href: 'https://anandajein.my.id/' },
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
