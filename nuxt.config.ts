// nuxt.config.ts
export default defineNuxtConfig({
  ssr: true,
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/sitemap.xml',
        '/sitemap_index.xml',
        '/__sitemap__/nl-NL.xml',
        '/__sitemap__/en-GB.xml'
      ]
    }
  },
  modules: ['@nuxtjs/i18n', '@nuxtjs/sitemap'],
  site: {
    url: 'https://helpr.ai'
  },
  sitemap: {
    autoI18n: true,
    trailingSlash: true,
    defaults: {
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date().toISOString()
    }
  },
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
      'sample': {
        nl: '/voorbeeld',
        en: '/sample'
      },
      'product': {
        nl: '/product',
        en: '/product'
      },
      'product-toolbox': {
        nl: '/product/toolbox',
        en: '/product/toolbox'
      },
      'product-safety-culture-ladder': {
        nl: '/product/safety-culture-ladder',
        en: '/product/safety-culture-ladder'
      }
    }
  },
  app: {
    head: {
      title: 'Helpr.ai · Toolbox voor certificerend Nederland',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'AI-toolbox voor certificerend Nederland. Wij stroomlijnen certificeringstrajecten met realistische AI-interviews, zodat QHSE-adviseurs meer tijd hebben voor het echte advies.' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png' },
        { rel: 'manifest', href: '/favicon/site.webmanifest' }
      ]
    }
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
