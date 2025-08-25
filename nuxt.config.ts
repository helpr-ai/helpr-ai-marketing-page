// nuxt.config.ts
export default defineNuxtConfig({
  ssr: true,
  nitro: {
    prerender: {
      crawlLinks: false,
      routes: ['/']
    }
  },
  app: {
    head: {
      title: 'Helpr.ai — From conversation to certification',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'AI-gestuurde interviews die ongestructureerde gesprekken omzetten naar audit-klare compliance-data (o.a. ISO 27001 & ISO 42001).'}
      ],
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Mukta:wght@200;300;400;500;600;700;800&display=swap'
        },
        // Favicon links
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon/favicon.ico'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon/favicon-16x16.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon/favicon-32x32.png'
        },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/favicon/apple-touch-icon.png'
        },
        {
          rel: 'manifest',
          href: '/favicon/site.webmanifest'
        }
      ]
    },
  },
  css: ['@/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  modules: [],
  compatibilityDate: '2024-10-01'
})