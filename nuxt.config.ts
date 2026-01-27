// nuxt.config.ts
export default defineNuxtConfig({
  ssr: true,
  nitro: {
    prerender: {
      crawlLinks: false,
      routes: ['/']
    },
    routeRules: {
      '/normen/**': {
        headers: {
          'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' data: blob: https://*.elevenlabs.io; connect-src 'self' https: wss:; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; frame-src 'self' https://*.elevenlabs.io; worker-src 'self' blob: data:; media-src 'self' blob: data: https://*.elevenlabs.io;"
        }
      }
    }
  },
  modules: ['@nuxtjs/i18n'],
  i18n: {
    locales: [
      { code: 'nl', iso: 'nl-NL', name: 'Nederlands', file: 'nl.json' },
      { code: 'en', iso: 'en-GB', name: 'English', file: 'en.json' }
    ],
    defaultLocale: 'nl',
    strategy: 'prefix',
    lazy: true,
    langDir: 'locales/',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    },
    customRoutes: 'config',
    pages: {
      'index': {
        nl: '/',
        en: '/'
      },
      'about': {
        nl: '/over-ons',
        en: '/about'
      },
      'consultants': {
        nl: '/consultants',
        en: '/consultants'
      },
      'partners': {
        nl: '/partners',
        en: '/partners'
      },
      'klanten': {
        nl: '/klanten',
        en: '/clients'
      },
      'product': {
        nl: '/product',
        en: '/product'
      },
      'start-traject': {
        nl: '/start-traject',
        en: '/get-started'
      },
      'programs/index': {
        nl: '/trajecten',
        en: '/programs'
      },
      'programs/co2-prestatieladder': {
        nl: '/trajecten/co2-prestatieladder',
        en: '/programs/co2-performance-ladder'
      },
      'programs/iso9001': {
        nl: '/trajecten/iso9001',
        en: '/programs/iso9001'
      },
      'programs/iso27001': {
        nl: '/trajecten/iso27001',
        en: '/programs/iso27001'
      },
      'programs/iso14001': {
        nl: '/trajecten/iso14001',
        en: '/programs/iso14001'
      },
      'programs/iso42001': {
        nl: '/trajecten/iso42001',
        en: '/programs/iso42001'
      },
      'success': {
        nl: '/succes',
        en: '/success'
      }
    }
  },
  app: {
    head: {
      title: 'Helpr.ai // Certification made easy',
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
  compatibilityDate: '2024-10-01'
})